// app/not-found.tsx
"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
      <Image
        src="/logo.png"
        alt="Cints Estate Logo"
        width={100}
        height={100}
        className="mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Oops! Page Not Found
      </h1>
      <p className="text-lg text-gray-600 max-w-md mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => router.push("/")}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go to Homepage
      </button>
      <p className="mt-8 text-sm text-gray-500">
        Need help? Contact us at{" "}
        <a href="mailto:support@cintsestate.com" className="text-blue-500 underline">
          support@cintsestate.com
        </a>
      </p>
    </div>
  )
}
