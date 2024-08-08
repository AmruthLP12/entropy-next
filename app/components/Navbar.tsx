import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">
          Entropy Page
        </Link>
        <Link href="/enter-key" className="text-white px-3 py-2 rounded-md text-sm font-medium">
          Enter Key Page
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
