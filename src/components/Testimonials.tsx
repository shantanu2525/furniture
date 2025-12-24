import { useState } from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Interior Designer',
    content: 'Hallmark Furniture has been my go-to recommendation for clients. The quality is exceptional and the designs are timeless. Their attention to detail is unmatched.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    name: 'Rajesh Patel',
    role: 'Homeowner',
    content: 'We furnished our entire home with Hallmark pieces. Three years later, everything still looks brand new. The investment was absolutely worth it.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    name: 'Anita Desai',
    role: 'Business Owner',
    content: 'Outstanding service from start to finish. The team helped me choose the perfect office furniture that matches our brand aesthetic perfectly.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
];

export function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-amber-400 font-semibold text-sm tracking-widest uppercase bg-amber-500/10 px-4 py-2 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Customers Say</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Don't just take our word for it—hear from our satisfied customers who've transformed their spaces with Hallmark Furniture
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`relative bg-gradient-to-br from-gray-800 to-gray-800/50 rounded-3xl p-8 transition-all duration-500 cursor-default ${
                hoveredIndex === index 
                  ? 'transform -translate-y-4 shadow-2xl shadow-amber-500/10' 
                  : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Quote Icon */}
              <div className={`absolute top-6 right-6 transition-all duration-500 ${
                hoveredIndex === index ? 'text-amber-500/40 scale-110' : 'text-amber-500/20'
              }`}>
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Decorative border gradient */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 transition-opacity duration-500 ${
                hoveredIndex === index ? 'opacity-100' : ''
              }`} style={{ padding: '1px' }}>
                <div className="w-full h-full bg-gray-800 rounded-3xl"></div>
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-6 relative">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 text-amber-400 transition-all duration-300 ${
                      hoveredIndex === index ? 'scale-110' : ''
                    }`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-8 relative text-lg">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 relative">
                <div className={`relative transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-110' : ''
                }`}>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-amber-500/30"
                  />
                  <div className={`absolute -inset-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 transition-opacity duration-500 -z-10 blur-sm ${
                    hoveredIndex === index ? 'opacity-50' : ''
                  }`}></div>
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                  <p className="text-amber-400/80 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://www.instagram.com/hallmark_furniture/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-amber-400 hover:text-amber-300 font-semibold transition-all duration-300 group"
          >
            <span>See more reviews on Instagram</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
