import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="inline-block text-amber-600 font-semibold text-sm tracking-widest uppercase bg-amber-50 px-4 py-2 rounded-full">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-6">
              We'd Love to <span className="gradient-text">Hear From You</span>
            </h2>
            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              Whether you have a question about our products, need help with a purchase, 
              or want to discuss a custom furniture project, our team is ready to help.
            </p>

            <div className="mt-12 space-y-8">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'Visit Our Showroom',
                  content: ['123 Furniture Lane, Design District', 'Mumbai, Maharashtra 400001'],
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: 'Call Us',
                  content: ['+91 98765 43210', 'Mon-Sat: 9AM - 7PM'],
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: 'Email Us',
                  content: ['info@hallmarkfurniture.com'],
                },
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className="flex items-start gap-5 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-amber-100 group-hover:bg-amber-500 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:shadow-lg group-hover:shadow-amber-500/30 group-hover:scale-110">
                    <div className="text-amber-600 group-hover:text-white transition-colors duration-500">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg group-hover:text-amber-600 transition-colors duration-300">
                      {item.title}
                    </h4>
                    {item.content.map((line, i) => (
                      <p key={i} className="text-gray-600 mt-1">{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Instagram */}
              <div className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:shadow-lg group-hover:shadow-pink-500/30 group-hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg group-hover:text-amber-600 transition-colors duration-300">
                    Follow Us
                  </h4>
                  <a 
                    href="https://www.instagram.com/hallmark_furniture/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 mt-1 inline-flex items-center gap-2 group/link"
                  >
                    @hallmark_furniture
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-[2rem] opacity-10 blur-2xl"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 sm:p-10 border border-gray-100">
              {submitted ? (
                <div className="h-full min-h-[400px] flex items-center justify-center">
                  <div className="text-center animate-scale-in">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
                    <p className="text-gray-600 mt-3 text-lg">We've received your message and will get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
                  <p className="text-gray-600 mb-8">Fill in the form and we'll get back to you within 24 hours.</p>
                  
                  <div className="space-y-6">
                    <div className="relative">
                      <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'name' || formData.name 
                          ? '-top-2.5 text-xs bg-white px-2 text-amber-600 font-medium' 
                          : 'top-4 text-gray-500'
                      }`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all duration-300 outline-none"
                      />
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'email' || formData.email 
                            ? '-top-2.5 text-xs bg-white px-2 text-amber-600 font-medium' 
                            : 'top-4 text-gray-500'
                        }`}>
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all duration-300 outline-none"
                        />
                      </div>
                      <div className="relative">
                        <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'phone' || formData.phone 
                            ? '-top-2.5 text-xs bg-white px-2 text-amber-600 font-medium' 
                            : 'top-4 text-gray-500'
                        }`}>
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all duration-300 outline-none"
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'message' || formData.message 
                          ? '-top-2.5 text-xs bg-white px-2 text-amber-600 font-medium' 
                          : 'top-4 text-gray-500'
                      }`}>
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all duration-300 outline-none resize-none"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-4 rounded-xl font-semibold transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/30 flex items-center justify-center gap-3 group btn-ripple"
                    >
                      <span>Send Message</span>
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
