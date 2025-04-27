'use client';

import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-black p-2 cursor-pointer" onClick={() => window.location.href = '/'}>
      <Image
        className="dark:invert"
        src="/header_logo.svg"
        alt="Quizzes Logo"
        width={100}
        height={5}
        priority
      />
    </div>
  )
}
