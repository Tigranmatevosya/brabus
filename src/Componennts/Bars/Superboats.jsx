import { useState } from 'react'
import './Superboats.scss'
import Supboatsslider from './Supboatsslider';
import Supboatsslider2 from './Supboatsslider2';
import Supboatsslider3 from './Supboatsslider3';
import Bottom from '../Main/Bottom';

export default function Superboats(){

    

    const superboats = [
        {
            range:"1200",
            image:"https://www.brabus.com/_Resources/Persistent/7/5/e/9/75e9ef79f928a7bc6ed9f7f67c8c9b317894971a/BRABUS%20Shadow%201200%20Render-1400x933.jpg",
            h1:"BRABUS SHADOW 1200 SUN-TOP",
            p2:"PHANTOM GRAY SIGNATURE EDITION",
        },
        {
            range:"1200",
            image:"https://www.brabus.com/_Resources/Persistent/0/9/6/0/096034f3f2b4eb428420fbac51dc0162ed198314/BRABUS%20Shadow%201200%20Cross%20Cabin%20Black%20Ops%20SE-1400x933.jpg",
            h1:"BRABUS SHADOW 1200 XC CROSS CABIN",
            p2:"BLACK OPS SIGNATURE EDITION",
        },
        {
            range:"1000",
            image:"https://www.brabus.com/_Resources/Persistent/a/0/7/8/a078ffddcde8ad618897709bcfbe466b565b35de/BRABUS%20Shadow%201000%20Sun-Top%20Phantom%20Gray%20SE-1400x933.jpg",
            h1:"BRABUS SHADOW 1000 SUN-TOP",
            p2:"PHANTOM GRAY SIGNATURE EDITION",
        },
        {
            range:"1000",
            image:"https://www.brabus.com/_Resources/Persistent/0/8/9/c/089c2a944bb2df0df1b214cf31e437621e7400b3/BRABUS%20Shadow%201000%20Cross%20Cabin%20Black%20Ops%20SE-1400x933.jpg",
            h1:"BRABUS SHADOW 1000 XC CROSS CABIN",
            p2:"BLACK OPS SIGNATURE EDITION",
        },
         {
            range:"900",
            image:"https://www.brabus.com/_Resources/Persistent/f/b/0/4/fb0486aeca9a19d0d10f57c9da697f2d5085f0c4/BRABUS%20Shadow%20900%20Cross%20Cabin%20Stealth%20Green%20SE_neu-1400x933.jpg",
            h1:"BRABUS SHADOW 900 XC CROSS CABIN",
            p2:"STEALTH GREEN SIGNATURE EDITION",
        },
        {
            range:"900",
            image:"https://www.brabus.com/_Resources/Persistent/f/b/0/4/fb0486aeca9a19d0d10f57c9da697f2d5085f0c4/BRABUS%20Shadow%20900%20Cross%20Cabin%20Stealth%20Green%20SE_neu-1400x933.jpg",
            h1:"BRABUS SHADOW 900 SPYDER & SUN-TOP",
            p2:"STEALTH GREEN SIGNATURE EDITION",
        },
        {
            range:"900",
            image:"https://www.brabus.com/_Resources/Persistent/8/5/f/3/85f3dd375715635f182b15feb007c344f7d63652/BRABUS%20Shadow%20900%20Cross%20Cabin%20Black%20Ops%20SE_neu-1400x933.jpg",
            h1:"BRABUS SHADOW 900 XC CROSS CABIN",
            p2:"BLACK OPS SIGNATURE EDITION",
        },
        {
            range:"900",
            image:"https://www.brabus.com/_Resources/Persistent/d/0/9/e/d09ea3bc79577b1ccc1ccf5c7e7c4fa3afc46c12/BRABUS%20Shadow%20900%20Sun-Top%20Black%20Ops%20SE_neu-1400x933.jpg",
            h1:"BRABUS SHADOW 900 SPYDER & SUN-TOP",
            p2:"BLACK OPS SIGNATURE EDITION",
        },
        {
            range:"900",
            image:"https://www.brabus.com/_Resources/Persistent/b/b/5/8/bb5802576a7d2eb39e23b49b3f777cc3b569d822/BRABUS%20Shadow%20900%20Cross%20Cabin%20Deep%20Blue%20SE_neu-1400x933.jpg",
            h1:"BRABUS SHADOW 900 XC CROSS CABIN",
            p2:"DEEP BLUE SIGNATURE EDITION",
        },
        {
            range:"900",
            image:"https://www.brabus.com/_Resources/Persistent/e/f/1/f/ef1ff3475b69c41017c01113d51a79a8c7e1027d/BRABUS%20Shadow%20900%20Sun-Top%20Deep%20Blue%20SE_neu-1400x933.jpg",
            h1:"BRABUS SHADOW 900 SPYDER & SUN-TOP",
            p2:"DEEP BLUE SIGNATURE EDITION",
        },
        {
            range:"900",
            image:"https://www.brabus.com/_Resources/Persistent/5/5/4/8/5548e6ee90785bf55e3234d3e218c7833729a416/CrossCabin_White_Bench-1400x933.jpg",
            h1:"BRABUS SHADOW 900 XC CROSS CABIN",
            // p2:"BLACK OPS SIGNATURE EDITION",
        },
        {
            range:"900",
            image:"https://www.brabus.com/_Resources/Persistent/d/1/6/4/d1645fa66c25c3856fa474a3809fb6caa1fb49f3/BR37_ST_PlatiniumGrey_Cabin-1400x933.jpg",
            h1:"BRABUS SHADOW 900 SPYDER & SUN-TOP",
            // p2:"DEEP BLUE SIGNATURE EDITION",
        },
        {
            range:"500",
            image:"https://www.brabus.com/_Resources/Persistent/6/f/c/2/6fc2c0858e9c9b9e43044bb0acfd7347db8f4ed4/BRABUS%20Shadow%20500%20Cabin%20Black%20Ops%20SE-1400x933.jpg",
            h1:"BRABUS SHADOW 500 CABIN",
            p2:"BLACK OPS LIMITED EDITION",
        },
        {
            range:"500",
            image:"https://www.brabus.com/_Resources/Persistent/1/e/9/a/1e9af619e1c2513d0b1bec42bab46786044f9ee3/BRABUS%20Shadow%20500%20T-Top%20Black%20Ops%20SE-1400x933.jpg",
            h1:"BRABUS SHADOW 500 SPYDER & T-TOP",
            p2:"BLACK OPS LIMITED EDITION",
        },
        {
            range:"500",
            image:"https://www.brabus.com/_Resources/Persistent/8/3/8/2/83826d07b7363635a103addd80565bdf6eda9531/2_BRABUS_Shadow500Cabin_WhiteGrey_Render-1908x1272-1400x933.jpg",
            h1:"BRABUS SHADOW 500 CABIN",
            // p2:"BLACK OPS LIMITED EDITION",
        },
        {
            range:"500",
            image:"https://www.brabus.com/_Resources/Persistent/e/f/e/6/efe6899bf169aba139eb8f564e0cf7b3d1b1ae76/2_BRABUS_Shadow500T-Top_GlacierBlue_CamoWrap-1903x1268-1400x933.jpg",
            h1:"BRABUS SHADOW 500 SPYDER & T-TOP",
            // p2:"BLACK OPS LIMITED EDITION",
        },
        {
            range:"300",
            image:"https://www.brabus.com/_Resources/Persistent/c/b/8/2/cb820f6cda767c16d5b29e2b63c06fb5ac25f7ec/Shadow300_PlatinumGrey_Red_upholstery_Storage-Bench_02_update-1400x933.jpg",
            h1:"BRABUS SHADOW 300 CROSS-TOP EDITION ONE",
            p2:"SIGNATURE EDITION",
        },
        {}
    ]


    const [val,setVal] = useState("0")
    // console.log(val);
    
    
    
   const supboatsmap =  superboats.map((item,key)=>{

     if(val == item.range){
       return <div className="supboatsdiv">
       <img src={item.image} alt="" />
       <p className='p1'>{item.h1}</p>
       <p className='p2'>{item.p2}</p>
   </div>
     }else if(val == "all" || val == "0" ){
        return <div className="supboatsdiv">
       <img src={item.image} alt="" />
       <p className='p1'>{item.h1}</p>
       <p className='p2'>{item.p2}</p>
   </div>
     }
    })
   
    return <div className="superboats">

        <div className="supboatimg1">
            <div>
                <p className='p1'>OVER THE HORIZON IN STYLE</p>
                <p className='p2'>A TRUE ADVENTURER OF RHE SEA</p>
            </div>
        </div>

        <div className="superboatsdiv1">
            <div>
                <p className='h1'>
                SUPERBOATS
                </p>
                <p className='p1'>Discover the BRABUS Shadow range, the individualist's range of superboats with an automotive bloodline. Enjoy <br />
                 the very best exclusive boating experience for absolute individualism, ultimate luxury and seriously impressive <br />
                  power and performance.</p>

                <p className='p1'>Due to the 2024 Boating Season we have some new uncompromising upgrades for you:</p>
                <button>READ MORE</button>
            </div>
        </div>
          
          <div className="boatrange">
           <div>
           <select value={val} name="" id="select" onChange={(e)=>{
            setVal(e.target.value)
           }} >
                <option value="0">Type</option>
                <option value="all" >All</option>
                <option value="1000">1000 Range</option>
                <option value="1200">1200 Range</option>
                <option value="300">300 Range</option>
                <option value="500">500 Range</option>
                <option value="900">900 Range</option>
            </select>
           </div>
          </div>
        <div className="boatsmap">
             <div className='boatsmapdiv'>
             {supboatsmap}
             </div>
        </div>
        <Supboatsslider />
        
        <div className="superboatsdiv12">
            <div>
                <p className='h1'>
                    <p>
                    BLISTERING PERFORMANCE. CAPTIVATIOG ELEGANCE</p> <br />
                YOUR ULTIMATE COMPANION ON THE SEA.

                </p>
                <p className='p1'>A highly exclusive range of luxury tenders and day boats, representing a cool, discerning and incredibly exciting <br />
                 new breed. Outstanding performance, power and superior acceleration, together with easy handling and best in <br />
                  class drivability, forms the core of a BRABUS Shadow product. On top of this, every BRABUS Shadow has an <br />
                   instantly recognizable design and strikingly gorgeous looks.</p>

            </div>
        </div>

        <div className="superboatsvideo1">
            <video style={{width:"100%",height:"100vh"}} autoPlay muted loop playsinline >
                <source src="https://www.brabus.com/_Resources/Persistent/a/5/8/8/a5883c6e71dfc68931654a332637186edac31b12/Brabus%20factory%20video%20web_NA.mp4" />
            </video>
        </div>


        <div className="superboatsdiv12">
            <div>
                <p className='h1'>
                    <p>SHARED PASSION.</p> <br />
                MANUFACTURING INDIVIDUALITY.

                </p>
                <p className='p1'>All boats within the range are painstakingly hand crafted to the highest possible standards by skilled technicians <br />
                 utilizing the finest materials, newest technologies and bespoke engineering. The glamorous and high- <br />
                 performance design concept that shows in every individual BRABUS Shadow, is the result of a disruptive <br />
                  approach, a new way of working within the industry: Based on ‘shared-platform’ thinking, all Shadowboats are <br />
                   the remarkable outcome of a close and passionate collaboration between the Finnish boat manufacturer Axopar <br />
                    and the world-leading supercar manufacturer BRABUS.</p>

            </div>
        </div>

        <Supboatsslider2 />

        <div className="superboatsdiv13">
            <div>
                <p className='h1'>
                    <p>SMART INNOVATIONS.</p> <br />
                    CONFIDENT EXPERIENCES.

                </p>
                <p className='p1'>Highly versatile, multi-purposed with supreme comfort and social areas, with freedom of movement all around <br />
                 the boat. All BRABUS Shadowboats are packed with smart innovations, finest technical solutions and supreme <br />
                  comfort. Clever use of internal and external deck space together with practical layouts guarantee premium living <br />
                   and ease of movement everywhere onboard.</p>

                    <p className='p1'>
                    On board a BRABUS Shadow, functionality and comfort are elevated to a next level, whether you are braving the <br />
                     elements at sea or anchoring the world's harbors in style. A BRABUS Shadow inspires true confidence with its <br />
                      exclusive and fully personalized onboard systems that make it a breeze to comfortably and safely drive in all <br />
                       weather conditions. 
                    </p>

            </div>
        </div>
        <Supboatsslider3 />

        <div className="superboatsdiv14">
            <div>
                <p className='h1'>
                <p>ATTENTION for DETAIL.</p> <br />
                 ABSOLUTE INDIVIDUALISM.
                </p>
                <p className='p1'>
                The Shadowboats are as individual and charismatic as their drivers, designed for a select group of boat owners <br />
                 who want to enjoy the very best exclusive boating experience for absolute individualism, ultimate luxury and <br />
                  seriously impressive power and performance.
                </p>

                <button>CONTACT</button>
            </div>
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