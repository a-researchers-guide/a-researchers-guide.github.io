import { type FC } from "react";
import Anchor from "./map/Anchor";
import { MapProvider, useMap } from "./map/MapProvider";
import UniMap from "./map/UniMap";

const Venue: FC = () => {
  return (
    <section className="container mx-auto my-20" id="venue">
      <div className="px-4">
        <div className="space-y-4">
          <h2 className="heading-2 text-center font-serif">
            Meet us at <span className="text-primary">Civil Auditorium</span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center min-h-96">
          <div className="w-full max-w-xl ">
            <MapProvider>
              <MapContent />
            </MapProvider>
          </div>
          <div className="w-fit mx-auto mt-20 lg:mt-0">
            <div className="flex gap-10 my-10 lg:my-0 flex-col md:flex-row">
              <div className="relative">
                <div className="text-8xl leading-[120px] md:text-[140px] md:leading-[180px] font-extrabold scale-y-125 mb-5 whitespace-nowrap">
                  13 DEC
                </div>
                <div className="absolute text-3xl md:text-5xl w-fit right-5 -bottom-4 mt-2 text-foreground/60">
                  2025
                </div>
              </div>
              <div className="text-2xl md:text-3xl whitespace-nowrap flex flex-col justify-between gap-10 md:gap-5 w-full max-w-xs relative">
                <div className="absolute border-r-2 border-dashed h-full right-16 md:right-20 -z-10 border-primary/30"></div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

const MapContent = () => {
  const { svgRef, containerRef } = useMap();

  return (
    <div
      className="relative w-full grid place-items-center md:max-h-none "
      ref={containerRef}
    >
      <UniMap svgRef={svgRef} className="h-auto" />
      <Anchor
        x={600}
        y={340}
        name="Civil Auditorium"
        className="right-full left-auto md:right-auto md:left-full"
      />
      <Anchor x={405} y={630} name="University Entrance" />
    </div>
  );
};

export default Venue;
