import { type FC, type ReactNode } from "react";
import { Card, CardContent } from "./ui/card";

type ExpectedAttendenceProps = {
  count: number | string;
  label: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
};

const ExpectedAttendence: FC<ExpectedAttendenceProps> = ({ count, label, prefix = "+", suffix = "+" }) => {
  return (
    <Card className="max-w-md w-full border-none bg-transparent lg:bg-card/40 h-auto">
      <CardContent className="grid place-content-center place-items-center h-fit my-auto">
        <div className="text-8xl md:text-[100px] font-extrabold mb-5 whitespace-nowrap ">
          {prefix && <span className="opacity-0 select-none pointer-events-none">{prefix}</span>}
          <span className="text-primary">{count}</span>{suffix}
        </div>
        <p className="md:text-xl">{label}</p>
      </CardContent>
    </Card>
  );
};

export default ExpectedAttendence;
