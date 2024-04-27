'use client'
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import React from 'react';
import 'draft-js/dist/Draft.css';
import ModelServicePro from "@/components/modelServicesPro";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const MesServices:NextPage=()=>{
    const [visibleServices, setVisibleServices] = useState(4);
    const [trier, setTrier] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTrier(event.target.value as string);
  };

    return(
        <div style={{paddingLeft:'3%', paddingRight:'3%', paddingBottom:'3%'}}>
          <div>
            
              <div className="flex justify-between items-center">

                <span>Mes services</span>
                <div>
                
                </div>
                <div className="flex items-end">
                  <div className="flex flex-col justify-end">
                    <p className="" style={{marginRight:'4%'}}>Trier par :</p>
                    <div className="" style={{width:'150px'}}>
                      <FormControl fullWidth size="small">
                        <InputLabel id="demo-simple-select-label">Trier</InputLabel>
                          <Select value={trier} label="Trier" onChange={handleChange}>
                            <MenuItem value={'recent'}>Récent</MenuItem>
                            <MenuItem value={'a-z'}>Titre A-Z</MenuItem>
                            <MenuItem value={'categorie'}>Categorie</MenuItem>
                            <MenuItem value={'prix'}>Prix</MenuItem>
                          </Select>
                      </FormControl>
                    </div>
                    
                  </div>
                  
                  <Link className="cursor-pointer" style={{marginLeft:'20px'}} href={'/dashboard_pro/services/ajouterService'}><button className="bg-black text-white rounded text-lg cursor-pointer" style={{padding:'10px'}}><img style={{marginRight:'10px', marginTop:'-5px', marginBottom:'-5px'}} src="/plus-2.svg"></img>Ajouter un service</button></Link>
                </div>
              </div>
              <div >
           
            {[...Array(visibleServices)].map((_, index) => (
              <div key={index}>
                <div className="text-base">
                <ModelServicePro />
                </div>
              </div>
            ))}
            </div>
            </div>
  </div>
    )
}
export default MesServices