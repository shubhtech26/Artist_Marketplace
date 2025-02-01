import * as React from 'react';

function MeetTheArtist() {
  return (
    <section
      className="relative flex items-center justify-center h-[500px] bg-cover bg-center rounded-lg shadow-xl overflow-hidden"
      style={{
        backgroundImage: 'url("https://sau.edu/media/content-assets/images/page-photos/hero-images/art-student-painting-canvas.webp")',
      }}
    >
      <div className="relative bg-white/90 max-w-4xl p-16 rounded-xl text-center shadow-2xl backdrop-blur-lg">
        <h2 className="text-5xl font-extrabold font-serif italic text-gradient">
          Meet the Artist
        </h2>
        <p className="mt-8 text-lg text-gray-700 leading-relaxed">
          Experience the beauty of nature’s dynamic elements, from a thunderstorm rolling over the ocean at sunset 
          to the peeling paint of an urban landscape. Discover how Jyoti finds magic and emotion in every corner 
          of life’s canvas, reflecting it in captivating art pieces that tell a story.
        </p>
        <a
          href="/About"
          className="mt-10 inline-block bg-gradient-to-r from-pink-400 to-pink-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 transform transition duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}

export default MeetTheArtist;
