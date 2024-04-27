'use client'
// 'use client'
import type { NextPage } from "next";
import React from 'react';
import StarRating from "@/components/star-rating";
import Link from 'next/link'
import RaisonRDVannule from "@/components/raison-rdv-annule";
import SupprimeRéservation from "@/components/supprimer-reservation";

const ReservationsProCancel: NextPage = () => {
    return (
        <div>
            <div className="flex">
                <div className="flex flex-col rounded" style={{ border: 'solid 2px #EAEAEA', padding: '3%' }}>
                    <button className="text-base rounded" style={{ padding: '11px', background: '#DEDEFF', color: '#4C40ED' }}>Client en boutique</button>
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
                    <span className="flex justify-center">Miss Kitty</span>
                    <p className="text-base flex justify-center">Membre depuis 2024</p>
                    <p className="text-base flex justify-center">MissKity@gmail.com</p>
                    <p className="text-base flex justify-center">06 0102030405</p>
                    <button className="bg-black text-white text-lg rounded" style={{ padding: '9px' }}>Modifier</button>
                </div>
                <div style={{ border: 'solid 2px #EAEAEA', width: '50%', marginLeft:'5%' }}>
                    <br />
                    <div className="flex justify-end" style={{ marginRight: '2%' }}>
                        <button className="flex items-center text-base rounded py-1 px-3" style={{ background: '#DEDEFF', color: '#4C40ED' }}>
                            <div className="rounded-full h-2 w-2 mr-2" style={{ background: '#4C40ED' }}></div>En cours
                        </button>
                    </div>
                    <div className="flex flex-row" style={{ marginTop: '15px', marginLeft: '40px' }}>
                        <div className="text-base text-darkslategray-300">Service réservé</div>
                        <span className="text-base text-slategray" style={{ marginLeft: '100px', marginRight: '30px' }}>: {`Lissage Brésilien`}</span>
                    </div>
                    <div className="flex flex-row" style={{ marginTop: '35px', marginLeft: '40px' }}>
                        <div className="text-base text-darkslategray-300">Date de reservations</div>
                        <span className="text-base text-slategray" style={{ marginLeft: '70px', marginRight: '30px' }}>: {`09.10.2024  de 17:00 à 18:00`}</span>
                    </div>
                    <div className="flex flex-row" style={{ marginTop: '35px', marginLeft: '40px' }}>
                        <div className="text-base text-darkslategray-300">Lieu</div>
                        <span className="text-base text-slategray" style={{ marginLeft: '175px', marginRight: '30px' }}>: {`02 rue des Alpes, 75000 Paris, France`}</span>
                    </div>
                    <div className="flex flex-row" style={{ marginTop: '35px', marginLeft: '40px' }}>
                        <div className="text-base text-darkslategray-300">Tarifs</div>
                        <span className="text-base text-slategray" style={{ marginLeft: '170px', marginRight: '30px' }}>: {`100 €`}</span>
                    </div>
                    <div className="flex flex-row" style={{ marginTop: '35px', marginLeft: '40px' }}>
                        <div className="text-base text-darkslategray-300">Notes client</div>
                        <span className="text-base text-slategray" style={{ marginLeft: '170px', marginRight: '30px' }}>: {`Lorem ipsum dolor sit amet, cia ut fringilla in dolor sit amet, cia ut frin dolor sit amet, cia ut frin dolor sit amet, cia ut frin.`}</span>
                    </div>
                    <div className="flex flex-row justify-end" style={{ marginTop: '20px', marginRight: '20px' }}>
                    <div className="flex">
                    <button className="rounded text-lg" style={{ padding: '10px', color: '#FF0000', background: '#FEE9E9' }}>Annuler la réservation</button>
                    <button className="bg-black text-white rounded text-lg" style={{padding:'10px', marginLeft:'20px'}}>Supprimer</button>
                </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ReservationsProCancel;
