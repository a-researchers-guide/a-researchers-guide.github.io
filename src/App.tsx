import CTA from "./components/CTA";
import EventMoreInfo from "./components/EventMoreInfo";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Speakers from "./components/Speakers";
import Venue from "./components/Venue";

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

export default App;
