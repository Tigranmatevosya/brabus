import Bottom from '../Main/Bottom'
import Image10 from '../Main/Image10'
import './Brabusxawk.scss'
import Brabusxawkslider1 from './Brabusxawkslider1'
import Brabusxawkslider2 from './Brabusxawkslider2'

export default function Brabusxawk(){
    
    return <div className="brxawk">

       <div className="brxawkvideo1">
        <video autoPlay muted loop playsinline>
            <source src='https://www.brabus.com/_Resources/Persistent/4/d/1/9/4d19acf245e9055fc29c1cea97967d3230cd3b2c/Awake%20Commercial_H264_WEBHQ.mp4' />
        </video>
       </div>

       <div className="brxawkdiv1">
        <div>
            <p className='p1'>BRABUS x AWAKE</p>
            <p className='p2'>BRABUSIZE THE WAVES.</p>
            <p className='p3'>BRABUS verbindet Enthusiasten mit dem grenzenlosen Potential der Weltmeere und bietet jedem die 
             Möglichkeit, ohne einen einzigen Kompromiss in BRABUS typischer Eleganz und maßgeschneidertem Luxus 
              unvergessliche Erinnerungen zu schaffen. In Kollaboration mit dem revolutionären Electric-Surfboard-Hersteller 
               Awake bringen wir Fans und Kunden wie nie zuvor auf das Wasser.</p>
            <p className='p3'>
            2013 hat Awake es sich zur Mission gemacht, einzigartige Experiences für Abenteurer zu bieten, die auf der 
             Suche nach dem nächsten Nervenkitzel sind. Damit sind sie die perfekte Ergänzung für die gemeinsame 
              Entwicklung eines brandneuen BRABUS 1-Second-Wow Effekts. Das erste Ergebnis dieser Partnerschaft gibt
               den Ton an – es vereint das Beste beider Marken in einer exklusiven Fusion aus Black and Bold Signature- 
               Styling, überzeugender Performance und Benutzerfreundlichkeit. Das ist das BRABUS x Awake Limited Edition 
                Shadow Jetboard „One of 77“.
            </p>
            <p className="btndiv">
                <button>SHOP NOW</button>
            </p>
        </div>
       </div>

       <Brabusxawkslider1 />
       
       <div className="brxawkdiv2">
        <div>
        <p className='p3'>Entwickelt, um Ihnen die Welt des Wassersports von ihrer besten Seite zu zeigen, ist das BRABUS Shadow Jetboard eine einzigartige Design- und Leistungsinnovation sowie das ultimative Mittel, um Ihr BRABUS Marine Erlebnis auf das nächste Level zu heben. Stellen Sie sich vor: Sie gleiten mühelos über das Wasser und spüren dabei den Adrenalinschub, die Kraft des rein elektrischen Antriebs und das Gefühl der uneingeschränkten Freiheit. Es gehört Ihnen. Erleben Sie das Außergewöhnliche. Brabusize the waves mit dem BRABUS x Awake Shadow Jetboard. Die Produktion ist weltweit auf 77 Stück limitiert.</p>
        <p className='p3'>Geprägt von Awakes hochwertiger Carbon Konstruktion und allen Premium-Accessoires ist das BRABUS Shadow Jetboard ein hochmodernes Electric-Surfboard mit einem entscheidenden Schwerpunkt: Vielseitigkeit. Große Carbon Finnen bieten optimalen Vortrieb bei hohen Geschwindigkeiten. Mit ihrer charakteristischen Flexibilität ermöglichen sie ein dynamisches, aber dennoch entspanntes Fahrverhalten – perfekt für alle, die die Power des Boards maximal auskosten wollen. Das speziell entwickelte Deckpad sorgt für einen sicheren Halt bei gleichzeitig optimalem Fahrkomfort. Das BRABUS Shadow Jetboard ermöglicht einen stabilen und kontrollierten First Ride und passt sich dem User an, während dieser die Kunst des Cruisens, Carvens oder der Tricks meistert.</p>
        </div>
       </div>

       <Brabusxawkslider2 />
       <div className="brxawkdiv2">
        <div>
        <p className='p3'>Neben einer Reihe von exklusiven Design-Innovationen bietet das BRABUS Shadow Jetboard diverse Fahrmodi. Der Leistungsstärkste davon ist der neue BRABUS Modus, der dank des industrieweit führenden Inline-Low-Intake-Jet-Systems von Awake eine Beschleunigung von 0 auf 50 km/h in nur 3 Sekunden und eine Höchstgeschwindigkeit von 55+ km/h garantiert. Unabhängig von Können und Erfahrung ist es ein zuverlässiger Begleiter, mit dem jeder, vom selbstbewussten Anfänger bis zum Profi, die Welt des Jetboardens erleben kann.</p>
        <p className='p3'>Ob Sie durch das Wasser carven oder locker an der Küste entlang cruisen, das BRABUS Shadow Jetboard ist ein unverkennbares Statement und Ihre Einladung, ganz im BRABUS Style die Welt zu surfen. Seen, Flüsse, Gletscher oder das offene Meer – Sie haben die Möglichkeit, sie alle zu entdecken. Jede Welle erzählt eine Geschichte, jeder Moment wird zu einem Abenteuer und jeder Sunset-Ride besiegelt eine lebenslange Erinnerung.</p>
        </div>
       </div>

       <div className="brxawkdiv5">
       <div className="div2">
       </div> 
            <div className="div1">
            <div>
            <p className='p1'>
            READY TO BRABUSIZE <br /> THE WAVES?
             </p>
             <p className='p2'>
             Sichern Sie sich Ihr limitiertes BRABUS x Awake Shadow <br />
              Jetboard.
             </p>
             <p className='p3'>
             <button>SHOP NOW</button>
             </p>
            </div>
            </div>
        </div>
        <div className="brxawkdiv6">
            <div className="div1">
            <div>
            <p className='p1'>
            YOUR NEXT ADVENTURE
             </p>
             <p className='p2'>
             Entdecken Sie mehr über unseren Partner Awake!
             </p>
             <p className='p3'>
             <button>DISCOVER NOW</button>
             </p>
            </div>
            </div>
            <div className="div2">
            </div> 
        </div>
        <Image10 />
        <Bottom />
    </div>
}