const Footer: React.FC = () => (
    <div className="bg-black text-white" style={{paddingLeft:'4%', paddingRight:'4%', marginTop:'10%'}}>
        <div className="flex justify-center" style={{padding:'5%'}}>
            <span className="text-lg">Suivez nous sur les réseaux</span>
            <img style={{marginLeft:'3%'}} src="/instagramWhite.svg" alt="" />
            <img style={{marginLeft:'3%'}}src="/facebookWhite.svg" alt="" />
            <img style={{marginLeft:'3%'}}src="/youtubeWhite.svg" alt="" />
            <img style={{marginLeft:'3%'}}src="/linkedinWhite.svg" alt="" />
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'10%'}} className="flex justify-center">
            <div className="flex flex-col">
                <h1>Flair</h1>
                <div style={{width:'30%', height:'2px'}} className="bg-white"></div>
                <br />
                <span>Qui sommes-nous</span>
                <br />
                <span>Contact</span>
                <br />
                <span>Blog</span>
            </div>
            <div className="flex flex-col">
                <h1>Louer un poste</h1>
                <div style={{width:'30%', height:'2px'}} className="bg-white"></div>
                <br />
                <span>Coiffure &make up</span>
                <br />
                <span>Onglerie</span>
                <br />
                <span>Cabine</span>
                <br />
                <span>Salle de formation</span>
            </div>
            <div className="flex flex-col">
                <h1>Business Booster</h1>
                <div style={{width:'30%', height:'2px'}} className="bg-white"></div>
                <br />
                <span>Coaching: Choisissez la bonne formation</span>
                <br />
                <span>Coaching: réussir après la formation</span>
                <br />
                <span>Coaching: Instagram</span>
                <br />
                <span>Coaching: développement commercial</span>
            </div>
            <div className="flex flex-col">
                <h1>Info</h1>
                <div style={{width:'30%', height:'2px'}} className="bg-white"></div>
                <br />
                <span>Mentions légales</span>                <br />
                <span>Conditions générales de vente</span>                <br />
                <span>Politique de confidentialité</span>                <br />
                <span>Condition générale d'uttilisation</span> <br />
                <span>FAQ</span>                <br />
           </div>
        </div>
        <br />
        <div style={{width:'100%', height:'1px'}} className="bg-white flex justify-center"></div>
        <br />
        <div className="flex justify-center">
            <span>© 2024 MyFlair.fr — Tous droits réservés — Propulsé par Webinflu</span>
        </div>
        <br />
    </div>
  );
  
  export default Footer;