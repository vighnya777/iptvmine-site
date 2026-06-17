"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="hover-scale"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 40,
        width: 46,
        height: 46,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #00E5C7, #00A896)",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 24px rgba(0,229,199,0.3)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.85)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.3s ease, transform 0.3s var(--ease-spring)",
      }}
    >
      <ArrowUp size={20} color="#07080B" strokeWidth={2.4} />
    </button>
  );
}
