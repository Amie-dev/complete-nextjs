"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

function Page() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      {/* Card container */}
      <div className="w-full max-w-md border border-amber-50 rounded-2xl p-8 shadow-lg bg-gray-900 text-amber-50 text-center">
        {session?.user ? (
          <>
            {/* Profile image */}
            {/* <img
              src={session.user.image}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4 border border-amber-50"
            /> */}
           {session?.user?.image && (
  <Image
    src={session.user.image}
    alt="Profile"
    width={96}
    height={96}
    className="rounded-full mx-auto mb-4 border border-amber-50"
  />
)}


            {/* Name */}
            <h2 className="text-xl font-semibold mb-2">
              {session.user.name}
            </h2>

            {/* Email */}
            <p className="text-sm mb-4">{session.user.email}</p>

            {/* Edit button */}
            <button className="px-4 py-2 bg-amber-500 text-black rounded-lg hover:bg-amber-400 transition mr-2">
              Edit Profile
            </button>

            {/* Sign out button */}
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 transition"
            >
              Sign Out
            </button>
          </>
        ) : (
          <p>No user session found</p>
        )}
      </div>
    </div>
  );
}

export default Page;
