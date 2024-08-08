"use client";

import React, { useState, useRef } from "react";
import { useKey } from "@/context/KeyContext";
import KeyLogger from "./KeyLogger";
import Link from "next/link";

interface EntropyKeyProps {
  character?: string;
  tokenlen?: number;
}

const EntropyKey: React.FC<EntropyKeyProps> = ({ character, tokenlen }) => {
  const [token, setToken] = useState("");
  const { setGeneratedKey } = useKey();
  const videoRef = useRef<HTMLVideoElement>(null);
  const tokenOutputRef = useRef<HTMLInputElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  const generateTokenFromVideo = async (length: number) => {
    const characters =
      character ||
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:",.<>?/~`';
    let token = "";

    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const video = videoRef.current;
    if (video) {
      video.srcObject = stream;
      await video.play();

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
          .data;

        for (let i = 0; i < length; i++) {
          const randomIndex = imageData[i % imageData.length];
          token += characters[randomIndex % characters.length];
        }
      }

      stream.getTracks().forEach((track) => track.stop());
    }

    return token;
  };

  const handleGenerateToken = async () => {
    const tokenLength = tokenlen || 16;
    const newToken = await generateTokenFromVideo(tokenLength);
    setToken(newToken);
    setGeneratedKey(newToken);
  };

  const handleCopyToken = () => {
    if (tokenOutputRef.current) {
      tokenOutputRef.current.select();
      document.execCommand("copy");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
    }
  };

  return (
    <div className="container mx-auto mt-10 p-5 max-w-lg">
      <div className="bg-white rounded-lg shadow-lg p-8 relative">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          EntropyKey
        </h1>
        <video id="video" ref={videoRef} autoPlay className="hidden"></video>
        <button
          id="generateTokenBtn"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          onClick={handleGenerateToken}
        >
          Generate Token
        </button>
        {token && (
          <div
            id="tokenContainer"
            className="mt-5 flex flex-col items-center space-y-3"
          >
            <input
              type="text"
              id="tokenOutput"
              className="w-full p-2 border border-gray-300 rounded text-center"
              value={token}
              readOnly
              ref={tokenOutputRef}
            />
            <button
              id="copyIcon"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded shadow transition duration-200"
              onClick={handleCopyToken}
            >
              Copy Token
            </button>
          </div>
        )}

        {showPopup && (
          <div className="absolute top-2 right-2 bg-green-500 text-white py-2 px-4 rounded shadow-lg transition duration-300">
            Token copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
};

export default EntropyKey;
