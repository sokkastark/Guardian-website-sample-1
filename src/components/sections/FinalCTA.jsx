import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Mail } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-[#f8f6fc] to-[#f2ecf9]/50 border-t border-[#e1e1e5] overflow-hidden">
      {/* Dramatic ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-[#7b3fc7]/10 via-[#f2ecf9]/60 to-[#ff7a57]/10 blur-[140px] rounded-full" />
        <div className="absolute inset-0 ambient-grid opacity-40" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f2ecf9] border border-[#7b3fc7]/20 text-[#7b3fc7] text-xs font-semibold tracking-wide uppercase mb-8 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#7b3fc7]" />
          <span>The Next Step</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1c1636] tracking-tight leading-[1.15] mb-6">
          Turn healthcare data{' '}
          <span className="text-gradient-hero">into better action.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-[#35304c] leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          Connect the data. Understand the patient. Identify the opportunity. Take action.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="mailto:support@itsguardian.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-medium text-sm text-white bg-[#7b3fc7] hover:bg-[#9565d2] shadow-xl shadow-[#7b3fc7]/25 hover:shadow-2xl hover:shadow-[#7b3fc7]/35 transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            <span>Talk to us</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#platform"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-sm text-[#1c1636] hover:text-[#7b3fc7] bg-white hover:bg-[#f2ecf9] border border-[#e1e1e5] hover:border-[#7b3fc7]/30 shadow-xs transition-all duration-300 active:scale-95"
          >
            <span>Explore Platform</span>
          </a>
        </div>

        {/* Quick Contact & Location Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#727272] pt-8 border-t border-[#e1e1e5]">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#7b3fc7]" />
            <span className="font-medium text-[#35304c]">support@itsguardian.com</span>
          </div>
          <span className="hidden sm:inline text-[#adabb7]">•</span>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#7b3fc7]" />
            <span className="font-medium text-[#35304c]">Headquarters: Winter Park, Florida</span>
          </div>
        </div>

      </div>
    </section>
  );
}
