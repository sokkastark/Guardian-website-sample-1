import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-white via-[#f8f6fc] to-[#f2ecf9]/50 pt-12 pb-12 border-t border-[#e1e1e5] text-[#35304c] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand & Location Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-10 border-b border-[#e1e1e5]/60 gap-4">
          <div className="space-y-1.5">
            <Link
              to="/"
              onClick={() => {
                if (window.location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="inline-block"
              aria-label="Guardian Health Service Home"
            >
              <img
                src="/logos/Logo.webp"
                alt="Guardian Health Service"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/logos/logo-black.webp';
                }}
              />
            </Link>
            <p className="text-xs text-[#727272] font-normal">
              Technology enabled, integrated care.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#727272]">
            <a
              href="mailto:support@itsguardian.com"
              className="inline-flex items-center gap-1.5 hover:text-[#7b3fc7] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span className="font-medium text-[#1c1636]">support@itsguardian.com</span>
            </a>
            <span className="text-[#adabb7]">•</span>
            <div className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#7b3fc7]" />
              <span>Winter Park, Florida</span>
            </div>
            <span className="text-[#adabb7]">•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#7b3fc7] hover:text-[#9565d2] transition-colors focus:outline-none font-medium cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Four Balanced Secondary Navigation Columns */}
        <nav aria-label="Footer Secondary Navigation" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-14">
          
          {/* 01 — EXPLORE */}
          <div className="space-y-3.5">
            <h3 className="text-[#adabb7] font-semibold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <span className="text-[#7b3fc7] font-mono text-[10px]">01 —</span>
              <span>EXPLORE</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/solutions" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/platform" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                  Platform
                </Link>
              </li>
              <li>
                <Link to="/who-we-serve" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* 02 — COMPANY */}
          <div className="space-y-3.5">
            <h3 className="text-[#adabb7] font-semibold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <span className="text-[#7b3fc7] font-mono text-[10px]">02 —</span>
              <span>COMPANY</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/why-guardian" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                  Why Guardian
                </Link>
              </li>
              <li>
                <Link to="/why-guardian/about" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                  About Guardian
                </Link>
              </li>
              <li>
                <Link to="/why-guardian/our-story" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* 03 — RESOURCES */}
          <div className="space-y-3.5">
            <h3 className="text-[#adabb7] font-semibold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <span className="text-[#7b3fc7] font-mono text-[10px]">03 —</span>
              <span>RESOURCES</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/resources" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/resources/insights" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/resources/case-studies" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources/guides" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                  Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* 04 — CONNECT */}
          <div className="space-y-3.5">
            <h3 className="text-[#adabb7] font-semibold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <span className="text-[#7b3fc7] font-mono text-[10px]">04 —</span>
              <span>CONNECT</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/contact" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium block py-0.5">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://live.itsguardian.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors font-medium inline-flex items-center gap-1.5 py-0.5"
                >
                  <span>Client Portal Login</span>
                  <span className="text-xs font-light">↗</span>
                </a>
              </li>
            </ul>
          </div>

        </nav>

        {/* Bottom Legal / Footer Bar matching Master Mockup */}
        <div className="pt-8 border-t border-[#e1e1e5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#727272]">
          <p className="font-normal">
            © Guardian Health Service, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <Link to="/privacy-policy" className="hover:text-[#7b3fc7] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#d6cde2]">|</span>
            <Link to="/terms-of-service" className="hover:text-[#7b3fc7] transition-colors">
              Terms of Service
            </Link>
            <span className="text-[#d6cde2]">|</span>
            <Link to="/careers" className="hover:text-[#7b3fc7] transition-colors">
              Careers
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
