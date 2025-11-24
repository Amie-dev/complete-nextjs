import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary with credentials from environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,   // Your Cloudinary cloud name
  api_key: process.env.CLOUDINARY_API_KEY,         // API key from Cloudinary dashboard
  api_secret: process.env.CLOUDINARY_API_SECRET,   // API secret from Cloudinary dashboard
});

/**
 * Upload a file (Blob or File) to Cloudinary and return its secure URL.
 * 
 * @param file - The file to upload (can be a Blob or File object).
 * @returns A Promise that resolves to the Cloudinary secure URL string, or null if upload fails.
 */
const uploadCloudinary = async (file: Blob | null): Promise<string | null> => {
  if (!file) {
    return null; // If no file is provided, return null immediately
  }

  try {
    // Convert the file into a Node.js Buffer so Cloudinary can process it
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Wrap Cloudinary's upload_stream in a Promise for async/await usage
    return new Promise((resolve, reject) => {
      const upload_stream = cloudinary.uploader.upload_stream(
        {
          folder: "auth_profile",   // Folder name in Cloudinary (avoid spaces)
          resource_type: "auto",    // Auto-detect file type (image, video, etc.)
        },
        (error, result) => {
          if (error) {
            reject(error); // Reject the promise if upload fails
          } else {
            // Resolve with the secure URL of the uploaded file
            resolve(result?.secure_url ?? null);
          }
        }
      );

      // Send the file buffer into the Cloudinary upload stream
      upload_stream.end(buffer);
    });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return null; // Return null if something goes wrong
  }
};

// Export Cloudinary instance and helper function
export { cloudinary, uploadCloudinary };
