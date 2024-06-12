

import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export const { handlers: { GET, POST }, signIn, signOut, auth }
    = NextAuth({
        providers: [
            Google({
                clientId: process.env.AUTH_GOOGLE_ID,
                clientSecret: process.env.AUTH_GOOGLE_SECRET,
                authorization: {
                    params: {
                        prompt: "consent",
                        access_typpe: "offline",
                        response_type: "code",
                    }
                }
            }),

            GitHub({
                clientId: process.env.AUTH_GITHUB_ID,
                clientSecret: process.env.AUTH_GITHUB_SECRET,
                authorization: {
                    params: {
                        prompt: "consent",
                        access_typpe: "offline",
                        response_type: "code",
                    }
                }
            }),
        ],
    })


