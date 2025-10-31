import NumberFlow from "@number-flow/react";
import { ChevronRightIcon } from "lucide-react";
import { useEffect, type FC } from "react";
import Countdown, { type CountdownRendererFn } from "react-countdown";
import Magnet from "./Magnet";
import { Button } from "./ui/button";
import { EVENT_REGISTRATION_END } from "@/consts/event";

// const registrationEndDate = new Date(
//   "Fri Oct 20 2025 10:59:59 GMT+0530 (India Standard Time)"
// );

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
        color2: 0x70706e,
        size: 2,
        speed: 0.5,
      });
  }, []);

  const isRegClosed = new Date() > EVENT_REGISTRATION_END;
  return (
    <div className="relative min-h-[80vh] grid place-items-center">
      <div className="absolute inset-0 -z-10 opacity-30 masked--vertical">
        <div className="absolute size-full" id="CTASection"></div>
      </div>
      <section className="container mx-auto my-20">
        <div className="space-y-4">
          <h2 className="heading-2 text-center">
            Register <span className="text-primary">Now</span>
          </h2>
        </div>
        <div className="relative mx-auto w-fit my-20">
          {!isRegClosed && (
            <div className="absolute top-0 tracking-wider uppercase">
              Time <span className="text-primary">Remaining</span>
            </div>
          )}
          <Countdown date={EVENT_REGISTRATION_END} renderer={renderer} />
        </div>
        <Magnet
          disabled={isRegClosed}
          padding={400}
          pullFactor={2}
          className="mt-10 mx-auto"
        >
          <Button disabled={isRegClosed} size={"lg"} className="pl-12!">
            {isRegClosed ? (
              <>Registration Closed</>
            ) : (
              <>
                <span className="mr-4">Register Now</span>
                <ChevronRightIcon className="size-8 bg-black text-primary p-4 rounded-full" />
              </>
            )}
          </Button>
        </Magnet>
      </section>
    </div>
  );
};

// Random component
const Completionist = () => (
  <span className="text-7xl opacity-30">Sorry, Registration is Done.</span>
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
      <div className="flex gap-4">
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
    <div className="flex flex-col items-center">
      <div className="tabular-nums text-9xl font-medium">
        <NumberFlow
          trend={-1}
          value={number}
          format={{ minimumIntegerDigits: 2 }}
        />
      </div>
      <div className="mt-2 text-md text-foreground/60 tracking-wider">
        {label}
      </div>
    </div>
  );
};
const Dots: FC = () => {
  return <span className="text-9xl">:</span>;
};

export default CTA;
