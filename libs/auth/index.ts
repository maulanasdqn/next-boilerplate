import type { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  pages: {
    signIn: "/auth/login",
  },
  session: { strategy: "jwt" },
  providers: [
    GithubProvider({
      id: "github",
      name: "github",
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      id: "google",
      name: "google",
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],

  callbacks: {
    async jwt({ token, profile, account }) {
      if (account?.provider === "google" && profile) {
        token.fullname = profile?.name!;
        token.image = profile?.picture;
        token.email = profile?.email;
        token.role = {
          id: "1",
          name: "Google User",
          permissions: [],
        };
      }

      if (account?.provider === "github" && profile) {
        token.fullname = profile?.name!;
        token.image = profile?.picture;
        token.email = profile?.email;
        token.role = {
          id: "1",
          name: "Github User",
          permissions: [],
        };
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        ...token,
        email: token.email!,
      };
      return session;
    },
  },
} as AuthOptions;
