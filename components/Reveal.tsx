"use client";

import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Use the scale-in variant instead of fade-up. */
  scale?: boolean;
  /** Optional extra inline styles (e.g. transition-delay for stagger). */
  style?: React.CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * Declarative scroll-reveal wrapper built on top of `useReveal`.
 * Wrap any section/card in <Reveal> to get a fade-up-on-scroll effect
 * without repeating IntersectionObserver boilerplate everywhere.
 */
export default function Reveal({
  children,
  className = "",
  scale = false,
  style,
  as = "div",
}: RevealProps) {
  const ref = useReveal<HTMLDivElement>();
  const Tag = as as "div";

  return (
    <Tag
      ref={ref}
      className={`${scale ? "reveal-scale" : "reveal"} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
