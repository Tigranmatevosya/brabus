import Bottom from './Bottom'
import './Sonder.scss'
import Sonderslider from './Sonderslider'

export default function Sonder() {

    return <div className="Sonder">
        
        <div className="sondervideo">
            <video style={{width:"100%",height:"100%"}} controls autoPlay loop muted >
                <source src='https://www.brabus.com/_Resources/Persistent/f/2/5/2/f252625f074b3373814e219c84ce30019206716f/INVICTO_Mission_Full_H264_Website.mp4' />
            </video>
        </div>

        <div className="sonderinvikto">

            <div className="sonderdas">
                <h3>DAS INVICTO SONDERSCHUTZPROGRAMM</h3>
                 
                 <p className='p1'>INVICTO VR6+ ERV <br />wby BRABUS Automotive</p>

                 <p className='p2'>Mit dem INVICTO wird eine innovative, nach VR6 Plus ERV Norm gepanzerte Variante der aktuellen Mercedes G- <br />
                 Klasse in Kleinserie gefertigt. Das geländegängige Sonderschutzfahrzeug wird in drei verschiedenen Versionen <br />
                  angeboten: PURE, LUXURY und MISSION. </p>
                 <p className='p2'>
                Um den Insassen maximalen Schutz gegen Beschuss und Sprengstoffattentate zu bieten, entwickelten die  <br />
                 brabus | automotive Ingenieure die „INVICTO Shelter Cell“, eine in sich geschlossene, selbsttragende und <br />
                verschraubte Schutzzelle. Dazu gibt es weitere, teilweise in einem speziellen 3D-Druckverfahren produzierte, <br />
                 Schutzelemente und natürlich auch eine höchst widerstandsfähige Panzerverglasung. Die Schutzwirkung des <br />
                INVICTO wurde von der Staatlichen Prüf- und Zertifizierungsstelle für Waffen- und Sicherheitstechnik in <br />
                 Deutschland, dem Beschussamt Ulm, nach umfangreichen Beschuss- und Sprengversuchen nach den Richtlinien <br />
                  VPAM BRV 2009 und VPAM ERV 2010 zertifiziert.</p>
            </div>

            <div className="sonderlines">

                <h3>
                INVICTO LINES
                </h3>
                <div className="sondercars">
                    <div className="sondercar">
                       <img src="https://www.brabus.com/_Resources/Persistent/8/2/a/1/82a1580f9599f376b1c34d50afb43dceeff374cd/002_INVICTO_P_3_4_front-648x432.jpg" alt="" />
                      <p className='p1'>PURE</p>
                      <p className='p2'>
                      Höchster Schutz bei maximaler <br />
                       Unauffälligkeit. Nur absolut notwendige <br />
                       Veränderungen im sichtbaren Bereich. <br />
                        Exterieur und Interieur bleiben nahezu auf <br />
                         Serienstand. Panzerung: INVICTO Shelter <br />
                          Cell mit ballistischem und Anspreng-Schutz <br />
                           auf Level VR6 Plus ERV für Mercedes-Benz <br />
                            G-Klasse 463A G500 und G63.
                      </p>
                    </div>
                    <div className="sondercar">
                       <img src="https://www.brabus.com/_Resources/Persistent/b/9/d/c/b9dcc2b6ee87c2ad297a8b08be1599917f66d2f2/INVICTO_luxury%20%2815%29-648x432.jpg" alt="" />
                      <p className='p1'>BRABUS LUXURY</p>
                      <p className='p2'>
                      Höchstes Sicherheits-, Komfort- und <br />
                       Individualisierungs-Niveau. <br />
                        Maßgeschneiderte und handgemachte <br />
                         Interieur-Anfertigungen in feinstem Leder <br />
                          oder Alcantara sowie Exterieur- <br />
                          Komponenten oder Leistungssteigerungen <br />
                           aus dem BRABUS Zubehörprogramm. <br />
                            Panzerung: INVICTO Shelter Cell mit <br />
                             ballistischem und Anspreng-Schutz auf <br />
                              Level VR6 Plus ERV für Mercedes-Benz G- <br />
                              Klasse 463A G500 und G63.
                      </p>
                    </div>
                    <div className="sondercar">
                       <img src="https://www.brabus.com/_Resources/Persistent/8/2/a/1/82a1580f9599f376b1c34d50afb43dceeff374cd/002_INVICTO_P_3_4_front-648x432.jpg" alt="" />
                      <p className='p1'>MISSION</p>
                      <p className='p2'>
                      Perfektes Begleit- und Schutzfahrzeug mit <br />
                       militärkompatibler Konfiguration bei voller <br />
                        Alltagstauglichkeit. Zum besonderen  <br />
                        Ausstattungsumfang gehören etwa <br />
                         schutzwestengeeignete Integralsitze mit <br />
                          variabler Schaumgeometrie, “MOLLE”- <br />
                          System Türverkleidungen und Sitzrücken, <br />
                           ein Dachträgersystem und 20“ Stollenreifen. <br />
                            Panzerung: INVICTO Shelter Cell mit <br />
                             ballistischem und Anspreng-Schutz auf <br />
                              Level VR6 Plus ERV für Mercedes-Benz G- <br />
                              Klasse 463A G500 und G63.
                      </p>
                    </div>
                </div>

             <div>
             <Sonderslider />
             </div>
          
            </div>

           
            <div className="sonderdas">

                 <p className='p1'>INVICTO SHELTER CELL</p>

                 <p className='p2'>Höchste technische Standards standen für Brabus Automotive bei der Entwicklung des Sonderschutzfahrzeugs <br />
                  INVICTO VR6 Plus ERV auf Basis der neuen Mercedes-Benz G-Klasse im Vordergrund. Das ballistische <br />
                   Gesamtkonzept wurde von Anfang an auf eine maximale Schutzwirkung ausgelegt, die dem Niveau einer OEM- <br />
                   Werkspanzerung entspricht. Anders als bei anderen nachträglich gepanzerten Fahrzeugen werden die Bauteile <br />
                    des Schutzsystems daher nicht einzeln in die Karosseriestruktur des Fahrzeugs eingeschweißt, vielmehr haben <br />
                     die Ingenieure von Brabus Automotive eine in sich geschlossene, selbsttragende und verschraubte Schutzzelle <br />
                      entwickelt, die sogenannte INVICTO Shelter Cell. Sie wird zerlegt in die Rohkarosserie eingesetzt und dann <br />
                       aufgestellt. Eine der konstruktiven Besonderheiten der Shelter Cell ist das Null-Fugen-Design, eine andere, dass <br />
                        es – analog zu einem ab Werk von OEM gepanzerten Fahrzeug – zu keinerlei Einstiegsverengung kommt. Die <br />
                         Montage der Panzerungsbauteile zur Shelter Cell erfolgt spaltenlos, unvermeidliche Nahtstellen, beispielsweise <br />
                          an den Türen, sind mit Materialüberlappung und sogenannten Labyrinthen ausgeführt. Innovativ ist auch der <br />
                           Aufbau des oberen Windschutzscheibenrahmens. </p>
                 <p className='p2'>Jede einzelne Materialpaarung und Schraubverbindung wurde aus mehreren Winkeln beschossen sowie mit <br />
                  Projektilgeschwindigkeiten, die weit über die Normgeschwindigkeit des abzusichernden Kalibers hinausgehen, <br />
                   ballistisch abgeprüft. Ferner wurden einzelne Baugruppen ebenfalls in Vorversuchen in einem sogenannten <br />
                    Sprengrahmen mehreren Sprengungen unterzogen. </p>
            </div>

            <div className="sondervideo2">
            <video style={{width:"100%",height:"100%"}} controls autoPlay loop muted >
                <source src="https://www.brabus.com/_Resources/Persistent/2/9/1/f/291f6b5cc31f025d0697d043b721420862ab6441/clean-shell-technical.mp4" />
            </video>

            <div className='video2div'>
                <p className='p1'>SAFETY IS OUR DNA</p>
                <p className='p2'>v6r+ ERV Sondershutzpanzerung fur ihre g-klasse</p>
                <div className='div1'>INVICTO</div>
                
            </div>
        </div>


        <div className="sonderlines">

<h3>
INVICTO 4 SALE
</h3>
<div className="sondercars">
    <div className="sondercar">
       <img style={{height:"70%"}} src="https://www.brabus.com/_Resources/Persistent/6/0/d/e/60de88ac8710af13b133e2794c4d3ea00bcb4650/PURE_-648x432.jpg" alt="" />
      <p className='p1'>INVICTO PURE</p>
      <p className='p2'>auf Basis Mercedes-Benz G 500 (W463A)</p>
      <p className='p2'>Verkaufspreis</p>
      <p className='p2'>Brutto 488.495,00€</p>
      <p className='p2'>Netto  410.500,00€</p>
    </div>
  

    <div className="sondercar">
       <img style={{height:"70%"}} src="https://www.brabus.com/_Resources/Persistent/9/a/7/a/9a7a68007062ae4e232769b78d95f712cb372fc8/MISSION-648x432.jpg" alt="" />
      <p className='p1'>INVICTO MISSION</p>
      <p className='p2'>auf Basis Mercedes-Benz G 500 (W463A)</p>
      <p className='p2'>Verkaufspreis</p>
      <p className='p2'>Brutto 488.495,00€</p>
      <p className='p2'>Netto  410.500,00€</p>
    </div>
  
    <div className="sondercar">
       <img style={{height:"70%"}} src="https://www.brabus.com/_Resources/Persistent/a/9/7/6/a9765bc5ac309b5ebd50ae1eecb5ee2e373a5a28/LUXURY_-648x432.jpg" alt="" />
      <p className='p1'>BRABUS INVICTO LUXURY</p>
      <p className='p2'>auf Basis Mercedes-Benz G 500 (W463A)</p>
      <p className='p2'>Verkaufspreis</p>
      <p className='p2'>Brutto 488.495,00€</p>
      <p className='p2'>Netto  410.500,00€</p>
    </div>
  
</div>

</div>

        </div>
  

  <div className="buttonimg">
      <div>
        <div>STAY UP TO DATE !</div>
        <div className='div2'>BRABUS NEWS</div>
      </div>
  </div>

    <Bottom />
  
    </div>
    
} 