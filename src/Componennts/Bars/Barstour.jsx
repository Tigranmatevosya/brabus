import Bottom from "../Main/Bottom"
import Image10 from "../Main/Image10"
import "./Barstour.scss"
import Barstourslider1 from "./Barstourslider1"

export default function Barstour(){

    return <div className="barstour">
        
        <div className="barstourimg1">
            <img src="https://www.brabus.com/_Resources/Persistent/2/b/f/a/2bfab41b7af8191243f43f99570f70b45be55d2d/Company%20Tour%20Header-1920x1080.jpg" alt="" />
        </div>

        <div className="barstourdiv1">
            <div>
                <p className="p1">BRABUS COMPANY TOUR</p>
                <p className="p2">Erleben Sie die Welt von BRABUS und werfen Sie einen Blick hinter die exklusiven Kulissen. Lassen Sie sich von <br />
                 unseren Produkten und unserer Expertise auf dem Gebiet der Fahrzeugveredelung überzeugen. </p>
                <p className="p2">Neben wissenswerten Informationen zur Unternehmensgeschichte und Entwicklung, gewähren Ihnen die <br />
                 BRABUS Company Touren Einblicke in verschiedene Bereiche, wie beispielsweise Sattlerei, Motorenbau und <br />
                 BRABUS Classic. Seien Sie außerdem dabei, die Produktionsabläufe für unsere Automobile live mitzuerleben <br />
                  und interessante Details über die Entstehung zu erfahren.</p>
                <p className="p2">Unsere Produkte begeistern durch unverwechselbares Design, Dynamik, Effizienz und dem BRABUS-typischen <br />
                 One-Second-Wow Faktor. Wählen Sie zwischen zwei BRABUS Company Tour Paketen und entdecken Sie, was <br />
                  uns und unsere Fahrzeuge antreibt.</p>
            </div>
        </div>

        <Barstourslider1 />

        <div className="barstourdiv2">
            <div>
                <p className="p1">INFORMATIONEN ZU TERMINEN</p>
                <p className="p2">Unsere BRABUS Company Touren finden ausschließlich an regulären Arbeitstagen (ausgenommen von <br />
                 Feiertagen) von <span>Montag bis Freitag</span> zu festen Zeiten statt:</p>
                <p className="p3">10:30 Uhr bis 12:30 Uhr bzw. 13:00 Uhr</p>
                <p className="p2">oder</p>
                <p className="p3">14:00 Uhr bis 16:00 Uhr bzw. 16:30 Uhr</p>
                <p className="p2">Bei allen BRABUS Company Touren gilt eine maximale Teilnehmerzahl von 20 <span>Personen.</span></p>
                <p className="p2">Um Ihre Anfrage berücksichtigen zu können, benötigen wir eine Vorlaufzeit von <span>vier Wochen.</span></p>
            </div>
        </div>

        <div className="barstourdiv3">
            <div className="div1"></div>
            <div className="div2">
                <div>
                    <p className="p1">BRABUS COMPANY TOUR - <br /> PAKET 1
                    </p>
                    <p className="p2">
                    <u>UMFANG:</u> BRABUS Werke 1, 2*, 3* & 4, inkl. Getränk
                    </p>
                    <p className="p2"><u>DAUER:</u> ca. zwei Stunden</p>
                    <p className="p2"><u>PREIS:</u> 400€ brutto, Gesamtpreis</p>
                    <p className="p2"><u>GIVE-AWAY:</u> professionelles Gruppenfoto (digital) und Lanyard <br />
                     mit Namensschild</p>
                    <p className="p2">*nur teilweise, aufgrund von vertraulichen Sonderprojekten</p>
                    <p className="btnp"><button>JETZT ANFRAGEN</button></p>
                </div>
            </div>
        </div>
        <div className="barstourdiv4">
            <div className="div2">
                <div>
                    <p className="p1">BRABUS COMPANY TOUR - <br /> PAKET 2
                    </p>
                    <p className="p2">
                    <u>UMFANG:</u> BRABUS Werke 1, 2*, 3* & 4, inkl. Verpflegung
                    </p>
                    <p className="p2"><u>DAUER:</u>  ca. zweieinhalb Stunden</p>
                    <p className="p2"><u>PREIS:</u> 700€ brutto, Gesamtpreis</p>
                    <p className="p2"><u>GIVE-AWAY:</u>professionelles Gruppenfoto (digital) und Lanyard <br />
                     mit Namensschild</p>
                    <p className="p2">*nur teilweise, aufgrund von vertraulichen Sonderprojekten</p>
                    <p className="btnp"><button>JETZT ANFRAGEN</button></p>
                </div>
            </div>
            <div className="div1"></div>
        </div>
        <div className="barstourdiv5">
            <div>
                <p className="p1">ALLGEMENIE INFORMATIONEN</p>
                <p className="p2">Bitte haben Sie Verständnis dafür, dass wir aufgrund von Sonderprojekten nicht alle Anfragen berücksichtigen <br /> können. </p>
                <p className="p2">Es gilt ein allgemeines Fotoverbot in den BRABUS Werken, mit Ausnahme von unserem Showroom.</p>
                <p className="p2">Sie können bis 10 Tage vor geplanter Werksführung kostenfrei stornieren. Ab diesem Zeitpunkt sind Gebühren <br /> fällig, über die wir Sie anschließend informieren.</p>
                <p className="p2">Bitte beachten Sie, dass wir ein Produktionsbetrieb sind und wir keinen barrierefreien Zugang zu allen Bereichen <br /> gewährleisten können. Wir bitten um Verständnis.</p>
                <p className="p2">Bei Fragen, wenden Sie sich bitte unter dem nachfolgendem Button</p>
                <p className="btnp"><button>KONTAKT</button></p>
                <p className="p1">WIR FREUEN UNS AUF IHREN BESUCH!</p>
            </div>
        </div>
        
        <Image10 />
        <Bottom />
    </div>
}