import { useContext, useState } from 'react';
import './Bars.scss';
import { Maincont } from '../../App';


export default function Bars(){
  
    const barscont = useContext(Maincont);
   
    const [plus,setPlus] = useState(true)
    const [plus2,setPlus2] = useState(true)
    const [plus3,setPlus3] = useState(true)
    const [plus4,setPlus4] = useState(true)

   //  if(!plus){
   //    setPlus2(true);
   //    setPlus3(true);
   //    setPlus4(true);
   //  }else if(!plus2){
   //    setPlus2(true);
   //    setPlus(true);
   //    setPlus4(true);
   //  }else if(!plus3){
   //    setPlus2(true);
   //    setPlus(true);
   //    setPlus4(true);   
   //  }else if(!plus4){
   //    setPlus2(true);
   //    setPlus3(true);
   //    setPlus(true);
   //  }
 
    if(barscont.menubars == "bars"){
      
        return<div className="bars">
        <div className="barsdiv1">
             <div onClick={()=>{
                barscont.setMenubars("")
             }} className="barsdiv11">
             <div>
              {/* <i  class="fa fa-times" aria-hidden="true"></i> */}

             </div>
             <span className='span1'></span>
             <span className='span2'></span>
             </div>
            <div className="barsdivcenter">
            <div onClick={()=>{
                barscont.setMmenu("")
            }} className='barsdivhome'>
                HOME
             </div>
             <div>
                <p>CARS</p>
                {plus ?
                <div onClick={()=>{
                  setPlus(false);
                 }} className='barsdivcenterplus'>
                  <span className='span1'></span>
                  <span className='span2'></span>
                </div>
                : 
               <div onClick={()=>{
                  setPlus(true);
                 }} className='barsdivcenterplus2'>
                  <span className='span1'></span>
                  <span className='span2'></span>
                </div>}
             </div>
             { plus == false ? <div onClick={()=>{
               barscont.setMenubars("");
                barscont.setMmenu("supercars")
             }} className="divminplus">SUPERCARS</div> : ""}
           
           { plus == false ?  <div  onClick={()=>{
                barscont.setMmenu("tuning")
               barscont.setMenubars("");
             }} className="divminplus">TUNING</div>  : ""}
               
               { plus == false ? <div onClick={()=>{
                barscont.setMmenu("cars4sale")
               barscont.setMenubars("");
             }} className="divminplus">CAR FOR SALE</div> : ""}
            
            { plus == false ? <div onClick={()=>{
                barscont.setMmenu("classics")
               barscont.setMenubars("");
             }} className="divminplus">CLASSICS</div> : ""}

              { plus == false ? <div onClick={()=>{
                barscont.setMmenu("sonder")
               barscont.setMenubars("");
             }} className="divminplus">SONDERSCHUTZ</div> : ""}

             <div>
                <p>BOATS</p>
               {plus2 ?<div onClick={()=>{
                  setPlus2(false);
                 }} className='barsdivcenterplus'>
                  <span className='span1'></span>
                  <span className='span2'></span>
                </div> :
                  <div onClick={()=>{
                     setPlus2(true);
                    }} className='barsdivcenterplus2'>
                     <span className='span1'></span>
                     <span className='span2'></span>
                   </div>
                }

             </div>
            
             { plus2 == false ? <div onClick={()=>{
                barscont.setMmenu("marine")
               barscont.setMenubars("");
             }} className="divminplus">BRABUS MARTINE</div> : ""}

             { plus2 == false ? <div onClick={()=>{
                barscont.setMmenu("sboats")
               barscont.setMenubars("");
             }} className="divminplus">SUPERBOATS</div> : ""}

            { plus2 == false ? <div onClick={()=>{ 
                barscont.setMmenu("about")
               barscont.setMenubars("");
             }} className="divminplus">ABOUT</div> : ""}

            { plus2 == false ? <div onClick={()=>{ 
                barscont.setMmenu("fdiler")
               barscont.setMenubars("");
             }} className="divminplus">FIND A DILER</div> : ""}

             { plus2 == false ? <div onClick={()=>{ 
                barscont.setMmenu("pmedia")
               barscont.setMenubars("");
             }} className="divminplus">PRESS & MEDIA </div> : ""}

             <div className='barsdivhome'>
                FASHION 
             </div>

             <div>
                <p>COLLABORATIONS</p>
                {plus3 ?<div onClick={()=>{
                  setPlus3(false);
                 }} className='barsdivcenterplus'>
                  <span className='span1'></span>
                  <span className='span2'></span>
                </div> :
                  <div onClick={()=>{
                     setPlus3(true);
                    }} className='barsdivcenterplus2'>
                     <span className='span1'></span>
                     <span className='span2'></span>
                   </div>
                }
             </div>
             {plus3 == false ? <div onClick={()=>{
                barscont.setMmenu("brxsmart")
               barscont.setMenubars("");
               }}  className="divminplus" >BRABUS X SMART</div> : ""}
 
             {plus3 == false ? <div onClick={()=>{
                barscont.setMmenu("brxktm")
               barscont.setMenubars("");
               }}  className="divminplus" >BRABUS X KTM</div> : ""}


             {plus3 == false ? <div onClick={()=>{
                barscont.setMmenu("brxpan")
               barscont.setMenubars("");
               }}  className="divminplus" >BRABUS X PANERAI</div> : ""}


             {plus3 == false ? <div onClick={()=>{
                barscont.setMmenu("brxjob")
               barscont.setMenubars("");
               }}  className="divminplus" >BRABUS X JOBE</div> : ""}


             {plus3 == false ? <div onClick={()=>{
                barscont.setMmenu("brxawk")
               barscont.setMenubars("");
               }}  className="divminplus" >BRABUS X AWAKE</div> : ""}

               
             <div>
                <p>BRAND</p>
                {plus4 ?<div onClick={()=>{
                  setPlus4(false);
                 }} className='barsdivcenterplus'>
                  <span className='span1'></span>
                  <span className='span2'></span>
                </div> :
                  <div onClick={()=>{
                     setPlus4(true);
                    }} className='barsdivcenterplus2'>
                     <span className='span1'></span>
                     <span className='span2'></span>
                   </div>
                }
             </div>
            
             {plus4 == false ? <div onClick={()=>{
                barscont.setMmenu("wwa")
               barscont.setMenubars("");
               }}  className="divminplus" >WHO WE ARE</div> : ""}
 
             {plus4 == false ? <div onClick={()=>{
                barscont.setMmenu("brhis")
               barscont.setMenubars("");
               }}  className="divminplus" >BRABUS HISTORY</div> : ""}

             {plus4 == false ? <div onClick={()=>{
                barscont.setMmenu("nwevt")
               barscont.setMenubars("");
               }}  className="divminplus" >NEWS AN D EVENTS</div> : ""}

             {plus4 == false ? <div onClick={()=>{
                barscont.setMmenu("barsvideos")
               barscont.setMenubars("");
               }}  className="divminplus" >VIDEOS</div> : ""}
             

             {plus4 == false ? <div onClick={()=>{
                barscont.setMmenu("barskar")
               barscont.setMenubars("");
               }}  className="divminplus" >KARRIERE</div> : ""}
             

             {plus4 == false ? <div onClick={()=>{
                barscont.setMmenu("barstour")
               barscont.setMenubars("");
               }}  className="divminplus" >COMPANY TOUR</div> : ""}



            </div>
        </div>
    </div>

    
    }
    
}