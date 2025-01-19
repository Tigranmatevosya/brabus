import Bottom from "../Main/Bottom"
import "./Barskarriere.scss"
import Barskarriereslider1 from "./Barskarriereslider"

export default function Barskarriere(){

    return <div className="barskarriere">
        
        <div className="barslarvideo1">
            <video autoPlay loop muted>
                <source src="https://www.brabus.com/_Resources/Persistent/0/7/6/f/076fa5d04354b4f9ea9550210cbe3797365ee858/Brand%20Reel%20Webseite_23.10.mp4" />
            </video>
        </div>

        <div className="barskardiv1">
            <div>
                <p className="p1">
                KARRIERE
                </p>
                <p className="p2">
                  BE PART OF OUR STORY
                </p>
                <p className="p3">
                Seit 1977 ist BRABUS, eine globale Marke für Luxusmobilität, im Herzen des Ruhrgebiets beheimatet und unter <br />
                 Enthusiasten für die Kreation von High-End-Supercars und als Experte für automobile Individualisierung <br />
                  weltbekannt. Innovation braucht Menschen mit Know-How, BRABUS braucht Sie.
                </p>
                <p className="p3">Entdecken Sie die BRABUS Karriere-Welt und werden Sie ein Teil unserer Geschichte!</p>
            </div>
        </div>

        <div className="barskardiv2">
            <div className="div1">
                <img src="https://www.brabus.com/_Resources/Persistent/1/8/3/9/18396865da3d67c125abf41faed795dfdd945ad9/DSC00255-960x640.jpg" alt="" />
            </div>
            <div className="div2">
             <div>
                <p className="p1">BENZIN IM BLUT?</p>
                <p className="p2">Ein Platz für jedes Talent. Entdecken Sie die aktuellen <br />
                 Stellenausschreibungen und finden Sie den Job, der zu Ihnen <br />
                  passt!
                </p>
                <p className="btndiv"><button>OFFENE POSITIONEN</button></p>
             </div>
            </div>
        </div>
        <div className="barskardiv2">
            <div className="div2">
             <div>
                <p className="p1">MIT VOLLGAS IN DIE <br /> ZUKUNFT! </p>
                <p className="p2">Werde Teil von #TeamBRABUS und starte Deine Ausbildung <br />
                 bei uns.
                </p>
                <p className="btndiv"><button>AUSBELDING BEI BRABUS</button></p>
             </div>
            </div>
            <div className="div1">
                <img src="https://www.brabus.com/_Resources/Persistent/0/1/8/6/0186d25f98293c25b484b7a44058e936eda8b469/_BRA1507_small-960x640.jpg" alt="" />
            </div>
        </div>

        <div className="barskardiv3">
        <div>
                <p className="p1">
                KARRIERE
                </p>
                <p className="p3">
                Von der Straße bis zu den Weltmeeren - das BRABUS Portfolio von 1-Second-Wow Masterpieces wird stetig <br />
                erweitert, um unsere Kunden stilvoll zu neuen Höchstleistungen zu bringen. Seit über vier Jahrzehnten ist der <br />
                Name BRABUS ein Synonym für tief verwurzelte Tradition, handgefertigte Exklusivität und Leistung.
                </p>
                 <p className="btndiv"><button>WHO WE ARE</button></p>
            </div>
        </div>


        <Barskarriereslider1 />

        <div className="barskardiv4">
            <div className="div1">
                <img src="https://www.brabus.com/_Resources/Persistent/0/c/8/f/0c8fd426166613dc2618464eb57cfd061690a109/86%20-%20BRABUS_FamilyDay_2023_86-960x640.jpg" alt="" />
            </div>
            <div className="div2">
             <div>
                <p className="p1">LATEST NEWS</p>
                <p className="p2">Erfahren Sie mehr rund um das Geschehen bei BRABUS.
                </p>
                <p className="btndiv"><button>JETZT ENDECKEN</button></p>
             </div>
            </div>
        </div>
        <div className="barskardiv3">
        <div>
                <p className="p1">
                EXXPLORE OUR JOURNEY
                </p>
                <p className="p3">Entdecken Sie bahnbrechende Innovationen und bedeutende Meilensteine in der Historie von BRABUS. Erfahren <br />
                 Sie mehr über uns, woher wir kommen und was uns zu dem gemacht hat, was wir heute sind! </p>
                <p className="p3">
                Reisen Sie durch die letzten Jahrzehnte - von den ersten Schritten bis heute.
                </p>
                 <p className="btndiv"><button>BRABUS HISTORY</button></p>
            </div>
        </div>

        <div className="barskarrol1">
        IHRE ANSPRECHPARTNERINNEN
        </div>

        <div className="barskarrol">
        <div className="NEdiv">
            <img src="https://www.brabus.com/_Resources/Persistent/b/b/8/9/bb89b7941d804ee5382e2a519584ed0c433f8647/Perso_Headshot_Steiner_klein-648x432.jpg" alt="" />
            <p className='p1'>BIRGIT STEINER <br />
            KAUFMÄNNISCHER BEREICH</p>
            <p className='p2'>karriere@brabus.com <br />
            Telefon: +49 2041 7744-519</p>
        </div>
        <div className="NEdiv">
            <img src="https://www.brabus.com/_Resources/Persistent/d/b/f/7/dbf7f4f0f185bfcc23e1582712973c37dfc20bb7/Perso_Headshot_Macherski_klein-648x432.jpg" alt="" />
            <p className='p1'> CLAUDIA MACHERSKI<br />
            KAUFMÄNNISCHER BEREICH 
              </p>
            <p className='p2'>karriere@brabus.com<br />
            Telefon: +49 2041 7744-509 
              </p>
        </div>
        <div className="NEdiv">
            <img src="https://www.brabus.com/_Resources/Persistent/6/4/7/b/647b2704643048e4271131a6c23d0db5eec5f565/Perso_Headshot_Bastian_klein-648x432.jpg" alt="" />
            <p className='p1'>BARBARA BASTIAN<br />
            HANDWERKLICHER BEREICH 
              </p>
            <p className='p2'> karriere@brabus.com <br />
            Telefon: +49 2041 777-411 
              </p>
        </div>
        </div>
        <Bottom />
    </div>
}
