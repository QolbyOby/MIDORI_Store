import { login } from "@/app/lib/firebase/service"
import { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider(
            {
                type: 'credentials',
                name: 'Credentials',
                credentials: {
                    email: { label: "Email", type: 'email' },
                    password: { label: "Password", type: 'password' }
                },

                async authorize(credentials) {
                    const { email, password } = credentials as {
                        email: string
                        password: string
                    }
                    const user: any = await login({email})
                    if (user) {
                        const passwordCompare = user.password === password
                        if (passwordCompare) {
                            return user
                        } else {
                            return alert("Password salah")
                        }
                    } else {
                        return alert("Email tidak terdaftar")
                    }
                },

            }
        )
    ],
    callbacks: {
        async jwt({ token, account, profile, user }: any) {
            if (account?.type === "credentials") {
                token.id = user.id
                token.email = user.email
                token.username = user.username
                console.log(token.username)
            } 
            return token;
        },

        async session({ session, token }: any) {
            if ("id" in token) {
                session.user.id = token.id
            }
            if ("email" in token) {
                session.user.email = token.email
            }
            if ("username" in token) {
                session.user.username = token.username
            }

            return session
        }
    },

    pages: {
        signIn: "/auth/signin",
    }

}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }