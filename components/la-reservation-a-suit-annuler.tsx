import type { NextPage } from "next";

export type LaReservationASuitAnnulerType = {
  iMAGE?: string;
};

const LaReservationASuitAnnuler: NextPage<LaReservationASuitAnnulerType> = ({
  iMAGE,
}) => {
  return (
    <div className="w-[304px] flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border text-left text-mini text-gray-200 font-roboto mq1050:hidden">
      <div className="self-stretch flex flex-col items-center justify-start gap-[25px_0px]">
        <div className="w-[152px] flex flex-col items-center justify-start gap-[12px_0px] text-center text-lg text-gray-300">
          <div className="flex flex-row items-start justify-start py-0 px-5 relative">
            <div className="h-[198px] w-[304px] absolute my-0 mx-[!important] bottom-[-84px] left-[calc(50%_-_152px)] z-[1]" />
            <img
              className="h-[90px] w-[90px] relative rounded-41xl object-cover z-[2]"
              loading="lazy"
              alt=""
              src={iMAGE}
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[2px_0px]">
            <div className="w-[92px] relative leading-[21.6px] inline-block z-[2]">
              Miss kitty
            </div>
            <div className="self-stretch relative text-sm leading-[22.4px] text-dimgray z-[2]">
              Membre depuis 2024
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[11px] gap-[23px_0px]">
          <div className="self-stretch h-px relative bg-whitesmoke-300 z-[1]" />
          <div className="w-[178px] flex flex-row items-start justify-start">
            <div className="w-[133px] relative leading-[25.6px] inline-block shrink-0 z-[1]">
              Tableau de bord
            </div>
          </div>
        </div>
        <div className="w-[272px] flex flex-row items-start justify-start pt-0 px-5 pb-[11px] box-border text-white">
          <div className="w-[186px] flex flex-row items-start justify-start relative">
            <div className="h-[600px] w-[306px] absolute my-0 mx-[!important] top-[-285px] right-[-83px] rounded-lg bg-whitesmoke-200 box-border border-[1px] border-solid border-whitesmoke-400" />
            <div className="flex-1 rounded-sm bg-black flex flex-row items-center justify-start pt-1 pb-[3px] pr-[30px] pl-[23px] whitespace-nowrap z-[1]">
              <div className="h-[33px] w-[186px] relative rounded-sm bg-black hidden" />
              <div className="flex-1 relative leading-[25.6px] z-[1]">
                Mes Réservations
              </div>
            </div>
          </div>
        </div>
        <div className="w-[174px] flex flex-row items-start justify-start pt-0 pb-[11px] px-0 box-border">
          <div className="w-32 relative leading-[25.6px] inline-block shrink-0 z-[1]">
            Mes commandes
          </div>
        </div>
        <div className="w-[174px] flex flex-row items-start justify-start pt-0 pb-[11px] px-0 box-border">
          <div className="relative leading-[25.6px] z-[1]">Paramètres</div>
        </div>
        <div className="w-[168px] flex flex-row items-start justify-start text-base">
          <div className="relative leading-[25.6px] z-[1]">Déconnexion</div>
        </div>
      </div>
    </div>
  );
};

export default LaReservationASuitAnnuler;