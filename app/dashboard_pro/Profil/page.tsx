'use client'
import { Button, ConfigProvider, Switch, Upload } from "antd";
import { NextPage } from "next";
import { useState, useRef, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Profil: NextPage = () => {
    const [statut, setStatut] = useState('')
   
    const [description, setDescription] = useState("");
    const [socialLinks, setSocialLinks] = useState([""]); 
    
    const addSocialLink = () => {
        setSocialLinks([...socialLinks, '']); 
    };
    const deleteLink = (index: number) => {
        const updatedLinks = [...socialLinks];
         updatedLinks.splice(index, 1);
        setSocialLinks(updatedLinks);
    };
   
    const [logo, setLogo] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLogo(event.target.value as string);
  };
  const [images, setImages] = useState<File[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setImages(prevImages => [...prevImages, ...files]);
  };

  const handleDelete = (index: number) => {
    setImages(prevImages => {
      const newImages = [...prevImages];
      newImages.splice(index, 1);
      return newImages;
    });
    if (selectedImageIndex === index) {
      setSelectedImageIndex(null);
    }
  };

  const handleImageSelect = (index: number) => {
    setSelectedImageIndex(index);
  };
  const [ReactQuill, setReactQuill] = useState(null);

  useEffect(() => {
    import("react-quill").then(module => {
      setReactQuill(module.default);
    });
  }, []);

  if (!ReactQuill) {
    return null; 
  }
    return (
        <div style={{width:'100%', paddingRight:'10%'}}>
            <br />
            <div>
                <span>Mon profil public</span>
            </div>
            <br />
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border gap-[15px_0px] ">
                <div className="w-[114px] relative leading-[21.6px] inline-block">
                    Image profil
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[0px_13px] max-w-full text-smi text-slategray">
                    <img
                        className="h-[70px] w-[70px] w-[90px] h-[90px] relative rounded-41xl object-cover z-[2]"
                        alt=""
                        loading="lazy"
                        src="/profil.avif"
                    />
                    <div className="flex flex-col">
                    <div>
                        <div className="flex flex-row items-start justify-start gap-[10px_0px] min-w-[394px] max-w-full mq1050:min-w-full" style={{ margin: '20px' }}>
                            <button style={{padding:'11px'}} className="bg-black text-white text-lg rounded">Télécharger</button>
                            <button
                                className="text-lg rounded"
                                style={{ background:'#EAEAEA', padding:'11px', marginLeft:'20px'}}
                            >Supprimer
                            </button>
                        </div>
                    </div>
                    <div className="self-stretch relative leading-[22.4px]">
                        *La taille de l'image doit être d'au moins 320px. Fichiers autorisés : .png ou .jpg.
                    </div>
                </div>
                </div>
                <br />
                <span style={{fontSize:'130%'}}>Informations Public</span>
             
          <br />
          
                
                    <div className="w-[79px] relative leading-[24px] inline-block">
                        Nom de votre entreprise  <span style={{ color: 'red' }}>*</span>
                    </div>
                  
                    <input
                        className="outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border  border-[2px] border-solid border-gainsboro-500 text-lg"
                        type="text"
                        placeholder="Ex: Milana Beauty"
                        style={{ padding: '1%', width:'100%'}}
                        required
                    />
                    <br />
                  
                    <div className="w-[79px] relative leading-[24px] inline-block">
                        Profession  <span style={{ color: 'red' }}>*</span>
                    </div>
                 
                    <input
                        className="outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[2px] border-solid border-gainsboro-500 text-lg"
                        type="text"
                        placeholder="Ex: Coiffeuse"
                        style={{ padding: '1%',width:'100%' }}
                        required
                    />
                    <br />
                    <label>Description</label>
                <div style={{width:'100%'}}>
                    <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          style={{ border: "solid 2px #EAEAEA", marginTop: "2%" }}
          placeholder="Saisissez la description ici..."
        />
        </div>
                <br />
                
                    <span>Réseaux sociaux</span>

                
                {socialLinks.map((link, index) => (
    <div className="flex flex-col" key={index} style={{ width: '100%', marginTop: '10px' }}>
        <div className="flex">
            <div style={{ width: '80px', height: '70%' }}>
                <FormControl fullWidth>
                    <InputLabel id={`logo-label-${index}`}>Logo</InputLabel>
                    <Select
                        
                        labelId={`logo-label-${index}`}
                        label="Logo"
                        onChange={handleChange}
                    >
                        <MenuItem value="instagram"><img src="/instagram.svg" alt="Instagram" /></MenuItem>
                        <MenuItem value="youtube"><img src="/youtube.svg" alt="Youtube" /></MenuItem>
                        <MenuItem value="facebook"><img src="/facebook.svg" alt="Facebook" /></MenuItem>
                        <MenuItem value="linkedin"><img src="/linkedin.svg" alt="LinkedIn" /></MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
        <br />
        <div className="flex">
            <input
                className="outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[2px] border-solid border-gainsboro-500 text-lg"
                type="url"
                placeholder="Ex: https://www.instagram.com/myflair.coworking/"
                style={{ padding: '1%', width: '100%' }}
                required
            />
            <img src="/minus-circle-red.svg" alt="" style={{ marginLeft: '20px' }} onClick={() => deleteLink(index)} />
        </div>
    </div>
))}
               

                
                <button className="bg-black text-white text-lg flex items-center rounded" style={{ padding: '10px' }} onClick={addSocialLink}>
                    <img className="flex items-center" src="/plus-circle.svg" alt="" style={{ marginRight: '10px' }} />
                    Ajouter un réseau social
                </button>
                    <br />
                
                
                    <span>Contact public</span>
                    
       
                    <div className="flex flex-row items-end" style={{width:'100%'}}>
    <div style={{width:'100%'}}>
        <label>Numéros de téléphone</label>
        <br />
        <br />
        <div className="flex">
            <button style={{ marginRight:'10px'}} className="rounded bg-white text-lg box-border border-[2px] border-solid border-gainsboro-500 ">+33</button>
            <input className="rounded outline-none bg-white self-stretch h-[42px] relative box-border border-[2px] border-solid border-gainsboro-500 text-lg" type="text" style={{ padding: '1%', width:'100%' }} required/>
        </div>
    </div>
    <div className="w-1/2 ml-4" style={{marginLeft:'10%', width:'100%'}}>
        <label>Email</label>
        <br />
        <br />
        <input className="outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[2px] border-solid border-gainsboro-500 text-lg" type="email" style={{ padding: '1%', width:'100%' }} required />
    </div>
</div>
                    <div className="flex items-center">
                        <p>Mes services sont uniquement à domicile</p>
                        <div style={{ marginLeft: '10px' }}>
                            <Switch/>
                        </div>
                    </div>
                    <label>Adresse</label>
                  
                    
                    <input type="text"  className="outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[2px] border-solid border-gainsboro-500 text-lg" style={{padding:'1%', width:'100%'}} />
                    <br />
                   
                    
                  
                           
                    <div className="w-[79px] relative leading-[24px] inline-block">
                        Ville  <span style={{ color: 'red' }}>*</span>
                    </div>
                          
                          
                            <input type="text"  className="outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[2px] border-solid border-gainsboro-500 text-lg" style={{padding:'1%', width:'100%'}} />
                        
                        <br />
                        
                    </div>
                    <div className="flex" style={{ width: '100%' }}>
                        <div style={{width:'100%'}}>
                            <label>Code Postal</label>
                            <br />
                            <br />
                            <input
                                className="outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[2px] border-solid border-gainsboro-500 text-lg"
                                type="text"
                               
                                style={{ padding: '1%', width: '100%' }}
                                required
                            />
                        </div>
                        <div style={{ marginLeft: '10%', width:'100%' }}>
                            <label>Pays</label>
                            <br />
                            <br />
                            <input
                                className="outline-none bg-white self-stretch h-[42px] relative rounded-8xs box-border min-w-[250px] border-[2px] border-solid border-gainsboro-500 text-lg"
                                type="text"

                                style={{ padding: '1%', width: '100%' }}
                                required
                            />
                        </div>
                    </div>
                    
            <br />
                <label>Complément d'adresse</label>
                <br />
                <br />
                <textarea className="outline-none rounded text-lg" style={{width:'100%', border:'2px solid #EAEAEA', height:'250px'}} name=""></textarea>
                <br />
                <br />
                <label>Image</label>
                <br />
                <br />
                <div
      onDrop={handleDrop}
      onDragOver={e => e.preventDefault()}
      style={{
        width: '100%',
        height: '200px',
        border: '2px dashed #aaa',
        borderRadius: '5px',
        textAlign: 'center',
        padding: '20px',
        marginBottom: '20px'
      }}
      
    >
      <p className="flex items-center justify-center ">Glissez et déposez des fichiers ici</p>
      <p className="text-sm">Formats pris en charge: JPEG, PNG</p>
    </div>
    <p>Sélectionner une image par défaut</p>
      {images.length > 0 && (
        <div>
          {images.map((file, index) => (
            <div key={index} style={{ position: 'relative', display: 'inline-block', marginRight: '10px' }}>
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                style={{ width: '100px', height: 'auto', marginBottom: '5px' }}
                className="rounded-lg"
              />
              <div style={{ position: 'absolute', top: '5px', right: '5px' }}>
                <button className="bg-red-200 rounded-full" style={{ padding: '5px' }} onClick={() => handleDelete(index)}>
                  <img src="/trashWhite.svg" alt="Delete" />
                </button>
              </div>
              <div className="flex justify-center items-center" style={{ marginTop: '5px' }}>
                <input
                  type="radio"
                  name="selectedImage"
                  checked={selectedImageIndex === index}
                  onChange={() => handleImageSelect(index)}
                />
              
              </div>
            </div>
          ))}
        </div>
      )}
            </div>
    
    );
}

export default Profil;
