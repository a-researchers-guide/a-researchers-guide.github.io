import { type FC } from "react";

const Partners: FC = () => {
  return (
    <div className="relative grid place-items-center px-4 my-20" id="register">
      <div className="max-w-5xl w-full mx-auto flex items-center justify-evenly ">
        <div className="">
          <img
            src="./UOM.png"
            alt="Scholarverse"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <div className="saturate-0 invert">
          <img
            src="./EMBS_UoM_Color.png"
            alt="Scholarverse"
            width={400}
            height={100}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
