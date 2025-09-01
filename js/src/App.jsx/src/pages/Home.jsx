// File: src/pages/Home.jsx
import React from "react";
import QuickLinks from "../components/QuickLinks";
import NewsSnippetCard from "../components/NewsSnippetCard";
import EventsCard from "../components/EventsCard";

const sampleNews = [
  {
    id: 1,
    title: "Migunguu Polytechnic launches new Engineering Diploma",
    date: "2025-08-15",
    snippet: "New diploma courses in Civil, Electrical and Mechanical Engineering now open for applications.",
  },
  {
    id: 2,
    title: "National Polytechnic Week 2025 Scheduled for September",
    date: "2025-08-20",
    snippet: "Celebrate education with industry expos, guest lectures, and student showcases at the campus.",
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Admissions Open Day",
    date: "2025-09-05",
  },
  {
    id: 2,
    title: "Annual Sports Festival",
    date: "2025-10-10",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <section
        className="relative bg-blue-900 text-white h-[420px] flex items-center justify-center"
        aria-label="Hero Banner"
      >
        <img
          src="/images/campus-hero.jpg"
          alt="Mitunguu National Polytechnic Campus"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          loading="lazy"
        />
        <div className="relative text-center max-w-3xl p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide drop-shadow-lg">
            Welcome to Mitunguu National Polytechnic
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-md italic">
            “Empowering Practical Skills for a Brighter Future”
          </p>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8" aria-label="Quick Links">
        <QuickLinks />
      </section>

      {/* Welcome Message */}
      <section className="max-w-5xl mx-auto my-12 px-4 sm:px-6 lg:px-8" aria-labelledby="welcome-heading">
        <h2 id="welcome-heading" className="text-3xl font-semibold text-blue-900 mb-4">
          Welcome Message
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Welcome to Mitunguu National Polytechnic, a leading institution committed to delivering high-quality
          technical education and skills development to empower students for success in today's dynamic workforce.
          Our dedicated faculty and state-of-the-art facilities support hands-on learning in diverse programmes.
          {/* TODO: Replace this placeholder text with the actual welcome message from management. */}
        </p>
      </section>

      {/* News Snippets */}
      <section className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8" aria-label="Latest News">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">Latest News & Announcements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sampleNews.map((news) => (
            <NewsSnippetCard key={news.id} {...news} />
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="max-w-4xl mx-auto mt-12 px-4 sm:px-6 lg:px-8" aria-label="Upcoming Events">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">Upcoming Events</h2>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <EventsCard key={event.id} {...event} />
          ))}
        </div>
      </section>
    </div>
  );
}
