import * as React from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";

function About() {
  return (
    <div>
      <Navbar />
      <section className="relative flex items-center justify-center h-auto bg-white text-gray-800 px-8 py-16 rounded-lg shadow-xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-7xl mx-auto gap-x-8">
          {/* Image Section */}
          <div className="lg:w-1/2 transform hover:scale-105 hover:rotate-1 transition-transform duration-500">
            <img
              src="https://c.stocksy.com/a/QAJ400/z9/1026994.jpg"
              alt="Jyoti Singh - Artist"
              className="w-full h-auto rounded-xl shadow-lg border-4 border-gray-300"
            />
          </div>
          {/* Text Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
            <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-purple-600">
              Jyoti Singh
            </h1>
            <h3 className="text-3xl font-semibold italic mb-6 text-gray-700">
              A Celebration of Color, Movement, and Emotion
            </h3>
            <p className="text-lg leading-relaxed mb-6 hover:text-gray-900 transition-colors duration-300">
              Based in Noida, India, Jyoti Singh's art captures the essence of
              transformation and impermanence, exploring the delicate balance
              between chaos and serenity. Her work uniquely blends realism with
              imaginative abstraction, offering a vivid exploration of life’s
              raw, dynamic moments.
            </p>
            <p className="text-lg leading-relaxed mb-6 hover:text-gray-900 transition-colors duration-300">
              Inspired by personal experiences and the natural world, Jyoti’s
              creations are known for their vibrant palettes and bold contrasts.
              Her intuitive process turns ordinary moments into extraordinary
              experiences, highlighting the unnoticed poetry in everyday life.
            </p>
            <p className="text-lg leading-relaxed mb-6 hover:text-gray-900 transition-colors duration-300">
              With a mission to spark dialogue and evoke reflection, Jyoti’s art
              continues to inspire through exhibitions and personal commissions,
              reminding viewers of the magic present in the simplest things.
            </p>
            {/* Call-to-Action Button */}
            <a
              href="#explore"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
            >
              Explore Art
            </a>
          </div>
        </div>
      </section>
      {/* Add a New Section to Fill Blank Space */}
      <section className="bg-rose-50 text-gray-800 py-12 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-purple-600">
            Explore More of Jyoti’s Art
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Browse through her collection of abstract paintings, vibrant
            landscapes, and personalized creations that bring color and emotion
            to life.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#gallery"
              className="bg-pink-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-pink-600 transition-transform"
            >
              View Gallery
            </a>
            <a
              href="#workshops"
              className="bg-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-600 transition-transform"
            >
              Join Workshops
            </a>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}

export default About;
