import React from 'react';
import { Card } from 'antd';
import {Popover} from 'antd';
import Link from 'next/link'
const content = (
    <div>
     Description
    </div>
  );

const CardServiceSupp: React.FC = () => (
    <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="/postealouer_coiffure.png"
      />
    } 
    bordered={true}>
         <Popover content={content} title="Description" trigger="click"><button className='text-xl text-white bg-black cursor-pointer' style={{width:300, margin:'-25px', padding:'25px'}}>En savoir Plus</button></Popover>
    <div style={{marginTop:'40px', marginBottom:'60px'}}>
      <h2>Location fer à lisser</h2>
      <h1>10€/jours</h1>
    </div>
 
      <Link href='/boutique/formation/etapePanier'><button  className='text-xl text-white bg-black cursor-pointer' style={{width:300, margin:'-25px', padding:'25px'}}>Je réserve</button></Link>

    </Card>
  );
  

export default CardServiceSupp;