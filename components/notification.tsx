import type { NextPage } from "next";

const NotificationTest: NextPage = () => {
  return (
    <div className="flex-1 rounded-8xs bg-white box-border flex flex-col items-start justify-start pt-[11px] px-0 pb-0 gap-[23px] max-w-full text-left text-xs text-black font-inter border-[1px] border-solid border-whitesmoke-300">
      <div className="self-stretch h-px relative box-border hidden border-t-[1px] border-solid border-gainsboro-100" />
      <div className="self-stretch h-[343px] relative rounded-8xs bg-white box-border hidden border-[1px] border-solid border-whitesmoke-300" />
     
      <div className="self-stretch flex flex-col items-end justify-start gap-[8px_0px] max-w-full text-smi font-poppins">
        <div className="self-stretch flex flex-col items-center justify-start gap-[4px_0px]">
          <div className="self-stretch flex flex-row items-start justify-between py-0 pr-[9px] pl-2 gap-[20px]">
            <div className="relative z-[2]">
              Votre formation commence bientôt
            </div>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="w-2.5 h-2.5 relative rounded-[50%] bg-red-200 z-[2]" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between pt-[5px] pb-4 pr-[7px] pl-2.5 gap-[20px] z-[2] text-3xs border-b-[1px] border-solid border-gainsboro-100 mq1050:flex-wrap">
            <div className="relative">il y a 5 min.</div>
            <div className="relative">21 Janvier 2024</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[4px_0px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-3">
            <div className="flex-1 flex flex-row items-start justify-start gap-[0px_30px]">
              <div className="relative z-[2]">
                <b className="[text-decoration:underline]">
                  <span>Milana Beauty</span>
                  <span className="text-mediumslateblue-100">{` `}</span>
                </b>
                <span>a annuler votre réservation</span>
              </div>
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="w-2.5 h-2.5 relative rounded-[50%] bg-red-200 z-[2]" />
              </div>
            </div>
          </div>
          
        </div>
       
      </div>
    </div>
  )
}
export default NotificationTest;