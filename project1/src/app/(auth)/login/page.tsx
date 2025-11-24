"use client"; // ✅ Marks this component as a Client Component in Next.js (needed for hooks like useState/useRouter)

import { signIn, useSession } from "next-auth/react"; // NextAuth function to trigger authentication
import { useRouter } from "next/navigation"; // Next.js router for navigation
import React, { useState } from "react"; // React core + useState hook
import { FcGoogle } from "react-icons/fc"; // Google icon from react-icons
import { toast } from "react-toastify";

function Page() {
  // const session = useSession();
  const router = useRouter(); // Router instance for navigation
  const [email, setEmail] = useState(""); // State for email/username input
  const [password, setPassword] = useState(""); // State for password input

  // console.log(session.data?.user);

  // 🔑 Handle login with credentials provider
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Call NextAuth signIn with "credentials" provider
      const result = await signIn("credentials", {
        email, // Pass email/username
        password, // Pass password
        redirect: false, // Disable automatic redirect (we handle navigation manually)
      });

      if (result?.ok) {
        router.push("/"); // Redirect to homepage
        console.log(result); // Debug: log result object
        toast.success("Login successful!"); // Show success toast
      } else {
        console.log(result?.error);
        toast.error(result?.error || "Login failed"); // Show error toast
      }
    } catch (error) {
      console.log(error); // Catch unexpected errors
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      {/* Card container */}
      <div className="w-full max-w-md border border-amber-50 rounded-2xl p-8 shadow-lg bg-gray-900 text-amber-50">
        <h1 className="text-3xl font-bold text-center mb-6">LogIn</h1>

        {/* Login form */}
        <form className="space-y-4" onSubmit={handleSignIn}>
          {/* Email/Username field */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">
              Email Or Username
            </label>
            <input
              type="email"
              className="px-3 py-2 rounded-lg border border-amber-50 bg-gray-800 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your email or username"
              onChange={(e) => setEmail(e.target.value)} // Update state
              value={email}
            />
          </div>

          {/* Password field */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              className="px-3 py-2 rounded-lg border border-amber-50 bg-gray-800 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)} // Update state
              value={password}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-colors"
          >
            LogIn
          </button>

          {/* Register link */}
          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <span
              className="text-amber-400 hover:underline cursor-pointer"
              onClick={() => router.push("/register")} // Navigate to register page
            >
              Register
            </span>
          </p>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-amber-50" />
          <span className="px-2 text-sm text-amber-200">OR</span>
          <hr className="flex-grow border-amber-50" />
        </div>

        {/* Google login button */}
        <button
          type="button"
         onClick={async () => {
  try {
    const response = await new Promise(async (resolve) => {
      const result = await signIn("google", {
        callbackUrl: "/",
        redirect: false,
      });
      resolve(result);
    });
   
    

    toast.success("Signup through Google");

   
  } catch (err: any) {
    toast.error(err?.message || "Unexpected error");
  }
}}



          className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-700 bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors"
        >
          <FcGoogle className="text-xl text-center" />
          <span className="text-center">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}

export default Page;
