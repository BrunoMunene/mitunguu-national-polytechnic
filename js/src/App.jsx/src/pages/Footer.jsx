// File: src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Departments", to: "/departments" },
  { label: "News & Events", to: "/news-events" },
  { label: "Gallery", to: "/gallery" },
  { label: "Downloads", to: "/downloads" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com/mitunguunationalpolytechnic",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path d="M22 12a10 10 0 10-11.54 9.88v-6.99H8.34v-2.9h2.12v-2.21c0-2.1 1.25-3.26 3.17-3.26.92 0 1.89.17 1.89.17v2.07h-1.06c-1.05 0-1.38.65-1.38 1.32v1.91h2.36l-.38 2.9h-1.98v7a10 10 0 009.65-10z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    url: "https://twitter.com/mitunguunatpoly",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48c-.87.52-1.84.9-2.88 1.1A4.52 4.52 0 0016.67 2a4.5 4.5 0 00-4.48 4.49c0 .35.04.7.11 1A12.79 12.79 0 013 4.13 4.47 4.47 0 003.3 8.72a4.5 4.5 0 01-2.04-.56v.06A4.5 4.5 0 004.49 13a4.5 4.5 0 01-2.03.08 4.5 4.5 0 004.2 3.14 9.04 9.04 0 01-5.6 1.94c-.36 0-.7-.02-1.04-.06A12.7 12.7 0 0012.73 21c7.55 0 11.7-6.3 11.7-11.75 0-.18-.01-.35-.02-.53A8.33 8.33 0 0023 3z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://youtube.com/mitunguunatpolytechnic",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path d="M19.8 7.2s-.2-1.4-1.02-2c-.97-.64-2-0.65-2.49-0.72C14 4 12 4 12 4h0c0 0-2 0-4.3.5-.5.07-1.5.1-2.5.75-.8.6-1 .7-1 .7S4 8 4 9.85v3c0 2 .9 2.9 1.2 3.1.92.6 2 .6 2.5.65 1.8.13 7.2 0 7.2 0s1.95-.1 2.56-1.95c.18-.61.18-1.15.2-1.3.05-.3.07-.7.07-.7s.1-1.08.05-2.15c-.02-.8-.65-1.72-.65-1.72zM10 14.75V9.25l4.75 2.74L10 14.75z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://instagram.com/mitunguunatpoly",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path d="M7 2C4.25 2 2 4.25 2 7v10c0 2.75 2.25 5 5 5h10c2.75 0 5-2.25 5-5V7c0-2.75-2.25-5-5-5H7zm9.5 3a1 1 0 110 2 1 1 0 010-2zm-4.5 1.2A4.8 4.8 0 1111.7 16a4.8 4.8 0 010-9.6zm0 7.8a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/254700000000",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path d="M20.52 3.48A11.55 11.55 0 0012 1.5c-6.35 0-11.5 5.15-11.5 11.5 0 2.04.54 3.94 1.5 5.6L1.5 22.5l5.8-1.52a11.54 11.54 0 005.7 1.5c6.35 0 11.5-5.15 11.5-11.5 0-3.06-1.2-5.92-3.48-8.5zm-2.03 12.3c-.3.86-1.8 1.66-2.5 1.75-.63.09-1.47.13-2-.65-.2-.3-.7-1-.93-1.2a.541.541 0 00-.4-.1c-.13.01-.96.5-1.15.6-.37.18-.57-.19-.75-.6-.19-.4-.75-1-.75-1s-.66-1.3-.65-3.22c.01-2 .9-2.97 1.23-3.17.3-.17.73-.22 1-.22.28 0 .4 0 .58.06.19.06.47.19.47.19l.33.19c.12.06.16.08.2.13.05.06.03.1.06.17a11.19 11.19 0 001.42 2 1.68 1.68 0 002.18.9c.3-.13.5-.89.56-1.25a4.1 4.1 0 00-.98-3c-.86-1.17-2.06-1.6-2.78-1.7a5.09 5.09 0 00-2 .1 6.8 6.8 0 00-3 2.56l-.3.34-1.4-1.28.3-.33a8.96 8.96 0 014.68-2.88 9.92 9.92 0 016.04 1.12 8.98 8.98 0 014 7 8.86 8.86 0 01-3.65 5z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/mitunguunatpolytechnic",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path d="M16 8a6 6 0 01.32 12h-8.64a6 6 0 01.32-12zm-5 4H7v5h4v-5zm4.02-2a1.12 1.12 0 11-2.24 0 1.12 1.12 0 012.24 0zM5 9h3v9H5V9z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {footerLinks.map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className="hover:underline focus:outline-none focus:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <ul className="flex space-x-6">
            {socialLinks.map(({ url, icon, name }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Mitunguu National Polytechnic on ${name}`}
                  className="hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Info</h3>
          <address className="not-italic text-gray-300">
            Mitunguu National Polytechnic<br />
            P.O Box 12345 - 60123<br />
            Mitunguu, Kenya<br />
            Phone: +254 700 000 000<br />
            Email: <a href="mailto:info@mitunguu.ac.ke" className="underline">info@mitunguu.ac.ke</a>
          </address>
        </div>
      </div>
      <div className="border-t border-blue-800 text-center py-4 text-sm select-none">
        © Mitunguu National Polytechnic 2025
      </div>
    </footer>
  );
}
