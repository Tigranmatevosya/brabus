import Bottom from './Bottom'
import './Classics.scss'

export default function Classics(){


    let classiccars = [
        {
            image:"https://www.brabus.com/_Resources/Persistent/5/2/0/b/520b927e231f332764b42f1df0c7411c1bde3102/CFS-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SE 3.5",
            h2:"CABRIOLET",
            sold:"",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 26.04.1971",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/b/6/2/d/b62d7926377142241d3ac1b4c4ce876e4ff4b731/054c-1-730x413.jpg",
            h1:"MERCEDES-BENZ 280 SE 3.5",
            h2:"CABRIOLET",
            sold:"",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR Verkaufspreis gemäß §25a UStG ab Werk Bottrop",
            span3:"0 km (nach Restauration)	",
            span4:"0 km	Baujahr 1970",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",
            
        },
        
        {
            image:"https://www.brabus.com/_Resources/Persistent/1/e/e/a/1eea38306df35128eda0204673b3039ddafd3b84/C4S_059C%20%2862%29-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SE 3.5",
            h2:"CABRIOLET",
            sold:"SOLD",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 26.04.1971",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/f/c/e/8/fce8670cc496f61c18aea0666a0565d5480d2cc1/055CC-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SE 3.5",
            h2:"CABRIOLET",
            sold:"",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 26.04.1971",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/8/5/4/9/8549bf983e27adb87c3b9b15369b73b49829bbe7/C4S_056Cgalerie-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SE 3.5",
            h2:"CABRIOLET",
            sold:"SOLD",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 26.04.1971",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/6/6/c/e/66ce5113767cf7d9ee92c7f141c2e3366d777610/065C%20CFS-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SE 3.5",
            h2:"CABRIOLET",
            sold:"SOLD",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 26.04.1971",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/b/5/9/5/b595301bdaa56b306e6a7fd827105933030279b2/018C-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SE 3.5 COUPE",
            h2:"",
            sold:"SOLD",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 26.04.1971",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/c/6/0/2/c6023cc5bb10c9c6af5ad88a497631806c217e53/BRABUS_CFS_MB_AS-730x411.jpg",
            h1:"MERCEDES-BENZ 300 SL ROADSTER",
            h2:"",
            sold:"",
            span1:"Classic Fahrzeug",
            span2:"Classic Fahrzeug	1,547,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 26.04.1971",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/0/2/f/2/02f27a13b7cb92f74ef2dca5f5af4029c7af8ba3/BRABUS_CFS_MB_AS_Hintergrund_Webseite-730x411.jpg",
            h1:"MERCEDES-BENZ 300 SL ROADSTER",
            h2:"",
            sold:"",
            span1:"Classic Fahrzeug",
            span2:"Classic Fahrzeug	1,547,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 26.04.1971",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/8/e/e/2/8ee270fa5e2dc4fda57fa77c37ac434ccd94cec3/035C-730x411.jpg",
            h1:"MERCEDES-BENZ 300 SL ROADSTER",
            h2:"",
            sold:"SOLD",
            span1:"Classic Fahrzeug",
            span2:"Preis auf Anfrage",
            span3:"0 km (nach Restauration)	Baujahr 03.08.1961",
            span4:"Baujahr 26.04.1971",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/7/7/5/6/775662c8a5bd23b1085b1372b558cc01ccf20aad/034C-730x411.jpg",
            h1:"MERCEDES-BENZ 300 SL 3.5 GULLWING",
            h2:"",
            sold:"SOLD",
            span1:"Classic Fahrzeug",
            span2:"Preis auf Anfrage",
            span3:"0 km (nach Restauration)	Baujahr 03.08.1961",
            span4:"Baujahr 26.04.1971",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/4/e/d/e/4ede57bfc8869911aeeeef8a8dc3e277ba594628/BRABUS_CFS_MB_AS-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SL PAGODE ",
            h2:"",
            sold:"",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 26.04.1971",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/8/7/0/3/8703345ca6cc9c484313bca1d5a3c09755b7b9d2/BRABUS_CFS_MB_AS_Hintergrund_Webseite-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SL PAGODE ",
            h2:"",
            sold:"SOLD",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 31.05.1968",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/c/7/8/a/c78a39bf075c1430b17adf1c0ffaf47b2b8d8f2a/BRABUS_CFS_MB_AS_Hintergrund_Webseite-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SL PAGODE ",
            h2:"",
            sold:"",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 31.05.1968",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/8/6/5/b/865ba8542c9b3f132bdc6aaf282b6a1872883cfd/BRABUS_CFS_MB_AS_Hintergrund_Webseite-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SL PAGODE ",
            h2:"",
            sold:"",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 31.05.1968",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/4/1/c/0/41c08b7b3cdff6fe1d3cf2e24b3af0d9efeb469e/158C_Pagode%20%2849%29-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SL PAGODE ",
            h2:"",
            sold:"",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 31.05.1968",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/5/e/6/e/5e6eb374cecc712478e33ba0347ebd7a85e0d1d1/BRABUS_CFS_MB_AS_Hintergrund_Webseite-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SL PAGODE ",
            h2:"",
            sold:"SOLD",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 31.05.1968",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/3/4/f/3/34f37b413dfa34f27f14795763bc401dde31545b/BRABUS_CFS_MB_AS_Hintergrund_Webseite-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SL PAGODE ",
            h2:"",
            sold:"",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 31.05.1968",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/3/4/f/3/34f37b413dfa34f27f14795763bc401dde31545b/BRABUS_CFS_MB_AS_Hintergrund_Webseite-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SL PAGODE ",
            h2:"",
            sold:"SOLD",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 09.12.1970",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/f/1/0/7/f107f56a6ac32747a995ca0c9a59adaeae626c6f/BRABUS_CFS_MB_AS_Hintergrund_Webseite-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SL PAGODE ",
            h2:"",
            sold:"SOLD",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 09.12.1970",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/3/0/5/2/305292db2f6615ceb0671b98f228c28d980e6e28/CFS-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SL PAGODE ",
            h2:"",
            sold:"SOLD",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 09.12.1970",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/3/0/5/2/305292db2f6615ceb0671b98f228c28d980e6e28/CFS-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SL PAGODE ",
            h2:"",
            sold:"",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 09.12.1970",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/b/0/d/7/b0d764d994f41a58ead75e00744abd274b4cdb42/BRABUS_CFS-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SL PAGODE ",
            h2:"",
            sold:"SOLD",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 09.12.1970",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/f/0/c/b/f0cb12ffae94bd0cbad59e6eff6634428b97507a/129C-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SL PAGODE ",
            h2:"",
            sold:"",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 09.12.1970",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/b/8/5/b/b85b017634f550710814661819ad8a9810dbf76f/062C-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SL PAGODE ",
            h2:"",
            sold:"",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 09.12.1970",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/3/e/c/b/3ecbe2409350a1a4abc2bcba776d1583768e6d58/C4S_145C-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SL PAGODE ",
            h2:"",
            sold:"SOLD",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 09.12.1970",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/4/c/3/d/4c3d2b84d71e22722b62348f17c69961c57393cd/Teaserbild%20126C%20CFS-730x411.jpg",
            h1:"MERCEDES-BENZ 280 SL PAGODE ",
            h2:"",
            sold:"",
            span1:"Classic Fahrzeug",
            span2:"698,000.00 EUR inkl. MwSt.",
            span3:"0 km (nach Restauration)	",
            span4:"Baujahr 09.12.1970",
            span5:"3499 cm3",
            span6:"147 kW / 200 PS",
            span7:"200 km/h / 125 mph",
            span8:"ID: C4S_254C",
            span9:"Deutschland",
            btn:"DETAILS",

        },
    ]   
             const map =  classiccars.map((item,key)=>{
                return <div key={key} className="clssiccarsmap">
                     
                     <div  className="clssiccarsmapcar">
                        <img src={item.image} alt="" />
                         <div className="div1">
                         {item.sold == "" ? "" :<p className='sold'>{item.sold}</p>}
                         </div>
                         <div className='div1'>
                        <p className='p1'>{item.h1}</p>
                         </div>
                         <div className='div1'>
                        <p className='p2'>{item.h2}</p>
                         </div>
        
        
                       <div className="divhover1">
                          <div className="divhover">
        
                            <div className="gic"></div>
                            <div className="divspan">
                             <span>{item.span1}</span>
                             <span>{item.span2}</span>
                            </div>
                            <div className="gic"></div>
                            <div className="divspan">
                            <span>{item.span3}</span>
                             <span>{item.span4}</span>
                            </div>
                            <div className="gic"></div>
                            <div className="divspan">
                            <span>{item.span5}</span>
                             <span>{item.span6}</span>
                            </div>
                            <div className="gic"></div>
                            <div className="divspan1">
                            <span>{item.span7}</span>
                            </div>
                            <div className="gic"></div>
                            <div className="divspan1">
                             <span>{item.span8}</span>
                            </div>
                            <div className="gic"></div>
                            <div className="divspan1">
                             <span>{item.span9}</span>
                            </div>
                           <div className="btndiv">
                           <button>{item.btn}</button>
                           </div>
                         </div>
                       </div>
                      </div>
        
        
                </div>
              })
        
    
    return <div className="clas">
        
        <video style={{width:"100%"}} controls autoPlay loop muted>
            <source src="https://www.brabus.com/_Resources/Persistent/2/3/7/9/2379f633d06a4699c500fb3a5cfa46f16a2b5a08/constant_love_no_vo_Scope_Widescreen_H264_WEB.mp4" />
        </video>
           
           <div className="clasclasic">
            <div className='sss'> CLASSICS</div>
           <div>BRABUS CLASSICS – <span>  6 STERENE RESTAURANTION</span></div>
           <p>Tausende von Arbeitsstunden, die Expertise aus mehr als 45 Jahren 
            Mercedes-Benz Erfahrung und die <br /> bedingungslose Liebe zum Detail: Das z
            eichnet eine BRABUS Classic 6 Sterne Restauration aus. So entstehen <br /> his
            torisch authentische automobile Kunstwerke – in einer Qualität, als wäre
            der Klassiker gerade frisch vom <br /> Band gelaufen. Eine echte Wertanlage mit
            unvergleichlichem Spaßfaktor.</p>
           </div>

           <div className="classicdiv1">

            <div className="classicdiv11">
                <p className='p1'>SELECT DREAM CARS</p>
                <p className='p2'>Weltweit bieten wir unseren Kunden Träume auf Rädern. Von <br /> äußerst seltenen Sportwagen bis zu kompromisslos <br />
                restaurierten Mercedes-Benz Klassikern in BRABUS 6 Sterne <br /> Qualität – <span>BRABUS DREAMS FOR SALE!</span></p>
                <p className='p2'>Unternehmen Sie eine Zeitreise in vergangene Epochen und entdecken Sie unsere Highlights.</p>
            </div>
            <div className="classicdiv12"></div>
           </div>

           <div className="ofiz">
            <p className='p1'>OFIZELER MERCEDES-BENZ CLASSICPARTNER</p>
            <p className='p2'>Ausgangspunkt jeder 6 Sterne Restauration eines Mercedes-Benz Klassikers ist immer die komplette
                 <br /> Demontage des Basisfahrzeugs in unserer Werkstatt. Dabei werden alle Teile gesichtet und katalogisiert. <br />
             Unbrauchbare Komponenten werden aussortiert.</p>
            <p className='p2'>Als offizieller ClassicPartner garantieren wir für eine originalgetreue Restauration und bieten umfangreiche <br />
             Werkstatt- und Restaurationsleistungen für unsere Kunden an.</p>
            <button>JETZT ENTDECKEN</button>
           </div>

           <div className="clasicimg1">
            <div className="clasicimg1div1">
             <div>
             <p className='p1'>RESTARUATIONSBEISPIEL</p>
             <button>300 SL ROADSTER</button>
             </div>
            </div>
            <div className="clasicimg1div2">
            <div>
             <p className='p1'>RESTARUATIONSBEISPIEL</p>
             <button>280 SE 3.5 CAVRIOLET</button>
             </div>
            </div>
           </div>

           <div className="ofiz2">
            <p className='p1'><span>AUS LEIBE </span> ZUM HANDWERK</p>
            <p className='p2'>Mit höchster Präzision und gewissenhafter Hingabe wird das Schmuckstück wieder zum Leben erweckt: Von <br />
             der kompletten chemischen Entlackung über die sorgfältige Motor- und Getriebe-Revision, von aufwändiger <br />
              Interieur-Erneuerung, KTL-Beschichtung der Karosserie wie bei modernen Serienfahrzeugen und umfassender <br />
               Rostvorsorge bis hin zur finalen Lackierung. Sind alle Arbeitsschritte abgeschlossen, erstrahlt der Mercedes- <br />
               Klassiker wieder im neuen alten Glanz.</p>
            
           </div>


           <div className="classicdiv1">

            <div className="classicdiv11">
                <p className='p3'>NOTE 1+</p>
                <p className='p2'>
                  Nach der vollendeten BRABUS Classic 6 Sterne Restauration <br /> bewertet die führende Oldtimer-Sachverständigenorganisation <br />
                   Classic Data das Fahrzeug mit der Note 1+ Zertifikat. Für die <br />
                    einzigartige Qualität und Originaltreue der Arbeiten erhält das <br />
                     Fahrzeug das Zusatzzertifikat „Neuwagencharakter“: Der <br />
                      Wagen ist wie neu – die 6 Sterne Restauration übertrifft den <br />
                       ursprünglichen Werks-Auslieferungszustand hinsichtlich <br />
                        Verarbeitungsqualität und Rostvorsorge. Ein Klassiker, der in <br />
                         dieser Qualität nur bei BRABUS Classic zu finden ist.
                </p>
              | </div>
            <div className="classicdiv13"></div>
           </div>

            <div className="classicdiv1">

            <div className="classicdiv14"></div>

            <div className="classicdiv11">
                <p className='p1'>HIGHLIGHT MODELLE </p>
                <p className='p2'> Zu den drei Highlight Modellen zählen die Mercedes-Benz 280 <br />
                 SL Pagode, das Mercedes-Benz 280 SE 3.5 Cabriolet und der <br />
                  Mercedes-Benz 300 SL Roadster. <br />
                Unabhängig davon können Sie Kontakt zu unseren BRABUS <br />
                 Classic Experten aufnehmen - wir kümmern uns um Ihr <br /> Anliegen.
 </p>
        <div className='classicsbtndiv'>
    <button>KONTACTIEREN SIE UNS</button>
        </div>
              </div>
           </div>

        <div className="clasicimg2">
             <div>
                <p className='p1'>IKONE TRIFFT IKONE</p>
                <p className='p2'>Die Andy Warhol Story </p>
                <button>300 SL GULLWING</button>
             </div>
        </div>



        <div className="classiccarsmain">
           <p className='p1'>DREAMS FOR SALE</p>
      <p className='p2'>
      Unsere Dreams for Sale verkörpern Leidenschaft, Individualität und Perfektion bis ins letzte Detail.
      </p>

           </div>

        
        <div className="mapcars">{map}</div>

           <Bottom />

    </div>
      
   
  
}