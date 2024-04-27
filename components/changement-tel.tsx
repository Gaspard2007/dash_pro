'use client'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import SupprimeRéservation from './supprimer-reservation';

const Changement_telephone: React.FC = () => {
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
    <button className=" cursor-pointer flex justify-end items-center text-lg rounded" style={{padding:'11px',marginTop:'15px', marginLeft:'260px', marginRight:'10px', background:'#EAEAEA'}} onClick={showModal}>Modifier</button>
      <Modal footer={null} open={isModalOpen}>
        <div className="modal-content">
          <h2>Modifier le numéro de téléphone</h2>
          <form className="form-content flex flex-col">
            <label className='text-lg'>
              Numéro de téléphone actuel
            </label>
            <div className='text-lg'>06 45 45 11 62</div>
            <br />
            <label  className='text-lg'>
              Nouveau numéro de téléphone*:
              
              <div className="note text-xs">* Le nouveau numéro de téléphone n'est mis à jour qu'après vérification </div>
            </label>
            <input className='text-lg outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] z-[1] border-[1px] border-solid border-gainsboro-500' type="text" />
            <br />
            <label  className='text-lg'>
              Mot de passe
            </label>
            <input className='text-lg outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] z-[1] border-[1px] border-solid border-gainsboro-500' type="password" />
            <div className="flex flex-row justify-end" style={{marginTop:'15px'}}>
              <button className=" bg-gray text-black rounded text-lg cursor-pointer" style={{padding:'11px', marginRight:'10px'}} onClick={handleCancel}>Annuler</button>
              <SupprimeRéservation/>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Changement_telephone;
