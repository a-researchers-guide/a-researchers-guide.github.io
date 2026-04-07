import CTA from "@/components/CTA";
import EventMoreInfo from "@/components/EventMoreInfo";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Speakers from "@/components/Speakers";
import Venue from "@/components/Venue";
import { createFileRoute } from "@tanstack/react-router";
 
export const Route = createFileRoute("/")({
  component: App,
});


function App() {
  return (
    <div className="">
      <Navbar />
      <main className="grid">
        <HeroSection />
        <Speakers />
        <Venue />
        <CTA />
        <EventMoreInfo />
      </main>
      <Footer />
    </div>
  );
}
