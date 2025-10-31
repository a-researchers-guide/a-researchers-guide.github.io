import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from "framer-motion";
import React, {
  useEffect,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";

interface MagnetProps extends Omit<HTMLAttributes<HTMLDivElement>, "onDrag"> {
  children: ReactNode;
  disabled?: boolean;
  springOptions?: SpringOptions;
  pullFactor?: number;
  innerClassName?: string;
  padding?: number;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  disabled = false,
  springOptions = { damping: 15, stiffness: 200, mass: 0.5 },
  pullFactor = 0.4,
  innerClassName = "",
  padding = 50,
  ...props
}) => {
  const magnetRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, springOptions);
  const springY = useSpring(y, springOptions);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (disabled || !magnetRef.current) {
        x.set(0);
        y.set(0);
        return;
      }

      const { left, top, width, height } =
        magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const distance = Math.sqrt(
        Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
      );
      const radius = padding / 2;

      if (distance < radius) {
        const pull = 1 - (distance / radius) ** (1 / pullFactor);
        const offsetX = (mouseX - centerX) * pull;
        const offsetY = (mouseY - centerY) * pull;
        x.set(offsetX);
        y.set(offsetY);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [disabled, padding, pullFactor, x, y]);

  return (
    <div {...props} className={cn("relative w-fit", props.className)}>
      <div
        ref={magnetRef}
        className="absolute rounded-full aspect-3/2 w-[120%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: padding,
        }}
      ></div>
      <motion.div
        className={innerClassName}
        style={{
          x: springX,
          y: springY,
          willChange: "transform",
          display: "inline-block",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Magnet;
