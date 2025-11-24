import { type FC } from "react";

const Partners: FC = () => {
  return (
    <div className="relative grid" id="register">
      <div className="max-w-lg w-full mx-0 flex items-center justify-start gap-5 ">
        {/* <div className="">
          <img
            src="./UOM.png"
            alt="Scholarverse"
            width={100}
            height={100}
            className="object-cover"
          />
        </div> */}
        <div className="saturate-0 invert">
          <img
            src="./EMBS_UoM_Color.png"
            alt="Scholarverse"
            width={150}
            height={100}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
