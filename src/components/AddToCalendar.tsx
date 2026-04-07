import { downloadICS } from "@/lib/downloadICS";
import { CalendarDaysIcon, PlusIcon } from "lucide-react";
import type { FC, ReactNode } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

type AddToCalendarProps = {
  title?: ReactNode;
  description?: ReactNode;
  eventStart: Date;
  eventEnd: Date;
};

const AddToCalendar: FC<AddToCalendarProps> = ({ 
  title = "Add Event to Your Calendar", 
  description = <>Click the button below to Download the event details and add them to your calendar application.<br /> So you won't miss out!</>, 
  eventStart, 
  eventEnd 
}) => {
  return (
    <Card className="max-w-5xl w-fit md:w-full border-none py-10 bg-card/40">
      <CardContent>
        <div className="flex flex-col md:flex-row text-center md:text-left h-fit items-center gap-5 lg:gap-8">
          <div className="size-full max-w-32 md:max-w-64">
            <CalendarDaysIcon className="size-full max-w-48 mx-auto" />
          </div>

          <div className="w-full space-y-5">
            <h3 className="heading-3">{title}</h3>
            <p className="max-w-prose text-sm md:text-base text-balance md:text-wrap">
              {description}
            </p>

            <Button onClick={() => downloadICS({
              title: typeof title === 'string' ? title : "Event",
              start: eventStart, 
              end: eventEnd,
              description: "Scholarverse Event",
              location: "TBA"
            })}>
              <PlusIcon /> Add to Calendar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddToCalendar;
