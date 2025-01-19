import Bottom from "../Main/Bottom"
import Image10 from "../Main/Image10"
import "./Brabusxpan.scss"

export default function Brabusxpan(){

    return <div className="brxpan">
        
        <div className="brxpanvideo1">
        <video  autoPlay loop muted >
                <source src='https://www.brabus.com/_Resources/Persistent/3/c/3/6/3c361d3fc4d14f420c088a3134fe69e762cd3c86/Panerai%20BRABUS%20Blue%20Shadow_H264_WEB.mp4' />
            </video>
        </div>

        <div className="brxpandiv1">
           <div>
           <p className="p1">BRABUS X PANERAI</p>
            <p className="p2">ZWEI UNKONVENTIONELLE HIGH-TECH LUXUS GIGANTEN</p>
            <p className="p3">Wenn zwei Welten aufeinandertreffen – Um den Beginn dieser mutigen Partnerschaft zu feiern, veröffentlicht der <br />
             Luxusuhrenhersteller Panerai sein erstes, skelettiertes Automatik-Uhrwerk, inspiriert von dem Design, der Kraft <br />
              und der Entschlossenheit unserer BRABUS Bootserie.</p>
           </div>
        </div>

        <div className="brxpanimg1">
        </div>

        <div className="brxpandiv2">
            <div className="div1"></div>
            <div className="div2">
               <div>
               <p className="p1">
                    <span>JEAN-MARC PONTROUÉ -</span> <br />
                    CEO PANERAI
                </p>
                <p className="p2">
                „Wenn wir von Partnerschaft reden, geht es nicht nur in um <br />
                 ein Logo. Sie reicht von den höchsten Ebenen bis hinunter  die <br />
                  kleinsten Details. Gegenseitig bieten wir uns sich ergänzende <br />
                   Kenntnisse, Fähigkeiten und Synergien bezüglich Produkten, <br />
                    Vertrieb und Schlüsselmärkten. Die Ideen, Materialien und <br />
                     Technologien unserer Marken werden ein Vehikel sein, um <br />
                      Konzepte zu entwickeln, die sowohl disruptiv als auch <br />
                       spektakulär sind. Alle diese Elemente werden vereint, um <br />
                        Ergebnisse und Mehrwert zugunsten unserer Kunden in Bezug <br />
                         auf Service, Handelskonzepte und Kalibern zu erzielen.“
                </p>
               </div>
            </div>
        </div>

        <div className="brxpandiv3">
            <div className="div2">
               <div>
               <p className="p1">
                    <span>CONSTANTIN <br />BUSCHMANN - </span> <br />
                    CEO BRABUS
                </p>
                <p className="p2">
                „Wenn man sie einander gegenüberstellt, sind die <br />
                 Ähnlichkeiten der Panerai Submersible Uhren und der <br />
                  BRABUS Marine Boote in Bezug auf Designsprache und <br />
                   Gesamtcharakter offensichtlich und markant. Beide sind <br />
                    funktionelle und stilvolle Werkzeuge für das Leben in der <br />
                     maritimen Umgebung und so ist unsere Kooperation einfach <br />
                      logisch”
                </p>
               </div>
            </div>
            <div className="div1"></div>
        </div>

        <div className="brxpandiv1">
           <div>
           <p className="p1">DER BEZUG ZUR MARINE WELT</p>
            <p className="p3">Panerai und BRABUS, beides unkonventionelle Kräfte auf ihren jeweiligen Gebieten, teilen die Leidenschaft für <br />
             die maritime Welt. Ursprung und Geschichte von Panerai sind untrennbar mit der Entwicklung von Taucheruhren <br />
              verbunden, deren Charakter und Design perfekt zur Modellpalette der BRABUS „Black Ops“ Luxusboote passt. </p>

              <p className="p3">Jedes der beiden Unternehmen bringt jahrzehntelange Erfahrung in diese Partnerschaft ein. Sie werden <br />
               gemeinsam innovative Produkte entwickeln, die für die maritimen Aktivitäten beider Unternehmen stehen, und <br />
                dieses Potenzial in neue Ideen, innovative Technologien und für diese Art Produkte neuartige Materialien investieren.</p>
           </div>
        </div>

        <div className="brxpanimg2">
        </div>

        <div className="brxpandiv4">
           <div>
           <p className="p1">PANERAI SUBMERSIBLE S BRABUS EDITIONS</p>
            <p className="p3">Finden Sie hier die Übersicht unserer BRABUS X PANERAI Kollektion und entdecken Sie die atemberaubende <br />
             Welt der maritimen Leidenschaft.</p>

            </div>
        </div>

        <div className="brxpanimg3">
            <div>
                <button>DISCOVER NOW</button>
            </div>
        </div>

        <div className="brxpandiv5">
           <div>
              <img src="https://www.brabus.com/_Resources/Static/Packages/Wysiwyg.Brabus.Website/Images/logos/Logo-Symbol.svg?bust=cfde3e12" alt="" />

            </div>
        </div>

        <Image10 />
        <Bottom />
    </div>
}