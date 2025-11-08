import { EVENT_END, EVENT_START } from "@/consts/event";
import { downloadICS } from "@/lib/downloadICS";
import { CalendarDaysIcon, PlusIcon } from "lucide-react";
import type { FC } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const AddToCalendar: FC = () => {
  return (
    <Card className="max-w-5xl w-full border-none py-10 bg-card/40">
      <CardContent>
        <div className="flex flex-col md:flex-row text-center md:text-left h-fit items-center gap-5 lg:gap-10">
          <div className="size-full max-w-32 md:max-w-64">
            <CalendarDaysIcon className="size-full max-w-48 mx-auto" />
          </div>

          <div className="w-full space-y-5">
            <h3 className="heading-3">Add Event to Your Calendar</h3>
            <p className="max-w-prose text-sm md:text-base">
              Click the button below to Download the event details and add them
              to your calendar application.
              <br /> So you won't miss out!
            </p>

            <Button onClick={() => downloadICS(EVENT_START, EVENT_END)}>
              <PlusIcon /> Add to Calendar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddToCalendar;
