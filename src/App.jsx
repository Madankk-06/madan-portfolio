import { useState } from "react";

import TargetCursor from "./components/TargetCursor";
import FerrofluidBackground from "./components/FerrofluidBackground";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ScrollProgress from "./components/ScrollProgress";

import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] =
    useState(true);

  return (
    <>
      {loading && (
        <Loader
          onComplete={() =>
            setLoading(false)
          }
        />
      )}

      {!loading && (
        <>
          {/* Global Ferrofluid Background */}
          <FerrofluidBackground />

          {/* Custom Cursor */}
          <TargetCursor />

          {/* Scroll Progress */}
          <ScrollProgress />

          {/* Portfolio */}
          <Navbar />

          <Hero />

          <About />

          <div className="white-wrapper">
            <Skills />

            <Projects />

            <Experience />

            <Stats />
          </div>

          <Contact />

          <Footer />
        </>
      )}
    </>
  );
}