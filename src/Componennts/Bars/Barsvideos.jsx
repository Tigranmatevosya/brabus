import Bottom from '../Main/Bottom'
import Image10 from '../Main/Image10'
import './Barsvideos.scss'
import Barsvideosslider from './Barsvideosslider'
import Barsvideosslider2 from './Barsvideosslider2'
import Barsvideosslider7 from './Barsvideosslider3'
import Barsvideosslider4 from './Barsvideosslider4'
import Barsvideosslider3 from './Barsvideosslider4'
import Barsvideosslider5 from './Barsvideosslider5'
import Barsvideosslider6 from './Barsvideosslider6'
import Barsvideosslider8 from './Barsvideosslider8'

export default function Barsvideos(){

    return <div className="barsvideos">

        <div className="barsvideodiv1">
            <video muted loop autoPlay>
                <source src='https://www.brabus.com/_Resources/Persistent/8/2/6/f/826fb3c6407f482a1d3f7d62ad7e2b6ff56db0f4/Masterpiece%20Brandreel_CINE_H264_WEB.mp4' />
            </video>
        </div>
      
      <div className="barsvideodiv2">
        <div>
            <p className='p1'>VIDEOS</p>
            <p className='p2'> WERDEN SIE TEIL UNSERER REISE UND REUEN SIE SICH AUF <br />SPANNENDE INHALTE</p>
            <p className='p3'>Wer sind wir? Wie entsteht ein BRABUS Produkt? Was passiert in der BRABUS Zentrale in Deutschland und in <br /> der Luxusmobilitätsbranche um uns herum?</p>
            <p className='p4'>Schauen Sie auf unseren beiden Kanälen <span>@BRABUS</span> und <span>@constantin_brabus</span> vorbei.</p>
        </div>
      </div>

      <div className="barsvideodiv3">
        <div>
            <p className='p1'>
           BRABUS SIGNATURE NIGHT
            </p>
            <p className='p2'>
           DIE WELTWEIT EINZIGE FASHION SHOW FUR FAHRZEUGE
            </p>
        </div>
      </div>

      <Barsvideosslider />

      <div className="barsvideodiv4">
        <div className="div1">
            <img src="https://www.brabus.com/_Resources/Persistent/4/9/a/f/49afad1374f3a5df90425769777f153547774c93/The_official_BRABUS.jpg" alt="" />
        </div>
        <div className="div2">
            <div>
                <p className='p1'>@BRABUS</p>
                <p className='p2'>Der offizielle BRABUS YouTube Kanal gibt Ihnen den <br />
                 umfassenden Überblick zu allen BRABUS Produkten. <br />
                  Verpasen Sie kein Video mehr zu unseren Produktneuheiten.</p>
                <p className='p2'>Abonnieren Sie unseren <span>KANAL</span></p>
            </div>
        </div>
      </div>

      <div className="barsvideodiv3">
        <div>
            <p className='p1'>
            BRABUS SUPERCARS
            </p>
            <p className='p2'>
          UBERRAGENDE PERFORMANCE UND EIN ULTIMATIV LUCURIOSES FAHHRGEFUHL
         </p>
        </div>
      </div>
   <Barsvideosslider2 />


   <div className="barsvideodiv3">
        <div>
            <p className='p1'>
            HOW WE CREATE LUXURY
            </p>
            <p className='p2'>
         DEIN VIP-PASS IN DIE WELT DER MASGEFERTIGTEN DREAM CARS
         </p>
        </div>
      </div>

      <Barsvideosslider7 />

      <div className="barsvideodiv3">
        <div>
            <p className='p1'>
               BRABUS MARINE
             </p>
            <p className='p2'>
            DIE NEUDEFEINITION VON LUXUS-DAYBOATING
         </p>
        </div>
      </div>

    <Barsvideosslider4 />
    
    <div className="barsvideodiv5">
       <div>
        <p className='p1'>LUST AUF MEHR? <br />
          BESUCHEN SIE UNS BEI YOUTUBE!
     </p> 
       <p className='p2'>
       <button>BRABUS YOUTUNE CHANNEL</button>
       </p>
       </div>
    </div>

    <div className="barsvideodiv4">
        <div className="div2">
            <div>
                <p className='p1'>@CONSTANTIN_BRABUS</p>
                <p className='p2'>BRABUS CEO Constantin Buschman gibt seinem eigenen <br />
                 YouTube-Kanal umfassende Insights in sein Leben als <br />
                 Unternehmer und einen tiefen Einblick hinter die Kulissen.</p>
                <p className='p2'>Besuchen Sie den persönlichen <span>KANAL</span>  unseres CEO´s.</p>
            </div>
        </div>
        <div className="div1">
            <img src="https://www.brabus.com/_Resources/Persistent/9/1/0/f/910f81522d3462429d41bef45cc3529848b8fb87/Unbenannt-1.jpg" alt="" />
        </div>
      </div>

      <div className="barsvideodiv3">
        <div>
            <p className='p1'>
            TECH TALK
             </p>
            <p className='p2'>
           TECHNISCHE DETAILS AUS ERSTER HAND - MADE BY OUR CEO & CTO
         </p>
        </div>
      </div>

     <Barsvideosslider5 />

      <div className="barsvideodiv3">
        <div>
            <p className='p1'>
            FANTASY CAR COLLECTION
             </p>
            <p className='p2'>
            TRAUMGARAGE & UNLIMITIERES BUDGET - UNSERE GÄSTE IM TALK
         </p>
        </div>
      </div>

       <Barsvideosslider6 />

      <div className="barsvideodiv3">
        <div>
            <p className='p1'>
            FANTASY CAR COLLECTION
             </p>
            <p className='p2'>
           IHR FRAGT, WIR ANTWORTEN! - FRAGRN DER VRABUS COMMUNITY            
         </p>
        </div>
      </div>

     <Barsvideosslider8 />

     <div className="barsvideodiv5">
       <div>
        <p className='p1'>LUST AUF MEHR? <br />
        WERDEN SIE EIN TEIL DER BRABUS COMMUNITY!
     </p> 
     <p className='p3'>
     Folgen Sie unserem CEO Constantin Buschmann auf Youtube oder Instagram
     </p>
       <p className='p2'>
       <button>GO TO @CONSTANTIN_BRABUS</button>
       </p>
       </div>
    </div>

     <Image10 />
     <Bottom />

    </div>
}