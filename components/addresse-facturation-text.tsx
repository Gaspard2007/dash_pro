import type { NextPage } from "next";

export type AdresseFacturationTextType = {
  iMAGE?: string;
};

const AdresseFacturationText: NextPage<AdresseFacturationTextType> = ({
  iMAGE,
}) => {
  return (
    <div className="flex flex-row items-start justify-end py-0 px-0 text-center text-lg text-gray-300 font-roboto">
      <div className="w-[315px] flex flex-row items-start justify-start py-0 px-0 box-border">
        <div className="flex-1 flex flex-col items-center justify-start gap-[35px_0px] max-w-full">
          <div className="w-[172px] flex flex-row items-start justify-start relative">
            <div className="h-[181.3px] w-[304px] absolute my-0 mx-[!important] top-[-24.1px] left-[calc(50%_-_152px)] z-[1]" />
            <div className="flex-1 flex flex-col items-center justify-start gap-[7px_0px] z-[2]">
              <img
                className="w-[90px] h-[90px] relative rounded-41xl object-cover"
                loading="lazy"
                alt=""
                src={iMAGE}
              />
              <div className="self-stretch relative leading-[21.6px]">
                Milana Beauty
              </div>
              <div className="w-[152px] relative text-sm leading-[22.4px] text-dimgray inline-block">
                Membre depuis 2024
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center p-2.5 z-[1]">
            <div className="h-[0.9px] flex-1 relative bg-gainsboro-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdresseFacturationText;