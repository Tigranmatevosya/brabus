import Bottom from '../Main/Bottom'
import Image10 from '../Main/Image10'
import './Brabusxjob.scss'
import Brabusxjobslider from './Brabusxjobslider'
import Brabusxjobslider2 from './Brabusxjobslider2'

export default function Brabusxjob(){

    return <div className="brxjob">
        <div className="brxjobvideo1">
        <video autoPlay loop muted >
                <source src='https://www.brabus.com/_Resources/Persistent/a/9/f/6/a9f692ce6c8c1968b344d59eb280d1fb6d274a70/Brabus%20Lifestyle%204K_H264_WEB.mp4' />
            </video>
        </div>

        <div className="brxjobdiv1">
            <div>
                <p className='p1'>
                BRABUS x JOBE
                </p>
                <p className='p2'>
                    <span>IT'S TIME TO GEAR UP.</span> MIT BRABUS X JOBE.
                </p>
                <p className='p3'>
                Willkommen zum ultimativen Wassersport-Erlebnis. Seit 2020 bieten wir mit den exklusiven Angeboten der <br />
                 BRABUS x Jobe Shadow-Kollektion all jenen, die das Außergewöhnliche suchen, die Möglichkeit dazu. Lehnen <br />
                  Sie sich zurück und entspannen Sie sich ganz im BRABUS Style oder jagen Sie dem Adrenalinrausch auf den <br />
                   Wellen hinterher. Diese Kollektion bietet alles, was Sie für ein unvergessliches Abenteuer brauchen – <br />
                    gekennzeichnet in jedem Detail durch die typische Qualität und Funktionalität, die Kunden beider Marken <br />
                     gewohnt sind.
                </p>
                <p className='p3'>
                Neben einer langjährigen Präsenz im Marinesektor liegt der Kern dieser Kollaboration in unserem <br />
                 gemeinsamen Engagement, die Grenzen zu überschreiten und kompromisslose Qualität zu liefern. Seit Jahren <br />
                  bauen wir luxuriöse Superboote, die für maximale Performance auf dem Wasser konzipiert sind. Damit ist Jobe, <br />
                   bekannt in der Welt des Wassersports für seine bahnbrechenden Designs und seine innovationsorientierte <br />
                    Philosophie, die perfekte Wahl für eine Zusammenarbeit. Jedes Produkt strahlt ein Höchstmaß an <br />
                     detailverliebter Handwerkskunst und eine Leidenschaft für Abenteuer aus. Vom Konzept bis zur Ausführung <br />
                      vereint jedes Stück das Beste beider Marken und inspiriert zu unvergesslichen Momenten auf dem Wasser.
                </p>
            </div>
        </div>

        <div className="brxjobimg1">
         <div className="div1">
         <img src="https://www.brabus.com/_Resources/Persistent/f/4/d/f/f4df0dbb5025a9f3c6d742c3a9f1bbcf86d3dc1d/Splitteaser_jobe_links.jpg" alt="" />
         </div>
         <div className="div2">
         <img src="https://www.brabus.com/_Resources/Persistent/9/4/f/5/94f5e19d9f3d9a16ac919476cbdd6328ef30d048/Splitteaser_jobe_rechts.jpg" alt="" />
         </div>
        </div>

        <div className="brxjobdiv2">
            <div>
                <p className='p3'>
                Gemeinsam haben wir uns zum Ziel gesetzt, die Wassersportszene mit einer einzigartigen Kombination aus <br />
                 Performance und unverkennbarer Ästhetik neu zu definieren. Egal, ob Sie die Wellen mit unseren hochmodernen <br />
                  Wakeboards bezwingen, ruhige Gewässer auf unseren modernen Stand-Up-Paddleboards (SUP) erkunden oder <br />
                   sich in adrenalingeladene Abenteuer mit unseren Towables stürzen – die ständig wachsende BRABUS x Jobe <br />
                    Kollektion verspricht Nervenkitzel für jeden Enthusiasten.
                </p>
                <p className='p3'>
                Während wir diese aufregende Reise zusammen fortsetzen, laden wir Sie ein, unsere Produktpalette zu erkunden <br />
                 und in den Nervenkitzel des Abenteuers einzutauchen. It’s time to gear up. Mit BRABUS x Jobe.
                </p>
            </div>
        </div>
        <div className="brxjobdiv3">
            <div>
                <p className='p2'>GET THE LOOK</p>
                <p className='p3'>SHOP THE LATEST COLLECTION NOW!</p>
            </div>
        </div>
        <Brabusxjobslider />
        <Brabusxjobslider2 />

        <div className="brxjobdiv5">  
            <div className="div1">
            <div>
            <p className='p1'>
            BEREIT FURS WASSER!
             </p>
             <p className='p2'>
             Entdecken Sie die Welt von BRABUS x Jobe in unserem Fashion <br />
              Shop.
             </p>
             <p className='p3'>
             <button>SHOP NOW</button>
             </p>
            </div>
            </div>
            <div className="div2">
            <video autoPlay loop muted >
                <source src='https://www.brabus.com/_Resources/Persistent/f/8/0/0/f80051cd0acb6b6ee5704d9240567e572f7c72d8/Brabus%20x%20Jobe%20Shadow%20Collection%202023%20v3%20%28reveal%29%2016-9_H264_WEB.mp4#t=0.5' />
            </video>
            </div>
        </div>

        <Image10 />
        <Bottom />

    </div>
}