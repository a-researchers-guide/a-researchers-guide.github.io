import { MapPin } from "lucide-react";
import { useEffect, useState, type FC } from "react";
import { useMap } from "./MapProvider";

type AnchorProps = {
  /** x, y in SVG coordinate space */
  x: number;
  y: number;
  name?: string;
};

const Anchor: FC<AnchorProps> = ({ x, y, name }) => {
  const { toScreenCoords } = useMap();
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    const updatePosition = () => {
      const coords = toScreenCoords(x, y);
      if (coords) setPos(coords);
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [x, y, toScreenCoords]);

  if (!pos) return null;

  return (
    <div
      className="absolute flex items-center gap-2"
      style={{
        top: pos.top - 23,
        left: pos.left - 23,
      }}
    >
      <MapPin size={32} fill="var(--primary)" stroke="black" />
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200 text-gray-800 text-sm font-medium h-fit whitespace-nowrap">
        {name}
      </div>
    </div>
  );
};

export default Anchor;
