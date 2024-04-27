'use client'
import AbonnementPro from "@/components/abonnementPro";
import ReservationsPro from "@/components/modelReservationPro";
import { NextPage } from "next";

import Link from "next/link";
const abonnement =
    {
        abonnement:'null',
        dateRenouvellement:'17 Mars 2024'
    }

const TableauDeBord:NextPage=()=>{
   
    return(
    <div>
        <br />
        <span>Bienvenue</span>
        <br />
        <div className="text-base">
            <p>Bonjour Miss Elsa (vous n’êtes pas Miss Elsa ? Déconnexion)</p>
            <p>À partir du tableau de bord de votre compte, vous pouvez visualiser vos commandes récentes, gérer vos réservations  ainsi que changer votre mot de passe et les détails de votre compte.</p>
        </div>
        <br />
        <div>
            {abonnement.abonnement === 'mensuel' &&(
                <div>
                <span>Abonnement actuel</span>
                <br />
                <br />
                    <div className="rounded" style={{border:'solid 2px #EAEAEA', padding:'3%'}}>
                    <span className="text-base">Abonnement gestion planning mensuel</span>
                    <br />
                    <span className="text-base">Date de renouvellement : <span className="text-gray-200">{abonnement.dateRenouvellement}</span></span>
                    <br />
                    <br />
                    <div className="flex ">
                        <button className="text-base rounded" style={{background:'#FFF5F5', color:'#F82424', padding:'8px'}}>Annuler l'abonnement</button>
                        <button style={{padding:'8px', marginLeft:'10px'}} className="rounded text-white bg-black text-base">Mettre à niveau</button>
                    </div>
                </div>
                </div>
            )}
            {abonnement.abonnement === 'annuel' &&(
                <div>
                <span>Abonnement actuel</span>
                <br />
                <br />
                    <div className="rounded" style={{border:'solid 2px #EAEAEA', padding:'3%'}}>
                    <span className="text-base">Abonnement gestion planning annuel</span>
                    <br />
                    <span className="text-base">Date de renouvellement : <span className="text-gray-200">{abonnement.dateRenouvellement}</span></span>
                    <br />
                    <br />
                    <div className="flex ">
                        <button className="text-base rounded" style={{background:'#FFF5F5', color:'#F82424', padding:'8px'}}>Annuler l'abonnement</button>
                        
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
        {abonnement.abonnement === 'annuel' &&(
            <div>
                <span>Réservations récentes</span>
                <br />
                <br />
                <div style={{}}>
                    <ReservationsPro/>
                </div>
                <br />
                <div className="flex justify-center items-center">
                    <button className="bg-black text-white text-lg rounded" style={{padding:'8px'}}>Voir toutes les réservations</button>
                </div>
            </div>
        )}
        {abonnement.abonnement === 'mensuel' &&(
            <div>
                <span>Réservations récentes</span>
                <br />
                <br />
                <div style={{}}>
                    <ReservationsPro/>
                </div>
                <br />
                <div className="flex justify-center items-center">
                    <button className="bg-black text-white text-lg rounded" style={{padding:'8px'}}>Voir toutes les réservations</button>
                </div>
            </div>
        )}
        {abonnement.abonnement === 'null' &&(
            <span className="text-sm" style={{color:'#BCBCBC'}}>* Aucune réservation ne peut être consultée ou prise sans un abonnement</span>
        )}
        
        
    </div>
    )
}
export default TableauDeBord