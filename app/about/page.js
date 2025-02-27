import React from 'react'

const About = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-200 mb-6">About BidIdea.in</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing how ideas are bought and sold, creating a marketplace that connects innovators with opportunities.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            At BidIdea.in, we believe that great ideas deserve the right platform to flourish. Our mission is to create a transparent, secure, and efficient marketplace where innovators can monetize their ideas and investors can discover the next big opportunity.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation First</h3>
            <p className="text-gray-600">
              We champion creativity and original thinking, providing a platform where revolutionary ideas can find their path to reality.
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust & Security</h3>
            <p className="text-gray-600">
              We ensure secure transactions and protect intellectual property rights, creating a safe environment for idea exchange.
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Empowering Growth</h3>
            <p className="text-gray-600">
              We facilitate connections that drive progress, helping both innovators and investors achieve their goals.
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg text-black  font-semibold mb-2">Submit Your Idea</h3>
              <p className="text-gray-600">Share your innovative idea with our community in a secure environment</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg text-black  font-semibold mb-2">Connect with Investors</h3>
              <p className="text-gray-600">Get matched with interested investors looking for opportunities</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg text-black  font-semibold mb-2">Transform Ideas to Reality</h3>
              <p className="text-gray-600">Successfully monetize your idea and watch it come to life</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-200 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">Join our community of innovators and investors today.</p>
          <div className="flex justify-center gap-4">
            <a href="/sell" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
              Submit Your Idea
            </a>
            <a href="/buy" className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300">
              Browse Ideas
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About