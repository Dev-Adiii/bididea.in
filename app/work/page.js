"use client"
import React from 'react'

const Sell = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-black text-2xl font-bold text-center mb-6">Submit Your Idea</h1>
          {/* <h3 className='text-black text-center ' >You will be rewarded according to your Ideas</h3> */}

          <form className="space-y-6">
            {/* Personal Details */}
            <div className="space-y-4">
              <h2 className="text-lg text-black font-semibold">Personal Details</h2>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name (required)"
                />
                <span id="nameError" className="text-red-500 text-sm mt-1 hidden">Please enter your full name</span>
              </div>

              {/* <div>
                <label htmlFor="upi" className="block text-sm font-medium text-gray-700 mb-1">
                  UPI ID
                </label>
                <input
                  type="text"
                  id="upi"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your UPI ID"
                />
              </div> */}
            </div>

            {/* Idea Details */}
            <div className="space-y-4">
              <h2 className="text-lg text-black font-semibold">Idea Details</h2>
              
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Idea Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Give your idea a catchy title"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Idea Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  rows="6"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe your idea in detail (required)..."
                ></textarea>
                <span id="descriptionError" className="text-red-500 text-sm mt-1 hidden">Please provide a detailed description of your idea</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              onClick={(e) => {
                e.preventDefault();
                alert("Your response has been submitted!");
                window.location.href = '/payment9999'; // Redirect to payment page after submission
              }}
            >
              Submit Idea
            </button>

            <p className="text-sm text-gray-500 text-center">
              By submitting your idea, you agree to our terms and conditions.
              We ensure the confidentiality of your submission.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Sell