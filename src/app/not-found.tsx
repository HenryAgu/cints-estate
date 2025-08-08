// app/not-found.tsx
"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import localFont from "next/font/local"

const HelveticaNeue = localFont({
  src: "../app/fonts/HelveticaNeueThin.otf",
});

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
      <Image
        src="/icons/Logo-dark.svg"
        alt="Cints Estate Logo"
        width={100}
        height={100}
        className="mb-6"
      />
      <h1 className={`${HelveticaNeue.className} text-4xl font-bold text-gray-800 mb-2`}>
        Oops! Page Not Found
      </h1>
      <p className="text-lg text-gray-600 max-w-md mb-6">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button
        onClick={() => router.push("/")}
        className="cursor-pointer bg-brand-primary-500 text-base text-white rounded hover:bg-brand-primary-500 transition"
      >
        Go to Homepage
      </Button>
      <p className="mt-8 text-base text-gray-500">
        Need help? Contact us at{" "}
        <Link href="mailto:support@cintsestate.com" className="text-brand-neutral-300 underline">
          support@cintsestate.com
        </Link>
      </p>
    </div>
  )
}
