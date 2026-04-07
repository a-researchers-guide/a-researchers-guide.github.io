import { type FC } from "react";

const VenueEvent2: FC = () => {
  return (
    <section className="container mx-auto my-20" id="venue">
      <div className="px-4">
        <div className="space-y-4">
          <h2 className="heading-2 text-center font-serif">
            Meet us   
            <span className="text-primary ml-3">
              Online via Zoom
            </span>
          </h2>
            <div className="heading-3 text-muted-foreground text-center">
                Join from anywhere
            </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-96">
          <div className="w-fit mx-auto mt-20 lg:mt-0">
            <div className="flex gap-10 my-10 lg:my-0 flex-col md:flex-row">
              <div className="relative">
                <div className="text-8xl leading-[120px] md:text-[140px] md:leading-[180px] font-extrabold scale-y-125 mb-5 whitespace-nowrap">
                  09 APR
                </div>
                <div className="absolute text-3xl md:text-5xl w-fit right-5 -bottom-4 mt-2 text-foreground/60">
                  2026
                </div>
              </div>
              <div className="text-2xl md:text-3xl whitespace-nowrap flex flex-col justify-between gap-10 md:gap-5 w-full max-w-xs relative">
                <div className="absolute border-r-2 border-dashed h-full right-16 md:right-20 -z-10 border-primary/30"></div>
                <div className="flex gap-3 w-full justify-between items-center text-foreground/60">
                  FROM{" "}
                  <div className="bg-primary text-primary-foreground px-5 py-3 rounded-full">
                    17:00 PM
                  </div>
                </div>
                <div className="flex gap-3 w-full justify-between items-center text-foreground/60">
                  TO{" "}
                  <div className="bg-primary text-primary-foreground px-5 py-3 rounded-full">
                    20:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default VenueEvent2;
