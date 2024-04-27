import type { NextPage } from "next";

const RaisonSupprimerFrame: NextPage = () => {
  return (
    <div className="w-[132px] flex flex-col items-start justify-start gap-[13px_0px]">
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
  );
};

export default RaisonSupprimerFrame;