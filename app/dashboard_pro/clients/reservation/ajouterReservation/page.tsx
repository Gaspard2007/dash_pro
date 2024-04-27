'use client'

import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const Reservation: NextPage = () => {
  const services = [
    {
      id: 0,
      categorie: 'Coupe femme',
      titre: 'Lissage brésilien',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt veritatis animi maxime quibusdam ad sequi, quod provident exercitationem dignissimos doloremque fugit nobis molestias soluta doloribus, sapiente optio. Iure, deserunt ipsa.',
      prix: 65,
      durée: 30,
      statut: 'inShop'
    },
    {
      id: 1,
      categorie: 'Coupe femme',
      titre: 'Lissage brésilien',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt veritatis animi maxime quibusdam ad sequi, quod provident exercitationem dignissimos doloremque fugit nobis molestias soluta doloribus, sapiente optio. Iure, deserunt ipsa.',
      prix: 65,
      durée: 30,
      statut: 'domicile'
    },
    {
        id: 2,
        categorie: 'Coupe femme',
        titre: 'Lissage brésilien',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt veritatis animi maxime quibusdam ad sequi, quod provident exercitationem dignissimos doloremque fugit nobis molestias soluta doloribus, sapiente optio. Iure, deserunt ipsa.',
        prix: 65,
        durée: 30,
        statut: 'domicile'
      },
      {
        id: 3,
        categorie: 'Coupe femme',
        titre: 'Lissage brésilien',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt veritatis animi maxime quibusdam ad sequi, quod provident exercitationem dignissimos doloremque fugit nobis molestias soluta doloribus, sapiente optio. Iure, deserunt ipsa.',
        prix: 65,
        durée: 30,
        statut: 'domicile'
      },
      {
        id: 4,
        categorie: 'Coupe femme',
        titre: 'Lissage brésilien',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt veritatis animi maxime quibusdam ad sequi, quod provident exercitationem dignissimos doloremque fugit nobis molestias soluta doloribus, sapiente optio. Iure, deserunt ipsa.',
        prix: 65,
        durée: 30,
        statut: 'domicile'
      }
      
  ];

  const [visibleServices, setVisibleServices] = useState(4);
  const [showMoreServices, setShowMoreServices] = useState(false);

  const handleLoadMore = () => {
    setVisibleServices(visibleServices + 2);
    if (visibleServices == services.length - 1){
        setShowMoreServices(true);
    }
    
  };
  const handleLoadLess = () => {
    setVisibleServices(4); 
    setShowMoreServices(false); 
  };

  return (
    <div style={{ paddingLeft: '15%', paddingRight: '15%', paddingTop: '3%' }}>
      <span style={{fontSize:'150%'}}>Créer une réservation pour:</span>
      <br /><br />
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[0px_13px] max-w-full">
        <img className="h-[70px] w-[70px] w-[90px] h-[90px] relative rounded-41xl object-cover z-[2]" alt="" loading="lazy" src="/profil.avif" />
        <div className="flex flex-col items-center">
          <button className="rounded text-lg" style={{ color: '#4C40ED', background: '#F7F7FF', padding: '9px', marginLeft: '30px' }}>Client hors Flair</button>
          <span style={{ marginTop: '20px', fontSize: '150%', marginLeft: '30px' }}>Miss Kitty</span>
        </div>
      </div>
      <br/>
      <div className="flex items-center" style={{border:'solid 2px #ECECEC', width:'35%'}}>
      <input type="search" className="text-lg rounded outline-none" placeholder="Rechercher" style={{ height:'40px'}}></input><img src="/search.svg"></img>
      </div>
      <br />
      <br />
      <button style={{ background: '#ECECEC' }} className="text-lg rounded py-2 px-4">Categorie<button style={{ background: '#ECECEC' }} className="text-lg">Coupe Femme</button></button>
      {services.slice(0, visibleServices).map(reservation => (
        <div key={reservation.id} style={{ border: 'solid 2px #ECECEC', padding: '25px', marginTop: '5%' }} className="flex justify-between items-start rounded">
          <div className="flex flex-col justify-start items-start" style={{ width: '70%' }}>
            <button style={{ background: '#ECECEC' }} className="text-lg rounded py-2 px-4">{reservation.categorie}</button>
            <h2>{reservation.titre}</h2>
            <p className="text-base">
              {reservation.description}
            </p>
          </div>
          <div className="flex flex-col items-end justify-between p-4">
            {reservation.statut === 'domicile' && (
              <button className="rounded text-lg py-2 px-4" style={{ color: '#2DB742', background: '#C0FFCA' }}>Service à domicile</button>)}
            <h1 style={{ fontSize: '250%' }} className="font-bold">{reservation.prix} €</h1>
            <span className="text-lg text-gray-200" style={{ marginTop: '-20%', marginBottom: '20%' }}>{reservation.durée} minutes</span>
            <Link href={'/dashboard_pro/clients/reservation/priseRDV'}>
              <button className="cursor-pointer bg-black text-lg text-white rounded py-3 px-6 mt-4">Réserver</button>
            </Link>
          </div>
        </div>
      ))}
      {!showMoreServices  && (
        <p
          className="cursor-pointer"
          onClick={handleLoadMore}
        >
          Voir plus de : Coupe femme...
        </p>
      )}
      {showMoreServices && (
        <p
          className="mt-4 rounded px-3 py-1 bg-gray-300 cursor-pointer"
          onClick={handleLoadLess}
        >
          Voir moins : coupe Femme
        </p>
      )}
    </div>
  );
};

export default Reservation;