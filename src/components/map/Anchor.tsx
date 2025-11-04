import { MapPin } from "lucide-react";
import { useEffect, useState, type FC } from "react";
import { useMap } from "./MapProvider";
import { cn } from "@/lib/utils";

type AnchorProps = {
  /** x, y in SVG coordinate space */
  x: number;
  y: number;
  name?: string;
  className?: string;
};

const Anchor: FC<AnchorProps> = ({ x, y, name, className }) => {
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
      className={"absolute flex items-end gap-2"}
      style={{
        top: pos.top - 23,
        left: pos.left - 23,
      }}
    >
      <MapPin fill="var(--primary)" stroke="black" className="size-8" />
      <div
        className={cn(
          "absolute left-full inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200 text-gray-800 text-sm font-medium h-fit whitespace-nowrap",
          className
        )}
      >
        {name}
      </div>
    </div>
  );
};

export default Anchor;
