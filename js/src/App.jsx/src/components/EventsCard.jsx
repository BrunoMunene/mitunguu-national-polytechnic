// File: src/components/EventsCard.jsx
import React from "react";

export default function EventsCard({ title, date }) {
  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="border-l-4 border-blue-600 pl-4 py-2">
      <p className="font-semibold text-blue-900">{title}</p>
      <time dateTime={date} className="text-gray-600">
        {formattedDate}
      </time>
    </div>
  );
}
