// app/components/KeyLogger.tsx

"use client";

import React, { useEffect } from "react";
import { useKey } from "@/context/KeyContext";

const KeyLogger: React.FC = () => {
  const { generatedKey } = useKey();

  useEffect(() => {
    console.log("Generated Key:", generatedKey);
  }, [generatedKey]);

  return (
    <div>
      <p>Stored Key: {generatedKey}</p>
    </div>
  );
};

export default KeyLogger;
