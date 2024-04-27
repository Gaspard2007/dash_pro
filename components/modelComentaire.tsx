'use client'

import StarRating from "./star-rating"

const ModelCommentaire = () =>{
    return(
        <div className="rounded" style={{border:'solid 2px #E7E7E7', padding:'2%', marginTop:'5%'}}>
            
            <div className="flex flex-row items-center justify-between"style={{marginTop:'20px'}}>
          <div className="flex flex-row items-center">
          <div>
            <img className='h-[49px] w-[49px] relative rounded-[50%] object-cover' src="/profil.avif" alt="" />
          </div>
          <div className="flex flex-col" style={{marginLeft:'15px'}}>
            <div className="text-sm relative text-inherit leading-[43.2px] font-normal font-inherit z-[1] mq1050:text-3xl mq1050:leading-[26px]">
             Miss kitty
            </div>
            <div className="text-sm flex items-start text-slategray">
              <p>il y a 1h</p>
            </div>
          </div>
          </div>
          <div className="flex items-center justify-end">
            <StarRating/>
          </div>
        </div>
        <p style={{color:'#939393'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias totam, molestiae autem ex eum! Aspernatur officia impedit, et, repellat ratione voluptatem ipsam in tenetur iste labore culpa laborum eius.</p>
     
        <p>Répondre</p>
        </div>
    )
}
export default ModelCommentaire