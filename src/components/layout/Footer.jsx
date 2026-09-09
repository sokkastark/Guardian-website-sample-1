import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowRight, Sparkles, Mail, MapPin, ShieldCheck, Award } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-white via-[#f8f6fc] to-[#f2ecf9]/50 pt-16 sm:pt-20 pb-12 border-t border-[#e1e1e5] text-[#35304c] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Elevated Executive Conversion Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#1c1636] via-[#2d1b54] to-[#7b3fc7] p-8 sm:p-14 lg:p-16 text-center text-white shadow-2xl shadow-[#7b3fc7]/20 border border-white/10 mb-16 sm:mb-20"
        >
          
          {/* Subtle Ambient Radial Lighting within Card */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#ff7a57]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#7b3fc7]/40 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 ambient-grid opacity-15 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-medium mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>Partner With Guardian</span>
            </div>

            {/* Headline in pure, high-contrast white */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.2] mb-5 tracking-tight">
              Drive value and savings with our compassionate tech solutions and services
            </h2>

            {/* Subheading */}
            <p className="text-purple-100/90 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
              Empowering healthcare organizations to connect data, clinical intelligence, and operational expertise into meaningful action.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="mailto:support@itsguardian.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-medium text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] shadow-lg shadow-black/15 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Contact us</span>
                <ArrowRight className="w-4 h-4 text-[#7b3fc7]" />
              </a>

              <a
                href="#platform"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300"
              >
                <span>Explore Platform</span>
              </a>
            </div>

            {/* Direct Contact & Location Ribbon */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-purple-200/80">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#ff7a57]" />
                <span className="text-white font-medium">support@itsguardian.com</span>
              </div>
              <span className="hidden sm:inline text-white/30">•</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-300" />
                <span className="text-purple-100">Winter Park, Florida</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Clean Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/logos/Logo.webp"
                alt="Guardian Health Service"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/logos/logo-black.webp';
                }}
              />
            </div>

            <p className="text-[#1c1636] font-semibold text-sm">
              Technology enabled, integrated care.
            </p>
            <p className="text-[#727272] text-xs leading-relaxed max-w-sm">
              Guardian connects clinical intelligence, technology, and operational healthcare expertise to empower organizations in value-based care.
            </p>

            <div className="pt-2 text-xs text-[#adabb7]">
              <span>Headquarters: Winter Park, Florida</span>
            </div>
          </div>

          {/* Nav Col 1: Technology */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-[#adabb7] font-semibold uppercase tracking-wider text-[11px] block">
              Technology
            </h5>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#platform" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors">Patient Master Chart</a></li>
              <li><a href="#platform" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors">Data Integration</a></li>
              <li><a href="#platform" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors">Information Services</a></li>
              <li><a href="#platform" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors">Data Enrichment</a></li>
              <li><a href="#solutions" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors">Population Health</a></li>
            </ul>
          </div>

          {/* Nav Col 2: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-[#adabb7] font-semibold uppercase tracking-wider text-[11px] block">
              Services
            </h5>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#people-tech" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors">Account Executives</a></li>
              <li><a href="#people-tech" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors">Risk Coders</a></li>
              <li><a href="#people-tech" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors">Care Managers</a></li>
              <li><a href="#people-tech" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors">Care Navigators</a></li>
              <li><a href="#journey" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors">The Guardian Journey</a></li>
            </ul>
          </div>

          {/* Nav Col 3: Compliance & Contact */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-[#adabb7] font-semibold uppercase tracking-wider text-[11px] block">
              Connect
            </h5>
            <ul className="space-y-2.5 text-sm">
              <li><a href="mailto:support@itsguardian.com" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors">support@itsguardian.com</a></li>
              <li><a href="#trust" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors">CMS MIPS Registry</a></li>
              <li><a href="#trust" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors">HITRUST Certified</a></li>
              <li><a href="#trust" className="text-[#1c1636] hover:text-[#7b3fc7] transition-colors">CareQuality</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-[#e1e1e5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#727272]">
          <p>© {new Date().getFullYear()} Guardian Health Service, LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>HIPAA Compliant</span>
            <span>SOC 2 Type II</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#7b3fc7] hover:text-[#9565d2] transition-colors focus:outline-none font-medium cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
