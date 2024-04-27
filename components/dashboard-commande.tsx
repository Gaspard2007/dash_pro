'use client'
import React from 'react';
import { Table, Button } from 'antd';
import Link from 'next/link';

  const { Column, ColumnGroup } = Table;
  interface DataType {
    key: React.Key;
    commande: string;
    date: string;
    etat: string;
    nombreProduit: number;
    prixTotal: string;
    action: string;
  }
  
  const data: DataType[] = [
    {
      key: '1',
      commande: 'n°23566',
      date: '13/03/2024',
      etat: 'En cours',
      nombreProduit: 5,
      prixTotal: '129 €',
      action: 'Voir',
    },
    {
      key: '2',
      commande: 'n°93766',
      date: '19/03/2024',
      etat: 'Annulé',
      nombreProduit: 7,
      prixTotal: '167 €',
      action: 'Voir',
    },
    {
      key: '3',
      commande: 'n°43976',
      date: '24/03/2024',
      etat: 'En cours',
      nombreProduit: 16,
      prixTotal: '1067 €',
      action: 'Voir',
    },
  ];
  const DashboardCommande: React.FC = () => {
    const handleVoir = (record: DataType) => {
      
      console.log('Voir les détails de la commande :', record);
    };
    return(
    <Table dataSource={data}>
    
    <Column title="Commande" dataIndex="commande" key="commande" />
    <Column title="Date" dataIndex="date" key="date" />
    <Column title="Etat" dataIndex="etat" key="etat" />
    <Column title="Nombre de produit" dataIndex="nombreProduit" key="nombreProduit" />
    <Column title="Prix total" dataIndex="prixTotal" key="prixTotal" />
    <Column
        title="Action"
        key="action"
        render={(text, record: DataType) => (
          <Link href={'/boutique/location/commande'}><button className='bg-black text-white text-sm rounded cursor-pointer' style={{padding:'9px'}}  onClick={() => handleVoir(record)}>
          Voir
        </button></Link>
        )}
      />
  </Table>
);
}
export default DashboardCommande;