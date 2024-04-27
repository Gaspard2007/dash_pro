import React from 'react';
import { Button, message, Space } from 'antd';
import Link from 'next/link';

const SuccessMessage: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Félicitation, votre achat a bien été effectué 🎉 Merci de votre confiance 💪 Vous allez être redirigé vers la page d accueil',
      duration: 4,
    });
    // Ajouter un délai de 5 secondes avant la redirection
    setTimeout(() => {
      window.location.href = '/boutique/boutique';
    }, 4000);
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'This is an error message',
    });
  };

  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'This is a warning message',
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <button className='bg-black text-white text-lg cursor-pointer flex justify-end' style={{padding:'11px'}} onClick={success}>Valider</button>
      </Space>
    </>
  );
};

export default SuccessMessage;
