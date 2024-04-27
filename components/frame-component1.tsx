import type { NextPage } from "next";

export type FrameComponent1Type = {
  frame?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ frame }) => {
  return (
    <div className="self-stretch flex flex-col items-end justify-start gap-[15px_0px] max-w-full text-left text-sm text-gray-300 font-roboto">
      <div className="self-stretch rounded-lg box-border flex flex-row items-center justify-between pt-[27px] pb-[30px] pr-6 pl-[47px] relative max-w-full gap-[20px] border-[2px] border-solid border-whitesmoke-300">
        <div className="h-[217px] w-[966px] relative rounded-lg box-border hidden max-w-full z-[0] border-[2px] border-solid border-whitesmoke-300" />
        <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg box-border z-[1] border-[2px] border-solid border-whitesmoke-300" />
        <div className="w-[418px] flex flex-col items-start justify-start gap-[18px_0px] max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start gap-[0px_10px] text-lg text-black mq750:flex-wrap">
            <div className="flex-1 relative leading-[21.6px] inline-block min-w-[162px] z-[2]">
              <span className="font-medium">Services :</span>
              <span className="text-darkslategray-300"> Coupe cheveux</span>
            </div>
            <button className="cursor-pointer [border:none] py-2 pr-3 pl-4 bg-snow rounded overflow-hidden flex flex-row items-center justify-center whitespace-nowrap z-[2] hover:bg-gainsboro-400">
              <div className="relative text-smi leading-[13px] font-roboto text-red-100 text-center">
                Annuler par Miss Kitty
              </div>
            </button>
          </div>
          <div className="w-[386px] flex flex-col items-start justify-start gap-[18px_0px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_26px] mq750:flex-wrap">
              <div className="relative leading-[22.4px] z-[2]">
                Date de reservations
              </div>
              <div className="flex-1 relative leading-[22.4px] text-slategray inline-block min-w-[127px] whitespace-nowrap z-[2]">
                : 10.10.2024 , 13:00-14:00
              </div>
            </div>
            <div className="w-[227px] flex flex-row items-start justify-between gap-[20px] text-smi">
              <div className="relative leading-[22.4px] z-[2]">Tarifs</div>
              <div className="w-[65px] relative text-sm leading-[22.4px] text-slategray inline-block shrink-0 z-[2]">
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
                src={frame}
              />
              <div className="flex-1 flex flex-row items-start justify-start text-smi text-black">
                <div className="w-[185px] relative [text-decoration:underline] leading-[22.4px] inline-block shrink-0">
                  Felana Marvel
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[132px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[13px_0px]">
            <button className="cursor-pointer [border:none] p-2.5 bg-gainsboro-600 self-stretch rounded-8xs shadow-[0px_0px_0px_#4c40ed] flex flex-row items-center justify-center z-[2] hover:bg-silver">
              <div className="h-[41px] w-[132px] relative rounded-8xs bg-gainsboro-600 shadow-[0px_0px_0px_#4c40ed] hidden" />
              <div className="w-[94px] relative text-sm leading-[21px] font-roboto text-black text-center inline-block shrink-0 z-[3]">
                Raison
              </div>
            </button>
            <button className="cursor-pointer p-2.5 bg-black self-stretch rounded-8xs shadow-[0px_0px_0px_#4c40ed] flex flex-row items-center justify-center z-[2] border-[1px] border-solid border-black hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200">
              <div className="h-[41px] w-[132px] relative rounded-8xs bg-black shadow-[0px_0px_0px_#4c40ed] box-border hidden border-[1px] border-solid border-black" />
              <div className="w-[94px] relative text-sm leading-[21px] font-roboto text-white text-center inline-block shrink-0 z-[3]">
                Supprimer
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[590px] flex flex-row items-start justify-between gap-[20px] max-w-full text-center text-black">
        <div className="w-[214px] flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border">
          <button className="cursor-pointer p-2.5 bg-black self-stretch rounded-8xs shadow-[0px_0px_0px_#4c40ed] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-black hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200">
            <div className="relative text-sm leading-[21px] font-roboto text-white text-center">
              Voir toutes les réservations
            </div>
          </button>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_14px]">
          <div className="relative leading-[21px] whitespace-pre-wrap">
            Page 1 sur 10
          </div>
          <div className="w-[30px] rounded-sm bg-black overflow-hidden shrink-0 flex flex-row items-center justify-center p-1 box-border text-white">
            <div className="relative leading-[21px]">1</div>
          </div>
          <div className="w-[30px] rounded-sm bg-gainsboro-600 overflow-hidden shrink-0 flex flex-row items-center justify-center p-1 box-border">
            <div className="relative leading-[21px]">2</div>
          </div>
          <div className="w-[30px] rounded-sm bg-gainsboro-600 overflow-hidden shrink-0 flex flex-row items-center justify-center p-1 box-border">
            <div className="relative leading-[21px]">3</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FrameComponent1;