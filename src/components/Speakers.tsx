import type { FC } from "react";
import SpeakerCard from "./SpeakerCard";

const Speakers: FC = () => {
  return (
    <section className="container mx-auto">
      <div className="space-y-4">
        <h2 className="heading-2 text-center">
          Meet our <span className="text-primary">Speakers</span>
        </h2>
        <p className="text-center max-w-prose mx-auto opacity-60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          quisquam impedit aliquid minima iusto pariatur error repudiandae ea
          nemo ipsum! Quidem quae a officia doloribus ex recusandae nemo facere
          id?
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 place-items-center mt-10 lg:gap-32 w-fit mx-auto">
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
      </div>
    </section>
  );
};

export default Speakers;
