import type { FC, ReactNode } from "react";
import SolarMicrophone2Linear from "./icons/SolarMicrophone2Linear";

type SpeakerCardProps = {
  name: string;
  title: ReactNode;
  imageSrc: string;
};

const SpeakerCard: FC<SpeakerCardProps> = ({ name, title, imageSrc }) => {
  return (
    <div className="max-w-sm w-full">
      <div className="relative w-full">
        <div className="flex w-full overflow-hidden  border-4 border-primary rounded-full aspect-square mx-auto mb-6">
          <img
            src={imageSrc}
            className="rounded-full object-cover object-bottom hover:scale-125 will-change-transform transition-transform duration-300 ease-in-out aspect-square"
            alt={name}
          />
        </div>
        <div className="w-1/3 aspect-square h-auto absolute bottom-0 right-0 text-[clamp(30px,3vw,40px)] flex justify-center items-center bg-primary text-primary-foreground rounded-full">
          <SolarMicrophone2Linear />
        </div>
      </div>
      <div>
        <h3 className="heading-3 text-center md:text-3xl lg:text-[26px] mb-2 lg:whitespace-nowrap">
          {name}
        </h3>
        <p className="text-center opacity-60 text-xs text-balance md:text-sm lg:text-base lg:text-wrap">
          {title}
        </p>
      </div>
    </div>
  );
};

export default SpeakerCard;
