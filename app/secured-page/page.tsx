// app/secured-page/page.tsx
"use client";

import React from "react";

const SecuredPage: React.FC = () => {
  return (
    <div className="container mx-auto mt-10 p-5 max-w-lg">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Secured Page
        </h1>
        <p className="text-lg text-center">
          You have successfully entered the correct key and accessed the secured page!
        </p>
      </div>
    </div>
  );
};

export default SecuredPage;
