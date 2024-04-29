import AbonnementPro from "@/components/abonnementPro";
import ReservationsPro from "@/components/modelReservationPro";
import { NextPage } from "next";

const MesAbonnements: NextPage = () => {
    const abonnement = {
        abonnement: 'mensuel',
        dateDebut:new Date('2024-02-17'),
        dateFin: new Date('2024-12-17'),
        prix: '19',
    };
    

    const today = new Date()
  
    const estDansLesTemps = abonnement.dateFin > today;
    
    const formatDate = (date: Date): string => {
        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('fr-FR', options);
    };
    return (
        <div style={{ width: '100%', paddingRight:'5%' }}>
            <div>
                <br />
                {abonnement.abonnement === 'mensuel' && (
                    <div>
                        <span>Abonnement actuel</span>
                        <br />
                        <br />
                        <div className="rounded" style={{ border: 'solid 2px #EAEAEA', padding: '3%' }}>
                            <div className="flex justify-between">
                                {abonnement.abonnement === 'mensuel' && (
                                    <span className="text-base">Abonnement gestion planning mensuel</span>
                                )}
                                {estDansLesTemps ? (
                                     <button className="rounded text-lg" style={{ color: '#4C40ED', background: '#F7F7FF', padding: '9px', marginLeft: '30px', width: '200px' }}>En cours</button>
                                ) : (
                                    <button className="rounded text-lg" style={{ background: '#FFDDDD', color: '#FF0000', padding: '9px', marginLeft: '30px', width: '200px' }}>Abonnement Expiré</button>
                                )}

                            </div>
                            <br />
                            <div className="flex justify-between">
                                <span style={{ fontWeight: '700' }} className="text-base">Date de début : <span style={{ fontWeight: '500' }} className="text-gray-200">{formatDate(abonnement.dateDebut)}</span></span>
                                <span>{abonnement.prix}</span>
                            </div>
                            <div className="flex justify-between">
                                <span style={{ fontWeight: '700' }} className="text-base">Date de fin : <span style={{ fontWeight: '500' }} className="text-gray-200">{formatDate(abonnement.dateFin)}</span></span>
                                {abonnement.abonnement === 'mensuel' && (
                                    <span className="text-base">/mois</span>
                                )}
                            </div>
                            <br />
                            {estDansLesTemps ? (
                                     <button style={{ padding: '8px' }} className="rounded text-white bg-black text-base">Mettre à niveau</button>
                                ) : (
                                    <div className="flex justify-between">
                                    <button style={{ padding: '8px', background:'#EAEAEA' }} className="rounded text-base">Gerer l'abonnement</button>
                                    <button className="bg-black text-white text-lg rounded" style={{padding:'11px'}}>Renouveler</button>
                                    </div>
                                )}
                            <div className="flex ">
                                
                            </div>
                        </div>
                    </div>
                )}
          
        

       
          {abonnement.abonnement === 'annuel' && (
                    <div>
                        <span>Abonnement actuel</span>
                        <br />
                        <br />
                        <div className="rounded" style={{ border: 'solid 2px #EAEAEA', padding: '3%' }}>
                            <div className="flex justify-between">
                                
                                    <span className="text-base">Abonnement gestion planning annuel</span>
                        
                                {estDansLesTemps ? (
                                     <button className="rounded text-lg" style={{ color: '#4C40ED', background: '#F7F7FF', padding: '9px', marginLeft: '30px', width: '200px' }}>En cours</button>
                                ) : (
                                    <button className="rounded text-lg" style={{ background: '#FFDDDD', color: '#FF0000', padding: '9px', marginLeft: '30px', width: '200px' }}>Abonnement Expiré</button>
                                )}

                            </div>
                            <br />
                            <div className="flex justify-between">
                                <span style={{ fontWeight: '700' }} className="text-base">Date de début : <span style={{ fontWeight: '500' }} className="text-gray-200">{formatDate(abonnement.dateDebut)}</span></span>
                                <span>{abonnement.prix}</span>
                            </div>
                            <div className="flex justify-between">
                                <span style={{ fontWeight: '700' }} className="text-base">Date de fin : <span style={{ fontWeight: '500' }} className="text-gray-200">{formatDate(abonnement.dateFin)}</span></span>
                                
                                    <span className="text-base">/ans</span>
                              
                            </div>
                            <br />
                            {estDansLesTemps ? (
                                     <button style={{ padding: '8px' }} className="rounded text-white bg-black text-base">Mettre à niveau</button>
                                ) : (
                                    <div className="flex justify-between">
                                    <button style={{ padding: '8px', background:'#EAEAEA' }} className="rounded text-base">Gerer l'abonnement</button>
                                    <button className="bg-black text-white text-lg rounded" style={{padding:'11px'}}>Renouveler</button>
                                    </div>
                                )}
                            <div className="flex ">
                                
                            </div>
                        </div>
                    </div>
                )}
            {abonnement.abonnement === 'null' &&(
                <div>
                <span>Aucun abonnement actuel</span>
                <br />
                <br />
                <span className="text-lg">Abonnement disponible</span>
                <br /><br />
                   <AbonnementPro/>
                </div>
            )}
            
            
        </div>
        <br />
        
        
        </div>
    )
}
export default MesAbonnements