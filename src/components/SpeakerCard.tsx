import type { FC } from "react";
import SolarMicrophone2Linear from "./icons/SolarMicrophone2Linear";

type SpeakerCardProps = {};

const SpeakerCard: FC<SpeakerCardProps> = ({}) => {
  return (
    <div className="max-w-sm">
      <div className="flex relative w-full border-4 border-primary rounded-full aspect-square mx-auto mb-6">
        <img
          src="./anusha.webp"
          className="rounded-full overflow-hidden object-cover"
          alt="Dr. Anusha Withana"
        />
        <div className="absolute bottom-0 right-0 text-6xl bg-primary text-primary-foreground p-8 rounded-full">
          <SolarMicrophone2Linear />
        </div>
      </div>
      <div>
        <h3 className="heading-3 text-center">Dr Anusha Withana</h3>
        <p className="text-center opacity-60">
          PhD (Keio, Japan), MDes (Keio, Japan), BSc (Hons)
        </p>
      </div>
    </div>
  );
};

export default SpeakerCard;
