'use client'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Link from 'next/link'


const SupprimeRéservation: React.FC = () => {
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
     <button className='rounded text-base' onClick={showModal} style={{ padding:'9px', paddingLeft:'12px', paddingRight:'12px', color: 'white', backgroundColor:'#000', marginLeft:'15%', marginRight:'20px' }}>Supprimer</button>
      <Modal footer={null} open={isModalOpen}>
        <div>
            <h2>Supprimer cette réservation </h2>
            <p>Êtes-vous sûr de vouloir supprimer cette réservation ?</p>        
</div>
     <br />
        <div className="flex flex-row justify-end" style={{marginTop:'15px'}}>
              <button className=" bg-gray text-black rounded text-lg cursor-pointer" style={{padding:'11px', marginRight:'10px'}} onClick={handleCancel}>Annuler</button>
              <button className="bg-black text-white rounded text-lg cursor-pointer" style={{padding:'11px'}} onClick={handleOk}>Supprimer</button>
            </div>
      </Modal>
      </>
)
}
export default SupprimeRéservation