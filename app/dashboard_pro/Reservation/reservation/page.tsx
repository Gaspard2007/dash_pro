'use client'
import ReservationsPro from "@/components/modelReservationPro";
import App from "@/components/planningWeek";
import { NextPage } from "next";
import React, { useState } from "react";
import Link from "next/link";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Reservation:NextPage=()=>{
    const [récent, setRécent] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setRécent(event.target.value as string);
  };
    return(
        <div style={{paddingRight:'5%'}}>
            <br />
            <div className="flex items-center justify-between">
            <span>Mes réservations</span>
            
               <div className="flex flex-col">
                <p>Trier par :</p>
                <div className="flex" style={{width:'200px'}}>
                <FormControl fullWidth>
  <InputLabel>Récent</InputLabel>
  <Select
    value={récent}
   
    onChange={handleChange}
  >
    <MenuItem value={'recent'}>Récents</MenuItem>
    <MenuItem value={'workIn'}>En cours</MenuItem>
    <MenuItem value={'cancel'}>Annulée</MenuItem>
    <MenuItem value={'finish'}>Terminée</MenuItem>
     
    

  </Select>
</FormControl>


                <Link href={'/dashboard_pro/Reservation/calendarPlanning'}><img src="/calendar48px.svg" alt="" /></Link>
               
                </div>

                </div>
            </div>
            <br />
            <div>
               <ReservationsPro/>
               
            </div>
            </div>

    )
}
export default Reservation