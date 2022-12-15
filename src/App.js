import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";
import Testimonials from "./components/Testimonials";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
      <Testimonials />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;
