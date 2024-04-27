'use client'

import { NextPage } from "next"
import Link from "next/link"

const ModelService:NextPage=()=>{
    return(
        <div style={{border:'solid 2px #ECECEC', padding:'25px', marginTop:'5%'}} className="flex justify-between items-start rounded">
        <div className="flex flex-col justify-start items-start" style={{width:'70%'}}>
            <button style={{background:'#ECECEC'}} className="text-lg rounded py-2 px-4">Coupe femme</button>
            <h2>Lissage brésilien</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae ex temporibus culpa quis blanditiis
                eligendi. Quidem aliquam iste possimus ratione reiciendis pariatur odit maiores sunt omnis. Suscipit, non
                aspernatur.
            </p>
        </div>
        <div className="flex flex-col items-end justify-between p-4">
            <h1 style={{fontSize:'250%'}} className="font-bold">65 €</h1>
            <Link href={'/backupPro/rdv'}>
                <button className="cursor-pointer bg-black text-lg text-white rounded py-3 px-6 mt-4">Réserver</button>
            </Link>
        </div>
    </div>
    
    )
}
export default ModelService