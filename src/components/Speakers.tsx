import type { FC } from "react";
import SpeakerCard from "./SpeakerCard";

const Speakers: FC = () => {
  return (
    <section className="container mx-auto my-20 px-4" id="speakers">
      <div className="space-y-4">
        <h2 className="heading-2 text-center font-serif">
          Our <span className="text-primary">Speakers</span>
        </h2>
        <p className="text-center max-w-prose mx-auto opacity-60 text-balance">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          quisquam impedit aliquid minima iusto pariatur error repudiandae ea
          nemo ipsum! Quidem quae a officia doloribus ex recusandae nemo facere
          id?
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 place-items-start mt-10 lg:gap-32 w-fit mx-auto">
        <SpeakerCard
          name="Prof. Hideki Koike"
          title={
            <>
              Professor, School of Computing, <br /> Tokyo Institute of
              Technology
            </>
          }
          imageSrc="./koike.png"
        />
        <SpeakerCard
          name="Prof. Alistair McEwan"
          title={
            <>
              Associate Head of School of Biomedical Engineering, <br /> The
              University of Sydney
            </>
          }
          imageSrc="./Alistair.jpeg"
        />
        <SpeakerCard
          name="Prof. Masahiko Inami"
          title={
            <>
              Professor, Research Center for Advanced Science and Technology,{" "}
              <br /> University of Tokyo
            </>
          }
          imageSrc="./Masahiko.jpg"
        />
        <SpeakerCard
          name="A. Prof. Anusha Withana"
          title={
            <>
              Associate Professor, School of Computer Science, <br /> The
              University of Sydney
            </>
          }
          imageSrc="./anusha.jpg"
        />
      </div>
    </section>
  );
};

export default Speakers;
