import { type FC } from "react";
import AddToCalendar from "./AddToCalendar";
import ExpectedAttendence from "./ExpectedAttendence";

const EventMoreInfo: FC = () => {
  return (
    <section className="container max-w-7xl mx-auto mb-20 min-h-0" id="venue">
      <div className="px-4">
        <div className="flex gap-10 flex-col lg:flex-row items-center lg:items-stretch mx-auto mt-20 ">
          <ExpectedAttendence />
          <AddToCalendar />
        </div>
      </div>
    </section>
  );
};

export default EventMoreInfo;
