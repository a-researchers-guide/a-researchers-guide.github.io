import HeroSection from "@/components/HeroSection";
import Speakers from "@/components/Speakers";
import SpeakerCard from "@/components/SpeakerCard";
import Venue from "@/components/Venue";
import CTA from "@/components/CTA";
import ExpectedAttendence from "@/components/ExpectedAttendence";
import AddToCalendar from "@/components/AddToCalendar";
import { EVENT_START, EVENT_END, EVENT_REGISTRATION_END, REGISTRATION_LINK } from "@/consts/event-1";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/event-1")({
  component: EventOnePage,
});

const event1Images = [
  "/gallery/img1.jpeg",
  "/gallery/img2.jpeg",
  "/gallery/img3.jpeg",
];

function EventOnePage() {
  return (
    <>
      <HeroSection
        images={event1Images}
        registrationLink={REGISTRATION_LINK}
      />
      <Speakers
      className="lg:grid-cols-4"
        description="Meet our speakers, the minds bringing humans and computers closer in thought and creation."
      >
        <SpeakerCard
          name="Prof. Masahiko Inami"
          link="https://www.rcast.u-tokyo.ac.jp/en/research/people/staff-inami_masahiko.html"
          title={<>Professor, Research Center for Advanced Science and Technology, <br /> University of Tokyo</>}
          imageSrc="./Masahiko.jpg"
        />
        <SpeakerCard
          name="Prof. Alistair McEwan"
          link="https://www.sydney.edu.au/engineering/about/our-people/academic-staff/alistair-mcewan.html"
          title={<>Associate Head of School of Biomedical Engineering, <br /> The University of Sydney</>}
          imageSrc="./Alistair.jpeg"
        />
        <SpeakerCard
          name="Prof. Hideki Koike"
          link="https://www.vogue.cs.titech.ac.jp/koike"
          title={<>Professor, School of Computing, <br /> Tokyo Institute of Technology</>}
          imageSrc="./koike.png"
        />
        <SpeakerCard
          name="A. Prof. Anusha Withana"
          link="https://www.sydney.edu.au/engineering/about/our-people/academic-staff/anusha-withana.html"
          title={<>Associate Professor, School of Computer Science, <br /> The University of Sydney</>}
          imageSrc="./anusha.jpg"
        />
      </Speakers>
      
      <Venue
        title={<>Meet us at <br /><span className="text-primary">Electrical Engineering Seminar Room</span></>}
        subtitle={null}
        dateDay="13 DEC"
        dateYear="2025"
        timeFrom="10:00 AM"
        timeTo="02:00 PM"
        mapCoordinates={[
          { x: 345, y: 430, name: "Electrical Seminar Room" },
          { x: 405, y: 630, name: "University Entrance" }
        ]}
      />
      
      <section className="container max-w-7xl mx-auto mb-20 px-8" id="attendance">
        <div className="flex gap-10 flex-col lg:flex-row items-center justify-center lg:items-stretch mx-auto mt-20">
          <ExpectedAttendence count={75} label="Delegates" prefix="+" suffix="+" />
          <AddToCalendar eventStart={EVENT_START} eventEnd={EVENT_END} />
        </div>
      </section>

      <CTA 
        registrationEndDate={EVENT_REGISTRATION_END} 
        registrationLink={REGISTRATION_LINK} 
      />
    </>
  );
}
