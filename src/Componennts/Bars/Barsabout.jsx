import Bottom from '../Main/Bottom'
import Aboutslider from './Aboutslider'
import Aboutslider2 from './Aboutslider2'
import Aboutslider3 from './Aboutslider3'
import './Barsabout.scss'

export default function Barsabout() {

    return <div className="barsabout">

        <div className="aboutvideo1">
            <video style={{ width: "100%", height: "100vh" }} autoPlay loop muted >
                <source src='https://www.brabus.com/_Resources/Persistent/2/4/5/8/245894cfbefa2d243170a6289d48145929065771/Car%20boat%20transition%20NEW_WEB_NA%20%28wo%20logo%29.mp4' />
            </video>
        </div>

        <div className="aboutdiv1">
            ABOUT
        </div>
        <div className="aboutdiv2">
            <p className='p1'>
                <span>BRABUS.</span>MODERN, INDIVIDUAL LUXURY.
            </p>
            <p className='p2'>
                BRABUS is a leading global luxury mobility brand based in the heart of Germany’s Ruhr Region. Renowned <br />
                among enthusiasts in over 100 countries for the creation of high-end supercars and as automotive <br />
                individualization experts since 1977, BRABUS offers a highly diversified product portfolio defined by the 1- <br />
                Second-Wow effect that underlines its customers’ unique personalities. BRABUS believes in driving innovation <br />
                through cutting-edge technology, unwavering attention to detail and the use of only the highest quality materials <br />
                – relying on decades of expertise to enable maximum individuality every single day.
            </p>
        </div>

        <div className="aboutdiv3">
            <p className='p1'>
                <span>BRABUS MARINE.</span>
                REDEFERINING PERFORMRNCE DAY BOATING.
            </p>
            <p className='p2'>
            BRABUS Marine is the result of the cutting-edge alliance between two of the most renowned companies in their <br />
             respective genres. Bringing together the long-established, high-performance luxury automotive car producer <br />
              BRABUS and the award-winning Finnish boat builder Axopar Boats, to redefine luxury day boating through a <br />
               range of ultra-exclusive and exciting powerboats.
            </p>
        </div>

        <div className="aboutvideo1">
            <video style={{ width: "100%", height: "100vh" }} autoPlay loop muted >
                <source src='https://www.brabus.com/_Resources/Persistent/0/c/6/4/0c649efbf347b2735959efceed77716a81f1ca19/Line%20transition%20car-boat%20NEW.mp4' />
            </video>
        </div>


        <div className="aboutdiv4">
            <p className='p1'>
            THE CORE OF BRABUS MARINE
            </p>
            <p className='p2'>As one of the world’s most iconic boat brands specializing in luxury products for markets around the world, <br />
             BRABUS Marine is taking performance, functionality and luxury to the next level.
            </p>
        </div>

        <Aboutslider />

        <div className="aboutdiv4">
            <p className='p1'>CONFIDENT PERFOMANCE
            </p>
            <p className='p2'>All of our boats are characterized by superior performance courtesy of the latest high-tech engine technology. <br />
              Through an unwavering commitment to perfection and a pursuit to redefine the superlative, the BRABUS <br />
               Shadow range offers  exceptional in-class power, an unparalleled driving experience and endless “go- <br />
               anywhere” capabilities. 
            </p>
        </div>

        <Aboutslider2 />

        <div className="aboutdiv3">
            <p className='p1'>PREMIUM LUXURY AND LOVE FOR DETALIL
            </p>
            <p className='p2'>Our dual-personality design ensures that our performance figures do not come at the expense of on-board <br />
             luxury. We guarantee sophisticated comfort as well as exclusivity on and below deck designed for a selected <br />
              group of boat owners who wish to enjoy only the very best boating experience. 
            </p>
            <p className='p2'>
            The BRABUS Shadow range was developed to impress; with a wide selection of bold, instantly recognizable <br />
             design features, as well as striking aesthetics underlining every inch of the hull down to the smallest detail. 
            </p>
        </div>

        <Aboutslider3 />

        <div className="aboutdiv3">
            <p className='p1'>FUNCTIONALITY & SMART INOVATION 
            </p>
            <p className='p2'>
Beyond the right looks and performance, BRABUS Marine as a brand stands for accessibility, comfortable <br />
 handling and unmatched drivability. Through a 100 % tech driven development approach, we combine <br />
  functionality with ease of movement. <br />
All our BRABUS Shadows are packed with smart innovations, finest technical solutions and supreme comfort.
            </p>
        </div>

        <div className="supboatsbottom">
            <div className="div1">
                <img src="https://www.brabus.com/_Resources/Persistent/0/3/a/4/03a40f4cabe77e533e4ce532ee152914ef7582b9/Facebook%20Post%2024.02.-960x504.jpg" alt="" />
            </div>
            <div className="div2">
                <p className='p1'>FOLLOW US AROUND THE WORLD</p>
                <p className='p2'>Exclusive behind the scenes & mesmerizing moments on our social media channels</p>
                <div className="btdiv">
                    <button>CHECK US OUT ON INSTAGRAM</button>
                </div>
            </div>
        </div>

  <Bottom />

    </div>
}