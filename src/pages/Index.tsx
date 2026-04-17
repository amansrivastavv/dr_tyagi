import Navbar from "./_components/Navbar.tsx";
import Hero from "./_components/Hero.tsx";
import DoctorProfile from "./_components/DoctorProfile.tsx";
import StatsStrip from "./_components/StatsStrip.tsx";
import Expertise from "./_components/Expertiese.tsx";
import VideoSection from "./_components/VideoSection.tsx";
import Testimonials from "./_components/Testimonials.tsx";
import Blog from "./_components/Blog.tsx";
import FinalCTA from "./_components/FinalCTA.tsx";
import Footer from "./_components/Footer.tsx";

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />
      <StatsStrip />
      <DoctorProfile />
      <Expertise />
      <VideoSection />
      <Testimonials />
      <Blog />
      <FinalCTA />
      <Footer />
    </div>
  );
}
