import { type FC } from "react";
import Anchor from "./map/Anchor";
import { MapProvider, useMap } from "./map/MapProvider";
import UniMap from "./map/UniMap";

const Venue: FC = () => {
  return (
    <section className="container mx-auto">
      <div className="space-y-4">
        <h2 className="heading-2 text-center">
          Meet us at <span className="text-primary">Civil Auditorium</span>
        </h2>
      </div>
      <div className="flex">
        <MapProvider>
          <MapContent />
        </MapProvider>
      </div>
    </section>
  );
};

const MapContent = () => {
  const { svgRef, containerRef } = useMap();

  return (
    <div className="relative max-w-xl" ref={containerRef}>
      <UniMap svgRef={svgRef} />
      <Anchor x={600} y={340} name="Civil Auditorium" />
      <Anchor x={405} y={630} name="University Entrance" />
    </div>
  );
};

export default Venue;
