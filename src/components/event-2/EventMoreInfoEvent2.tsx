import { type FC } from "react";
import AddToCalendarEvent2 from "./AddToCalendarEvent2";
import ExpectedAttendenceEvent2 from "./ExpectedAttendenceEvent2";

const EventMoreInfoEvent2: FC = () => {
  return (
    <section className="container max-w-7xl mx-auto mb-20 min-h-0" id="venue">
      <div className="px-4">
        <div className="flex gap-10 flex-col lg:flex-row items-center lg:items-stretch mx-auto mt-20 ">
          <ExpectedAttendenceEvent2 />
          <AddToCalendarEvent2 />
        </div>
      </div>
    </section>
  );
};

export default EventMoreInfoEvent2;
