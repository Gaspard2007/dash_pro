import { NextPage } from "next";
import Link from "next/link";

const AbonnementPro:NextPage=()=>{
    const test = [{
        statut:'inWork',
        periode:'mensuel',
        debut:'17 Février 2024',
        fin:'17 Mars 2024',
        prix:19

    }]
    return(
        <div style={{width:'100%'}}>
          <div style={{ paddingRight: '5%' }}>
            <div className="text-base rounded" style={{ border: 'solid 2px #EAEAEA', margin: '0 auto', padding: '20px' }}>
                <span className="text-lg">Abonnement Mensuel</span>
                <br /><br />
                <div className="flex justify-between">
                    <span style={{color:'gray'}}>Abonnement gestion planning mensuel</span>
                    <div className="flex flex-col">
                        <span style={{ fontWeight: '700' }}>19 €</span><span>/Mois</span>
                    </div>
                </div>
                <br />
                <div className="flex justify-between">
                    <span>Essai gratuit pendant 1 mois</span>
                    <span>19 € facturés chaque mois</span>
                </div>
                <br />
                <span style={{color:'gray'}}>Abonnement sans engagement, résiliable à tout moment et sans frais.</span>
                <br /><br />
                <Link href={''}>
                    <button style={{ padding: '9px', borderRadius: '5px', backgroundColor: 'black', color: 'white', fontSize: '16px', cursor: 'pointer' }}>
                        Je m'abonne
                    </button>
                </Link>
            </div>
        </div>
        <br />
        <br />
            <div style={{ paddingRight: '5%' }}><div className="text-base rounded" style={{ border: 'solid 2px #EAEAEA', margin: '0 auto', padding: '20px' }}>
                <span className="text-lg">Abonnement Annuel</span>
                <br /><br />
                <div className="flex justify-between">
                    <span style={{color:'gray'}}>Abonnement gestion planning annuel</span>
                    <div className="flex flex-col">
                        <span style={{ fontWeight: '700' }}>16. 66 €</span><span>/Mois</span>
                    </div>
                </div>
                <br />
                <div className="flex justify-between">
                    <span>Essai gratuit pendant 1 mois</span>
                    <span>200 € facturés à l'année</span>
                </div>
                <br />
                <span style={{color:'gray'}}>Abonnement sans engagement, résiliable à tout moment et sans frais.</span>
                <br /><br />
                <Link href={''}>
                    <button style={{ padding: '9px', borderRadius: '5px', backgroundColor: 'black', color: 'white', fontSize: '16px', cursor: 'pointer' }}>
                        Je m'abonne
                    </button>
                </Link>
            </div>
        </div>
        </div>
    )
}
export default AbonnementPro