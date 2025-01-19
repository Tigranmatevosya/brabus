import Bottom from './Bottom'
import './Car4sale.scss'
import Saleslider from './Saleslider'

export default function Car4sale(){


    const car4salecars =[

        {
            image:"https://www.brabus.com/_Resources/Persistent/9/5/1/2/95125271765283e98a7da6f339065897bd6e0ce9/BRABUS_CFS_MB_AS_Hintergrund_Webseite-730x411.jpg",
            h1:'BRABUS ROCKET 1000 "1 OF 25"',
            h2:"Mercedes-AMG GT 63 S E Performance",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/9/8/a/5/98a5b4f15e177718300ea697244a671e7c4e7db1/BRABUS_CFS_MB_AS_Hintergrund-730x411.jpg",
            h1:'BRABUS ROCKET 1000 "1 OF 25"',
            h2:"Mercedes-AMG GT 63 S E Performance",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/6/c/a/e/6cae90aca0844a9001036b0963c3e88ba510e7bb/BRABUS_CFS_MB_AS_Hintergrund_Webseite-730x411.jpg",
            h1:'BRABUS 930',
            h2:"Mercedes-AMG GT 63 S E Performance",
            sold:"SOLD",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/6/8/4/2/6842d589db19e04ffb501fc4bed220bc544478a2/BRABUS_CFS-730x411.jpg",
            h1:'BRABUS 930',
            h2:"Mercedes-AMG S 63 E Performance",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/0/6/7/e/067e2e97b8ff73c08b9fea33c0154441ce345090/BRABUS_CFS-730x411.jpg",
            h1:'BRABUS 930',
            h2:"Mercedes-AMG S 63 E Performance",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/e/6/4/8/e64823ee1cf87f9790e50aba9f4c2bf3c31fc196/Crawler%20CFS-730x411.jpg",
            h1:'BRABUS CRAWLER',
            h2:"High Performance Offroad-Fahrzeug",
            sold:"SOLD",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/d/b/2/6/db265c4f0b9b735df9f784df48b64013e07fb5e0/CFS-730x411.jpg",
            h1:'BRABUS 900',
            h2:"Mercedes-AMG E 63 S 4MATIC+",
            sold:"SOLD",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/8/0/b/1/80b130620b3d4e01dd77b9984b9087aa77cb0ca2/BRABUS_CFS-730x411.jpg",
            h1:'BRABUS XLP 900 6x6 Superblack',
            h2:"Mercedes-AMG G 63 (W463A)",
            sold:"SOLD",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/e/5/d/2/e5d25ed984fbea3c6b9b72b96ffe94ed449ba700/XLP900_CFS-730x411.jpg",
            h1:'BRABUS 900 XLP "ONE OF TEN"',
            h2:"Mercedes-AMG G 63 (W463A)",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/a/4/1/a/a41a28ae8de98a1fb8c3c74394bc38c901822277/C4S_Titelbild-730x411.jpg",
            h1:'BRABUS 900 Deep Blue',
            h2:"Mercedes-AMG G 63 (W463A)",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/e/a/5/4/ea54fe3bd5b8377ba457ebe0db493ad3900e272c/BRABUS_CFS-730x411.jpg",
            h1:'BRABUS 900 SUPERBLACK',
            h2:"Mercedes-AMG G 63 (W463A)",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/0/f/0/4/0f044986a0f6a78791c1e47d000d17f3bbb42f1e/CFS-730x411.jpg",
            h1:'BRABUS 900 ROCKET EDITION',
            h2:"Mercedes-AMG GLE 63 S 4MATIC+ Coupé",
            sold:"SOLD",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/0/1/6/4/0164b22ed6042322ba6a37119a6c2baf69b46516/BRABUS_CFS-730x411.jpg",
            h1:'BRABUS 900',
            h2:"Mercedes-AMG GLE 63S Coupé",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/f/8/4/7/f84785ad152e48e0ef4b12cb9f1b0bb426456f4a/BRABUS_CFS_MB_AS_Hintergrund_Webseite-730x411.jpg",
            h1:'BRABUS 900 Superblack',
            h2:"Mercedes-AMG GLS 63 4MATIC+",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/a/a/4/a/aa4a5ba239696393a0530c03f9cc278047ddab76/BRABUS_CFS_MB_AS_Hintergrund_Webseite-730x411.jpg",
            h1:'BRABUS 850',
            h2:"Mercedes-Maybach S 680 4Matic",
            sold:"SOLD",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/4/c/1/e/4c1e138a2ed5c69881ca651ac15094d1db38f5fc/BRABUS_CFS-730x411.jpg",
            h1:'BRABUS 850',
            h2:"Mercedes-Maybach S 680",
            sold:"SOLD",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/f/f/9/6/ff9664ba9119bc1230eb3c63d312a0158f1efe0b/BRABUS_CFS_MB_AS-730x411.jpg",
            h1:'BRABUS 820',
            h2:"Porsche 911 Turbo S Cabriolet",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/0/3/7/1/0371603185d37c32aab0d55337704dca38258ac4/CFS-730x411.jpg",
            h1:'BRABUS 820',
            h2:"Porsche 911 Turbo S Cabriolet",
            sold:"SOLD",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/5/5/d/3/55d3f1a68ed499c232df7b40aaf9c78e79e9aef2/BRABUS_CFS-730x411.jpg",
            h1:'BRABUS XLP 800 6x6 Adventure',
            h2:"Mercedes-AMG G 63 (W463A)",
            sold:"SOLD",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/2/0/6/d/206d166f56229e5622eb918748e507d3dc2e9e25/C4S_347%20%2826%29-730x411.jpg",
            h1:'BRABUS 800 Adventure XLP',
            h2:"Mercedes-AMG G 63 (W463A)",
            sold:"SOLD",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/3/1/6/c/316ca872d1c9f6a004cf42685dae780b22e150f9/Supercars_CFS-730x411.jpg",
            h1:'BRABUS 800 XLP SUPERWHITE',
            h2:"Mercedes-AMG G 63 (W463A)",
            sold:"SOLD",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/2/3/9/b/239b67adbeac55d138e20e6899c5433ccd2d1ef0/BRABUS_CFS-730x411.jpg",
            h1:'BRABUS 800 4x4² Stealth Green',
            h2:"Mercedes-AMG G 63 4x4² (W463A)",
            sold:"SOLD",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/2/b/2/e/2b2eeb0e1062a28b7112f4acaed20a54150c3f46/BRABUS_CFS-730x411.jpg",
            h1:'BRABUS 800 4x4² Superblack',
            h2:"Mercedes-AMG G 63 4x4² (W463A)",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/9/a/c/9/9ac9ae212b43ffdcd89d341c479736acb9a1ba4d/C4S_029%20%2857%29-730x411.jpg",
            h1:'BRABUS 800 BLACK & GOLD Edition',
            h2:"Mercedes-AMG G 63 (W463A)",
            sold:"SOLD",    
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/c/0/d/e/c0ded2e8ff542d0cf428d20482e6f69ef71d1e1c/BRABUS%20750%20Studio_klein%20%2871%29-730x411.jpg",
            h1:'BRABUS 750 Bodo Buschmann Edition "1 of 25"',
            h2:"Mercedes-AMG SL 63 4MATIC+",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/b/1/f/5/b1f5a652b3490e2984f724857ccc2e80a5eb49c7/RR_CFS-730x411.jpg",
            h1:'BRABUS 700',
            h2:"Rolls-Royce Ghost Extended",
            sold:"SOLD",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/4/f/f/b/4ffb22d423b4474d20cbff0f58a40fb88daddc8d/BRABUS%20RANGE%20ROVER%20600%20Studio_klein%20%2853%29-730x411.jpg",
            h1:'BRABUS 600',
            h2:"Range Rover P530 LWB",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/d/1/8/f/d18f3a0ff75659c826b072866467cd8b52c24441/BRABUS_CFS-730x411.jpg",
            h1:'BRABUS 600',
            h2:"Range Rover P530 SWB",
            sold:"SOLD",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/9/d/0/2/9d02fb766935e432aecfc63f6286a4bc0dcd6e1c/BRABUS_CFS_MB_AS_Hintergrund_Webseite-730x411.jpg",
            h1:'Mercedes-Benz Maybach S 600 Pullman',
            h2:"Mercedes-Benz Maybach S 600 Pullman",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/e/3/0/9/e309dc0c0a38277f58df5fe2610e72139e1502de/BRABUS_CFS-730x411.jpg",
            h1:'BRABUS for Taycan Turbo S',
            h2:"Porsche Taycan Turbo S",
            sold:"SOLD",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/9/6/4/b/964b572af899b149c2858b726b88297323fb2cb9/BRABUS_CFS_MB_AS_Hintergrund_Webseite-730x411.jpg",
            h1:'BRABUS for Taycan Turbo S',
            h2:"Porsche Taycan Turbo S",
            sold:"SOLD",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/6/2/e/c/62ec3a0ca3d43fa85c834b5bc0e830fa53030f5f/BRABUS_CFS_MB_AS-730x411.jpg",
            h1:'BRABUS for EQS 53',
            h2:"Mercedes-AMG EQS 53 4MATIC+",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/5/5/e/2/55e25e8be46c0a473b00a488cc3013d409fc6750/C4S_072%20%2825%29-730x411.jpg",
            h1:'BRABUS for EQS 580',
            h2:"Mercedes-Benz EQS 580 4MATIC",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/a/8/a/1/a8a12efd02e14d253eb4c66042cf6416e17b61ef/20220701-003-730x411.jpg",
            h1:'BRABUS for EQS 450',
            h2:"Mercedes-Benz EQS 450 4MATIC",
            sold:"SOLD",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/9/3/4/1/93415d0c63efb754e57446452314ab57133ab643/BRABUSEQC%20%2839%29-730x411.jpg",
            h1:'BRABUS Electric',
            h2:"Mercedes-Benz EQC 400 4MATIC",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/2/d/a/4/2da43033fa6d10d0e4a0340eee11902f3316bb10/BRABUS_CFS_MB_AS_Hintergrund_Webseite-730x411.jpg",
            h1:'BRABUS for AMG C 43',
            h2:"Mercedes-AMG C 43 4MATIC",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/a/7/a/a/a7aaa7537f5360aa5c8b493be1e0769dded80e05/C4S_INVPure-730x411.jpg",
            h1:'INVICTO PURE',
            h2:"Mercedes-Benz G 500 (W463A)",
            sold:"SOLD",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/3/6/4/f/364f4fe6c0ccf37e9f822c91beb78878216901a7/C4S_INVMission-730x411.jpg",
            h1:'INVICTO MISSION',
            h2:"Mercedes-Benz G 500 (W463A)",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/0/b/4/4/0b449208c99064bb65151644bbfb46fde5465904/1300RMPE_side_Studioboden_C4S-730x411.jpg",
            h1:'BRABUS 1300 R Masterpiece Edition',
            h2:"Diamond White",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/7/1/6/4/716480b5e4b11afbdc5ac3fb9aa1abffa89ca147/003_BRA_1300R_side_gray_Leona%20Kopie-730x411.jpg",
            h1:'BRABUS 1300 R Edition 23',
            h2:"Superblack",
            sold:"SOLD",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/a/a/d/6/aad613e79df547183a50f5683c0689333238efbb/BRABUS%201300%20R%20Edition%2023_side_Studio_Boden_C4S-730x411.jpg",
            h1:'BRABUS 1300 R Edition 23',
            h2:"Stealth Gray",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/a/a/d/6/aad613e79df547183a50f5683c0689333238efbb/BRABUS%201300%20R%20Edition%2023_side_Studio_Boden_C4S-730x411.jpg",
            h1:'BRABUS 1300 R Edition 23',
            h2:"Stealth Gray",
            sold:"",
            span1:" Ausstellungsfahrzeug",
            span2:"538,192.80 EUR inkl. MwSt.",
            span3:"4407 cm3",
            span4:"735 kW / 1000 PS",
            span5:"316 km/h / 196 mph",
            span6:"Verbrauchswerte:",
            span7:"kombiniert 12,8 l/100km",
            span8:"Stromverbrauch 12,7 (kWh/100 km)",
            span9:"ID: C4S_190",
            btn:"DETAILS",
        },
        
    ]

    const car4saleclasic = [
    
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

    const car4saleboat = [

        {
            image:"https://www.brabus.com/_Resources/Persistent/f/f/4/3/ff43c990ac79f63ee1feb8780c462e1bbbbb3955/CrossCabin_Storage_BlackOps-648x432.jpg",
            h1:"BRABUS 900 XC CROSS CABIN",
            h2:"Black Ops Signature Edition",
            h3:"Verkaufspreis",
            h4:"Brutto: 818.601,00 EUR",
            h5:"Netto: 687.900,00 EUR",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/7/9/d/4/79d44c124f078efa22d1f6ac30354f5b0e69f915/Suntop_Multistorage_StealthGreen-648x432.jpg",
            h1:"BRABUS Shadow 900 Sun-Top",
            h2:"Stealth Green Signature Edition",
            h3:"Verkaufspreis",
            h4:"Brutto: 760.589,00 EUR",
            h5:"Netto: 639.150,00 EUR",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/f/8/5/0/f8505b870fc82a2b23d0f41ef7b1703b72b710e6/_BRABUS%20Shadow%20500%20Collector%20Render_edit-648x432.jpg",
            h1:"BRABUS Shadow 500 CABIN",
            h2:"Black Ops",
            h3:"Verkaufspreis",
            h4:"Brutto: 419.535,00 EUR",
            h5:"Netto: 352.550,00 EUR",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/8/6/d/6/86d6ea5674debfa604b4785195ccbb0bfe81a75d/Shadow%20300%20Quantum%20White-648x432.jpg",
            h1:"BRABUS Shadow 300 Cross-Top",
            h2:"Quantum White (U-Sofa)",
            h3:"Verkaufspreis",
            h4:"Brutto: 195.219,50 EUR",
            h5:"Netto: 164.050,00 EUR",

        },
        {
            image:"https://www.brabus.com/_Resources/Persistent/8/6/d/6/86d6ea5674debfa604b4785195ccbb0bfe81a75d/Shadow%20300%20Quantum%20White-648x432.jpg",
            h1:"BRABUS Shadow 300 Cross-Top",
            h2:"Quantum White (Multistorage)",
            h3:"Verkaufspreis",
            h4:"Brutto: 195.219,50 EUR",
            h5:"Netto: 164.050,00 EUR",

        },

    ]


    const map4 =  car4salecars.map((item,key)=>{
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


      const map42 =  car4saleclasic.map((item,key)=>{
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


      const map43 =  car4saleboat.map((item,key)=>{
        return <div key={key} className="clssiccarsmap">
             
             <div  className="clssiccarsmapcar">
                <img src={item.image} alt="" />
                 <div className='div1'>
                <p className='p1'>{item.h1}</p>
                 </div>
                 <div className='div1'>
                <p className='p22'>{item.h2}</p>
                 </div>
                 <div className='div1'>
                <p className='p33'>{item.h3}</p>
                 </div>
                 <div className='div1'>
                <p className='p22'>{item.h4}</p>
                 </div>
                 <div className='div1'>
                <p className='p22'>{item.h5}</p>
                 </div>

              </div>


        </div>
      })




    return <div className="car4">
        
        <div className="car4image1">
        </div>

        <div className="car4find">
            <p className='p1'>FIND YOUR DREAM VEHICLE</p>
            <p className='p2'>
            Jedes BRABUS Fahrzeug ist ein einzigartiges Statement der Individualität, in dem Dynamik, Eleganz und <br />
             Leistung zu einer makellosen Vollkommenheit verschmelzen. Neben unseren exklusiven Highlights of the Month <br />
              finden Sie hier eine Auswahl weiterer außergewöhnlicher Cars for Sale und Bikes for Sale, die zum Kauf <br />
               angeboten werden.
            </p>
            <p className='p2'>
            Sie können auch unsere BRABUS Classics 6-Sterne-Restaurationen sowie eine Reihe von luxuriösen Superboats <br />
             zum Verkauf entdecken, die alle die gleiche unvergleichliche Handwerkskunst und Liebe zum Detail bieten, die <br />
              BRABUS seit über vier Jahrzehnten auszeichnet.
            </p>
        </div>

        <div className="hightlight">
        <p className='p1'>HIGHLIGHTS FOR SlALE</p>
        <p className='p2'>ENTDECKEN SIE VERFUNGBARE BRABUS MODELLE</p>
        </div>


        <Saleslider />



        <div className="car4hight">
            <div className="car4hightdiv1">
            HIGHTLIGHTS OF THE MONTH
            </div>
            <div className="car4hightdiv2">
             <div className="div1">
                <img src="https://www.brabus.com/_Resources/Persistent/5/2/2/1/52218eb5339a5b76bcb0225b7c5026dc62f663db/002-648x432.jpg" alt="" />
                <p className='p1'>
                BRABUS 900 SUPERBLACK
                </p>
                    <p className='p2'>
                    Auf Basis Mercedes-AMG GLS 63 4MATIC+
                    </p>
                    <p className='p3'>
                    Verkaufspreis
                    </p>
                    <p className='p2'>
                    Brutto 442,121.41 EUR
                    </p>
                    <p className='p2'>
                    Netto 371,530.60 EUR
                    </p>
             </div>
             <div className="div1">
                <img src="https://www.brabus.com/_Resources/Persistent/b/1/f/0/b1f05b5d5a823d0eebca3a6012d53a5af6f7bc99/_BRA0737-648x432.jpg" alt="" />
                <p className='p1'>
            MERCEDES-BENZ 300 SL ROADSTER
                </p>
                   
                    <p className='p3'>
                    Verkaufspreis
                    </p>
                    <p className='p2'>
                    Brutto 2,500,000.00 EUR
                    </p>
                    <p className='p2'>
                    Verkaufspreis gemäß §25a UStG ab Werk Bottrop.
                    </p>
             </div>
             <div className="div1">
                <img src="https://www.brabus.com/_Resources/Persistent/e/1/c/2/e1c2e9024b16d7701441d5e85bdd28e96ee008e5/C4S_C43_LZ011_Studio_klein%20%284%29-648x432.jpg" alt="" />
               <p className='p1'>
                BRABUS for AMG C 43
                </p>
                    <p className='p2'>
                    Auf Basis Mercedes-AMG C 43 4MATIC
                    </p>
                    <p className='p3'>
                    Verkaufspreis
                    </p>
                    <p className='p2'>
                    Brutto 99,900.00 EUR
                    </p>
                    <p className='p2'>
                    Netto 83,949.58 EUR
                    </p>
               </div>
            </div>
        </div>

           <div className="clasic4sale">
           CARS FOR SALE
           </div>
        <div className="mapcars">{map4}</div>
         
        <div className="clasic4sale">
           CLASSICS FOR SALE
           </div>

        <div className="mapcars">{map42}</div>

        <div className="clasic4sale">
           BOATS FOR SALE
           </div>
           <div className="mapcars2">{map43}</div>
           
           <div className="car4salebottom">
            <div className="div1"></div>
            <div className="div2">
                <div>
                <p className='p1'>
              NICHT DAS RICHTIGE FUR SIE DABE?
                </p>
                <p className='p2'>
                Sie haben noch nicht das Fahrzeug gefunden, was Ihren <br /> Vorstellungen entspricht?
                </p>
                <p className='p2'>
                Kontaktieren Sie uns über das BRABUS Kontaktformular und <br /> teilen   Sie uns Ihre individuellen Wünsche mit. <br />
             Von Umbauanfragen bis hin zu exklusiven <br /> Komplettfahrzeuganfragen erstellen wir Ihnen gerne ein <br /> Angebot über das vorhandene Fahrzeugportfolio hinaus!
                </p>
                <button>CONTACT US</button>
                </div>
            </div>
           </div>

          <Bottom />


    </div>
}