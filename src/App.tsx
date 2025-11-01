import CTA from "./components/CTA";
import HeroSection from "./components/HeroSection";
import Speakers from "./components/Speakers";
import Venue from "./components/Venue";

function App() {
  return (
    <main className="grid">
      <HeroSection />
      <Speakers />
      <Venue />
      <CTA />
    </main>
  );
}

export default App;
