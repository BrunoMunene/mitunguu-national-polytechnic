// File: src/pages/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10" aria-labelledby="contact-heading">
      <h1 id="contact-heading" className="text-4xl font-bold text-blue-900 mb-8">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <address className="not-italic text-gray-700 space-y-3">
          <p>
            <strong>Postal Address:</strong> P.O Box 12345 - 60123, Mitunguu, Kenya
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+254700000000" className="text-blue-700 hover:underline">
              +254 700 000 000
            </a>
          </p>
          <p>
            <strong>Email Admissions:</strong>{" "}
            <a href="mailto:admissions@mitunguu.ac.ke" className="text-blue-700 hover:underline">
              admissions@mitunguu.ac.ke
            </a>
          </p>
          <p>
            <strong>Email General:</strong>{" "}
            <a href="mailto:info@mitunguu.ac.ke" className="text-blue-700 hover:underline">
              info@mitunguu.ac.ke
            </a>
          </p>
        </address>

        {/* Contact Form */}
        <form
          className="bg-blue-50 p-6 rounded-lg shadow"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for contacting Mitunguu National Polytechnic. Form submission feature needs implementation.");
          }}
          aria-label="Contact form"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold text-blue-900 mb-1">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold text-blue-900 mb-1">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold text-blue-900 mb-1">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              required
              rows="4"
              className="w-full px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Google Maps Embed */}
      <div className="mt-10 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Mitunguu National Polytechnic Location Map"
          src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Mitunguu+National+Polytechnic,+Kenya"
          width="100%"
          height="350"
          loading="lazy"
          allowFullScreen
          className="border-0"
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
        {/* TODO: Replace "YOUR_GOOGLE_MAPS_API_KEY" in the src with a valid key */}
      </div>
    </section>
  );
}
