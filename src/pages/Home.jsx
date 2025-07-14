import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Comunity from '../components/Comunity';
import Work from '../components/Work';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Work />
      <About />
      <Comunity />
      <Contact />
    </>
  );
}

export default Home;
