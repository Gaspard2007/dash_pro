'use client'
import Next, { NextPage } from 'next'
import Link from 'next/link'
const Commande:NextPage = ()=>{
    return(
        <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <img src="/2023-12-cropped-1.png" alt="" />
        </div>
  
        <h1>Votre commande</h1>
        <br />
        <div className="flex flex-col justify-center">
          <h3>Merci pour votre commande</h3>
          <div>
      
              
            </div>
            <table>
                      <thead >
                          <tr >
                              <th style={{fontWeight:'normal'}}>NUMÉROS DE COMMANDE :</th>
                              <th style={{fontWeight:'normal'}}>DATE :</th>
                              <th style={{fontWeight:'normal'}}>EMAIL :</th>
                              <th style={{fontWeight:'normal'}}>TOTAL :</th>
                              <th style={{fontWeight:'normal'}}>MODE DE PAIMENT :</th>
                          </tr>
                      </thead>
                  <tbody>
                      <tr>
                          <th align="left">#001</th>
                          <th align="left">23 MARS 2024</th>
                          <th align="left">mon@email.com</th>
                          <th align="left">2000 €</th>
                          <th align="left">STRIPE CARTE BLEU</th>
                      </tr>
                  </tbody>
              </table>
              <br />
  
              <div style={{backgroundColor:'#F5F5F5', paddingLeft:'10px'}}>
                  <h3 className="flex flex-col justify-center">DETAILS DE LA COMMANDE :</h3>
              </div>
              <br />
              <table>
      <thead>
          <tr>
              <th align="left">PRODUIT</th>
              <th align="left">DATE DE RÉSERVATION</th>
              <th align="left">QTÉS</th>
              <th align="left">TOTAL</th>
          </tr>
      </thead>
      <hr />
      <tbody>
          <tr>
              <th align="left" >LOCATION POSTE COIFFURE & MAKE UP</th>
              <td  >
                  <tr className="flex flex-col">
                      <td style={{fontWeight:'normal'}} align="center">04.06.2024</td>
                      <td style={{fontWeight:'normal'}} align="center">04.06.2024</td>
                      <td style={{fontWeight:'normal'}} align="center">04.06.2024</td>
                  </tr>
              </td>
              <td>
                  <tr className="flex flex-col ">
                      <td align="center">1</td>
                      <td align="center">1</td>
                      <td align="center">1</td>
                  </tr>
              </td>
              <td>
                  <tr className="flex flex-col">
                      <td align="center">70 €</td>
                      <td align="center">45 €</td>
                      <td align="center">30 €</td>
                  </tr>
                  </td>
          </tr>
      </tbody>
      <hr />
      <tbody>
      <tr className="">
          
              <th align="left">FORMATION LISSAGE</th>
           
             
              <td align="center">04.06.2024</td>
  
              <td align="center">2</td>
              <td align="center">70 €</td>
          </tr>
      </tbody>
      <hr />
      <tbody>
      <th align="left">TOTAL</th>
          <td></td>
          <td></td>
          <td>2000 €</td>
      </tbody>
    <hr />
  </table>
  <div style={{backgroundColor:'#F5F5F5', paddingLeft:'10px'}}>
                  <h3 className="flex flex-col justify-center">ADDRESS DE FACTURATION</h3>
              </div>
            <div className="flex flex-col">
          <br />  
      <span className="font-bold">NOM DE LA SOCIÉTÉ</span>
      <br />
      <span>PRÉNOM ET NOM</span>
      <br />
      <span>NUM ET RUE</span>
      <br />
      <span>CODE POSTAL</span>
      <br />
      <span>TÉLÉPHONE</span>
      <br />
      <span>EMAIL</span>
  </div>
  </div>
  <div style={{height:'2px', width:'100%', background:'#EAEAEA'}}></div>
  <Link href={"examplefile.pdf"} download>
	<img src="/Profil.avif"/>
</Link>
  </div>

  
    )
}
export default Commande