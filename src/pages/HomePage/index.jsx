import React from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import ServicesTab from "../../components/ServicesTab";
import Projects from "../../components/Proects";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <About />
      <ServicesTab />
      <Projects />
      <Footer />
    </>
  );
}
