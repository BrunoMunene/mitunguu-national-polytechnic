// File: src/pages/Admissions.jsx
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

function HowToApply() {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-blue-900 mb-4">How to Apply</h2>
      <ol className="list-decimal pl-5 space-y-2 text-gray-700">
        <li>Review the list of available programmes.</li>
        <li>Download and fill the application form or apply online.</li>
        <li>Submit the form with supporting documents.</li>
        <li>Pay the application fee.</li>
        <li>Wait for admission notification.</li>
        {/* TODO: Add further instructions as necessary */}
      </ol>
    </section>
  );
}

function AdmissionRequirements() {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-blue-900 mb-4">Admission Requirements</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>KCSE or equivalent with minimum grade C-.</li>
        <li>Completed application form.</li>
        <li>Identity card or birth certificate.</li>
        <li>Other course-specific requirements.</li>
        {/* TODO: Specify exact requirements */}
      </ul>
    </section>
  );
}

function ApplicationForm() {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-blue-900 mb-4">Download Application Form</h2>
      <p>
        {/* TODO: Replace '#' with actual application form link */}
        <a
          href="#"
          download
          className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Download Application Form (PDF)
        </a>
      </p>
    </section>
  );
}

function FeeStructure() {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-blue-900 mb-4">Fee Structure</h2>
      <p>
        {/* TODO: Insert fee structure table or PDF link */}
        Fees are competitively priced to support access to quality technical education. For details contact the
        admissions office.
      </p>
    </section>
  );
}

function KuccpsIntake() {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-blue-900 mb-4">KUCCPS Intake</h2>
      <p>
        Mitunguu National Polytechnic participates in KUCCPS admissions. Applicants should check KUCCPS portal for
        current intake information.
      </p>
      {/* TODO: Provide direct link or embed relevant KUCCPS info */}
    </section>
  );
}

const menuItems = [
  { name: "How to Apply", path: "how-to-apply" },
  { name: "Admission Requirements", path: "requirements" },
  { name: "Download Application Form", path: "application-form" },
  { name: "Fee Structure", path: "fee-structure" },
  { name: "KUCCPS Intake", path: "kuccps" },
];

export default function Admissions() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Admissions</h1>
      <nav aria-label="Admissions sub-navigation" className="mb-8">
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
        <Route path="how-to-apply" element={<HowToApply />} />
        <Route path="requirements" element={<AdmissionRequirements />} />
        <Route path="application-form" element={<ApplicationForm />} />
        <Route path="fee-structure" element={<FeeStructure />} />
        <Route path="kuccps" element={<KuccpsIntake />} />
        <Route path="*" element={<HowToApply />} />
      </Routes>
    </div>
  );
}
