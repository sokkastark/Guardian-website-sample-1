import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Layers, FileCode } from 'lucide-react';

export default function ChildPagePlaceholder({
  category,
  categoryPath,
  title,
  path
}) {
  return (
    <div className="bg-white text-[#35304c] min-h-screen">
      {/* ─────────────────────────────────────────────────────────────
          HERO: Category & Page Development Stage
          ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-24 bg-[#0d1527] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[450px] bg-[#7b3fc7]/20 blur-[150px] rounded-full" />
          <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-[#ff7a57]/15 blur-[140px] rounded-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d1527]/70 to-[#0d1527]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            {/* Category Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-5">
              <Layers className="w-3.5 h-3.5 text-[#ff7a57]" />
              <span>{category} / {title}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              {title}
            </h1>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/15 border border-purple-400/30 text-purple-200 text-xs font-mono mb-8">
              <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse" />
              <span>This page is ready for approved content.</span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to={categoryPath}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to {category} Overview</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-xs sm:text-sm text-[#1c1636] bg-white hover:bg-[#f2ecf9] transition-all"
              >
                <span>Contact Guardian</span>
                <ArrowRight className="w-4 h-4 text-[#7b3fc7]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          DEVELOPMENT STATE CONTAINER
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#f8f6fc] border-b border-[#e1e1e5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-dashed border-[#7b3fc7]/30 shadow-xs text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#f2ecf9] text-[#7b3fc7] flex items-center justify-center mx-auto mb-4">
              <FileCode className="w-6 h-6" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-[#adabb7] block mb-2">
              Route: {path}
            </span>

            <h2 className="text-2xl font-bold text-[#1c1636] mb-3">
              {title} Architecture Blueprint
            </h2>

            <p className="text-sm sm:text-base text-[#727272] max-w-lg mx-auto mb-6 leading-relaxed">
              This route is established and ready to be populated with approved content during the individual child-page design phase.
            </p>

            <div className="inline-block px-4 py-2 rounded-lg bg-[#f8f6fc] border border-[#e1e1e5] text-xs font-mono text-[#7b3fc7]">
              Status: Empty Child Page Architecture Configured
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
