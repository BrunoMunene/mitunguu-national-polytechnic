import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Departments from "./pages/Departments";
import NewsEvents from "./pages/NewsEvents";
import Gallery from "./pages/Gallery";
import Downloads from "./pages/Downloads";
import Contact from "./pages/Contact";

function App() {
return (
<Router>
<div className="flex flex-col min-h-screen">
<Header />
<main className="flex-grow bg-white">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about-us/" element={<AboutUs />} />
<Route path="/academics/" element={<Academics />} />
<Route path="/admissions/*" element={<Admissions />} />
<Route path="/departments" element={<Departments />} />
<Route path="/news-events" element={<NewsEvents />} />
<Route path="/gallery" element={<Gallery />} />
<Route path="/downloads" element={<Downloads />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</main>
<Footer />
</div>
</Router>
);
}

export default App;