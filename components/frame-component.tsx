import type { NextPage } from "next";

export type FrameComponentType = {
  group?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ group }) => {
  return (
    <div className="w-[395px] flex flex-col items-start justify-start gap-[18px_0px] max-w-full text-left text-sm text-gray-300 font-roboto">
      <div className="self-stretch flex flex-row items-center justify-start gap-[0px_10px] text-lg text-black mq750:flex-wrap">
        <div className="flex-1 relative leading-[21.6px] inline-block min-w-[162px] z-[2]">
          <span className="font-medium">Services :</span>
          <span className="text-darkslategray-300"> Coupe cheveux</span>
        </div>
        <button className="cursor-pointer [border:none] pt-2 px-2 pb-2.5 bg-snow w-[136px] rounded flex flex-row items-center justify-center box-border whitespace-nowrap z-[2] hover:bg-gainsboro-400">
          <div className="h-[31px] w-[136px] relative rounded bg-snow hidden" />
          <div className="relative text-smi leading-[13px] font-roboto text-red-100 text-center z-[1]">
            Annuler par vous
          </div>
        </button>
      </div>
      <div className="w-[386px] flex flex-row items-start justify-start gap-[0px_26px] max-w-full mq750:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[18px_0px]">
          <div className="relative leading-[22.4px] z-[2]">
            Date de reservations
          </div>
          <div className="relative text-smi leading-[22.4px] z-[2]">Tarifs</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[18px_0px] min-w-[146px] text-slategray">
          <div className="self-stretch relative leading-[22.4px] whitespace-nowrap z-[2]">
            : 10.10.2024 , 13:00-14:00
          </div>
          <div className="w-[65px] relative leading-[22.4px] inline-block z-[2]">
            : 200 €
          </div>
        </div>
      </div>
      <div className="w-[316px] flex flex-row items-center justify-start gap-[0px_52px] z-[2] mq750:gap-[0px_52px]">
        <div className="w-[110px] relative leading-[22.4px] inline-block shrink-0">
          Client
        </div>
        <div className="flex-1 flex flex-row items-center justify-start gap-[0px_9px] text-slategray">
          <div className="w-2.5 relative leading-[22.4px] inline-block shrink-0">
            :
          </div>
          <img
            className="h-[31px] w-[31px] relative rounded-41xl object-cover"
            alt=""
            src={group}
          />
          <div className="flex-1 flex flex-row items-start justify-start text-smi text-black">
            <div className="w-[185px] relative [text-decoration:underline] leading-[22.4px] inline-block shrink-0">
              Felana Marvel
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrameComponent;