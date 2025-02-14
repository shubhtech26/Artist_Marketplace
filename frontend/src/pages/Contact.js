import React from "react";

export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl w-full flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Left: Address Section */}
        <div
          className="w-full md:w-1/2 p-8 flex flex-col justify-center backdrop-glass relative"
          style={{
            backgroundImage:
              "url('https://m.media-amazon.com/images/I/61ctne+78bS._AC_UF894,1000_QL80_.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
          <div className="relative z-10 text-white">
            <h2 className="text-3xl font-extrabold">Get in Touch</h2>
            <p className="text-lg mt-2">We'd love to hear from you!</p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-xl">📍</span>
                <p>Acme Inc, Street, City, Postal Code</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-xl">📞</span>
                <p>+44 1234567890</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-xl">📧</span>
                <p>info@acme.org</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-800">Send Us a Message</h2>
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-600 font-medium">Full Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Email Address</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Phone Number</label>
              <input
                type="tel"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-600 to-pink-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
