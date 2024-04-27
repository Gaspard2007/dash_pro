'use client'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Link from 'next/link'


const SupprimeCompte: React.FC = () => {
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
    <Button type="text" block style={{ backgroundColor: 'black', color: 'white', width:'100px', marginLeft:'15px'}} onClick={showModal}>Supprimer</Button>
      <Modal footer={null} open={isModalOpen}>
        <div>
            <h2>Supprimer votre Compte</h2>
            <p>Êtes-vous sûr de vouloir supprimer votre compte ?</p>        
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
export default SupprimeCompte;