import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    path: "/about-us",
    submenu: [
      { name: "Vision & Mission", path: "vision-mission" },
      { name: "History", path: "history" },
      { name: "Core Values", path: "core-values" },
      {
        name: "Leadership/Administration",
        path: "leadership",
        submenu: [
          { name: "Members of Council", path: "members-council" },
          { name: "VC’s Message", path: "vc-message" },
        ],
      },
    ],
  },
  {
    name: "Academics",
    path: "/academics",
    submenu: [
      { name: "Courses / Programmes", path: "courses" },
      { name: "Schools & Departments", path: "schools-departments" },
    ],
  },
  {
    name: "Admissions",
    path: "/admissions",
    submenu: [
      { name: "How to Apply", path: "how-to-apply" },
      { name: "Admission Requirements", path: "requirements" },
      { name: "Download Application Form", path: "application-form" },
      { name: "Fee Structure", path: "fee-structure" },
      { name: "KUCCPS Intake", path: "kuccps" },
    ],
  },
  { name: "Departments", path: "/departments" },
  { name: "News & Events", path: "/news-events" },
  { name: "Gallery", path: "/gallery" },
  { name: "Downloads", path: "/downloads" },
  { name: "Contact", path: "/contact" },
];

function Dropdown({ submenu }) {
  return (
    <ul className="absolute bg-white shadow-lg rounded-md min-w-[220px] z-20 mt-1">
      {submenu.map((item) => (
        <li key={item.name} className="relative group">
          <NavLink
            to={item.path.startsWith("/") ? item.path : `${item.path}`}
            className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
          >
            {item.name}
          </NavLink>
          {item.submenu && (
            <ul className="absolute left-full top-0 bg-white shadow-lg rounded-md min-w-[220px] hidden group-hover:block z-30">
              {item.submenu.map((subItem) => (
                <li key={subItem.name}>
                  <NavLink
                    to={subItem.path.startsWith("/") ? subItem.path : `${subItem.path}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    {subItem.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Handles dropdown toggle on desktop hover
  const handleMouseEnter = (name) => {
    setOpenDropdown(name);
  };
  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="bg-blue-800 text-white sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2" aria-label="Mitunguu National Polytechnic Home">
          {/* TODO: Replace with Mitunguu Polytechnic logo */}
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-blue-800 font-bold">
            MNP
          </div>
          <span className="font-semibold text-lg tracking-wide">Mitunguu National Polytechnic</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6" aria-label="Primary">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `py-2 inline-block hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white ${
                    isActive ? "text-blue-300 font-semibold" : ""
                  }`
                }
                aria-haspopup={!!item.submenu}
                aria-expanded={openDropdown === item.name}
              >
                {item.name}
              </NavLink>
              {item.submenu && openDropdown === item.name && <Dropdown submenu={item.submenu} />}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            role="img"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-blue-900 text-white" aria-label="Mobile Primary">
          <ul className="space-y-1 px-4 py-3">
            {menuItems.map((item) => (
              <MobileMenuItem key={item.name} item={item} />
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function MobileMenuItem({ item }) {
  const [subOpen, setSubOpen] = useState(false);

  const hasSubmenu = item.submenu && item.submenu.length > 0;

  return (
    <li>
      <div className="flex justify-between items-center">
        <NavLink
          to={item.path}
          className="block py-2 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white w-full"
          onClick={() => hasSubmenu && setSubOpen(!subOpen)}
          aria-haspopup={hasSubmenu}
          aria-expanded={subOpen}
        >
          {item.name}
        </NavLink>
        {hasSubmenu && (
          <button
            aria-label={subOpen ? `Collapse ${item.name} menu` : `Expand ${item.name} menu`}
            className="text-white focus:outline-none"
            onClick={() => setSubOpen(!subOpen)}
            type="button"
          >
            {subOpen ? "-" : "+"}
          </button>
        )}
      </div>
      {hasSubmenu && subOpen && (
        <ul className="pl-4 space-y-1">
          {item.submenu.map((subItem) => (
            <li key={subItem.name}>
              {subItem.submenu ? (
                <MobileMenuItem item={subItem} />
              ) : (
                <NavLink
                  to={subItem.path.startsWith("/") ? subItem.path : `${item.path}/${subItem.path}`}
                  className="block py-1 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  {subItem.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
