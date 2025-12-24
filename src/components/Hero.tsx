import { useState, useEffect } from 'react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2s]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          transform: isLoaded ? 'scale(1)' : 'scale(1.1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <span 
            className={`inline-flex items-center gap-2 text-amber-400 text-sm font-semibold tracking-widest uppercase mb-6 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="w-12 h-[2px] bg-amber-400"></span>
            Premium Quality Furniture
          </span>
          
          <h1 
            className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Elevate Your Living Space with 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 mt-2">
              Hallmark Furniture
            </span>
          </h1>
          
          <p 
            className={`text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Discover our exquisite collection of handcrafted furniture pieces designed to transform your home into a haven of comfort and style. Quality craftsmanship meets timeless elegance.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="#products"
              className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/40 text-center flex items-center justify-center gap-3 btn-ripple"
            >
              <span>Explore Collection</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="group border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-500 text-center flex items-center justify-center gap-3 backdrop-blur-sm"
            >
              <span>Get in Touch</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div 
            className={`grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10 transition-all duration-1000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center sm:text-left">
              <p className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">500+</p>
              <p className="text-gray-400 text-sm sm:text-base mt-2">Products</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">10K+</p>
              <p className="text-gray-400 text-sm sm:text-base mt-2">Happy Customers</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">15+</p>
              <p className="text-gray-400 text-sm sm:text-base mt-2">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <a href="#categories" className="flex flex-col items-center text-white/60 hover:text-white transition-colors duration-300 group">
          <span className="text-xs uppercase tracking-widest mb-3">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 border border-amber-500/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 border border-amber-500/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
}
