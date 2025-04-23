import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Web Development & SEO Portfolio | Modern Solutions</title>
        <meta name="description" content="Showcasing our expertise in web development and SEO with modern, responsive websites built for success." />
        <link rel="canonical" href="https://yourportfolio.com/" />
      </Helmet>
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Hero />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;