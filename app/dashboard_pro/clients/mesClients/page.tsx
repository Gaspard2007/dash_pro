
import { NextPage } from "next";
import Link from "next/link";
const listtest =[
    {
        id:0,
        image:'',
        statut:'boutique',
        nom:'Miss',
        prenom:'Kitty',
        email:'miss.kitty@gmail.com',
        numerosTel:'06 03040506',
        lieux:'06 rue des alpes, 75016 Paris France'
    },
    {
        id:1,
        image:'',
        statut:'flair',
        nom:'Luna',
        prenom:'Berçon',
        email:'luna.berc@gmail.com',
        numerosTel:'06 0912134576',
        lieux:'06 rue des alpes, 75016 Paris France'
    }
]
const MesClients:NextPage=()=>{
    return(
        
        <div className="mt-8" style={{width:'60%'}}>
            <br />
            <span>Mes clients</span>
            {listtest.map(clients =>(<div className="flex flex-col items-start rounded" style={{ border: 'solid 2px #EAEAEA', paddingLeft: '7%', paddingTop:'7%', paddingBottom:'7%', width:'95%', marginTop:'10%'}}>
            <div key={clients.id} className="flex items-center" style={{width:'300px'}}>
                <img
                    className="w-[90px] h-[90px] relative rounded-41xl object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/profil.avif"
                />
                {clients.statut === 'boutique' &&(
                    <button className="rounded text-lg" style={{ color: '#4C40ED', background: '#F7F7FF', padding: '9px', marginLeft: '30px' }}>Client hors Flair</button>
                )}
                {clients.statut === 'flair' &&(
                    <button className="rounded text-lg" style={{ color: 'black', background: '#EAEAEA', padding: '9px', marginLeft: '30px' }}>Client Flair</button>
                )}
                
            </div>
            <br /><br />
            <div className="flex text-base" style={{}}>
               
                <div className="flex flex-col" style={{ marginRight: '30px', fontWeight: '700' }}>
                    <span>Nom</span>
                    <span style={{ marginTop: '10px' }}>Prénom</span>
                    <span style={{ marginTop: '10px' }}>Email</span>
                    <span style={{ marginTop: '10px' }}>Téléphone</span>
                    <span style={{ marginTop: '10px' }}>Adresse</span>
                </div>
                
                <div className="flex flex-col">
                    <span>{clients.nom}</span>
                    <span style={{ marginTop: '10px' }}>{clients.prenom}</span>
                    <span style={{ marginTop: '10px' }}>{clients.email}</span>
                    <span style={{ marginTop: '10px' }}>{clients.numerosTel}</span>
                    <span style={{ marginTop: '10px' }}>{clients.lieux}</span>
                </div>
            </div>
            <br />
            <br />
            {clients.statut === 'boutique' &&(
                <div className="flex " style={{ width: '100%', overflowX: 'auto' }}>
                <Link className="no-underline" href={''}><button style={{ background: '#EAEAEA', padding: '10px', marginRight: '10px' }} className="cursor-pointer rounded text-sm">Supprimer</button></Link>
                <Link className="no-underline" href={'/dashboard_pro/clients/reservation/ajouterReservation'}><button style={{ background: '#EAEAEA', padding: '10px', marginRight: '10px' }} className="cursor-pointer rounded text-sm">Créer Réservation</button></Link>
                <Link className="no-underline" href={''}><button style={{ background: '#EAEAEA', padding: '10px', marginRight: '10px' }} className="cursor-pointer text-sm rounded">Consulter Réservations</button></Link>
                <Link className="no-underline" href={'/dashboard_pro/clients/modifierClient'}><button className="bg-black cursor-pointer rounded text-sm text-white" style={{ padding: '9px' }}>Modifier</button></Link>
            </div>
            )}
            {clients.statut === 'flair' && (
                <div className="flex justify-end">
                <button style={{background:'#EAEAEA', padding:'10px'}} className="rounded text-base cursor-pointer">Consulter ses réservations</button>
            </div>
            )}
            
        </div>
        ))}
        
        </div>   
    )
}
export default MesClients