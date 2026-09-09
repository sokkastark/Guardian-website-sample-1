import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, PhoneCall } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Platform', href: '#platform' },
    { label: 'Who We Serve', href: '#audiences' },
    { label: 'Services', href: '#people-tech' },
    { label: 'Why Guardian', href: '#why-guardian' },
    { label: 'Resources', href: '#resources' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/95 backdrop-blur-md border-b border-[#e1e1e5] shadow-sm shadow-[#1c1636]/5'
          : 'py-4 sm:py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Guardian Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3fc7] rounded-lg p-1"
          >
            <div className="relative h-9 sm:h-10 w-auto flex items-center">
              <img
                src="/logos/Logo.webp"
                alt="Guardian Health Service"
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = '/logos/logo-black.webp';
                }}
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 px-3 py-1.5 rounded-full bg-[#f2ecf9]/80 border border-[#e1e1e5] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-medium text-[#35304c] hover:text-[#7b3fc7] hover:bg-white rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs (Right Side: Contact Us + Login ↗) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="mailto:support@itsguardian.com"
              className="px-4 py-2 text-xs lg:text-sm font-medium text-[#35304c] hover:text-[#7b3fc7] transition-colors"
            >
              Contact Us
            </a>

            <a
              href="https://live.itsguardian.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs lg:text-sm font-medium text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-[0_4px_14px_rgba(123,63,199,0.3)] hover:shadow-[0_6px_20px_rgba(123,63,199,0.4)] transition-all duration-300 active:scale-95"
            >
              <span>Login</span>
              <span className="text-xs font-light">↗</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1c1636] hover:text-[#7b3fc7] hover:bg-[#f2ecf9] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-[#e1e1e5] shadow-xl px-6 py-5 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-[#35304c] hover:text-[#7b3fc7] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-[#e1e1e5] flex flex-col gap-2">
                <a
                  href="mailto:support@itsguardian.com"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-full font-medium text-sm text-[#35304c] hover:bg-[#f2ecf9] border border-[#e1e1e5]"
                >
                  Contact Us
                </a>
                <a
                  href="https://live.itsguardian.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-medium text-sm text-white bg-[#7b3fc7] shadow-md shadow-[#7b3fc7]/20"
                >
                  <span>Login</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
