// context/KeyContext.tsx
"use client";

import React, { createContext, useState, useContext } from "react";

interface KeyContextProps {
  generatedKey: string;
  setGeneratedKey: (key: string) => void;
}

const KeyContext = createContext<KeyContextProps | undefined>(undefined);

export const KeyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [generatedKey, setGeneratedKey] = useState("");

  return (
    <KeyContext.Provider value={{ generatedKey, setGeneratedKey }}>
      {children}
    </KeyContext.Provider>
  );
};

export const useKey = () => {
  const context = useContext(KeyContext);
  if (!context) {
    throw new Error("useKey must be used within a KeyProvider");
  }
  return context;
};
