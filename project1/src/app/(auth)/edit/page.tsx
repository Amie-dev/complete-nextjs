"use client";
import { userDataContext } from "@/context/UserContext";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect, useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";

function Page() {
  const  session  = useSession();
  const data1 = useContext(userDataContext);
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(data1?.user?.name || "");
  const [image, setImage] = useState(data1?.user?.image || "");
  const [backendImage, setBackendImage] = useState<File | null>(null);
  const [email, setEmail] = useState(data1?.user?.email || "");

  useEffect(() => {
    const user = data1?.user ;
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setImage(user.image || "");
    }
  }, [session,data1]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      if (backendImage) {
        formData.append("image", backendImage);
      }

      const response = await axios.patch("/api/auth/edit", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(response?.data?.message || "Profile updated successfully");
      router.push("/");
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        error.response?.statusText ||
        error.message ||
        "Failed to save";
      toast.error(message);
      console.error("Error saving user:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateImage = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBackendImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md border border-amber-50 rounded-2xl p-8 shadow-lg bg-gray-900 text-amber-50">
        <h1 className="text-3xl font-bold text-center mb-6">Edit Profile</h1>

        <form className="space-y-4" onSubmit={handleSave}>
          <div
            className="w-24 h-24 rounded-full mx-auto mb-4 border border-amber-50 cursor-pointer"
            onClick={updateImage}
          >
            {image ? (
              <Image
                src={image}
                alt="Profile"
                width={96}
                height={96}
                className="w-24 h-24 rounded-full mx-auto mb-4 border border-amber-50"
              />
            ) : (
              <CgProfile className="w-24 h-24 mx-auto" />
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />

          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="px-3 py-2 rounded-lg border border-amber-50 bg-gray-800 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="px-3 py-2 rounded-lg border border-amber-50 bg-gray-800 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-amber-300
              ${
                loading
                  ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                  : "bg-amber-500 text-black hover:bg-amber-400"
              }`}
          >
            {loading  ? "Saving..." : "Save"}
          </button>
        </form>

        <button
          className="w-full mt-1 py-2 px-4 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Page;
