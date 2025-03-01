"use client"
import React from 'react'

const Buy = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl text-black font-bold text-center mb-6">Access Ideas Marketplace</h1>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h2 className="text-lg text-black font-semibold mb-2">One-Time Access Fee</h2>
            <p className="text-gray-600">
              To access our curated marketplace of innovative ideas, a one-time payment of ₹499 is required. 
              This gives you full access to browse and connect with idea sellers.
            </p>
          </div>

          <div className="border rounded-lg p-6 mb-6">
            <h3 className="text-lg text-black font-semibold mb-4">Payment Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-4">
                <span className="text-gray-600">Access Fee</span>
                <span className="font-semibold text-black">₹499</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-black ">Total Amount</span>
                <span className="text-lg font-bold text-black">₹499</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg text-black font-semibold mb-4">Payment Method</h3>
            <div className="flex items-center text-black space-x-4">
              <span>QR Code</span>
              <img src="/scan.png" alt="QR Code" className="w-24 h-24 my-2" />
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <span className="text-black">Payment App:</span>
              <select 
                className="bg-blue-200 rounded px-3 py-2 text-black"
                id="paymentApp"
                onChange={(e) => {
                  // Reset transaction ID input when payment app changes
                  document.getElementById('transactionId').value = '';
                  document.getElementById('errorMessage').textContent = '';
                }}
              >
                <option value="gpay">Google Pay</option>
                <option value="phonepay">PhonePe</option>
              </select>
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex items-center">
                <span className="text-black mr-2">Transaction ID:</span>
                <input 
                  id="transactionId"
                  type="text" 
                  placeholder="Enter transaction ID"
                  className="bg-blue-200 rounded px-3 py-2 text-black"
                  onChange={(e) => {
                    const paymentApp = document.getElementById('paymentApp').value;
                    const transactionId = e.target.value;
                    const errorElement = document.getElementById('errorMessage');
                    
                    if (paymentApp === 'gpay') {
                      // Check if exactly 10 digits
                      if (!/^\d{10}$/.test(transactionId)) {
                        errorElement.textContent = 'Google Pay transaction ID must be entered correctly';
                      } else {
                        errorElement.textContent = '';
                      }
                    } else {
                      // Check if exactly 23 characters with letters and numbers
                      if (!/^[A-Za-z0-9]{23}$/.test(transactionId)) {
                        errorElement.textContent = 'PhonePe transaction ID must be entered correctly';
                      } else {
                        errorElement.textContent = '';
                      }
                    }
                  }}
                />
              </div>
              <span id="errorMessage" className="text-red-500 text-sm mt-1"></span>
            </div>
          </div>

          <div className="space-y-4">
            <button 
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              onClick={() => {
                // Payment gateway integration would go here
                alert("Submitted");
              }}
            >
              Submit
            </button>
            
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