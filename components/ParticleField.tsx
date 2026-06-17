"use client";

import { useState } from "react";

interface Particle {
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, () => ({
    left: Math.random() * 100,
    size: 2 + Math.random() * 3,
    duration: 14 + Math.random() * 16,
    delay: Math.random() * -20,
    opacity: 0.3 + Math.random() * 0.5,
  }));
}

/**
 * ParticleField
 * ----------------------------------------------------------------------
 * Lightweight decorative "floating particles" background for the hero.
 * Pure CSS animation (see `particleDrift` keyframes in globals.css) — no
 * canvas, no per-frame JS, so it's cheap even on low-powered Android TV
 * browsers used for QA/previewing the marketing site.
 *
 * Particle positions are randomized exactly once, via a lazy useState
 * initializer rather than useMemo. React's purity rules treat useMemo as a
 * render-time calculation that must be deterministic (no Math.random), while
 * a lazy useState initializer is explicitly understood to run once outside
 * the normal render pass — the correct place for one-off non-deterministic
 * setup like this. Reduced-motion users never see the animation (handled
 * globally in globals.css), and identical particle arrays aren't required
 * across remounts.
 */
export default function ParticleField({ count = 28 }: { count?: number }) {
  const [particles] = useState<Particle[]>(() => generateParticles(count));

  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}
    >
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${p.left}%`,
            bottom: "-10%",
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
