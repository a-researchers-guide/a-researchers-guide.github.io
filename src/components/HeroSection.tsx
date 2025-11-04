import { useEffect, type FC } from "react";
import { Button } from "./ui/button";
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
        color2: 0x25e3a7,
        size: 2,
        speed: 0.5,
      });
  }, []);
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20 masked--vertical">
        <div className="absolute w-[200vw] h-[200vh]" id="heroSection"></div>
      </div>
      <section className="grid lg:min-h-[50vh] items-center gap-10 my-10 md:my-20 px-4 container mx-auto lg:grid-cols-2">
        <div className="space-y-4 text-center lg:text-left">
          <h1 className="text-4xl lg:leading-[76px] lg:text-[85px] font-black uppercase">
            <SplitText
              tag="div"
              text="Lorem ipsum"
              className="max-w-7xl w-fit mx-auto lg:mx-0  lg:h-[85px]"
              textAlign="left"
              duration={1}
              stagger={0.02}
            />
            <SplitText
              tag="div"
              text="dolor sit amet."
              className="max-w-7xl w-fit mx-auto lg:mx-0 lg:h-[85px]"
              textAlign="left"
              duration={1}
              stagger={0.02}
            />
          </h1>
          <p className="max-w-prose mx-auto lg:mx-0 text-balance">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, cum. Reiciendis aliquid eos minima eum quo velit beatae
            eaque eius.
          </p>

          <Button size={"lg"} className="mt-10">
            Register Now
          </Button>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default HeroSection;
