"use client"
import React, { useState } from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white backdrop-blur-sm shadow-lg top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand Name */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">BidIdea.in</h1>
          </div>

          {/* Hamburger Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2">
              Contact
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex md:items-center">
            <div className="auth-buttons">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-200 ease-in-out transform hover:scale-105 shadow-md">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            <a href="/" className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md">
              Home
            </a>
            <a href="/about" className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md">
              About
            </a>
            <a href="/contact" className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md">
              Contact
            </a>
            <div className="px-3 py-2">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-200 ease-in-out transform hover:scale-105 shadow-md">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar