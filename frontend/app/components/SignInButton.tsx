'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'

const SignInButton = () => {
  const { data: session } = useSession()

  if (session && session.user) {
    return (
      <Link
        href="/api/auth/signout"
        className="inline-block align-top hover:outline outline-2 bg-[#f40707] outline-white text-white text-2xl p-1 px-2 rounded"
      >
        Sign Out
      </Link>
    )
  }
  return (
    <Link
      href="/api/auth/signin"
      className="inline-block align-top hover:outline outline-2 bg-[#f40707] outline-white text-white text-2xl p-1 px-2 rounded"
    >
      Sign In (Guest)
    </Link>
  )
}

export default SignInButton
