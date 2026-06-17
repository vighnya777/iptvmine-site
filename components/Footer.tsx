import Link from "next/link";
import { PlayCircle, Mail, Smartphone, Tv } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import { SITE, NAV_LINKS, LEGAL_LINKS, DEVELOPERS, MOBILE_APP, TV_APP } from "@/lib/data";

const downloadLinks = [
  { href: MOBILE_APP.downloadUrl, label: "Mobile App", Icon: Smartphone },
  { href: TV_APP.downloadUrl, label: "TV App (Beta)", Icon: Tv },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "4rem 1.5rem 2rem", position: "relative" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "2.5rem", marginBottom: "3rem" }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.1rem" }}>
              <div style={{
                width: 34, height: 34, borderRadius: 9,
                background: "linear-gradient(135deg, #00E5C7, #00786C)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <PlayCircle size={18} color="#07080B" strokeWidth={2.4} />
              </div>
              <span className="font-display" style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>
                IPTVMine<span style={{ color: "var(--teal)" }}>Pro</span>
              </span>
            </div>
            <p style={{ color: "var(--text-faint)", fontSize: "0.875rem", lineHeight: 1.75, maxWidth: 260, marginBottom: "1.25rem" }}>
              A premium Android IPTV experience for Live TV, Movies, and Series — built on Kotlin, Jetpack Compose, and Media3.
            </p>
            <div style={{ display: "flex", gap: "0.6rem" }}>
              <a href={SITE.githubOrg} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover-scale"
                style={{ width: 36, height: 36, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--text-dim)" }}>
                <GithubIcon size={16} />
              </a>
              <a href={`mailto:${SITE.supportEmail}`} aria-label="Email" className="hover-scale"
                style={{ width: 36, height: 36, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--text-dim)" }}>
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display" style={{ color: "#fff", fontWeight: 600, fontSize: "0.8rem", marginBottom: "1.1rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Navigation
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {NAV_LINKS.map((l) => (
                <li key={l.href} style={{ marginBottom: "0.65rem" }}>
                  <Link href={l.href} style={{ color: "var(--text-faint)", fontSize: "0.875rem", textDecoration: "none" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display" style={{ color: "#fff", fontWeight: 600, fontSize: "0.8rem", marginBottom: "1.1rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Legal
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {LEGAL_LINKS.map((l) => (
                <li key={l.href} style={{ marginBottom: "0.65rem" }}>
                  <Link href={l.href} style={{ color: "var(--text-faint)", fontSize: "0.875rem", textDecoration: "none" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Downloads */}
          <div>
            <h4 className="font-display" style={{ color: "#fff", fontWeight: 600, fontSize: "0.8rem", marginBottom: "1.1rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Download
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {downloadLinks.map((l) => (
                <li key={l.href} style={{ marginBottom: "0.65rem" }}>
                  <a href={l.href} download style={{ color: "var(--text-faint)", fontSize: "0.875rem", textDecoration: "none", display: "flex", alignItems: "center", gap: 7 }}>
                    <l.Icon size={14} />
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={SITE.githubOrg} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-faint)", fontSize: "0.875rem", textDecoration: "none", display: "flex", alignItems: "center", gap: 7 }}>
                  <GithubIcon size={14} />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ height: 1, background: "var(--border)", marginBottom: "1.75rem" }} />

        {/* Developer credits */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", marginBottom: "1.75rem" }}>
          <p style={{ color: "var(--text-faint)", fontSize: "0.8rem", margin: 0 }}>
            © {year} IPTVMine Pro. All rights reserved.
          </p>
          <p style={{ color: "var(--text-faint)", fontSize: "0.8rem", margin: 0, display: "flex", alignItems: "center", gap: "0.4rem", flexWrap: "wrap" }}>
            Developed by
            {DEVELOPERS.map((dev, i) => (
              <span key={dev.username}>
                <a href={dev.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-dim)", fontWeight: 600, textDecoration: "none" }}>
                  {dev.name}
                </a>
                {i < DEVELOPERS.length - 1 ? " & " : ""}
              </span>
            ))}
          </p>
        </div>

        <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", justifyContent: "center" }}>
          {LEGAL_LINKS.map((l) => (
            <Link key={l.href} href={l.href} style={{ color: "var(--text-faint)", fontSize: "0.8rem", textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
