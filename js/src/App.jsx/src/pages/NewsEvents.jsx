// File: src/pages/NewsEvents.jsx
import React from "react";

const newsList = [
  {
    id: 1,
    title: "Polytechnic Achieves Highest Student Enrollment in 5 Years",
    date: "2025-08-01",
    content:
      "This year, Mitunguu National Polytechnic welcomed the largest cohort of new students in its history, highlighting its growing reputation.",
  },
  {
    id: 2,
    title: "New Workshops Announced for Technical Skills Development",
    date: "2025-08-20",
    content:
      "Upcoming workshops on welding, electrical installations, and IT skills will be conducted next semester.",
  },
];

export default function NewsEvents() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">News & Events</h1>
      <div className="space-y-8">
        {newsList.map(({ id, title, date, content }) => (
          <article
            key={id}
            className="p-6 border border-blue-200 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow"
            tabIndex={0}
            aria-label={`News: ${title}`}
          >
            <h2 className="text-2xl text-blue-900 font-semibold mb-1">{title}</h2>
            <time dateTime={date} className="text-gray-500 text-sm mb-3 block">
              {new Date(date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <p className="text-gray-700">{content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
