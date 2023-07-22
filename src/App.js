import React from "react";
import NavigationBar from "./components/Navbar";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrainerCardsCarousel from "./components/TrainerCardsCarousel";
import FamousClients from "./components/FamousClients";
import NotAFooter from "./components/NotAFooter";
import ContactUs from "./components/ContactUs";
import VideoBackground from "./components/VideoBackground";
import Introduction from "./components/Introduction";
import BeforeAndAfter from "./components/BeforeAndAfter";
import FixedIcons from "./components/FixedIcons";

function App() {
  return (
    <div className="App">
      <VideoBackground />
      <NavigationBar />
      <FixedIcons />
      <Homepage />
      <AboutUs />
      <Introduction />
      <BeforeAndAfter />
      <FamousClients />
      <TrainerCardsCarousel />
      <ContactUs />
      <NotAFooter />
    </div>
  );
}

export default App;
