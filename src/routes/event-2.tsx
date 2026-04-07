import HeroSection from "@/components/HeroSection";
import Speakers from "@/components/Speakers";
import SpeakerCard from "@/components/SpeakerCard";
import Venue from "@/components/Venue";
import CTA from "@/components/CTA";
import ExpectedAttendence from "@/components/ExpectedAttendence";
import AddToCalendar from "@/components/AddToCalendar";
import { EVENT_START, EVENT_END, EVENT_REGISTRATION_END, REGISTRATION_LINK } from "@/consts/event-2";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/event-2")({
  component: EventTwoPage,
});

const event2Images = [
  "/gallery/img4.jpeg",
  "/gallery/img5.jpeg",
  "/gallery/img6.jpeg",
];

function EventTwoPage() {
  return (
    <>
      <HeroSection
        images={event2Images}
        registrationLink={REGISTRATION_LINK}
      />
      <Speakers
        description="Meet our speakers, the minds bringing humans and computers closer in thought and creation."
      >
        <SpeakerCard
          name="Dr. M. C. M. Iqbal"
          link="https://www.rcast.u-tokyo.ac.jp/en/research/people/staff-inami_masahiko.html"
          title={<>B.Sc Agric. (UOP), Dipl. Ing-Agr (ETH Zurich), PhD (Goettingen)<br /> Scientist Retd. National Institute of Fundamental Studies, Hantana, Kandy. Sri Lanka.</>}
          imageSrc="./C_M_Iqbal.jpeg"
        />
        <SpeakerCard
          name="Dr. Fadil Iqbal"
          link="https://www.sydney.edu.au/engineering/about/our-people/academic-staff/alistair-mcewan.html"
          title={<>B.Sc Physics (UOC), PhD (IUI)<br /> Postdoctoral Fellow at Laboratory of Receptor Biology and Gene Expression, National Cancer Institute, National Institutes of Health, Maryland, USA</>}
          imageSrc="./Fadil_Iqbal.jpeg"
        />
      </Speakers>
      
      <Venue
        title={<>Meet us <span className="text-primary ml-3">Online via Zoom</span></>}
        subtitle="Join from anywhere"
        dateDay="09 APR"
        dateYear="2026"
        timeFrom="17:00 PM"
        timeTo="20:00 PM"
        showMap={false}
      />
      
      <CTA 
        registrationEndDate={EVENT_REGISTRATION_END} 
        registrationLink={REGISTRATION_LINK} 
      />

      <section className="container max-w-7xl mx-auto mb-20 min-h-0" id="attendance">
        <div className="px-4">
          <div className="flex gap-10 flex-col lg:flex-row items-center lg:items-stretch mx-auto mt-20 ">
            <ExpectedAttendence count={50} label="Delegates" prefix="+" suffix="+" />
            <AddToCalendar eventStart={EVENT_START} eventEnd={EVENT_END} />
          </div>
        </div>
      </section>
    </>
  );
}
