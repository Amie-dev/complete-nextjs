import connectDb from "@/lib/db";
import User from "@/model/user.model";
import mongoose from "mongoose";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("➡️ Incoming request to /api/user");

  try {
    console.log("🔌 Connecting to database...");
    await connectDb();
    console.log("✅ Database connected");

    console.log("🔑 Extracting token...");
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    console.log("Token payload:", token);

    if (!token) {
      console.warn("❌ No token found, unauthorized request");
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    console.log("🆔 Looking up user by ID:", token._id);
    const user = await User.findById(new mongoose.Types.ObjectId(token._id as string)).select("-password");

    if (!user) {
      console.warn("❌ User not found in DB");
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    console.log("✅ User found:", user.email);
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("💥 Server error:", error);
    return NextResponse.json({ message: "Server error", error }, { status: 500 });
  }
}
