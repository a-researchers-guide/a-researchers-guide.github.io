import { useEffect, useState, type FC } from "react";
import { Button } from "./ui/button";
import SplitText from "./SplitText";
import { motion } from "framer-motion";
import { REGISTRATION_LINK } from "@/consts/event";

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
      <section className="flex flex-col lg:flex-row justify-between lg:min-h-[50vh] items-center gap-10 my-10 md:my-20 px-4 container mx-auto">
        <div className="">
          <motion.div
            className="mx-auto lg:mx-0 w-fit"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={isLoaded ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src="./SV_Logo_White.png"
              alt="Scholarverse"
              width={300}
              height={100}
              className="object-contain mb-5"
            />
          </motion.div>
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl lg:leading-[62px] lg:text-[60px] font-black uppercase">
              <SplitText
                tag="div"
                text="Your path to"
                className="max-w-7xl w-fit mx-auto lg:mx-0 lg:h-[65px]"
                duration={1}
                stagger={0.02}
              />
              <SplitText
                tag="div"
                text="research begins here."
                className="max-w-7xl w-fit mx-auto lg:mx-0 lg:h-[65px]"
                duration={1}
                stagger={0.02}
              />
            </h1>
            <p className="max-w-3xl mx-auto lg:mx-0">
              Scholarverse inspires undergraduates across Sri Lanka to pursue
              advanced research and postgraduate studies by learning directly
              from world-recognized researchers. We offer insights into advanced
              research labs, how to begin an academic research journey, the
              opportunities available, and how students can contribute to the
              future of technology.
            </p>
            <Button size={"lg"} className="" asChild>
              <a href={REGISTRATION_LINK}>Register Now</a>
            </Button>
          </div>
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
