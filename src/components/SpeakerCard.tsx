import type { FC } from "react";
import SolarMicrophone2Linear from "./icons/SolarMicrophone2Linear";

type SpeakerCardProps = {};

const SpeakerCard: FC<SpeakerCardProps> = ({}) => {
  return (
    <div className="max-w-sm">
      <div className="relative">
        <div className="flex w-full overflow-hidden  border-4 border-primary rounded-full aspect-square mx-auto mb-6">
          <img
            src="./anusha.webp"
            className="rounded-full object-cover object-bottom hover:scale-125 will-change-transform transition-transform duration-300 ease-in-out"
            alt="Dr. Anusha Withana"
          />
        </div>
        <div className="absolute bottom-0 right-0 text-xl md:text-4xl bg-primary text-primary-foreground p-4 md:p-8 rounded-full">
          <SolarMicrophone2Linear />
        </div>
      </div>
      <div>
        <h3 className="heading-3 text-center md:text-3xl mb-2">
          Dr Anusha Withana
        </h3>
        <p className="text-center opacity-60 text-xs text-balance md:text-sm lg:text-base lg:text-wrap">
          PhD (Keio, Japan), MDes (Keio, Japan), BSc (Hons)
        </p>
      </div>
    </div>
  );
};

export default SpeakerCard;
