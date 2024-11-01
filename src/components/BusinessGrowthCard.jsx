import React from 'react'

const BusinessGrowthCard = () => {
  return (
    <div className="bg-[#0A1B3D] w-full container rounded-2xl mx-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Content That Powers Business Growth.
          </h1>
          <p className="text-gray-300 text-lg">
            Done-for-you content marketing plans for start-ups, B2B, and
            technology companies. Arrow is the ONLY platform that combines
            the best of AI and world-class content experts all in one
            solution.
          </p>
          <button className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity">
            Learn More
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Right Content - Mockup */}
        <div className="relative mt-8 lg:mt-0">
          <div className="bg-gradient-to-br  from-purple-100 to-pink-100 rounded-2xl p-4">
            <div className="relative aspect-[4/3] w-full">
              <div className="absolute inset-0 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg">
                {/* Chat Interface Mockup */}
                <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-full bg-gray-200" />
                    <div className="w-6 h-6 text-gray-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16m-7 6h7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-3/4 h-4 bg-gray-200 rounded" />
                    <div className="w-2/3 h-4 bg-gray-200 rounded" />
                  </div>
                  <div className="flex justify-end">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-300 rounded-full animate-bounce" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-400 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default BusinessGrowthCard