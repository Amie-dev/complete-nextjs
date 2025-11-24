"use client";
import { userDataContext } from "@/context/UserContext";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { CgProfile } from "react-icons/cg";

function Page() {
  const { data: session } = useSession();
  // console.log(session)
  const data=useContext(userDataContext)
  console.log(data?.user?.name)
  const router=useRouter()

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
            {data?.user?.image ? (
                         <Image
                           src={data?.user?.image}
                           alt="Profile"
                           width={96}
                           height={96}
                           className="w-24 h-24 rounded-full mx-auto mb-4 border border-amber-50"
                         />
                       ) : (
                         <CgProfile className="w-24 h-24 mx-auto" />
                       )}


            {/* Name */}
            <h2 className="text-xl font-semibold mb-2">
              {data?.user?.name}
            </h2>

            {/* Email */}
            <p className="text-sm mb-4">{data?.user?.email}</p>

            {/* Edit button */}
            <button className="px-4 py-2 bg-amber-500 text-black rounded-lg hover:bg-amber-400 transition mr-2" onClick={()=>router.push("/edit")}>
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
