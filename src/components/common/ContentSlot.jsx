import React from 'react';
import { Layers } from 'lucide-react';

export default function ContentSlot({
  badge = "Approved Content Slot",
  title,
  description = "[Approved content will be added]",
  details,
  icon: Icon = Layers,
  variant = "default", // 'default' | 'card' | 'dark' | 'blueprint'
  className = "",
  children
}) {
  if (variant === "dark") {
    return (
      <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 sm:p-8 transition-all ${className}`}>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-purple-200 text-[11px] font-medium tracking-wide">
            <Icon className="w-3 h-3 text-[#ff7a57]" />
            <span>{badge}</span>
          </div>
          <span className="text-[10px] uppercase font-mono tracking-wider text-white/40">Architecture Placeholder</span>
        </div>

        {title && <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>}
        
        <p className="text-sm sm:text-base text-purple-200/80 font-mono leading-relaxed bg-white/5 p-3 rounded-lg border border-white/10">
          {description}
        </p>

        {details && (
          <p className="mt-3 text-xs text-white/50 leading-relaxed">
            {details}
          </p>
        )}

        {children && <div className="mt-5">{children}</div>}
      </div>
    );
  }

  if (variant === "blueprint") {
    return (
      <div className={`relative overflow-hidden rounded-2xl border-2 border-dashed border-[#7b3fc7]/30 bg-[#f8f6fc]/80 p-6 sm:p-8 ${className}`}>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#7b3fc7]/20 text-[#7b3fc7] text-[11px] font-semibold tracking-wide">
            <Icon className="w-3.5 h-3.5 text-[#7b3fc7]" />
            <span>{badge}</span>
          </div>
          <span className="text-[10px] uppercase font-mono tracking-wider text-[#adabb7]">Content Pending Approval</span>
        </div>

        {title && <h3 className="text-lg sm:text-xl font-bold text-[#1c1636] mb-2">{title}</h3>}

        <p className="text-sm font-mono text-[#7b3fc7] bg-white/80 p-3.5 rounded-lg border border-[#e1e1e5]">
          {description}
        </p>

        {details && (
          <p className="mt-3 text-xs text-[#727272] leading-relaxed">
            {details}
          </p>
        )}

        {children && <div className="mt-5">{children}</div>}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-[#e1e1e5] bg-white p-6 sm:p-8 shadow-xs ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2ecf9] text-[#7b3fc7] text-xs font-medium">
          <Icon className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>
        <span className="text-[10px] uppercase font-mono tracking-wider text-[#adabb7]">Structure Ready</span>
      </div>

      {title && <h3 className="text-lg sm:text-xl font-bold text-[#1c1636] mb-2">{title}</h3>}

      <div className="text-sm font-mono text-[#35304c] bg-[#f8f6fc] p-3.5 rounded-lg border border-[#e1e1e5]/80">
        {description}
      </div>

      {details && (
        <p className="mt-3 text-xs text-[#727272] leading-relaxed">
          {details}
        </p>
      )}

      {children && <div className="mt-5">{children}</div>}
    </div>
  );
}
