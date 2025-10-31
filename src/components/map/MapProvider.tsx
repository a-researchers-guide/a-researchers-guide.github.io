/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useRef, type ReactNode } from "react";

type MapContextType = {
  svgRef: React.RefObject<SVGSVGElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  toScreenCoords: (
    x: number,
    y: number
  ) => { left: number; top: number } | null;
};

const MapContext = createContext<MapContextType | null>(null);

export const MapProvider = ({ children }: { children: ReactNode }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toScreenCoords = (x: number, y: number) => {
    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container) return null;

    const pt = svg.createSVGPoint();
    pt.x = x;
    pt.y = y;

    const screenCTM = svg.getScreenCTM();
    if (!screenCTM) return null;

    const transformed = pt.matrixTransform(screenCTM);
    const rect = container.getBoundingClientRect();

    return {
      left: transformed.x - rect.left,
      top: transformed.y - rect.top,
    };
  };

  return (
    <MapContext.Provider value={{ svgRef, containerRef, toScreenCoords }}>
      {children}
    </MapContext.Provider>
  );
};

export const useMap = () => {
  const ctx = useContext(MapContext);
  if (!ctx) throw new Error("useMap must be used within MapProvider");
  return ctx;
};
