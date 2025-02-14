import React from "react";
import NewsletterSignup from "../components/NewsletterSignup"; // Import the NewsletterSignup component
import FeaturedWorkSection from "../components/FeaturedWork";
import MeetTheArtist from "../components/MeettheArtist";
const Home = () => {
  return (
    <div>
      {/* Navbar */}
      

      {/* Hero Section */}
      <div
        className="relative w-full h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://www.cheddarcreative.co.uk/wp-content/uploads/2022/11/SAA-BANNER-SCENE-1.jpg')`,
          filter: 'brightness(0.85) contrast(1.1)', // Richer color tone for a balanced contrast
        }}
      >
        {/* Overlay with Stylish Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 space-y-6">
          <h1
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
            style={{
              textShadow: '4px 4px 10px rgba(0, 0, 0, 0.8)', // Bold shadow for text visibility
            }}
          >
            Welcome to Jyoti Creations
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mt-4">
            Discover captivating paintings and personalized masterpieces.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-amber-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-amber-600 hover:scale-105 transform transition duration-300">
              Explore the Gallery
            </button>
            <button className="bg-gray-800 text-white px-8 py-4 rounded-full shadow-lg hover:bg-gray-900 hover:scale-105 transform transition duration-300">
              About the Artist
            </button>
          </div>
        </div>
      </div>
        <NewsletterSignup /> {/* Render the NewsletterSignup component */}
        <FeaturedWorkSection/>
        <MeetTheArtist/>
        
    </div>
  );
};

export default Home;
