"use client";

import { useRouter } from "next/navigation";
import React from "react";

function Page() {
  const router = useRouter();
  const destination = ["Paris", "Tokyo", "NewYork"];

/*
()=> ( ... ) → implicit return

()=> { return ... } → explicit return
*/

  return (
    <div className="flex justify-center items-center mt-18 flex-col gap-4">
      <h1>Choose your destination</h1>

      {destination.map((d, index) => (
        <div
          key={index}
          className="bg-amber-50 text-black font-bold text-center p-6 border 
                     transition-transform duration-150 ease-in-out active:scale-95 
                     hover:shadow-md cursor-pointer"
          onClick={() => router.push(`/about/${d}`)}
        >
          About {d}
        </div>
      ))}

 
    </div>
  );
}

export default Page;
