import type { FC } from "react";
import SpeakerCardEvent2 from "./SpeakerCardEvent2";

const SpeakersEvent2: FC = () => {
  return (
    <section className="container mx-auto my-20 px-8" id="speakers">
      <div className="space-y-4">
        <h2 className="heading-2 text-center font-serif">
          Our <span className="text-primary">Speakers</span>
        </h2>
        <p className="text-center max-w-prose mx-auto opacity-60 text-balance">
          Meet our speakers, the minds bringing humans and computers closer in
          thought and creation.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-10 place-items-start mt-10 lg:gap-32 w-fit mx-auto">
        <SpeakerCardEvent2
          name="Dr. M. C. M. Iqbal"
          link="https://www.rcast.u-tokyo.ac.jp/en/research/people/staff-inami_masahiko.html"
          title={
            <>
              B.Sc Agric. (UOP), Dipl. Ing-Agr (ETH Zurich), 
              PhD (Goettingen) Scientist Retd.
              National Institute of Fundamental Studies,
              Hantana, Kandy.
              Sri Lanka.
            </>
          }
          imageSrc="./C_M_Iqbal.jpeg"
        />
        <SpeakerCardEvent2
          name="Dr. Fadil Iqbal"
          link="https://www.sydney.edu.au/engineering/about/our-people/academic-staff/alistair-mcewan.html"
          title={
            <>
              B.Sc Physics (UOC), PhD (IUI)
              Postdoctoral Fellow at Laboratory of Receptor Biology and Gene Expression
              National Cancer Institute
              National Institutes of Health
              Maryland, USA
            </>
          }
          imageSrc="./Fadil_Iqbal.jpeg"
        />
        {/* <SpeakerCardEvent2
          name="Prof. Masahiko Inami"
          link="https://www.rcast.u-tokyo.ac.jp/en/research/people/staff-inami_masahiko.html"
          title={
            <>
              Professor, Research Center for Advanced Science and Technology,{" "}
              <br /> University of Tokyo
            </>
          }
          imageSrc="./Masahiko.jpg"
        />
        <SpeakerCardEvent2
          name="Prof. Alistair McEwan"
          link="https://www.sydney.edu.au/engineering/about/our-people/academic-staff/alistair-mcewan.html"
          title={
            <>
              Associate Head of School of Biomedical Engineering, <br /> The
              University of Sydney
            </>
          }
          imageSrc="./Alistair.jpeg"
        />
        <SpeakerCardEvent2
          name="Prof. Hideki Koike"
          link="https://www.vogue.cs.titech.ac.jp/koike"
          title={
            <>
              Professor, School of Computing, <br /> Tokyo Institute of
              Technology
            </>
          }
          imageSrc="./koike.png"
        />
        <SpeakerCardEvent2
          name="A. Prof. Anusha Withana"
          link="https://www.sydney.edu.au/engineering/about/our-people/academic-staff/anusha-withana.html"
          title={
            <>
              Associate Professor, School of Computer Science, <br /> The
              University of Sydney
            </>
          }
          imageSrc="./anusha.jpg"
        /> */}
      </div>
    </section>
  );
};

export default SpeakersEvent2;
