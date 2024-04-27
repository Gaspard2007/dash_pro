import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import React from 'react';
import StarRating from "@/components/star-rating";

export type data = {
propBackgroundColor?: CSSProperties["backgroundColor"];
};

const modelPresentationBrieveProfessionelle: NextPage<data> = ({
 
  propBackgroundColor,
}) => {
  const logo_imageStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className="w-[227px] rounded-lg box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[22px] px-1 pb-[21px] gap-[10px_0px] min-w-[227px] text-center text-lg text-black font-roboto border-[2px] border-solid border-whitesmoke-300 mq1050:pt-5 mq1050:pb-5 mq1050:box-border mq750:flex-1"
      style={logo_imageStyle}
    >
      <div className="w-[88px] flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border">
        <button className="cursor-pointer [border:none] p-[9px] bg-gray-600 flex-1 rounded overflow-hidden flex flex-row items-center justify-center hover:bg-darkslategray-400">
          <div className="relative text-smi leading-[13px] font-roboto text-black text-center">
            Coiffeuse
          </div>
        </button>
      </div>
      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-2.5">
        <img
          className="h-[90px] w-[90px] relative rounded-41xl object-cover"
          alt=""
          src='/profil.avif'
        />
      </div>
      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-2.5 gap-[0px_5px]">
        <StarRating/>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-[21px] gap-[10px_0px]">
        <div className="self-stretch relative leading-[21.6px]">
          Milana Beauty
        </div>
        <div className="w-[152px] relative text-sm leading-[22.4px] text-dimgray inline-block">
          Membre depuis 2024
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2.5 text-sm text-gray-300">
        <div className="flex-1 relative [text-decoration:underline] leading-[21.6px]">
          0033(0)6 02 03 03 05
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-4 gap-[0px_5px]">
        <div className="h-[42px] w-[42px] rounded-81xl bg-whitesmoke-300 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[11px] pr-[13px] pl-[9px] border-[2px] border-solid border-gainsboro-200">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src='/facebook.svg'
          />
        </div>
        <div className="h-[42px] w-[42px] rounded-81xl bg-whitesmoke-300 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[11px] pr-[13px] pl-[9px] border-[2px] border-solid border-gainsboro-200">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src='instagram.svg'
          />
        </div>
        <div className="h-[42px] w-[42px] rounded-81xl bg-whitesmoke-300 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[11px] pr-[13px] pl-[9px] border-[2px] border-solid border-gainsboro-200">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src='linkedin.svg'
          />
        </div>
        <div className="h-[42px] w-[42px] rounded-81xl bg-whitesmoke-300 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[11px] pr-[13px] pl-[9px] border-[2px] border-solid border-gainsboro-200">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src='youtube.svg'
          />
        </div>
      </div>
    </div>
  );
};

export default modelPresentationBrieveProfessionelle;