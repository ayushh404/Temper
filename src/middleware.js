import { NextResponse } from "next/server";
import { authConfig } from "./lib/auth.config";
import NextAuth from "next-auth";
import { PUBLIC_ROUTES, LOGIN, ROOT, PROTECTED_SUB_ROUTES } from "./lib/routes";

const { auth } = NextAuth(authConfig);

export async function middleware(request){
    const { nextUrl } = request;
    const session = await auth();

    console.log(session);
    console.log("middleware");

    const isAuthenticated = !!session?.user;
    // console.log(isAuthenticated, nextUrl.pathname);
    const isPublicRoute = ((PUBLIC_ROUTES.find(route => nextUrl.pathname.startsWith(route))
    || nextUrl.pathname === ROOT) && !PROTECTED_SUB_ROUTES.find(route => nextUrl.pathname.includes(route)));

    console.log(isPublicRoute);

    if(!isAuthenticated && !isPublicRoute){
        return NextResponse.redirect(new URL(LOGIN,nextUrl));
    }
}

//a matcher is required 
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
}