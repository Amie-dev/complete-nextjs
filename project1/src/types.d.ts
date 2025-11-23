import { Connection } from "mongoose";
import { DefaultSession } from "next-auth";

/**
 * Extend the global namespace to cache a single mongoose connection.
 * Prevents multiple connections being created during hot-reload in dev.
 */
declare global {
  let mongoose: {
    conn: Connection | null;              // Active connection (or null if not connected)
    promise: Promise<Connection> | null;  // Promise resolving to a connection (or null)
  };
}

/**
 * Extend NextAuth's Session type to include custom fields.
 * Adds `_id` to the user object while keeping all default fields.
 */
declare module "next-auth" {
  interface Session {
    user: {
      _id: string; // ✅ Custom field: MongoDB user ID
    } & DefaultSession["user"]; // Merge with default NextAuth user fields (name, email, image)
  }
  interface User {
    _id: string;
    name: string;
    email: string;
    image?: string;
  }
}

/**
 * Extend NextAuth's JWT type to include custom fields.
 * This ensures jwt() and session() callbacks are fully type-safe.
 */

// declare module "next-auth/jwt" {
//   interface JWT {
//     _id: string;   // ✅ Custom field: MongoDB user ID
//     name?: string; // Default field (optional)
//     email?: string; // Default field (optional)
//     image?: string; // Default field (optional)
//   }
// }

// Required to make this a module (avoid global scope pollution)
export {};
