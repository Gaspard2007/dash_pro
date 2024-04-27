

    import StarRating from "@/components/star-rating";
    import StarRatingparticulier from "@/components/star-rating-avi-particulier";
    import type { NextPage } from "next";
    
    const avismodel: NextPage = () => {
      return (
      <div className="self-stretch rounded-lg bg-white box-border flex flex-col items-start  pt-6 pb-[18px] pr-[26px] pl-[15px] gap-[18px] max-w-full text-left text-17xl text-gray-300 font-roboto border-[2px] border-solid border-whitesmoke-300"style={{height: 'auto'}}>
        <div className="" style={{marginLeft:'20px'}}>
        <div className="flex flex-row">
          <img
            className="h-[49px] w-[49px] relative rounded-[50%] object-cover"
            alt=""
            src="/profil.avif"
          />
          <h1 className="flex flex-row items-center m-0 relative text-inherit leading-[43.2px] font-normal font-inherit z-[1] mq1050:text-3xl mq1050:leading-[26px]"style={{marginLeft:'20px'}}>
            Melina Beauty
          </h1>
          <div className="" style={{marginLeft:'10px'}}>
            <StarRating/>
          </div>
          <div className="flex flex-row items-center text-sm text-slategray">
            (255 avis)
          </div>
        </div>
       
        <div className="flex flex-row items-center text-lg"  style={{marginTop:'20px'}}>
          <button className="cursor-pointer [border:none] p-[9px] bg-gray-600 rounded overflow-hidden flex flex-row items-center justify-center hover:bg-darkslategray-400" style={{ maxWidth: '200px' }}>
            <div className="relative text-smi leading-[13px] text-black text-center">
              Coiffeuse
            </div>
          </button>
        
          <div className="flex flex-row items-center text-sm text-slategray" style={{marginLeft:'20px'}}>
            <img src="/map-pin-gray.svg" alt="" className="flex items-center color-gray" 
            />
            <div className="flex items-center" style={{marginLeft:'10px'}}>
              <p>{`02 rue des alpes, Paris, France`}</p>
            </div>
          </div>
    
        </div>
        <div className="flex flex-row items-center justify-between"style={{marginTop:'20px'}}>
          <div className="flex flex-row items-center">
          <div>
            <img className='h-[49px] w-[49px] relative rounded-[50%] object-cover' src="/profil.avif" alt="" />
          </div>
          <div className="flex flex-col" style={{marginLeft:'15px'}}>
            <div className="text-sm relative text-inherit leading-[43.2px] font-normal font-inherit z-[1] mq1050:text-3xl mq1050:leading-[26px]">
             Miss kitty
            </div>
            <div className="text-sm flex items-start text-slategray">
              <p>il y a 1h</p>
            </div>
          </div>
          </div>
          <div className="flex items-center justify-end">
            <StarRatingparticulier/>
          </div>
        </div>
        <div className="text-sm text-slategray">
            <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqa. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          </div>
      
      </div>
       <div className="w-[211px] flex flex-row items-start justify-start gap-[0px_24px] mt-[-4px]">
       <button className="cursor-pointer p-3 bg-whitesmoke-700 flex-1 rounded-8xs shadow-[0px_0px_0px_#fff] overflow-hidden flex flex-row items-center justify-center z-[1] border-[1px] border-solid border-whitesmoke-700 hover:bg-lightgray hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray">
         <div className="relative text-base leading-[24px] font-roboto text-black text-center">
           Supprimer
         </div>
       </button>
       <button className="cursor-pointer [border:none] p-3 bg-black w-[71px] rounded-8xs shadow-[0px_0px_0px_#4c40ed] overflow-hidden shrink-0 flex flex-row items-center justify-center box-border z-[2] hover:bg-darkslategray-200">
         <div className="relative text-base leading-[24px] font-roboto text-white text-center">
           Voir
         </div>
       </button>
     </div>
      </div>
    
      );
    };
    
    export default avismodel;
