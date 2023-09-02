import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import type { NextAuthOptions } from 'next-auth'

const validOrganizations: string[] = process.env.AUTHORIZED_ORGANIZATIONS
  ? process.env.AUTHORIZED_ORGANIZATIONS.split(',')
  : []

const validSpecificEmails: string[] = process.env.AUTHORIZED_EMAILS
  ? process.env.AUTHORIZED_EMAILS.split(',')
  : []

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  secret: process.env.SECRET ?? '',
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false
      const isAllowedToSignIn =
        validOrganizations.includes(user.email.split('@')[1]) ||
        validSpecificEmails.includes(user.email)
      return isAllowedToSignIn
    },
  },
}

const handler = NextAuth(options)

export { handler as GET, handler as POST }
