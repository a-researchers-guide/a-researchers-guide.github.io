import { CalendarDaysIcon, PlusIcon } from "lucide-react";
import type { FC } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Magnet from "./Magnet";
import { downloadICS } from "@/lib/downloadICS";
import { EVENT_END, EVENT_START } from "@/consts/event";

const AddToCalendar: FC = () => {
  return (
    <Card className="max-w-5xl mx-auto mt-20 w-full border-none py-10 bg-card/40">
      <CardContent>
        <div className="flex h-fit items-center lg:gap-10">
          <div className="size-full max-w-64">
            <CalendarDaysIcon className="size-full max-w-48 mx-auto" />
          </div>

          <div className="w-full space-y-5">
            <h3 className="heading-3">Add Event to Your Calendar</h3>
            <p className="max-w-prose">
              Click the button below to Download the event details and add them
              to your calendar application. So you won't miss out!
            </p>
            <Magnet padding={200} pullFactor={1}>
              <Button onClick={() => downloadICS(EVENT_START, EVENT_END)}>
                <PlusIcon /> Add to Calendar
              </Button>
            </Magnet>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddToCalendar;
