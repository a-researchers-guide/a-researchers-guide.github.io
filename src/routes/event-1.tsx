import HeroSection from "@/components/HeroSection";
import CTAEvent1 from "@/components/event-1/CTAEvent1";
import SpeakersEvent1 from "@/components/event-1/SpeakersEvent1";
import VenueEvent1 from "@/components/event-1/VenueEvent1";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/event-1")({
  component: EventOnePage,
});

function EventOnePage() {
  return (
    <>
      <HeroSection />
      <SpeakersEvent1 />
      <VenueEvent1 />
      <CTAEvent1 />
     
    </>
  );
}
