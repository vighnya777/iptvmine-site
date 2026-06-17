import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import DownloadSection from "@/components/sections/DownloadSection";
import DeviceComparison from "@/components/sections/DeviceComparison";
import ScreenshotGallery from "@/components/sections/ScreenshotGallery";
import GithubSection from "@/components/sections/GithubSection";
import Developers from "@/components/sections/Developers";
import LegalSection from "@/components/sections/LegalSection";

export default function Home() {
  return (
    <div style={{ background: "var(--bg)", overflow: "hidden" }}>
      <Hero />
      <Features />
      <DownloadSection />
      <DeviceComparison />
      <ScreenshotGallery />
      <GithubSection />
      <Developers />
      <LegalSection />
    </div>
  );
}
