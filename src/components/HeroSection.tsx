import { useEffect, useState, type FC } from "react";
import { Button } from "./ui/button";
import SplitText from "./SplitText";
import { motion } from "framer-motion";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    VANTA?: any;
  }
}

type HeroSectionProps = object;

const HeroSection: FC<HeroSectionProps> = () => {
  const [isLoaded, setIsLoaded] = useState(false);

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
      <section className="flex flex-col md:flex-row justify-between lg:min-h-[50vh] items-center gap-10 my-10 md:my-20 px-4 container mx-auto">
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
        <div className="min-h-[35vh]">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={isLoaded ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src="https://picsum.photos/600/400"
              alt="EMBS University of Moratuwa"
              className="rounded-3xl"
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
