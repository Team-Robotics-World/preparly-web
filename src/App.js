import "./App.css";
import Card2 from "./components/Card2";
import Cards from "./components/Cards";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Heading from "./components/Heading";
import HeroSection from "./components/HeroSection";
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Heading />
      <Cards />
      <Card2 />
      <Carousel />
    </div>
  );
}

export default App;
