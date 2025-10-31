import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Sparkles, Zap, Mail, Award, Shield, Globe, ArrowRight, Star, TrendingUp, Users, CheckCircle } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/50 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-semibold tracking-tight">Eclipse Studio</span>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors duration-300">Services</a>
            <a href="#showcase" className="hover:text-cyan-400 transition-colors duration-300">Showcase</a>
            <a href="#testimonials" className="hover:text-cyan-400 transition-colors duration-300">Testimonials</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div
          className="text-center"
          style={{
            opacity: 1 - scrollY / 500,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        >
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm">
            <span className="text-sm text-cyan-400">Welcome to the future</span>
          </div>
          <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent animate-fade-in">
            Eclipse Studio
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Where innovation meets elegance. Crafting experiences that transcend the ordinary.
          </p>
          <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]">
            <span className="relative z-10">Explore More</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>

      <section className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Premium Support</div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 py-20"
        style={{
          opacity: Math.min(1, Math.max(0, (scrollY - 300) / 300))
        }}
      >
        <div className="max-w-6xl w-full">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <span className="text-sm text-cyan-400 uppercase tracking-wider">Our Foundation</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About Eclipse Studio
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
              We are a collective of visionaries, architects, and creators dedicated to transforming the digital landscape through unparalleled craftsmanship and innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Award Winning</h3>
              <p className="text-slate-400 leading-relaxed">
                Recognized globally for excellence in digital innovation and design aesthetics that set industry standards.
              </p>
            </div>
            <div className="glass-card group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-slate-400 leading-relaxed">
                Bank-grade security protocols ensuring your data and digital assets remain protected at all times.
              </p>
            </div>
            <div className="glass-card group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Global Reach</h3>
              <p className="text-slate-400 leading-relaxed">
                Serving clients across continents with localized solutions that resonate with diverse audiences worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative min-h-screen flex items-center justify-center px-6 py-20"
        style={{
          opacity: Math.min(1, Math.max(0, (scrollY - 1000) / 300))
        }}
      >
        <div className="max-w-7xl w-full">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <span className="text-sm text-cyan-400 uppercase tracking-wider">What We Offer</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Premium Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Sparkles, title: 'Brand Identity', desc: 'Crafting distinctive identities that captivate and resonate with your target audience through strategic design.' },
              { icon: Zap, title: 'Digital Platforms', desc: 'Building scalable, high-performance applications that deliver exceptional user experiences across all devices.' },
              { icon: TrendingUp, title: 'Growth Strategy', desc: 'Data-driven strategies that accelerate growth and maximize ROI through intelligent optimization.' },
              { icon: Users, title: 'Consulting', desc: 'Expert guidance from industry leaders to navigate complex challenges and achieve transformative results.' },
            ].map((service, idx) => (
              <div key={idx} className="glass-card group cursor-pointer flex items-start gap-6 hover:scale-[1.02] transition-all duration-500">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                    {service.title}
                    <ArrowRight className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-4">{service.desc}</p>
                  <div className="flex items-center gap-2 text-sm text-cyan-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>Premium tier available</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
      </section>

      <section
        id="showcase"
        className="min-h-screen flex items-center justify-center px-6 py-20"
        style={{
          opacity: Math.min(1, Math.max(0, (scrollY - 1800) / 300))
        }}
      >
        <div className="max-w-7xl w-full">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <span className="text-sm text-cyan-400 uppercase tracking-wider">Featured Work</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Showcase
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="glass-card group cursor-pointer overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-125 transition-transform duration-500">
                    <Sparkles className="w-10 h-10 text-cyan-400" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center gap-2 text-cyan-400 text-sm">
                    <Star className="w-4 h-4 fill-cyan-400" />
                    <span>Featured Project</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Quantum Dynamics</h3>
                  <p className="text-slate-400">Enterprise Platform Redesign</p>
                </div>
                <ArrowRight className="w-6 h-6 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
              </div>
            </div>
            <div className="glass-card group cursor-pointer overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-125 transition-transform duration-500">
                    <Globe className="w-10 h-10 text-blue-400" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center gap-2 text-blue-400 text-sm">
                    <Star className="w-4 h-4 fill-blue-400" />
                    <span>Award Winner</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Nexus Global</h3>
                  <p className="text-slate-400">Financial Services Portal</p>
                </div>
                <ArrowRight className="w-6 h-6 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Helix Tech', subtitle: 'SaaS Dashboard', icon: Zap },
              { title: 'Meridian Capital', subtitle: 'Investment Platform', icon: TrendingUp },
              { title: 'Vertex Labs', subtitle: 'Research Portal', icon: Sparkles }
            ].map((item, idx) => (
              <div key={idx} className="glass-card group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="w-7 h-7 text-cyan-400" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="relative min-h-screen flex items-center justify-center px-6 py-20"
        style={{
          opacity: Math.min(1, Math.max(0, (scrollY - 2600) / 300))
        }}
      >
        <div className="max-w-7xl w-full">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <span className="text-sm text-cyan-400 uppercase tracking-wider">Client Stories</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Testimonials
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Eclipse Studio transformed our digital presence beyond recognition. Their attention to detail and commitment to excellence is unmatched.",
                author: "Sarah Chen",
                role: "CEO, TechVision",
                rating: 5
              },
              {
                quote: "Working with Eclipse Studio felt like partnering with the future. They delivered results that exceeded our most ambitious expectations.",
                author: "Marcus Rivera",
                role: "Founder, Nexus Industries",
                rating: 5
              },
              {
                quote: "The level of craftsmanship and strategic thinking they bring is truly world-class. Our revenue increased 340% post-launch.",
                author: "Elena Volkov",
                role: "Director, Global Ventures",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="glass-card group hover:scale-105 transition-all duration-500">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cyan-400 fill-cyan-400" />
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed mb-8 text-lg italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center">
                    <span className="text-lg font-semibold">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"></div>
      </section>

      <section
        id="contact"
        className="relative min-h-screen flex items-center justify-center px-6 py-20"
        style={{
          opacity: Math.min(1, Math.max(0, (scrollY - 3400) / 300))
        }}
      >
        <div className="max-w-4xl w-full">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <span className="text-sm text-cyan-400 uppercase tracking-wider">Let's Talk</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Contact
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to elevate your digital presence? Our team of experts is standing by to transform your vision into reality.
            </p>
          </div>

          <div className="glass-card mb-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 hover:border-cyan-500/30 transition-colors duration-300">
                <Mail className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-slate-400 mb-3">For project inquiries and partnerships</p>
                <a href="mailto:hello@eclipsestudio.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  hello@eclipsestudio.com
                </a>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30 hover:border-cyan-500/30 transition-colors duration-300">
                <Globe className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Offices</h3>
                <p className="text-slate-400 mb-3">San Francisco • London • Singapore</p>
                <span className="text-blue-400">24/7 Availability</span>
              </div>
            </div>

            <button className="w-full py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] relative overflow-hidden group">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-900/30 to-slate-800/30 border border-slate-700/30">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-sm text-slate-400">Response within</div>
              <div className="text-xl font-semibold text-cyan-400">2 hours</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-900/30 to-slate-800/30 border border-slate-700/30">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-sm text-slate-400">Starting at</div>
              <div className="text-xl font-semibold text-blue-400">$50k</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-900/30 to-slate-800/30 border border-slate-700/30">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-sm text-slate-400">Guaranteed</div>
              <div className="text-xl font-semibold text-cyan-400">Excellence</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-t from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
      </section>

      <footer className="relative border-t border-slate-800/50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-7 h-7 text-cyan-400" />
                <span className="text-2xl font-semibold">Eclipse Studio</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
                Pioneering the future of digital experiences through innovation, craftsmanship, and unwavering commitment to excellence.
              </p>
              <div className="flex gap-4">
                {[Globe, Mail, Shield].map((Icon, idx) => (
                  <div key={idx} className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 flex items-center justify-center hover:border-cyan-500/50 hover:scale-110 transition-all duration-300 cursor-pointer">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Brand Identity</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Digital Platforms</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Growth Strategy</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Consulting</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Privacy</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Terms</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2025 Eclipse Studio. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              Built by <span className="text-cyan-400">Simple Flow</span>
            </p>
          </div>
        </div>
      </footer>
      {typeof window !== 'undefined' && createPortal(
        <a
          href="https://simple-flow.co"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Built by Simple Flow"
          className="pointer-events-auto fixed bottom-5 right-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all"
          style={{ zIndex: 2147483647 }}
        >
          Built by Simple Flow
        </a>,
        document.body
      )}
    </div>
  );
}

export default App;
