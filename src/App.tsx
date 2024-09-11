import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
}, [])
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}