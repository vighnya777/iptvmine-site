"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface SpecRowProps {
  label: string;
  value: string;
  /** Render value in monospace + give it a copy-to-clipboard button (for checksums). */
  copyable?: boolean;
}

/**
 * A single "label: value" row used inside the release-info spec lists on
 * the Mobile/TV download cards. When `copyable` is set (used for the
 * SHA256 checksum), a click-to-copy button is rendered with a brief
 * "Copied" confirmation state.
 */
export default function SpecRow({ label, value, copyable = false }: SpecRowProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API can fail in some embedded/insecure contexts — fail silently,
      // the value is still visible and selectable on screen.
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        padding: "0.65rem 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <span style={{ color: "var(--text-faint)", fontSize: "0.8rem", flexShrink: 0 }}>{label}</span>
      {copyable ? (
        <button
          onClick={handleCopy}
          aria-label={`Copy ${label}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "none",
            border: "none",
            cursor: "pointer",
            color: copied ? "var(--teal)" : "var(--text-dim)",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            maxWidth: "70%",
            textAlign: "right",
            overflow: "hidden",
          }}
          title={value}
        >
          <span
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: 140,
            }}
          >
            {value}
          </span>
          {copied ? <Check size={12} /> : <Copy size={12} />}
        </button>
      ) : (
        <span className="font-mono" style={{ color: "var(--text)", fontSize: "0.82rem", fontWeight: 500, textAlign: "right" }}>
          {value}
        </span>
      )}
    </div>
  );
}
