import { cn } from "@/lib/utils";
import type { FC, ReactNode } from "react";

type SpeakersProps = {
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
};

const Speakers: FC<SpeakersProps> = ({ 
  title = <>Our <span className="text-primary">Speakers</span></>, 
  description, 
  children ,className
}) => {
  return (
    <section className="container mx-auto my-20 px-8" id="speakers">
      <div className="space-y-4">
        <h2 className="heading-2 text-center font-serif">
          {title}
        </h2>
        {description && (
          <p className="text-center max-w-prose mx-auto opacity-60 text-balance">
            {description}
          </p>
        )}
      </div>

      <div className={cn("grid grid-cols-2 gap-10 place-items-start mt-10 lg:gap-32 w-fit mx-auto", className)}>
        {children}
      </div>
    </section>
  );
};

export default Speakers;
