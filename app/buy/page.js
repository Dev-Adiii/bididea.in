"use client"
import React from 'react'
import Link from 'next/link'

const Buy = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl text-black font-bold text-center mb-6">Access Ideas Marketplace</h1>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h2 className="text-lg text-center text-black font-semibold mb-2">One-Time Access Fee</h2>
            {/* <p className="text-gray-600">
              To access our curated marketplace of innovative ideas, a one-time payment of ₹499 is required. 
              This gives you full access to browse and connect with idea sellers.
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Basic Plan */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl text-black font-semibold mb-2">Basic Access</h3>
              <p className="text-gray-600 mb-4 h-20">Browse through a curated selection of innovative startup ideas with basic filtering options.</p>
              <div className="flex justify-between items-center border-t pt-4">
                <span className="text-gray-600">Price</span>
                <span className="text-2xl font-bold text-black">₹299</span>
              </div>
              <Link 
                  className=" bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                  href="/payment299"
                > Submit </Link>
            </div>

            {/* Standard Plan */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition duration-300 bg-blue-50">
              <h3 className="text-xl text-black font-semibold mb-2">Standard Access</h3>
              <p className="text-gray-600 mb-4 h-20">Get detailed insights into ideas, connect with sellers, and receive basic analytics reports.</p>
              <div className="flex justify-between items-center border-t pt-4">
                <span className="text-gray-600">Price</span>
                <span className="text-2xl font-bold text-black">₹699</span>
              </div>
              <Link 
                  className=" bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                  href="/payment699"
                > Submit </Link>
            </div>

            {/* Premium Plan */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl text-black font-semibold mb-2">Premium Access</h3>
              <p className="text-gray-600 mb-4 h-20">Full access to all features including priority support, advanced analytics, and direct messaging.</p>
              <div className="flex justify-between items-center border-t pt-4">
                <span className="text-gray-600">Price</span>
                <span className="text-2xl font-bold text-black">₹999</span>
              </div>
              <Link 
                  className=" bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                  href="/payment999"
                > Submit </Link>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-gray-500 text-center">
              By proceeding with the payment, you agree to our terms and conditions.
              Your payment information is securely processed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buy