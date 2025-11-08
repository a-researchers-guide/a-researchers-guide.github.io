import { type FC } from "react";
import { Card, CardContent } from "./ui/card";

const ExpectedAttendence: FC = () => {
  return (
    <Card className="max-w-md w-full border-none bg-transparent lg:bg-card/40 h-auto">
      <CardContent className="grid place-content-center place-items-center h-fit my-auto">
        <div className="text-8xl md:text-[140px] font-extrabold mb-5 whitespace-nowrap ">
          <span className="opacity-0 select-none pointer-events-none">+</span>
          <span className="text-primary">75</span>+
        </div>
        <p className="md:text-xl">Delegates</p>
      </CardContent>
    </Card>
  );
};

export default ExpectedAttendence;
