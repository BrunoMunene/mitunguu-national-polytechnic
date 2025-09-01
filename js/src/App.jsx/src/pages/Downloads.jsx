// File: src/pages/Downloads.jsx
import React from "react";

const downloadableItems = [
  {
    id: 1,
    title: "Application Form",
    description: "Official application form for all programmes",
    link: "#",
    filename: "application-form.pdf",
  },
  {
    id: 2,
    title: "Academic Calendar 2025",
    description: "Schedule of academic events and breaks",
    link: "#",
    filename: "academic-calendar-2025.pdf",
  },
  {
    id: 3,
    title: "Fee Structure 2025",
    description: "Detailed fees for all courses",
    link: "#",
    filename: "fee-structure-2025.pdf",
  },
  {
    id: 4,
    title: "Programme Brochure",
    description: "Overview of all courses offered",
    link: "#",
    filename: "programme-brochure.pdf",
  },
  // TODO: Replace '#' with real document URLs and update filenames
];

export default function Downloads() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Downloads</h1>
      <ul className="space-y-6">
        {downloadableItems.map(({ id, title, description, link, filename }) => (
          <li
            key={id}
            className="border border-blue-200 rounded-lg p-4 flex items-center justify-between bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <h2 className="text-xl font-semibold text-blue-800">{title}</h2>
              <p className="text-gray-600">{description}</p>
            </div>
            <a
              href={link}
              download={filename}
              className="text-blue-700 hover:text-blue-900 font-semibold focus:outline-none focus:underline"
              aria-label={`Download ${title}`}
            >
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
