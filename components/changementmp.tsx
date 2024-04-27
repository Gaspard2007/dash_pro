'use client'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ChangementMp: React.FC = () => {
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
<button className=" cursor-pointer flex justify-end items-center text-lg rounded " style={{padding:'11px',marginTop:'15px', marginLeft:'200px', backgroundColor:'#EAEAEA'}} onClick={showModal}>Changer le mot de passe</button>
      <Modal footer={null} open={isModalOpen}>
        <div className="modal-content">
          <h2>Changer le mot de passe</h2>
          <form className="form-content flex flex-col">
            <label className='text-lg'>
              Mot de passe actuel
            </label>
            <input className='text-lg outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] z-[1] border-[1px] border-solid border-gainsboro-500' type="text" />
            
            <br />
            <label  className='text-lg'>
              Nouveau mot de passe
              <div className="note text-xs">* Utilisez 8 caractères ou plus avec un mélange de lettres, de chiffres et de symboles.</div>
            </label>
            <input className='text-lg outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] z-[1] border-[1px] border-solid border-gainsboro-500' type="text" />
            <br />
            <label  className='text-lg'>
              Confirmer le nouveau mot de passe
            </label>
            <input className='text-lg outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] z-[1] border-[1px] border-solid border-gainsboro-500' type="password" />
            <div className="flex flex-row justify-end" style={{marginTop:'15px'}}>
              <button className=" bg-gray text-black rounded text-lg cursor-pointer" style={{padding:'11px', marginRight:'10px'}} onClick={handleCancel}>Annuler</button>
              <button className="bg-black text-white rounded text-lg cursor-pointer" style={{padding:'11px'}} onClick={handleOk}>Mettre à jour</button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ChangementMp;