import React from 'react';

export const BackgroundAtmosphere = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* 1. Primary ambient spotlight in hero header */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[620px] opacity-80 dark:opacity-60">
        <div className="w-full h-full bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(16,185,129,0.14),rgba(14,165,233,0.08),transparent_75%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(16,185,129,0.18),rgba(59,130,246,0.10),transparent_75%)]" />
      </div>

      {/* 2. Secondary lateral ambient glow (adds dimension as user scrolls) */}
      <div className="absolute top-[45%] -right-40 w-[600px] h-[600px] rounded-full bg-emerald-500/5 dark:bg-emerald-500/8 blur-3xl pointer-events-none" />
      <div className="absolute top-[70%] -left-40 w-[600px] h-[600px] rounded-full bg-blue-500/5 dark:bg-blue-500/8 blur-3xl pointer-events-none" />

      {/* 3. Continuous Engineering Tech Grid across the entire viewport */}
      <div className="absolute inset-0 bg-tech-grid opacity-80 dark:opacity-70" />

      {/* 4. Fine dotted matrix layer with gentle center fade */}
      <div className="absolute inset-0 bg-dot-matrix opacity-40 dark:opacity-30" />

      {/* 5. Soft vignette overlay for cinematic edge depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(248,250,252,0.5)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_40%,rgba(9,11,16,0.6)_100%)]" />
    </div>
  );
};
