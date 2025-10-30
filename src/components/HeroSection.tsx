import type { FC } from "react";
import { Button } from "./ui/button";
import Magnet from "./Magnet";
import SplitText from "./SplitText";

type HeroSectionProps = object;

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section className="grid min-h-screen items-center gap-10 py-20 px-4 container mx-auto lg:grid-cols-2">
      <div className="space-y-4">
        <SplitText
          tag="h1"
          text="Lorem ipsum dolor sit amet."
          className="max-w-7xl text-balance font-black uppercase leading-[76px] lg:text-[85px]"
          textAlign="left"
          duration={1}
          stagger={0.02}
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
          cum. Reiciendis aliquid eos minima eum quo velit beatae eaque eius.
        </p>
        <Magnet padding={400} pullFactor={2} className="mt-10">
          <Button size={"lg"}>Register Now</Button>
        </Magnet>
      </div>
      <div></div>
    </section>
  );
};

export default HeroSection;
