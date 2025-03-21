
import Image from "next/image";
import Link from "next/link";


const page = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left side content */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Transform Your Ideas into Reality
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Welcome to BidIdea.in, where innovation meets opportunity. Whether you have a groundbreaking idea to sell or you're looking to invest in the next big thing, we're here to connect visionaries with investors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <Link href="/buy" className="px-6 sm:px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 text-base sm:text-lg">
                  Buy Ideas
                </Link>
                <Link href="/sell" className="px-6 sm:px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300 text-base sm:text-lg">
                  Sell ideas
                </Link>
                <Link href="/work" className="px-6 sm:px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300 text-base sm:text-lg">
                  Work on my ideas
                </Link>
              </div>
            </div>

            {/* Right side image */}
            <div className="flex-1 w-full max-w-xl lg:max-w-none">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/image1.jpg"
                  alt="Innovation Concept"
                  fill
                  className="object-cover rounded-xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left side image */}
            <div className="flex-1 w-full max-w-xl lg:max-w-none">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/image2.jpg"
                  alt="Innovation Success"
                  fill
                  className="object-cover rounded-xl shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Right side content */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Your Success Story Starts Here
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                At BidIdea.in, we believe every great innovation deserves its chance to shine. Our platform provides a secure and efficient marketplace where entrepreneurs and investors can connect, collaborate, and create value together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left side content */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Transform Ideas into Reality
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Whether you're an innovator with a groundbreaking idea or an investor looking for the next big opportunity, BidIdea.in provides the perfect platform. Our marketplace ensures transparent transactions, intellectual property protection, and a supportive ecosystem.
              </p>
            </div>

            {/* Right side image */}
            <div className="flex-1 w-full max-w-xl lg:max-w-none">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/image5.jpg"
                  alt="Innovation Journey"
                  fill
                  className="object-cover rounded-xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
