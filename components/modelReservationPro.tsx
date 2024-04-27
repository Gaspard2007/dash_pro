'use client'
import type { NextPage } from "next";
import React from 'react';

const listtest = [
    {
        id :  0,
        statut: 'boutique',
        img: '',
        nom: 'Miss kitty',
        anneDinscription:'2024',
        email:'misskitty@gmail.com',
        numerosTel: '060101030405',
        statutDuRDV:'workIn',
        serviceReserve:'Lissage Brésilien',
        dateReservation:'09.10.2024',
        dureeReservationDebut:'17:00',
        dureeReservationfin:'18:00',
        lieu:' 02 rue des Alpes, 75000 Paris, France',
        tarifs:100,
        notesClient:'Lorem ipsum dolor sit amet, cia ut fringilla in dolor sit amet, cia ut frin dolor sit amet, cia ut frin dolor sit amet, cia ut frin.'
        
    },
    {
        id :  1,
        statut: 'flair',
        img: '',
        nom: 'Luna berçon',
        anneDinscription:'2023',
        email:'lunaberc@gmail.com',
        numerosTel: '060101030405',
        statutDuRDV:'cancel',
        serviceReserve:'Coiffure Italienne',
        dateReservation:'27.04.2024',
        dureeReservationDebut:'14:00',
        dureeReservationfin:'15:00',
        lieu:' 02 rue des Alpes, 75000 Paris, France',
        tarifs:60,
        notesClient:'Lorem ipsum dolor sit amet, cia ut fringilla in dolor sit amet, cia ut frin dolor sit amet, cia ut frin dolor sit amet, cia ut frin.'
        
    },
    {
        id :  2,
        statut: 'flair',
        img: '',
        nom: 'Luna berçon',
        anneDinscription:'2023',
        email:'lunaberc@gmail.com',
        numerosTel: '060101030405',
        statutDuRDV:'finish',
        serviceReserve:'Coiffure Italienne',
        dateReservation:'27.04.2024',
        dureeReservationDebut:'14:00',
        dureeReservationfin:'15:00',
        lieu:' 02 rue des Alpes, 75000 Paris, France',
        tarifs:60,
        notesClient:'Lorem ipsum dolor sit amet, cia ut fringilla in dolor sit amet, cia ut frin dolor sit amet, cia ut frin dolor sit amet, cia ut frin.'
        
    },
]
const ReservationsPro: NextPage = () => {
    
    return (
        <div>
           
        {listtest.map(reservation =>(
        
            <div className="flex" key={reservation.id} style={{marginTop:'4%'}}>
                <div className="flex flex-col rounded" style={{ border: 'solid 2px #EAEAEA', padding: '3%' }}>
                    {reservation.statut === 'boutique' &&(
                        <button className="text-base rounded" style={{ padding: '11px', background: '#DEDEFF', color: '#4C40ED' }}>Client boutique</button>
                    )}
                    {reservation.statut === 'flair' &&(
                        <button className="text-base rounded" style={{ padding: '11px', background: '#EAEAEA', color: 'black' }}>Client Flair</button>
                    )}
                    <br />
                    <div className="flex justify-center">
                        <div className="rounded-full" style={{ width: '100px', height: '100px', overflow: 'hidden' }}>
                            <img
                                src="/profil.avif"
                                alt=""
                                className="rounded-full"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <br />
                    <span className="flex justify-center">{reservation.nom}</span>
                    <p className="text-base flex justify-center">Membre depuis {reservation.anneDinscription}</p>
                    <p className="text-base flex justify-center">{reservation.email}</p>
                    <p className="text-base flex justify-center">{reservation.numerosTel}</p>
                    {reservation.statut === 'boutique' && (<button className="bg-black text-white text-lg rounded" style={{ padding: '9px' }}>Modifier</button>)}
                    
                </div>
                <div style={{ border: 'solid 2px #EAEAEA', width: '70%', marginLeft:'5%' }}>
                    <br />
                    <div className="flex justify-end" style={{ marginRight: '2%' }}>
                        {reservation.statutDuRDV === 'workIn' &&(<button className="flex items-center text-base rounded py-1 px-3" style={{ background: '#DEDEFF', color: '#4C40ED' }}>
                            <div className="rounded-full h-2 w-2 mr-2" style={{ background: '#4C40ED' }}></div>En cours
                        </button>)}
                        {reservation.statutDuRDV === 'cancel' &&(<button className="flex items-center text-base rounded py-1 px-3" style={{ background: '#FEE9E9', color: '#FF0000' }}>
                            <div className="rounded-full h-2 w-2 mr-2" style={{ background: '#FF0000' }}></div>Annulée
                        </button>)}
                        {reservation.statutDuRDV === 'finish' &&(<button className="flex items-center text-base rounded py-1 px-3" style={{ background: '#C0FFCA', color: '#2DB742' }}>
                            <div className="rounded-full h-2 w-2 mr-2" style={{ background: '#2DB742' }}></div>Terminé
                        </button>)}
                        
                    </div>
                    <div className="flex flex-row" style={{ marginTop: '15px', marginLeft: '40px' }}>
                        <div className="text-base text-darkslategray-300">Service réservé</div>
                        <span className="text-base text-slategray" style={{ marginLeft: '100px', marginRight: '30px' }}>: {reservation.serviceReserve}</span>
                    </div>
                    <div className="flex flex-row" style={{ marginTop: '35px', marginLeft: '40px' }}>
                        <div className="text-base text-darkslategray-300">Date de reservations</div>
                        <span className="text-base text-slategray" style={{ marginLeft: '70px', marginRight: '30px' }}>: {reservation.dateReservation} de {reservation.dureeReservationDebut} à {reservation.dureeReservationfin}</span>
                    </div>
                    <div className="flex flex-row" style={{ marginTop: '35px', marginLeft: '40px' }}>
                        <div className="text-base text-darkslategray-300">Lieu</div>
                        <span className="text-base text-slategray" style={{ marginLeft: '175px', marginRight: '30px' }}>: {reservation.lieu}</span>
                    </div>
                    <div className="flex flex-row" style={{ marginTop: '35px', marginLeft: '40px' }}>
                        <div className="text-base text-darkslategray-300">Tarifs</div>
                        <span className="text-base text-slategray" style={{ marginLeft: '170px', marginRight: '30px' }}>: {reservation.tarifs} €</span>
                    </div>
                    <div className="flex flex-row" style={{ marginTop: '35px', marginLeft: '40px' }}>
                        <div className="text-base text-darkslategray-300">Notes client</div>
                        <span className="text-base text-slategray" style={{ marginLeft: '170px', marginRight: '30px' }}>: {reservation.notesClient}</span>
                    </div>
                   
                        {reservation.statutDuRDV === 'workIn' &&(
                           <div className="flex flex-row justify-end" style={{ marginTop: '20px', marginRight: '20px' }}>
                           <div className="flex">
                            <button className="rounded text-lg" style={{ padding: '10px', color: '#FF0000', background: '#FEE9E9' }}>Annuler la réservation</button>
                            
                            <button className="bg-black text-white rounded text-lg" style={{padding:'10px', marginLeft:'20px'}}>Supprimer</button>
                            </div>
                            </div>
                        )}
                        {reservation.statutDuRDV === 'cancel' &&(
                           <div className="flex flex-row justify-end" style={{ marginTop: '20px', marginRight: '20px', marginBottom:'6%' }}>
                           <div className="flex">
                            <button className="rounded text-lg" style={{ padding: '10px', background:'#EAEAEA', color:'black' }}>Raison</button>
                            
                            <button className="bg-black text-white rounded text-lg" style={{padding:'10px', marginLeft:'20px'}}>Supprimer</button>
                            </div>
                            
                            </div>
                        
                        )}
                        {reservation.statutDuRDV === 'finish' &&(
                           <div className="flex flex-row justify-end" style={{ marginTop: '20px', marginRight: '20px', marginBottom:'6%' }}>
                           <div className="flex">
                           
                            
                            <button className="bg-black text-white rounded text-lg" style={{padding:'10px', marginLeft:'20px'}}>Supprimer</button>
                            </div>
                            </div>
                        )}
                </div>
                    </div>
                    
          
                
            
             ))}
             
        </div>
       
    )
}

export default ReservationsPro;
