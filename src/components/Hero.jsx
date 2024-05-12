import React from 'react'
import Section from './Section'

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-lg mb-8">
            Explore our range of products and services designed to make your life easier.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="/hero-image.jpg"
            alt="Hero"
            className="mx-auto max-w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero