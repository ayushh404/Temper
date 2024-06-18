import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { getUserByEmail } from "./data"
const bcrypt = require('bcrypt');
import { authConfig } from "./auth.config"

export const { handlers: { GET, POST }, signIn, signOut, auth }
    = NextAuth({
        ...authConfig, //Object Destructuring
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
            
            Credentials({
                async authorize(credentials){
                    if(credentials === null) return null;
                    try{
                        const user = await getUserByEmail(credentials?.email);
                        if(user){
                            const isMatch = await bcrypt.compare(
                                credentials.password,
                                user.password
                            )

                            if(isMatch){
                                return user;
                            }else{
                                throw new Error("Check you password");
                            }
                        }else{
                            throw new Error("User not Found");
                        }
                    }catch(e){
                        throw new Error(e);
                    }
                }
            })
        ],
    })


