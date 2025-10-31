import { type FC } from "react";
import Countdown, { type CountdownRendererFn } from "react-countdown";
import Magnet from "./Magnet";
import { Button } from "./ui/button";
import { ChevronRightIcon } from "lucide-react";

const registrationEndDate = new Date(
  "Thu Nov 20 2025 23:59:59 GMT+0530 (India Standard Time)"
);
// const registrationEndDate = new Date(
//   "Fri Oct 20 2025 10:59:59 GMT+0530 (India Standard Time)"
// );

const CTA: FC = () => {
  return (
    <section className="container mx-auto my-20">
      <div className="space-y-4">
        <h2 className="heading-2 text-center">
          Register <span className="text-primary">Now</span>
        </h2>
      </div>
      <div className="relative mx-auto w-fit my-20">
        <div className="absolute bottom-full tracking-wider uppercase">
          Time <span className="text-primary">Remaining</span>
        </div>
        <Countdown date={registrationEndDate} renderer={renderer} />
      </div>
      <Magnet padding={400} pullFactor={2} className="mt-10 mx-auto">
        <Button size={"lg"} className="pl-12!">
          <span className="mr-4">Register Now</span>
          <ChevronRightIcon className="size-8 bg-black text-primary p-4 rounded-full" />
        </Button>
      </Magnet>
    </section>
  );
};

// Random component
const Completionist = () => <span>You are good to go!</span>;

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
        {number.toString().padStart(2, "0")}
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
