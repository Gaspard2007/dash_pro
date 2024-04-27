import type { NextPage } from "next";
import Link from "next/link";
import React from 'react';
import {Popover} from 'antd';
//import NotificationTest from "./notification";

const contentPanier = (
  <div>
    <div className="flex justify-between">
    <h4 className="flex justify-start" style={{marginRight:'95px'}}>0 article</h4>
    <h4 className="flex justify-end">Voir le Panier</h4>
    </div>
  </div>
);
const contentNotifications = (
  <div>
    
  </div>
);


const MenuParticulier: NextPage = () => {

  return (
    <header className="self-stretch bg-white shadow-[0px_4px_10px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-between pt-1.5 px-[50px] pb-[5px] box-border top-[0] z-[99] sticky gap-[20px] max-w-full text-left text-base text-black font-gothic-a1">
      <Link href='/boutique/boutique'><button className="cursor-pointer [border:none] pt-0 px-0 pb-2.5 bg-[transparent] h-[60px] w-[98px] flex flex-col items-center justify-center box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/2023-12-cropped-1.png"
        />
      </button></Link>
      <div className="w-[583px] flex flex-row items-start justify-start py-5 pr-1.5 pl-0 box-border gap-[0px_30px] max-w-full mq1050:hidden">
        <Link className="no-underline" href={'/boutique/boutique/#location'}><div className="text-black relative font-semibold">LOCATION</div></Link>
        <Link className="no-underline" href={'/boutique/boutique/#formation'}><div className="text-black relative font-semibold">FORMATION</div></Link>
        <div className="flex-1 relative font-semibold whitespace-nowrap">
          GESTION PLANNING
        </div>
        <Link className="no-underline" href={'/boutique/businessBooster/BoosterChoice'}><div className="text-black flex-1 relative font-semibold whitespace-nowrap">
          BUSINESS BOOSTER
        </div></Link>
      </div>
      <div className="flex flex-row items-center justify-end py-2.5 pr-0 pl-2.5 text-8xs text-white">
        <div className="h-[50px] w-[201px] flex flex-col items-start justify-start py-0 px-0 box-border">
          <div className="w-[244px] flex flex-row items-center justify-start gap-[0px_21px]">
          <div className="h-[28.8px] w-[30px] relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-600 w-[28.8px] h-[28.8px]" />
            <Link href={'/backupPro/Explorer'}><img
              className="absolute top-[6.6px] left-[7.9px] w-[14.1px] h-[14.1px] overflow-hidden z-[1]"
              loading="lazy"
              alt=""
              src="/globe.svg"
            /></Link>
            </div>
            <div className="h-[28.8px] w-[30px] relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-600 w-[28.8px] h-[28.8px]" />
                <Popover content={contentPanier} trigger="click"><img
                  className="absolute top-[6.6px] left-[7.9px] w-[14.1px] h-[14.1px] overflow-hidden z-[1] cursor-pointer"
                  loading="lazy"
                  alt=""
                  src="/shopping-bag.svg"

                /></Popover> 
              <div className="absolute top-[0px] left-[20px] rounded-[50%] bg-red-200 w-2.5 h-2.5 z-[2]" />
              <b className="absolute top-[2px] left-[24px] inline-block w-[3px] h-[5px] z-[3]">
                2
              </b>
            </div>
            <div className="h-[28.8px] w-[30px] relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-600 w-[28.8px] h-[28.8px]" />
              <Popover content={contentNotifications} title="Notifications" trigger="click" ><img
                className="absolute top-[6.6px] left-[7.9px] w-[14.1px] h-[14.1px] overflow-hidden z-[1] cursor-pointer"
                loading="lazy"
                alt=""
                src="/bell.svg"
              /></Popover>
              <div className="absolute top-[0px] left-[20px] rounded-[50%] bg-red-200 w-2.5 h-2.5 z-[2]" />
              <b className="absolute top-[2px] left-[24px] inline-block w-[3px] h-[5px] z-[3]">
                3
              </b>
            </div>
            <Link href='/dashboard_user/parametre-mon-compte'><img
              className="h-[49px] w-[49px] relative rounded-[50%] object-cover"
              loading="lazy"
              alt=""
              src="/profil.avif"
            />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MenuParticulier;