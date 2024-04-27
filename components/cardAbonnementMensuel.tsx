import React from 'react';

const CardAbonnementMensuel = () => (
  <div className='bg-white' style={{ width: '400px', border: '2px solid #000', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)' }}>
    <div style={{ width: '100%', margin: 0, padding: 0 }}>
      <h1 className='flex justify-center' style={{ backgroundColor: 'black', color: 'white', padding: '10px', margin: '0' }}>Mensuel</h1>
    </div>
    <div className='flex flex-col justify-center items-center' style={{  }}>
      <h2>19€/Mois</h2>
      <span>19 € facturés chaque mois</span>
      <div style={{ marginTop: '10px' }}>
       
        <p>Élément de list # 1</p>
        <p>Élément de list # 1</p>
        <p>Élément de list # 1</p>
        <p>Élément de list # 1</p>
        <p>Élément de list # 1</p>
      </div>
    </div>
    <div className='flex flex-col'>
    <button className='text-lg' style={{ padding: '10px 20px', backgroundColor: 'black', color: 'white', border: 'none', cursor: 'pointer' }}>J'essaye Gratuitement</button>
    <span className='text-sm flex justify-cneter text-gray-200' style={{ marginTop: '10px' }}>Abonnement sans engagement, résiliable à tout moment et sans frais.</span>
    </div>
  </div>
);
export default CardAbonnementMensuel;
