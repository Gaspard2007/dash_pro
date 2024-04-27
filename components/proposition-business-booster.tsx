'use client'
import { NextPage } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';

const PropositionBusinessBooster:NextPage =() => {
    const [showInput, setShowInput] = useState(false);

    const toggleInput = () => {
        setShowInput(!showInput);
    };

    return (
        <div className='flex ' style={{background:'#DEDEDE'}}>
            <img style={{width:'60%'}} src="/imagepourshop.svg" alt="" />
            <div style={{padding:'5%'}}>
            <div className='flex flex-col justify-between'>
                <div>
                    <h3>BUSINESS BOOSTER 1H POUR CHANGER DE VIE</h3>
                    <div style={{fontWeight:'700px'}}>
                        <span className=''>100€</span>
                    </div>
                    <p>Vous vous sentez perdue face à la multitude de formations esthétique existantes ?</p>
                    <p>Notre session de coaching intensif est conçue pour vous orienter vers la formation en esthétique la plus adaptée à vos ambitions.</p>
                    <p>En deux heures, nous explorerons ensemble vos passions, vos compétences et déterminerons la voie qui vous correspond le mieux</p>            
                </div>
                <br />
                <br />
                
                <div>
                <div className='flex flex-col items-end justify-end'>
                    <button onClick={toggleInput} style={{padding:'11px', width:'250px'}} className='flex items-center justify-end text-white text-lg cursor-pointer bg-black'>
                        <img src="/calendarWhite.svg" style={{marginRight:'20px'}} alt="" />
                        CHOISIR UNE DATE
                    </button>
                    {showInput && <input style={{width:'249px'}} type="date" />}
                </div>
                <br />
                <div className='flex items-center justify-end'>
                    <Link className='no-underline' href={'/boutique/businessBooster/etapePanier'}><button style={{padding:'11px', width:'250px'}} className='text-white text-lg cursor-pointer bg-black flex justify-center'>JE RÉSERVE</button></Link>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default PropositionBusinessBooster
