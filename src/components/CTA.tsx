import NumberFlow from "@number-flow/react";
import { ChevronRightIcon, XIcon } from "lucide-react";
import { useEffect, type FC } from "react";
import Countdown, { type CountdownRendererFn } from "react-countdown";
import { Button } from "./ui/button";
import { EVENT_REGISTRATION_END } from "@/consts/event";

const CTA: FC = () => {
  useEffect(() => {
    if (window.VANTA)
      window.VANTA.CELLS({
        el: "#CTASection",
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

  const isRegClosed = new Date() > EVENT_REGISTRATION_END;
  return (
    <div className="relative md:min-h-[80vh] grid place-items-center px-4">
      <div className="absolute inset-0 -z-10 opacity-12 masked--vertical">
        <div className="absolute size-full" id="CTASection"></div>
      </div>
      <section className="container mx-auto my-20">
        <div className="space-y-4">
          <h2 className="heading-2 text-center font-serif">
            Register <span className="text-primary">Now</span>
          </h2>
        </div>
        <div className="relative mx-auto w-fit md:my-20 my-10">
          {!isRegClosed && (
            <div className="absolute top-0 tracking-wider uppercase text-xs md:text-base">
              Time <span className="text-primary">Remaining</span>
            </div>
          )}
          <Countdown date={EVENT_REGISTRATION_END} renderer={renderer} />
        </div>

        <div className="mx-auto block w-fit">
          <Button
            disabled={isRegClosed}
            size={"lg"}
            className="md:pl-12! pl-6! pr-2!"
          >
            {isRegClosed ? (
              <>
                <span className="mr-2 md:mr-4">Registration Closed</span>
                <XIcon className="md:size-8  p-2 md:p-4 rounded-full" />
              </>
            ) : (
              <>
                <span className="mr-2 md:mr-4">Register Now</span>
                <ChevronRightIcon className="size-8 md:size-16 bg-black text-primary p-2 md:p-4 rounded-full" />
              </>
            )}
          </Button>
        </div>
      </section>
    </div>
  );
};

// Random component
const Completionist = () => (
  <span className="text-3xl md:text-5xl lg:text-7xl opacity-30 text-center">
    Sorry, Registration is Done.
  </span>
);

// Renderer callback with condition
const renderer: CountdownRendererFn = ({
  hours,
  minutes,
  seconds,
  completed,
  days,
}) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="flex items-center md:gap-4 py-2">
        <NumberBox number={days} label="Days" />
        <Dots />
        <NumberBox number={hours} label="Hours" />
        <Dots />
        <NumberBox number={minutes} label="Minutes" />
        <Dots />
        <NumberBox number={seconds} label="Seconds" />
      </div>
    );
  }
};

const NumberBox: FC<{ number: number; label: string }> = ({
  number,
  label,
}) => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="tabular-nums md:text-8xl lg:text-9xl text-5xl font-medium">
        <NumberFlow
          trend={-1}
          value={number}
          format={{ minimumIntegerDigits: 2 }}
        />
      </div>
      <div className="md:mt-2 text-xs md:text-base text-md text-foreground/60 tracking-wider absolute top-full text-center w-full">
        {label}
      </div>
    </div>
  );
};
const Dots: FC = () => {
  return <span className="md:text-8xl lg:text-9xl text-5xl ">:</span>;
};

export default CTA;
