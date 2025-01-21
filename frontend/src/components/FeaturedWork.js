import * as React from 'react';

// Sample artwork data
const artworks = [
  {
    title: 'Color Garden 2',
    style: 'Modern Expressionism',
    size: '30" x 30" x 1"',
    price: '$445',
    image: 'https://dev.softgains.in/wp-content/uploads/2023/07/5.jpeg',
  },
  {
    title: 'Citrus Crush',
    style: 'Abstract Expressionism',
    size: '30" x 30" x 1"',
    price: '$345',
    image: 'https://dev.softgains.in/wp-content/uploads/2023/07/5.jpeg',
  },
  {
    title: 'Rustic Industrial 17',
    style: 'Rustic Industrial',
    size: '20" x 20" x 1"',
    price: '$250',
    image: 'https://dev.softgains.in/wp-content/uploads/2023/07/5.jpeg',
  },
  {
    title: 'Jupiter 2',
    style: 'Liquid Industrial',
    size: '30" x 30" x 1"',
    price: '$500',
    image: 'https://dev.softgains.in/wp-content/uploads/2023/07/5.jpeg',
  },
];

function FeaturedWorkSection() {
  return (
    <section className="p-10">
      {/* Gradient Title Section */}
      <div className="mb-8 text-center">
      <h2  className="text-5xl font-extrabold tracking-wide bg-gradient-to-r from-pink-400 via-pink-500 to-red-400 text-transparent bg-clip-text"
  >
          Best Sellers
        </h2>
      </div>
      {/* Artwork Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {artworks.map((art, index) => (
          <div
            key={index}
            className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transform transition-transform duration-300 hover:scale-105"
          >
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
              <img
                className="object-cover w-full h-full"
                src={art.image}
                alt={art.title}
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                Featured
              </span>
            </a>
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900">{art.title}</h5>
              </a>
              <p className="text-sm text-gray-500">{art.style}</p>
              <p className="text-sm text-gray-500">{art.size}</p>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p className="text-3xl font-bold text-slate-900">{art.price}</p>
              </div>
              <div className="flex gap-2">
                {/* Add to Cart Button */}
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center"
                  style={{
                    backgroundColor: '#E91E63',
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                >
                  Add to Cart
                </a>
                {/* View Product Button */}
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center"
                  style={{
                    backgroundColor: '#D3D3D3',
                    color: '#333',
                    padding: '8px 16px',
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                >
                  View Product
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedWorkSection;
