import { type FC } from "react";

const EventDate: FC = () => {
  return (
    <section className="container mx-auto my-20">
      <div className="space-y-4">
        <h2 className="heading-2 text-center">
          <span className="text-primary">When?</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 my-20 w-fit mx-auto">
        <div className="relative">
          <div className="text-[200px] font-medium scale-y-150 leading-[200px] mb-5 whitespace-nowrap">
            13 DEC
          </div>
          <div className="absolute text-5xl w-fit right-5 top-full mt-2 text-foreground/60">
            2025
          </div>
        </div>
        <div className="text-4xl flex flex-col justify-between gap-5 w-full max-w-xs relative">
          <div className="absolute border-r-2 border-dashed h-full right-25 -z-10 border-primary/30"></div>
          <div className="flex gap-3 w-full justify-between items-center text-foreground/60">
            FROM{" "}
            <div className="bg-primary text-primary-foreground px-5 py-3 rounded-full">
              10:00 AM
            </div>
          </div>
          <div className="flex gap-3 w-full justify-between items-center text-foreground/60">
            TO{" "}
            <div className="bg-primary text-primary-foreground px-5 py-3 rounded-full">
              02:00 PM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDate;
