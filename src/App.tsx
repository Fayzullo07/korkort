import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react'
import './App.css'


import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home'

import AOS from "aos";
import "aos/dist/aos.css";
import { TailwindIndicator } from "./providers/tailwind-indicator";
import Footer from "./components/Footer/Footer";

const Routing = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
function App() {

  useEffect(() => {

    AOS.init({ once: false, easing: "ease-in-sine", delay: 50 });
    AOS.refresh();

  }, []);

  return (
    <>
      <Navbar />
      <Routing />
      <Footer />
      <TailwindIndicator />
    </>
  );
}

export default App
