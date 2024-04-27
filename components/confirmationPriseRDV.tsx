'use client'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Link from 'next/link'


const ConfirmationPriseRdv: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className='flex justify-end'>
        <button className='text-lg rounded flex' style={{padding:'11px', backgroundColor:'#F3F3F3'}}>Annuler</button>
        <button onClick={showModal} className='text-lg rounded text-white bg-black' style={{padding:'11px', marginLeft:'3%'}}>Réserver</button>
    </div>
      <Modal footer={null} open={isModalOpen}>
        <div className='flex flex-col justify-center items-center'>
            <img style={{width:'20%'}} src="/check-circle.png" alt="" />
            <h2>Félicitations</h2>
            <p>Votre réservation a bien été enregistrée</p>
           
</div>
     <br />
        <div className="flex flex-row justify-center" style={{marginTop:'15px'}}>
              <Link href={'/backupPro/Explorer'}><button className=" bg-gray text-black rounded text-lg cursor-pointer" style={{padding:'11px', marginRight:'10px'}} onClick={handleCancel}>Faire d'autre réservations</button></Link>
              <Link href={'/dashboard_user/mes-commandes'}><button className="bg-black text-white rounded text-lg cursor-pointer" style={{padding:'11px'}} onClick={handleOk}>Voir mes réservations</button></Link>
            </div>
      </Modal>
      </>
)
}
export default ConfirmationPriseRdv;