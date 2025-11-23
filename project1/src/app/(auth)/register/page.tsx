"use client";
import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";

// Define expected response shape
interface RegisterResponse {
  message: string;
  user?: {
    _id: string;
    name: string;
    email: string;
  };
}

function Page() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await axios.post<RegisterResponse>(
        "/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      toast.success(response.data.message || "Registration successful");
      setName("");
      setEmail("");
      setPassword("");
      router.push("/login");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.error ||
            "Registration failed. Please try again."
        );
      } else {
        toast.error("Unexpected error occurred");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md border border-amber-50 rounded-2xl p-8 shadow-lg bg-gray-900 text-amber-50">
        <h1 className="text-3xl font-bold text-center mb-6">Register</h1>

        <form className="space-y-4" onSubmit={handleRegister}>
          {/* Name field */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              className="px-3 py-2 rounded-lg border border-amber-50 bg-gray-800 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          {/* Email field */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              className="px-3 py-2 rounded-lg border border-amber-50 bg-gray-800 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-colors"
          >
            Register
          </button>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <span
              className="text-amber-400 hover:underline cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </p>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-amber-50" />
          <span className="px-2 text-sm text-amber-200">OR</span>
          <hr className="flex-grow border-amber-50" />
        </div>

        <button
          type="button"
          onClick={async () => {
            const response = await signIn("google", {
              callbackUrl: "/",
              redirect: false,
            });
 //add promise that after response fullfill rest of work
            if (response?.ok) {
             
              toast.success("Signup through Google");
            } else {
              toast.error(response?.error || "Something went wrong");
            }
          }}
          className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-700 bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors"
        >
          <FcGoogle className="text-xl text-center" />
          <span className="text-center">Sign up with Google</span>
        </button>
      </div>
    </div>
  );
}

export default Page;
