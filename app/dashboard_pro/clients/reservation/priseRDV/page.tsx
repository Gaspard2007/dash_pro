'use client'
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import ModelService from "@/components/modelServices";
import StarRating from "@/components/star-rating"
import { NextPage } from "next"
import Link from "next/link";

import HoraireList from '@/components/horaires';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


dayjs.locale('fr');

const PriseDeRDV:NextPage=()=>{
    const reseau =
      {
        
      }
    
      
    return(
        <div style={{padding:'5%'}}>
          <span style={{fontSize:'150%'}}>Créer une réservation pour</span>
          <br /><br />
         <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[0px_13px] max-w-full">
        <img className="h-[70px] w-[70px] w-[90px] h-[90px] relative rounded-41xl object-cover z-[2]" alt="" loading="lazy" src="/profil.avif" />
        <div className="flex flex-col items-center">
          <button className="rounded text-lg" style={{ color: '#4C40ED', background: '#F7F7FF', padding: '9px', marginLeft: '30px' }}>Client hors Flair</button>
          <span style={{ marginTop: '20px', fontSize: '150%', marginLeft: '30px' }}>Miss Kitty</span>
        </div>
      </div>
        <br/>

        <div>
          {}
        </div>
        
<span style={{fontSize:'150%'}}>Sélectionnez la date et l'heure de la réservation : </span>
<br />
<br />
        <div className="flex">
            <div style={{width:'45%'}}>
              <span>Sélectionner la date du rendez-vous</span>
              <br />
              <br />
              <div style={{marginLeft:'-40%'}}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />
    </LocalizationProvider>
    </div>

            </div>
            <div style={{width:'40%'}}>
              <span>Choisir l'heure du rendez-vous</span>
              <HoraireList/>
            </div>   
        </div>
        <div className='flex justify-end'>
        <Link href={'/dashboard_pro/clients/reservation/ajouterReservation'}><button className='rounded text-lg' style={{background:'#EAEAEA',padding:'9px'}}>Précedent</button></Link>
        <button className='bg-black text-white text-lg rounded' style={{padding:'9px', marginLeft:'20px'}}>Réserver</button>
        </div>
    </div>
    )
}
export default PriseDeRDV