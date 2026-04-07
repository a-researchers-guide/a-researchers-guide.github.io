import EventMoreInfoEvent2 from "@/components/event-2/EventMoreInfoEvent2";
import HeroSection from "@/components/HeroSection";
import CTAEvent2 from "@/components/event-2/CTAEvent2";
import SpeakersEvent2 from "@/components/event-2/SpeakersEvent2";
import VenueEvent2 from "@/components/event-2/VenueEvent2";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/event-2")({
  component: EventTwoPage,
});

function EventTwoPage() {
  return (
    <>
      <HeroSection />
      <SpeakersEvent2 />
      <VenueEvent2 />
      <CTAEvent2 />
      <EventMoreInfoEvent2 />
    </>
  );
}
