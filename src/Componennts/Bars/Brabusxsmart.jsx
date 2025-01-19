import Bottom from '../Main/Bottom'
import Image10 from '../Main/Image10'
import './Brabusxsmart.scss'

export default function Brabusxsmart(){

    return <div className="brxsmart">
        
        <div className="brxsmartvideo1">
        <video style={{ width: "100%", height: "100vh" }} autoPlay loop muted >
                <source src='https://www.brabus.com/_Resources/Persistent/d/b/5/e/db5e6555e312b5897093dd86915e57f63a1e981f/BRABUS_Smart%20%231%20and%20%233_H264_WEB.mp4' />
            </video>
        </div>

        <div className="brxsmartdiv1">
            <p className='p1'>
            BRABUS X SMART
            </p>
        </div>
        <div className="brxsmartdiv2">
            <div>
            <p className='p1'>
            LOVE THE EXTRAORDINARY!
            </p>
            <p className='p2'>
            Seit bereits über 20 Jahren erschaffen smart und BRABUS urbane High-Performance-Legenden, die die Herzen <br />
             unzähliger Enthusiasten gewonnen haben. Angefangen 2003 mit der Premiumversion des kultigen smart fortwo <br />
              führte uns die Zusammenarbeit bis heute in die Ära der E-Mobilität mit dem smart #1 und #3, um die E- <br />
              Mobilität neu zu denken, neu zu gestalten und zu revolutionieren.
            </p>
            </div>
        </div>

        <div className="brxsmartdiv3">  
            <div className="div1">
            <div>
            <p className='p1'>
             BRING OUT YOUR <br />
              SPORTY SIDE!
             </p>
             <p className='p2'>
                Der smart #3 BRABUS ist das neuste Highlight der <br />
                 langjährigen Partnerschaft zwischen smart und BRABUS. <br />
                  Entdecken Sie jetzt das neue Individualisierungsprogramm.

             </p>
             <p className='p3'>
             <button>JETZT ENTDDECKMAN</button>
             </p>
            </div>
            </div>
            <div className="div2">
            
            </div>
        </div>


        <div className="brxsmartdiv4">  
        <div className="div2">
        </div>
            <div className="div1">
            <div>
            <p className='p1'>
            TOMORROW IS YOURS.
             </p>
             <p className='p2'>
             Der smart #1 BRABUS ist zurück im Spotlight! Mit einem <br />
              völlig neu entwickelten Individualisierungsprogramm bringen <br />
               wir den stärksten und schnellsten smart aller Zeiten auf das <br />
                nächste Level.
             </p>
             <p className='p3'>
             <button>JETZT ENTDDECKMAN</button>
             </p>
            </div>
            </div>
           
        </div>

        <div className="brxsmartdiv5">  
            <div className="div1">
            <div>
            <p className='p1'>
            SMART #1 BRABUS
             </p>
             <p className='p2'>
                Das stilvolle und selbstbewusste Serienmodell <span>SMART #1 BRABUS</span> <br />
                 verwandelt jeden Trip in ein aufregendes Abenteuer.
             </p>
             <p className='p3'>
             <button>JETZT ENTDDECKMAN</button>
             </p>
            </div>
            </div>
            <div className="div2">
            
            </div>
        </div>

        <div className="brxsmartdiv6">  
        <div className="div2"></div>
            <div className="div1">
            <div>
            <p className='p1'>
            SMART #3 BRABUS
             </p>
             <p className='p2'>
             Mit mehr Action in die Zukunft. Entdecken Sie jetzt das <br />
              sportliche Serienmodell  <span>SMART #1 BRABUS</span>
             </p>
             <p className='p3'>
             <button>JETZT ENTDDECKMAN</button>
             </p>
            </div>
            </div>
        </div>
        <div className="brxsmartdiv2">
            <div>
            <p className='p1'>
            DRIVE IN STYLE.
            </p>
            <p className='p2'>
            Die Schaffung einzigartiger Produkte, die auf die Stile, Werte und die Experience unserer Kunden zugeschnitten <br />
             sind, war und ist das Herzstück dieser Zusammenarbeit. Diese besondere Note zieht sich durch alle Teile des <br />
              smart #1 und smart #3. Von den kleinsten Details bis hin zu dem markanten Design. <br />
               Ein einzigartiges Fahrerlebnis, entstanden aus einer einzigartigen Partnerschaft, die das Beste aus modernem <br />
                Design, Technologie, Konnektivität, Leistung und BRABUS typischer Exklusivität in sich vereint.
            </p>
            </div>
        </div>
       
       <div className="brxsmartimg1"></div>
        
        <div className="brxsmartrol">
    
        <div className="roldiv">
        DISCOVER MORE
        </div>

       <div className="rol1">
      <div className="rol">
           <div className="col">
              <a href="https://www.brabus.com/de-de/coops/brabus-x-smart/smart1.html">
              <div className="colimg">
               <img src="https://www.brabus.com/_Resources/Persistent/4/5/7/5/4575779bf010609f8bf52bef363a8673cac0a48f/2024_Brabus_Smart_1_Studio_Photo%20Studio%20D%C3%BCsseldorf_002-648x432.jpg" alt="" />
               </div>
                <p className='p1'>
                    SMART #1 BRABUS
                </p>
                <p className='p2'>
                    Entdecken Sie mehr rund um das Thema <br />
                     smart #1 BRABUS und dem exklusiven 
                </p>
              </a>
            </div>
           <div className="col">
          <a href="https://www.brabus.com/de-de/coops/brabus-x-smart/smart3.html">
          <div className="colimg">
           <img src="https://www.brabus.com/_Resources/Persistent/8/f/1/3/8f13d5b41883b63b331cc6de2c18b0b0a192e823/2024_Brabus_Smart_3_Photo_Studio_D%C3%BCsseldorf_klein-648x432.jpg" alt="" />
           </div>
                <p className='p1'>
                SMART #3 BRABUS
                     </p>
                <p className='p2'>
                    Finden Sie hier mehr heraus über den <br />
                     sportlich-agilen smart #3 BRABUS.
                </p>
          </a>
            </div>
           
            
        </div>
      </div>
      </div>

      <Image10 />
      
      <Bottom />


    </div>
}