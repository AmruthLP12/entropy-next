// app/enter-key/page.tsx
"use client";

import React, { useState } from "react";
import { useKey } from "@/context/KeyContext";
import { useRouter } from "next/navigation";
import KeyLogger from "../components/KeyLogger";

const EnterKeyPage: React.FC = () => {
  const [inputKey, setInputKey] = useState("");
  const { generatedKey } = useKey();
  const router = useRouter();

  const handleKeySubmit = () => {
    if (inputKey === generatedKey) {
      router.push("/secured-page"); // Redirect to a secured page
    } else {
      alert("Invalid Key. Please try again.");
    }
  };

  return (
    <div className="container mx-auto mt-10 p-5 max-w-lg">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Enter Key
        </h1>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter the key"
          value={inputKey}
          onChange={(e) => setInputKey(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          onClick={handleKeySubmit}
        >
          Submit
        </button>
      </div>
      <KeyLogger/>
    </div>
  );
};

export default EnterKeyPage;
