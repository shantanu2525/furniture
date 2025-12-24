import { useState } from 'react';

const categories = [
  {
    name: 'Living Room',
    description: 'Sofas, coffee tables & more',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: 45,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    name: 'Bedroom',
    description: 'Beds, wardrobes & dressers',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: 38,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: 'Dining',
    description: 'Tables, chairs & cabinets',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: 32,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Office',
    description: 'Desks, chairs & storage',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: 28,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export function Categories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="categories" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 font-semibold text-sm tracking-widest uppercase bg-amber-50 px-4 py-2 rounded-full">
            Browse By Category
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-6">
            Furniture for <span className="gradient-text">Every Room</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Explore our diverse collection organized by room type to find the perfect pieces for your space
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#products"
              className="group relative overflow-hidden rounded-3xl cursor-pointer card-hover"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Card Container */}
              <div className="relative aspect-[3/4] bg-gray-900 rounded-3xl overflow-hidden">
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                    hoveredIndex === index ? 'scale-125 blur-sm' : 'scale-100'
                  }`}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'bg-gradient-to-t from-amber-900/90 via-amber-800/60 to-transparent' 
                    : 'bg-gradient-to-t from-black/80 via-black/40 to-transparent'
                }`}></div>

                {/* Shine Effect */}
                <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-100' : ''
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                </div>

                {/* Icon Badge */}
                <div className={`absolute top-6 right-6 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'bg-amber-500 text-white scale-110 rotate-12' 
                    : 'bg-white/20 text-white backdrop-blur-sm'
                }`}>
                  {category.icon}
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  {/* Product Count */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-3 transition-all duration-500 ${
                    hoveredIndex === index 
                      ? 'bg-amber-500 text-white' 
                      : 'bg-white/20 text-white backdrop-blur-sm'
                  }`}>
                    <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
                    {category.count} Products
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold text-white mb-2 transition-all duration-500 ${
                    hoveredIndex === index ? 'translate-x-2' : ''
                  }`}>
                    {category.name}
                  </h3>

                  {/* Description */}
                  <p className={`text-white/80 transition-all duration-500 ${
                    hoveredIndex === index ? 'translate-x-2 text-white' : ''
                  }`}>
                    {category.description}
                  </p>

                  {/* Shop Now Button */}
                  <div className={`mt-4 flex items-center gap-2 transition-all duration-500 ${
                    hoveredIndex === index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}>
                    <span className="bg-white text-amber-700 px-5 py-2.5 rounded-full font-semibold text-sm inline-flex items-center gap-2 hover:bg-amber-50 transition-colors">
                      Shop Now
                      <svg 
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-0 left-0 w-24 h-24 transition-all duration-700 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-400/30 to-transparent rounded-br-full"></div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#products"
            className="inline-flex items-center gap-3 bg-gray-900 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 btn-ripple"
          >
            <span>View All Products</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
