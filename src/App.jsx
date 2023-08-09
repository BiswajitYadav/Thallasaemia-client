import { useState, useEffect } from 'react';
import About from "./components/About";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Counter from "./components/Counter";
import Photos from "./components/Photos";
import Vision from "./components/Vision";
import ReactGA from 'react-ga';
import Hero2 from './components/Hero2';
import Loader from './components/Loader';


export default function App() {

  ReactGA.initialize('G-VNM76CLESM');

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    ReactGA.pageview(window.location.pathname + window.location.search);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

  }, []);

  return (
    <>

      {
        isLoading ?
          <Loader /> :
          <>
            <Header />
            <Hero2 />
            <Mission />
            <Vision />
            <Counter />
            <Activities />
            <About />
            <Photos />
            <Contact />
            <Footer />
          </>
      }

    </>
  )
}