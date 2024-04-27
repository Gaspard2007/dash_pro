import React from 'react';
import {Popover, Card} from 'antd';
import { Rate } from 'antd';
import StarRating from './star-rating';
import StarRatingShort from './star-ratingShort';
import Link from 'next/link';
const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );



const CardProfessionnel: React.FC = () => (
  <div style={{margin:'5px'}}>
    <Card
    style={{ width: 300 }}
    cover={
      <img
       
        src="/clienttest.svg"
      />
    } 
    bordered={true}>
   
      <Link href={'/backupPro/profilPublique'}><h4 className='text-black text-lg'>Milani Beauty</h4></Link>
      <div className='flex items-center justify-between '>
        <div className='flex'>
        <img className='flex items-center' src="/map-pin-gray.svg" alt="" /> 
        <span className='text-gray-200'>Paris, France</span>
        </div>
        <div className=''><StarRatingShort/></div></div>
<div className='flex justify-between items-center'>
      <p>à partir de  <span className='text-lg' style={{fontWeight:'700'}}>35 €</span></p>
      <Link href={'/backupPro/rdv'}><button className='cursor-pointer bg-black text-white rounded text-base' style={{height:'%', padding:'8px'}}>Réserver</button></Link>
 </div>

    
    </Card>
    </div>
  );
  

export default CardProfessionnel;