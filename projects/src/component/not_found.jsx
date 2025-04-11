import React from 'react'

export default function NotFound() {
  return (
      <div className=" flex items-center justify-center min-h-screen bg-gray-100 px-4 ">
          <div className="container mx-120 text-center p-8 bg-white rounded-xl shadow-md">
              <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
              <p className="text-2xl font-bold text-black-400 mb-4">Oops! The page you're looking for doesn't exist.</p>
              <a href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">Go Back Home</a>
          </div>
      </div>
  )
}
