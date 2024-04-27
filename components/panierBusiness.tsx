import React from 'react';
import Link from 'next/link'


const PanierDeBusinessBooster: React.FC = () => {
    return(
        <div>
<div className='flex flex-col justify-center'>
<table  style={{borderCollapse: 'collapse'}}>
    <thead className='rounded' style={{background:'#E4E4E4'}}>
        <tr>
            <th className='rounded-tl-lg' style={{padding:'20px'}}>ACTION</th>
            <th>PRODUIT</th>
            <th>DATE DE RESERVATION</th>
            <th>PRIX</th>
            <th>QUANTITÉ</th>
            <th className='rounded-tr-lg' style={{padding:'20px'}}>SOUS TOTAL</th>
        </tr>
    </thead>
    <br />
    <tbody className=''>
        <th ><button className='cursor-pointer' style={{background:'white'}}><img src="/x-circle-red.svg" alt="" /></button></th>
        <th >BUSINESS BOOSTER 2H POUR CHANGER DE VIE</th>
        <th>19.02.2024</th>
        <th><div className='flex'></div> 200 €</th>
        <th>1</th>
        <th>145 €</th>
        
    </tbody>
</table>
<br />
<div style={{background:'#EEEEE'}} className='w-full h-0.5'></div>
<div className='flex flex-row justify-between' style={{marginTop:'7%'}}>      
    <div className='flex flex-row ' >
        <input className='border border-black'  placeholder='         Code Promos' style={{background:'#E4E4E4', fontSize:'23px', color:'black'}} type="text"/>
        <button className='text-white bg-black cursor-pointer' style={{fontSize:'23px', paddingLeft:'27px', paddingRight:'27px'}}>Appliquer</button>
    </div>
    <div className='' >
        <button className='text-white bg-black cursor-pointer ' style={{fontSize:'23px', paddingLeft:'27px', paddingRight:'27px', border:'none', outline:'none'}}>Mettre à jour</button>
    </div>
</div>

<div className='flex justify-end' style={{marginTop:'7%'}}>
<div className='flex flex-col'>
    <h3 className='justify-start'>Total Panier</h3>
    <div className='flex flex-row justify-between' style={{ width: '250px' }}>
        <h4>SOUS-TOTAL</h4>
        <h4>145 €</h4>
    </div>
    <div className='flex flex-row justify-between' style={{ width: '250px' }}>
        <h4 className='flex justify-start'>TVA 20%</h4>
        <h4 className='flex justify-end'>55 €</h4>
    </div>
    <div className='bg-gray-200 w-full h-0.5'></div>
    <div className='flex flex-row justify-between' style={{ width: '250px' }}>
        <h4 className='flex justify-start'>TOTAL TTC</h4>
        <h4 className='flex justify-end'>200 €</h4>
    </div>
    <br />
    <div>
        <Link href={'/boutique/businessBooster/paypal'}><button style={{paddingTop:'12px',paddingRight:'17px', paddingLeft:'17px', paddingBottom:'12px'}} className='bg-black text-lg text-white'>VALIDER LA COMMANDE</button></Link>
    </div>
</div>
</div>
</div>
<br />


                


</div>
    )
    }
    export default PanierDeBusinessBooster;