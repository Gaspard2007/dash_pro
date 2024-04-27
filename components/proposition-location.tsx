import React from 'react'

const PropositionLocation: React.FC = () => {
    return (
        <div className='w-[900px] flex ' style={{background:'#DEDEDE'}}>
            <img src="/seche-cheveux.svg" alt="" />
            <div className='flex flex-col justify-between' style={{margin:'30px'}}>
                <div>
                    <h3>LOCATION SÈCHE CHEVEUX</h3>
                    <div style={{fontWeight:'700px'}}>
                        <span className='' >10 €/jour</span>
                    </div>
                    <p>Illuminez votre journée avec notre service de location de sèche-cheveux à seulement 10 € par jour ! Apportez une touche de confort et de style à votre routine capillaire, sans compromis sur votre portefeuille. Louez dès maintenant pour des cheveux sublimés sans effort !</p>            
                </div>
                <div className=''>
                <div className='flex justify-end'>
                    <input value={1} className='text-lg text-center' style={{width:'40px', marginRight:'10px'}} type="number" name="" id="" />
                    <button style={{padding:'11px'}} className='text-white text-lg cursor-pointer bg-black'>AJOUTER AU PANIER</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default PropositionLocation
