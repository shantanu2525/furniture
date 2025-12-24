import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Categories } from './components/Categories';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { InstagramFeed } from './components/InstagramFeed';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <About />
        <Testimonials />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
