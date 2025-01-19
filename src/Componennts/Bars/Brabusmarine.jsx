import Bottom from '../Main/Bottom'
import './Brabusmarine.scss'
import Marineslider from './Marineslider'

export default function Brabusmarine(){

    return <div className="martine">

      <div className="marinevideo">
      <Marineslider />
      </div>

      <div className="marinered">

        <p className='p1'>BRABUS MARINE</p>
        <p className='p2'>REDEFINING MODERN DAY BOATING</p>
        <p className='p3'>BRABUS Marine is devoted to redefine luxury day boating through building and developing an ultra-exclusive, <br />
         supremely exciting new breed of luxury tenders and day boats. Outstanding performance, power and superior <br />
          acceleration, best in class drivability, accompanied by instantly recognizable design and strikingly gorgeous looks <br />
           – that's what forms the DNA of a BRABUS Shadowboat.</p>
      </div>

      <div className="marinevideo2">
      <video style={{width:"100%",height:"100%"}}   autoPlay loop muted >
<source src="https://www.brabus.com/_Resources/Persistent/2/3/f/9/23f9257d7dde7f3d2a998be05d05c9dead8282f7/Brabus%20Shadow%201200_WEBTEASER.mp4" />
</video>
           <div className="marinevideodiv">
            <p className='p1'>THE WORLD OF BRABUS MARINE</p>
            <div>
            <button>ABOUT BRABUS MARINE</button>
            </div>
           </div>
      </div>

      <div className="marineimg1">
        <div className="img1">
           <div>
            <p className='p1'>TROTTING THE GLOBE IN <br /> STYLE</p>
            <p className='p2'>BRABUS SHADOW 500 T-TOP BLACK <br /> OPS</p>
            <button>DISCOVER</button>
           </div>
        </div>
        <div className="video2">
        <video style={{width:"100%",height:"100%"}}   autoPlay loop muted >
       <source src="https://www.brabus.com/_Resources/Persistent/a/5/4/d/a54d410718bb4945c9c9e44e8d3c1b681bb326c0/Zoom%20In%20-2.mp4" />
</video>
        </div>
      </div>

      <div className="marineimg2">
      <div>
            <p className='p1'>SHADOW SUPERBOATS</p>
            <p className='p2'>A WORLD OF STRONKING LUXURY & PREMIUM PERFORMANCE</p>
            <button>ALL MODELS</button>
           </div>
      </div>
      <div className="marineimg3">
      <div>
            <p className='p1'>BRABUS X JOBE </p>
            <p className='p2'>SHADOW COLLACTION</p>
            <button>DISCOVER MORE</button>
           </div>
      </div>

      <div className="marinevideo2">
      <video style={{width:"100%",height:"100%"}}   autoPlay loop muted >
     <source src="https://www.brabus.com/_Resources/Persistent/7/8/9/c/789cbaf7980e8351944c6a77fcfafe8c6e1dd4eb/Freediving%20mallorca%20full%20video%201280x720%20II.mp4" />
    </video>
      <div>
            <p className='p1'>BRABUSIZE YOUR ADVENTURE </p>
            <p className='p2'>ALL AROUND THE GLOBE</p>
           </div>
      </div>

      <div className="marineimg4">
      <div>
            <p className='p1'>DELER SEARCH</p>
            <p className='p2'>FIND YOUR CLOSEST DEALER</p>
            <button>YOUR DEALER</button>
           </div>
      </div>

      <div className="marinevideo3">
      <video style={{width:"100%",height:"100%"}}  autoPlay loop muted >
     <source src="https://www.brabus.com/_Resources/Persistent/f/b/9/9/fb9918dc240389d162a8b07e9588c06cd45894b2/Loops-BM-Follow%20us%201080p%20small.mp4" />
    </video>
      <div>
            <p className='p1'>FOLLOW US AROUND <br /> THE WORLD</p>
              <button>VISIT US ON INSTAGRAM</button>
           </div>
      </div>

      <div className="buttonimg2">
      <div>
        <div>STAY UP TO DATE !</div>
        <div className='div2'>BRABUS MARTINE NEWSLETTER</div>
      </div>
  </div>

   <Bottom />

    </div>
}