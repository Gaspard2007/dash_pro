import type { NextPage } from "next";
import Changement_telephone from "@/components/changement-tel";
import ChangementMp from "@/components/changementmp";
const Scurit: NextPage = () => {
  return(
  <div className="flex flex-col" style={{marginTop:'25px'}}>
    <div className=" text-lg outline-none bg-white self-stretch relative rounded-8xs box-border  z-[1] border-[1px] border-solid border-gainsboro-500" style={{paddingBottom:'22px', paddingLeft:'11px',paddingRight:'11px'}}>
      <div className="flex flex-row justify-start items-center">
        <div className="flex items-center">
          <img src="" alt="" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-base">Mot de passe</h3>
          <span className="text-sm">Dernière modification 22 sep 2023, 10:30:55 AM</span>
        </div>
        <div>
          <ChangementMp/>
        </div>
      </div>
    </div>
    <div className=" text-lg outline-none bg-white self-stretch relative rounded-8xs box-border  z-[1] border-[1px] border-solid border-gainsboro-500" style={{paddingBottom:'22px', paddingLeft:'11px',paddingRight:'11px', marginTop:'20px'}}>
      <div className="flex flex-row justify-start items-center">
        <div className="flex items-center">
          <img src="" alt="" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-base">Vérification du numéro de téléphone</h3>
          <span className="text-sm">+33 06 67 56 09 34</span>
        </div>
        <div className="flex flex-row">
          <Changement_telephone/>
          <button className="flex justify-end-center text-lg rounded  cursor-pointer" style={{padding:'11px',marginTop:'15px', color:'#EE1212', background:'#FFF5F5'}}>Supprimer</button>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Scurit;