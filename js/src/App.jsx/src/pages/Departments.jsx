// File: src/pages/Departments.jsx
import React from "react";

export default function Departments() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Departments</h1>
      <p>
        {/* TODO: Replace with actual departments content */}
        Mitunguu National Polytechnic consists of diverse departments including Engineering, Applied Sciences,
        Business, Hospitality, and more dedicated to delivering quality education.
      </p>
      <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
        <li>Department of Civil Engineering</li>
        <li>Department of Electrical Engineering</li>
        <li>Department of Mechanical Engineering</li>
        <li>Department of Information Technology</li>
        <li>Department of Business Studies</li>
        <li>Department of Hospitality and Tourism</li>
      </ul>
    </div>
  );
}
