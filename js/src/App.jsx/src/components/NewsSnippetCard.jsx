// File: src/components/NewsSnippetCard.jsx
import React from "react";

export default function NewsSnippetCard({ title, date, snippet }) {
  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="border border-blue-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-blue-300">
      <h3 className="text-xl text-blue-900 font-semibold">{title}</h3>
      <time dateTime={date} className="text-sm text-gray-500 block mb-2">
        {formattedDate}
      </time>
      <p className="text-gray-700">{snippet}</p>
    </article>
  );
}
