import User from "@/model/user.model";
import mongoose from "mongoose";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function PATCH(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const imageFile = formData.get("image") as File | null;
 console.log(token)
  try {
    const existingUser = await User.findById(new mongoose.Types.ObjectId(token._id));
    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Upload image to Cloudinary if provided
    if (imageFile) {
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const uploadResult = await cloudinary.uploader.upload_stream(
        { folder: "profiles" },
        async (error, result) => {
          if (error) throw error;
          existingUser.image = result?.secure_url;
          if (name) existingUser.name = name;
          if (email) existingUser.email = email;
          await existingUser.save();
        }
      );

      // Pipe buffer into upload stream
      const stream = uploadResult;
      stream.end(buffer);

      return NextResponse.json({ message: "User updated with Cloudinary image" });
    }

    // Update without image
    if (name) existingUser.name = name;
    if (email) existingUser.email = email;
    await existingUser.save();

    return NextResponse.json({ message: "User updated successfully", user: existingUser });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
