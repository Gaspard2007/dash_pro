'use client'

import PlanningMonth from '@/components/planningMonth';
import DemoApp from '@/components/planningMonth';

import PlanningWeek from '@/components/planningWeek';
import { NextPage } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';



const Planning:NextPage = () => {
  
 
   
    return (
        <div>
            <br />
            <br />
            <div>
                <span>Mes réservations</span>
                <br />
                <div className='flex justify-end' style={{marginRight:'10%'}}>
                <button className='bg-black rounded'>
                <Link href={'/dashboard_pro/Reservation/reservation'}><img src="/calendar-8.svg" alt="" /></Link>
                </button>
                </div>
            </div>
    
                <div style={{height:'100%'}}>
                 <PlanningMonth/>
                </div>
    
            
        </div>
    );
}

export default Planning;