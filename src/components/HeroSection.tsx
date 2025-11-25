import { REGISTRATION_LINK } from "@/consts/event";
import { useEffect, type FC } from "react";
import Slideshow from "./Slideshow";
import SplitText from "./SplitText";
import { Button } from "./ui/button";

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

  const images = [
    "./gallery/img1.jpeg",
    "./gallery/img2.jpeg",
    "./gallery/img3.jpeg",
    "./gallery/img4.jpeg",
    "./gallery/img5.jpeg",
    "./gallery/img6.jpeg",
    "./gallery/img7.jpeg",
    "./gallery/img8.jpeg",
    "./gallery/img9.jpeg",
    "./gallery/img10.jpeg",
    "./gallery/img11.jpeg",
    "./gallery/img12.jpeg",
    "./gallery/img13.jpeg",
    "./gallery/img14.jpeg",
  ];
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20 masked--vertical">
        <div className="absolute w-[200vw] h-[200vh]" id="heroSection"></div>
      </div>
      <section className="flex flex-col lg:flex-row justify-between lg:min-h-[50vh] items-center gap-10 my-10 md:my-20 px-8 container mx-auto">
        <div className="">
          <div className="mx-auto mb-10 lg:mx-0 w-fit">
            <img
              src="./title_transparent.png"
              alt="Scholarverse"
              width={600}
              height={100}
              className="object-contain mb-5 max-w-xs md:max-w-2xl md:min-h-36 w-full"
            />
          </div>
          <div className="space-y-5 text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-black uppercase">
              <SplitText
                tag="div"
                text="Your path to research begins here."
                className="max-w-7xl w-fit mx-auto lg:mx-0"
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
            <Button size={"lg"} className="mt-6" asChild>
              <a href={REGISTRATION_LINK}>Register Now</a>
            </Button>
          </div>
        </div>

        <Slideshow images={images} alt="Gallery slideshow" interval={4000} />
      </section>
    </div>
  );
};

export default HeroSection;
