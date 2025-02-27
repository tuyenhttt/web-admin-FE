import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        console.log("check credentials: ", credentials);
        let user = null;

        //logic to verify if the user exists
        //call backend

        user = {
          _id: "123",
          username: "123",
          email: "123",
          isVerify: "123",
          type: "123",
          role: "123",
        };
        if (!user) {
          throw new Error("Invalid credentials.");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
});
