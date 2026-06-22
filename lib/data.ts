// ============================================================================
// CENTRAL CONTENT DATA
// ----------------------------------------------------------------------------
// All copy, links, and structured data for the landing page live here so
// components stay focused on presentation. Update app details (version,
// checksum, release notes, etc.) in one place.
// ============================================================================

export const SITE = {
  name: "IPTVMine Pro",
  url: "https://iptvminepro.vercel.app",
  githubOrg: "https://github.com/vighnya777/iptvmine-site",
  githubRepo: "samyak2403/iptvmine-site",
  supportEmail: "support@iptvminepro.app",
  legalEmail: "legal@iptvminepro.app",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/#download", label: "Download" },
  { href: "/#screenshots", label: "Screenshots" },
  { href: "/#github", label: "GitHub" },
];

export const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
];

// ----------------------------------------------------------------------------
// Mobile app release info
// ----------------------------------------------------------------------------
export const MOBILE_APP = {
  name: "IPTVMine Pro",
  tagline: "Android Phones & Tablets",
  version: "v2.4.0",
  apkSize: "26 MB",
  androidVersion: "Android 7.0+",
  releaseDate: "June 2026",
  sha256: "9F2A1C7E4B8D3F0A6C5E2B9D7A4F1C8E3B6D9A2F5C8E1B4D7A0F3C6E9B2D5A8F",
  // NOTE: this currently points at a .zip, not a raw .apk. The source file
  // was zipped before upload to dodge GitHub's 25MB web-uploader limit (see
  // project notes). If/when the raw .apk is hosted via a GitHub Release
  // instead (recommended — Releases support files up to 2GB), update this
  // to the direct .apk URL and flip downloadIsZip to false.
  downloadUrl: "/downloads/IPTVMinePro.zip",
  downloadIsZip: true,
  githubReleaseUrl: "https://github.com/samyak2403/iptvmine-site/releases",
  releaseNotes: [
    "Unified global search across Live TV, Movies, Series & Extensions",
    "Robust Coil-based image loading with automatic retry",
    "Rewritten provider parser with detailed diagnostic logging",
    "Fixed expand/collapse state collisions on duplicate titles",
  ],
  features: [
    "Live TV via M3U playlists",
    "Movies & Series through provider extensions",
    "Unified global search engine",
    "AndroidX Media3 player (HLS / DASH / RTSP)",
    "Dynamic extension management",
    "Material 3 dark UI",
  ],
};

// ----------------------------------------------------------------------------
// Android TV app release info
// ----------------------------------------------------------------------------
export const TV_APP = {
  name: "IPTVMine Pro TV",
  tagline: "Android TV & Google TV",
  version: "v1.0.0-beta",
  apkSize: "23 MB",
  androidTvVersion: "Android TV 9.0+",
  downloadUrl: "/downloads/IPTVMinePro-TV-beta.apk",
  downloadIsZip: false,
  githubReleaseUrl: "https://github.com/samyak2403/iptvmine-site/releases",
  releaseNotes: [
    "Initial public beta of the 10-foot leanback experience",
    "D-pad / remote navigation across all primary screens",
    "Built-in network speed test with live graph",
    "Multi-provider extension browsing (vega-org source)",
  ],
  knownIssues: [
    "Occasional focus loss when returning from the player",
    "Speed test upload metric not yet implemented",
    "Some provider posters may load slowly on first launch",
  ],
  features: [
    "Remote-optimized D-pad navigation",
    "Android TV Leanback support",
    "AndroidX Media3 player",
    "Live extension marketplace (vega-org)",
    "Built-in speed test dashboard",
    "Focus-driven 10-foot UI",
  ],
};

// ----------------------------------------------------------------------------
// Feature grid (Features section)
// ----------------------------------------------------------------------------
export const FEATURES = [
  { icon: "Tv", title: "Live TV", desc: "Stream thousands of live channels via M3U playlists with category filtering." },
  { icon: "Clapperboard", title: "Movies & Series", desc: "Access VOD content through Vega-compatible provider extensions." },
  { icon: "Search", title: "Global Search", desc: "Unified search across channels, movies, series, and every extension." },
  { icon: "Puzzle", title: "Extensions", desc: "Install and manage JavaScript/TypeScript provider extensions dynamically." },
  { icon: "Gamepad2", title: "Advanced Player", desc: "Powered by AndroidX Media3 — supports HLS, DASH, RTSP, and more." },
  { icon: "Moon", title: "Modern UI", desc: "Jetpack Compose interface with a refined, teal-accented dark design." },
] as const;

// ----------------------------------------------------------------------------
// Device comparison table
// ----------------------------------------------------------------------------
export const COMPARISON_ROWS = [
  { label: "Touch Support", mobile: true, tv: false },
  { label: "Remote / D-pad Support", mobile: false, tv: true },
  { label: "Portrait Orientation", mobile: true, tv: false },
  { label: "Landscape Orientation", mobile: true, tv: true },
  { label: "Extension Marketplace", mobile: true, tv: true },
  { label: "Global Search", mobile: true, tv: true },
  { label: "Live TV Streaming", mobile: true, tv: true },
  { label: "Background Downloads", mobile: true, tv: false },
  { label: "AndroidX Media3 Player", mobile: true, tv: true },
  { label: "Minimum OS Version", mobile: "Android 7.0", tv: "Android TV 9.0" },
] as const;

// ----------------------------------------------------------------------------
// Screenshot gallery — TV screenshots supplied; mobile placeholders flagged
// for a future upload so the gallery UI is ready either way.
// ----------------------------------------------------------------------------
export const TV_SCREENSHOTS = [
  { src: "/screenshots/tv/tv-browse.jpg", alt: "Movies & Shows browse screen on Android TV", label: "Browse" },
  { src: "/screenshots/tv/tv-movie-detail.jpg", alt: "Movie detail screen with stream playback links", label: "Movie Detail" },
  { src: "/screenshots/tv/tv-search.jpg", alt: "Global search screen with trending results", label: "Search" },
  { src: "/screenshots/tv/tv-extensions.jpg", alt: "Extensions marketplace from vega-org", label: "Extensions" },
  { src: "/screenshots/tv/tv-speedtest.jpg", alt: "Internet speed test dashboard", label: "Speed Test" },
] as const;

// Mobile screenshots — captured from the live app.
export const MOBILE_SCREENSHOTS: ReadonlyArray<{ src: string; alt: string; label: string }> = [
  { src: "/screenshots/mobile/mobile-home.jpg", alt: "Home feed with Latest, Web Series, and Hollywood rows", label: "Home" },
  { src: "/screenshots/mobile/mobile-movie-detail.jpg", alt: "Movie detail screen with synopsis and download options", label: "Movie Detail" },
  { src: "/screenshots/mobile/mobile-download-options.jpg", alt: "Stream and download quality options for a movie", label: "Download Options" },
  { src: "/screenshots/mobile/mobile-movies-latest.jpg", alt: "Movies tab showing latest releases from HdHub4u", label: "Movies" },
  { src: "/screenshots/mobile/mobile-movies-more.jpg", alt: "Movies tab scrolled to show more titles", label: "Browse" },
];

// ----------------------------------------------------------------------------
// GitHub repository stats (static fallback values — shown as approximate)
// ----------------------------------------------------------------------------
export const GITHUB_STATS = {
  stars: "120+",
  forks: "34+",
  issues: "8 open",
  latestRelease: MOBILE_APP.version,
};

// ----------------------------------------------------------------------------
// Developers
// ----------------------------------------------------------------------------
export const DEVELOPERS = [
  {
    name: "Vighnya",
    role: "Core Developer",
    github: "https://github.com/vighnya777",
    username: "vighnya777",
  },
  {
    name: "Samyak",
    role: "Core Developer",
    github: "https://github.com/samyak2403",
    username: "samyak2403",
  },
] as const;
