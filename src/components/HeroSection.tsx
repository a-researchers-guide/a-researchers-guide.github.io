import { useEffect, type FC } from "react";
import { Button } from "./ui/button";
import Magnet from "./Magnet";
import SplitText from "./SplitText";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    VANTA?: any;
  }
}

type HeroSectionProps = object;

const HeroSection: FC<HeroSectionProps> = () => {
  useEffect(() => {
    if (window.VANTA)
      window.VANTA.CELLS({
        el: "#heroSection",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        scale: 2.5,
        color1: 0x0,
        color2: 0x70706e,
        size: 2,
        speed: 0.5,
      });
  }, []);
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-50 masked--vertical">
        <div className="absolute w-[200vw] h-[200vh]" id="heroSection"></div>
      </div>
      <section className="grid min-h-[70vh] items-center gap-10 py-20 px-4 container mx-auto lg:grid-cols-2">
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, cum. Reiciendis aliquid eos minima eum quo velit beatae
            eaque eius.
          </p>
          <Magnet padding={400} pullFactor={2} className="mt-10">
            <Button size={"lg"}>Register Now</Button>
          </Magnet>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default HeroSection;
