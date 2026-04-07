import { type FC, type ReactNode } from "react";
import Anchor from "./map/Anchor";
import { MapProvider, useMap } from "./map/MapProvider";
import UniMap from "./map/UniMap";

type VenueProps = {
  title?: ReactNode;
  subtitle?: ReactNode;
  dateDay?: string;
  dateYear?: string;
  timeFrom?: string;
  timeTo?: string;
  showMap?: boolean;
  mapCoordinates?: { x: number; y: number; name: string }[];
};

const Venue: FC<VenueProps> = ({
  title = <>Meet us at <span className="text-primary ml-3">ENTC 1</span></>,
  subtitle = <>Department of Electronics and Telecommunication Engineering<br />University of Moratuwa</>,
  dateDay,
  dateYear,
  timeFrom,
  timeTo,
  showMap = true,
  mapCoordinates = []
}) => {
  return (
    <section className="container mx-auto my-20" id="venue">
      <div className="px-4">
        <div className="space-y-4">
          <h2 className="heading-2 text-center font-serif">
            {title}
          </h2>
          <div className="heading-3 text-muted-foreground text-center">
            {subtitle}
          </div>
        </div>
        <div className={`flex flex-col lg:flex-row items-center justify-center min-h-96 gap-10`}>
          {showMap && (
            <div className="w-full max-w-xl">
              <MapProvider>
                <MapContent coordinates={mapCoordinates} />
              </MapProvider>
            </div>
          )}
          <div className={`w-fit mx-auto ${showMap ? "lg:mt-0 mt-20" : ""}`}>
            <div className="flex gap-10 my-10 lg:my-0 flex-col md:flex-row">
              <div className="relative">
                <div className="text-8xl leading-[120px] md:text-[140px] md:leading-[180px] font-extrabold scale-y-125 mb-5 whitespace-nowrap">
                  {dateDay}
                </div>
                <div className="absolute text-3xl md:text-5xl w-fit right-5 -bottom-4 mt-2 text-foreground/60">
                  {dateYear}
                </div>
              </div>
              <div className="text-2xl md:text-3xl whitespace-nowrap flex flex-col justify-between gap-10 md:gap-5 w-full max-w-xs relative">
                <div className="absolute border-r-2 border-dashed h-full right-16 md:right-20 -z-10 border-primary/30"></div>
                <div className="flex gap-3 w-full justify-between items-center text-foreground/60">
                  FROM{" "}
                  <div className="bg-primary text-primary-foreground px-5 py-3 rounded-full">
                    {timeFrom}
                  </div>
                </div>
                <div className="flex gap-3 w-full justify-between items-center text-foreground/60">
                  TO{" "}
                  <div className="bg-primary text-primary-foreground px-5 py-3 rounded-full">
                    {timeTo}
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

const MapContent: FC<{ coordinates: { x: number; y: number; name: string }[] }> = ({ coordinates }) => {
  const { svgRef, containerRef } = useMap();

  return (
    <div
      className="relative w-full grid place-items-center md:max-h-none "
      ref={containerRef}
    >
      <UniMap svgRef={svgRef} className="h-auto" />
      {coordinates.map((coord, index) => (
        <Anchor key={index} x={coord.x} y={coord.y} name={coord.name} />
      ))}
    </div>
  );
};

export default Venue;
