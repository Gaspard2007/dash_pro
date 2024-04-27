'use client'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Link from 'next/link'


const RaisonRDVannule: React.FC = () => {
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
    <button className='rounded text-base' onClick={showModal} style={{ padding:'9px', paddingLeft:'12px', paddingRight:'12px', color: 'black', backgroundColor:'#EAEAEA' }}>Raison</button>
      <Modal footer={null} open={isModalOpen}>
        <div>
            <h2>Cette réservation a été annulée</h2>
          
            <span className='text-gray-200'>La réservation a été annuler par : </span><Link className='text-black' href={'compte/pro/nndefini'}>Milana Beauty</Link>
            <br />
            <h4>Voici la raison :</h4>
           
            <p>Malheureusement, je ne suis pas disponible, car j'ai eu un empêchement de dernière minute...</p>
        </div>
        <div className="flex flex-row justify-end" style={{marginTop:'15px'}}>
        <button className="bg-black text-white rounded text-lg cursor-pointer" style={{padding:'11px'}} onClick={handleOk}>Ok</button>
        </div>
      </Modal>
      </>
)
}
export default RaisonRDVannule