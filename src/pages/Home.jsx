import { useEffect } from 'react';
import { scroller } from 'react-scroll';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Comunity from '../components/Comunity';
import Work from '../components/Work';
import Contact from '../components/Contact';
import BlogPreview from '../components/BlogPreview';

function Home() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      // Delay scroll to ensure content is rendered
      setTimeout(() => {
        scroller.scrollTo(hash, {
          duration: 500,
          smooth: true,
          offset: -50,
        });
      }, 100); // tweak this delay if needed
    }
  }, [location]);

  return (
    <>
      <Header />
      <Hero />
      <Work />
      <About />
      <Comunity />
      <BlogPreview />
      <Contact />
    </>
  );
}

export default Home;
