import { useEffect, type FC, type ReactNode } from "react";
import Slideshow from "./Slideshow";
import SplitText from "./SplitText";
import { Button } from "./ui/button";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    VANTA?: any;
  }
}

type HeroSectionProps = {
  logoSrc?: string;
  logoAlt?: string;
  title?: string;
  description?: ReactNode;
  registrationLink?: string;
  images: string[];
};

const HeroSection: FC<HeroSectionProps> = ({
  logoSrc = "./title_transparent.png",
  logoAlt = "Scholarverse",
  title = "Your path to research begins here.",
  description,
  registrationLink,
  images
}) => {
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
      <section className="flex flex-col lg:flex-row justify-between lg:min-h-[50vh] items-center gap-10 my-10 md:my-20 px-8 container mx-auto">
        <div className="">
          {logoSrc && (
            <div className="mx-auto mb-10 lg:mx-0 w-fit">
              <img
                src={logoSrc}
                alt={logoAlt}
                width={600}
                height={100}
                className="object-contain mb-5 max-w-xs md:max-w-2xl md:min-h-36 w-full"
              />
            </div>
          )}
          <div className="space-y-5 text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-black uppercase">
              <SplitText
                tag="div"
                text={title}
                className="max-w-7xl w-fit mx-auto lg:mx-0"
                duration={1}
                stagger={0.02}
              />
            </h1>
            {description && (
              <div className="max-w-3xl mx-auto lg:mx-0">
                {description}
              </div>
            )}
            {registrationLink && (
              <Button size={"lg"} className="mt-6" asChild>
                <a href={registrationLink}>Register Now</a>
              </Button>
            )}
          </div>
        </div>

        <Slideshow images={images} alt="Gallery slideshow" interval={4000} />
      </section>
    </div>
  );
};

export default HeroSection;
