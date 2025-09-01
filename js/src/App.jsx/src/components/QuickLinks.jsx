// File: src/components/QuickLinks.jsx
import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    title: "Online Application",
    description: "Apply for your preferred course conveniently online.",
    to: "/admissions/how-to-apply",
    icon: "📝",
  },
  {
    title: "Downloads",
    description: "Access application forms, timetables, brochures, and more.",
    to: "/downloads",
    icon: "📂",
  },
  {
    title: "Student Portal",
    description: "Login to your student account to access resources.",
    to: "#", // TODO: Replace with actual student portal URL
    icon: "👩‍🎓",
  },
  {
    title: "News & Events",
    description: "Stay updated with the latest happenings on campus.",
    to: "/news-events",
    icon: "📢",
  },
];

export default function QuickLinks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {links.map(({ title, description, to, icon }) => (
        <Link
          key={title}
          to={to}
          className="bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 p-6 shadow-sm flex flex-col text-center transition-shadow focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <div className="text-4xl mb-3" aria-hidden="true">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-blue-900">{title}</h3>
          <p className="mt-2 text-gray-700 text-sm">{description}</p>
        </Link>
      ))}
    </div>
  );
}
