"use client"
import React from 'react'

const payment = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl text-gray-800 font-bold mb-6">Payment Method</h3>
        
        {/* QR Code Section */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="flex flex-col items-center text-gray-800">
            <span className="text-lg font-medium mb-4">Scan QR Code</span>
            <img 
              src="/999.png" 
              alt="QR Code" 
              className="w-48 h-48 object-contain border-2 border-gray-200 rounded-lg p-2" 
            />
          </div>
        </div>

        {/* Payment App Selection */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Payment App
          </label>
          <select 
            className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        {/* Transaction ID Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Transaction ID
          </label>
          <input 
            id="transactionId"
            type="text" 
            placeholder="Enter transaction ID"
            className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <span id="errorMessage" className="text-red-500 text-sm mt-2 block"></span>
        </div>

             {/* Submit Button */}
        <button 
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mt-6"
          onClick={() => {
            const transactionId = document.getElementById('transactionId').value;
            const errorElement = document.getElementById('errorMessage');
            
            if (!transactionId) {
              errorElement.textContent = 'Transaction ID must be entered';
            } else {
              errorElement.textContent = '';
              alert('Details submitted successfully');
            }
          }}>Submit</button>

      </div>
    </div>
  )
}

export default payment