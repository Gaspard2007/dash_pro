import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameProfilePictureType = {
  changerLeMotDePasse?: string;
  x?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const FrameProfilePicture: NextPage<FrameProfilePictureType> = ({
  changerLeMotDePasse,
  x,
  propWidth,
}) => {
  const changerLeMotStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch flex flex-row items-start justify-between p-[30px] relative gap-[20px] text-left text-5xl text-gray-300 font-roboto mq1050:flex-wrap">
      <div className="h-[46px] w-[46px] absolute my-0 mx-[!important] top-[13px] left-[0px] rounded-41xl bg-whitesmoke-100 box-border z-[1] border-[1px] border-solid border-whitesmoke-400" />
      <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-t-6xs rounded-b-none z-[1]" />
      <h3
        className="m-0 w-[284px] relative text-inherit leading-[36px] font-normal font-inherit inline-block shrink-0 z-[2] mq1050:text-lgi mq1050:leading-[29px]"
        style={changerLeMotStyle}
      >
        {changerLeMotDePasse}
      </h3>
      <div className="h-[30px] w-[30px] rounded-41xl bg-black overflow-hidden shrink-0 flex flex-row items-start justify-start p-[3px] box-border z-[2]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={x}
        />
      </div>
    </div>
  );
};

export default FrameProfilePicture;