import { useState } from 'react';

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Premium Quality',
    description: 'Crafted from the finest materials for lasting durability and elegance.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Timely Delivery',
    description: 'Efficient logistics ensure your furniture arrives when promised.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Custom Designs',
    description: 'Bespoke furniture design service tailored to your unique needs.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Expert Support',
    description: 'Our furniture experts help you make the perfect choice.',
  },
];

export function About() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl opacity-20 blur-2xl transition-all duration-700 group-hover:opacity-30"></div>
            
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Hallmark Furniture Showroom"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-500 to-amber-600 text-white p-8 rounded-3xl shadow-2xl shadow-amber-500/30 hidden sm:block transform transition-all duration-500 hover:scale-105 hover:rotate-3">
              <p className="text-5xl font-bold">15+</p>
              <p className="text-amber-200 mt-1">Years of Excellence</p>
            </div>

            {/* Decorative frame */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-amber-500/30 rounded-3xl hidden sm:block"></div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block text-amber-600 font-semibold text-sm tracking-widest uppercase bg-amber-100 px-4 py-2 rounded-full">
              About Hallmark Furniture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 leading-tight">
              Crafting <span className="gradient-text">Excellence</span>, Delivering Comfort
            </h2>
            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              For over 15 years, Hallmark Furniture has been the trusted name in premium home furnishings. 
              We believe that furniture is not just about functionality—it's about creating spaces that 
              inspire, comfort, and bring joy to everyday living.
            </p>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              Every piece in our collection is carefully selected or crafted to meet the highest standards 
              of quality and design. From classic elegance to contemporary chic, we offer a diverse range 
              that caters to every taste and budget.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className={`flex gap-4 p-4 rounded-2xl transition-all duration-500 cursor-default ${
                    hoveredFeature === index 
                      ? 'bg-amber-50 shadow-lg shadow-amber-500/10 -translate-y-1' 
                      : 'hover:bg-amber-50/50'
                  }`}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    hoveredFeature === index 
                      ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30 scale-110' 
                      : 'bg-amber-100 text-amber-600'
                  }`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className={`font-semibold transition-colors duration-300 ${
                      hoveredFeature === index ? 'text-amber-700' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/30 btn-ripple"
              >
                <span>Get in Touch</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/hallmark_furniture/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-600 px-8 py-4 rounded-full font-semibold transition-all duration-500"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Follow Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
