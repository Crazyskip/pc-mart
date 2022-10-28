import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prismadb";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const { GOOGLE_CLIENT_ID = "", GOOGLE_CLIENT_SECRET = "" } = process.env;

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  // https://next-auth.js.org/configuration/pages
  pages: {},
  callbacks: {
    async session({ session, token, user }) {
      session.user.role = user.role;
      return session;
    },
  },
};

export default NextAuth(authOptions);
