import CTA from "./components/CTA";
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
      </main>
    </div>
  );
}

export default App;
