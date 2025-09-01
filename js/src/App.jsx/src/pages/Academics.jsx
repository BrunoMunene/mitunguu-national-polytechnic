// File: src/pages/Academics.jsx
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

function CoursesProgrammes() {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-blue-900 mb-4">Courses & Programmes</h2>
      <p>
        {/* TODO: Replace with actual courses and programmes */}
        We offer a variety of diplomas, certificates, and artisan courses designed to meet industry demands.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Diploma in Civil Engineering</li>
        <li>Certificate in Electrical Installation</li>
        <li>Artisan Course in Welding and Fabrication</li>
        <li>Diploma in Information Technology</li>
        <li>Certificate in Hospitality Management</li>
      </ul>
    </section>
  );
}

function SchoolsDepartments() {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-blue-900 mb-4">Schools & Departments</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>School of Engineering & Technology</li>
        <li>School of Applied Sciences</li>
        <li>School of Business and Management</li>
        <li>School of Hospitality and Tourism</li>
        <li>Department of Arts and Communication</li>
      </ul>
    </section>
  );
}

const menuItems = [
  { name: "Courses / Programmes", path: "courses" },
  { name: "Schools & Departments", path: "schools-departments" },
];

export default function Academics() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Academics</h1>
      <nav aria-label="Academics sub-navigation" className="mb-8">
        <ul className="flex flex-wrap space-x-4 border-b border-gray-300">
          {menuItems.map(({ name, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `block py-2 px-3 text-blue-700 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    isActive
                      ? "border-b-4 border-blue-700 font-semibold"
                      : "border-b-4 border-transparent"
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Routes>
        <Route path="courses" element={<CoursesProgrammes />} />
        <Route path="schools-departments" element={<SchoolsDepartments />} />
        <Route path="*" element={<CoursesProgrammes />} />
      </Routes>
    </div>
  );
}
