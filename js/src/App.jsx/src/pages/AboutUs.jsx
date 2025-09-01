// File: src/pages/AboutUs.jsx
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

function VisionMission() {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-blue-900 mb-4">Vision & Mission</h2>
      <p>
        {/* TODO: Replace with actual Vision & Mission content */}
        Our vision is to be the premier polytechnic in technical education and skills development in Kenya.
      </p>
      <p className="mt-2">
        Our mission is to provide quality, relevant, and innovative technical education and training to empower
        students for meaningful employment and entrepreneurship.
      </p>
    </section>
  );
}

function History() {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-blue-900 mb-4">History</h2>
      <p>
        {/* TODO: Replace with actual history of Mitunguu National Polytechnic */}
       The Mitunguu National Polytechnic began as the Mitunguu Technical Training Institute (TTI) before being officially upgraded to polytechnic status in 2025. The institution was first established in 2015. 
Mitunguu Technical Training Institute (2015–2025)
Incorporation: The Mitunguu TTI was incorporated in 2015 under the TVET Act of 2013 and is a government-sponsored institution within Kenya's Ministry of Education.
Mandate: Its purpose was to provide young people with the skills needed for the labor market, contributing to the country's "Big 4 Agenda" and Vision 2030.
Center of Excellence: The institute was designated as a Center of Excellence in Electrical and Electronics Engineering.
First Graduates: In January 2023, the institute held its first graduation ceremony, with 937 students completing their courses in various disciplines.
Campus: The TTI was built on a 52-acre piece of land in Meru County and features modern infrastructure, including ICT facilities. 
Elevation to National Polytechnic (2024–2025)
Cabinet Approval: In November 2024, the Kenyan Cabinet approved the elevation of Mitunguu TTI and four other institutions to National Polytechnic status.
Succession: Legal Notice 33 of 2025, published in February 2025, formally established the Mitunguu National Polytechnic, making it the legal successor to the Mitunguu TTI. All assets, staff, and students were officially transferred to the new polytechnic.
National Mandate: The institution now operates as a National Polytechnic, offering higher-level CBET (Competency-Based Education and Training) courses. 
      </p>
    </section>
  );
}

function CoreValues() {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-blue-900 mb-4">Core Values</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Integrity and Honesty</li>
        <li>Innovation and Excellence</li>
        <li>Inclusivity and Diversity</li>
        <li>Accountability and Transparency</li>
        <li>Commitment to Student Success</li>
      </ul>
    </section>
  );
}

function Leadership() {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-blue-900 mb-6">Leadership & Administration</h2>
      <div>
        <h3 className="text-2xl font-semibold mb-2">Members of Council</h3>
        <p>
          {/* TODO: Add real members of council with photos */}
          The Council oversees the governance and strategic direction of the Polytechnic.
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-2">VC’s Message</h3>
        <p>
          {/* TODO: Insert Vice Chancellor's message */}
          Welcome to Mitunguu National Polytechnic. We are committed to nurturing talent and equipping students
          with practical skills for national development...
        </p>
      </div>
    </section>
  );
}

const menuItems = [
  { name: "Vision & Mission", path: "vision-mission" },
  { name: "History", path: "history" },
  { name: "Core Values", path: "core-values" },
  { name: "Leadership/Administration", path: "leadership" },
];

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">About Us</h1>
      <nav aria-label="About Us sub-navigation" className="mb-8">
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
        <Route path="vision-mission" element={<VisionMission />} />
        <Route path="history" element={<History />} />
        <Route path="core-values" element={<CoreValues />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="*" element={<VisionMission />} />
      </Routes>
    </div>
  );
}
