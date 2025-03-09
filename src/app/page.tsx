import Link from 'next/link';
import Image from 'next/image';
import { FaTools, FaVideo, FaUserCog, FaSearch } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Fix Your Home Appliances with Confidence
              </h1>
              <p className="text-xl mb-6">
                Step-by-step troubleshooting guides, video tutorials, and connections to local 
                technicians when you need extra help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/appliances" 
                  className="bg-white text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition"
                >
                  <FaTools /> Start Fixing
                </Link>
                <Link 
                  href="/technicians" 
                  className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition"
                >
                  <FaUserCog /> Find a Pro
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image 
                  src="/images/hero-appliances.png" 
                  alt="Appliance repair"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            What appliance needs fixing?
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center">
              <div className="flex-grow">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for an appliance or problem..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <button className="ml-4 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition">
                Search
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm text-gray-500 mr-2">Popular searches:</span>
              <Link href="/troubleshooting/refrigerator-not-cooling" className="text-sm text-primary-600 hover:underline">Refrigerator not cooling</Link>
              <span className="text-gray-400">•</span>
              <Link href="/troubleshooting/washing-machine-wont-drain" className="text-sm text-primary-600 hover:underline">Washing machine won't drain</Link>
              <span className="text-gray-400">•</span>
              <Link href="/troubleshooting/dryer-not-heating" className="text-sm text-primary-600 hover:underline">Dryer not heating</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            How We Help You Fix Your Appliances
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            From DIY solutions to professional assistance, we've got you covered at every step.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-primary-100 p-4 rounded-full mb-4">
                <FaTools className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Step-by-Step Guides</h3>
              <p className="text-gray-600 mb-4">
                Easy-to-follow troubleshooting guides for common appliance problems.
              </p>
              <Link href="/troubleshooting" className="mt-auto text-primary-600 font-medium hover:text-primary-700">
                View Guides →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-primary-100 p-4 rounded-full mb-4">
                <FaVideo className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">
                Watch detailed video guides for visual learners who prefer seeing repairs in action.
              </p>
              <Link href="/videos" className="mt-auto text-primary-600 font-medium hover:text-primary-700">
                Watch Videos →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-primary-100 p-4 rounded-full mb-4">
                <FaUserCog className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Help</h3>
              <p className="text-gray-600 mb-4">
                Connect with vetted local technicians when you need expert assistance.
              </p>
              <Link href="/technicians" className="mt-auto text-primary-600 font-medium hover:text-primary-700">
                Find Technicians →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}