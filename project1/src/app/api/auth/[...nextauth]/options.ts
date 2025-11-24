// Import database connection utility
import connectDb from "@/lib/db";

// Import User model (MongoDB schema)
import User from "@/model/user.model";

// Import bcrypt for password hashing and comparison
import bcrypt from "bcryptjs";

// Import NextAuth types
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

// Define a type for credentials
interface Credentials {
  identifier: string;
  password: string;
}

// Define NextAuth configuration options
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials", // Must match client-side signIn("credentials")
      name: "Credentials", // Display name in UI
      credentials: {
        identifier: { label: "Username or Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        // 1. Connect to the database
        await connectDb();

        // 2. Find user by email OR username
        const user = await User.findOne({
          $or: [
            { email: credentials?.identifier },
            { username: credentials?.identifier },
          ],
        });

        // 3. If user not found, throw error
        if (!user) {
          throw new Error("User not found");
        }

        // 4. Compare entered password with hashed password in DB
        const isPasswordCorrect = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!isPasswordCorrect) {
          throw new Error("Wrong password");
        }

        // 5. Return user data (stored in JWT)
        return {
          _id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user?.image,
        };
      },
    }),
    // 👉 Add other providers here (e.g., Google, GitHub) if needed
    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!
  })
  ],

  callbacks: {

    async signIn({account,user}){
      if (account?.provider=="google") {
        await connectDb();
        const existUser =await User.findOne({email:user?.email})

        if(!existUser){
          let newUser=await User.create({
            name:user?.name,
            email:user?.email,
            image:user?.image,
          })
        }
        user._id=existUser._id as string
        existUser.image=user?.image
        existUser.save()
      }
      return true
      
    },

    // 🔑 JWT callback: runs whenever a token is created/updated
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id.toString(); // Store MongoDB ID
        token.name = user.name;
        token.email = user.email;
        token.image = user?.image;
      }
      return token;
    },

    // 📦 Session callback: runs whenever a session is checked/created
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id as string; // Attach MongoDB ID to session
        session.user.name = token.name!;
        session.user.email = token.email!;
        session.user.image = token?.image as string;
      }
      return session;
    },
  },

  // ⚙️ Session configuration
  session: {
    strategy: "jwt",           // Use JWT instead of DB sessions
    maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
  },

  // 📄 Custom pages (must be absolute paths)
  pages: {
    signIn: "/login", // Custom login page
    error: "/login",  // Redirect errors to login page
  },

  // 🔒 Secret key for JWT encryption
  secret: process.env.NEXTAUTH_SECRET,
};
