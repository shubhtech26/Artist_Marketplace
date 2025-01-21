import * as React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
function About() {
  return (
    <div>
    <Navbar />
    <section className="relative flex items-center justify-center h-auto bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 text-white p-12 rounded-lg shadow-2xl overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-6xl">
        <div className="lg:w-1/2 transform hover:scale-105 transition-transform duration-500">
          <img
            src="https://c.stocksy.com/a/QAJ400/z9/1026994.jpg"
            alt="Jyoti Singh - Artist"
            className="w-full h-auto rounded-xl shadow-lg border-4 border-white"
          />
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
        <h1 className="text-4xl font-extrabold mb-4 text-white">
            Jyoti Singh
        </h1>
          <h3 className="text-3xl font-semibold italic mb-6">
            A Celebration of Color, Movement, and Emotion
          </h3>
          <p className="text-lg leading-relaxed mb-6 hover:text-yellow-300 transition-colors duration-300">
            Based in Noida, India, Jyoti Singh's art captures the essence of transformation and impermanence, exploring the delicate
            balance between chaos and serenity. Her work uniquely blends realism with imaginative abstraction, offering a vivid
            exploration of life’s raw, dynamic moments.
          </p>
          <p className="text-lg leading-relaxed mb-6 hover:text-yellow-300 transition-colors duration-300">
            Inspired by personal experiences and the natural world, Jyoti’s creations are known for their vibrant palettes and
            bold contrasts. Her intuitive process turns ordinary moments into extraordinary experiences, highlighting the unnoticed
            poetry in everyday life.
          </p>
          <p className="text-lg leading-relaxed mb-6 hover:text-yellow-300 transition-colors duration-300">
            With a mission to spark dialogue and evoke reflection, Jyoti’s art continues to inspire through exhibitions and
            personal commissions, reminding viewers of the magic present in the simplest things.
          </p>
        </div>
      </div>
    </section>
    <FooterSection />
    </div>
  );
}

export default About;
