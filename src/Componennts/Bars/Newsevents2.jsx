import { useState } from 'react'
import './Newsevents2.scss'
import Image10 from '../Main/Image10'
import Bottom from '../Main/Bottom'

export default function Newsevents2(){
   
    let NewsEvents = [
        
        {
           type:"fahr",
           image:"https://www.brabus.com/_Resources/Persistent/7/7/2/4/772497452bc8d4f9569281f6363022d984b47449/BRABUS%20BIG%20BOY%201200_Outdoor%20klein%281%29-730x487.jpg?bust=77249745",
           p1:"BRABUS BIG BOY 1200. LUXURY BEYOND PLACES.",
           p2:"04.11.2024 - Auf der diesjährigen Signature Night enthüllten wir eine der größten und exklusivsten …",
        },
        {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/4/d/8/f/4d8fa7d4b4c36ee8b062d72a68d45c719152d1cc/Brabus_RRC_B700_klein%20%284%29-730x487.jpg?bust=4d8fa7d4",
            p1:"BRABUS 700 BLUE SKY. BEYOND ALL.",
            p2:"29.10.2024 - Der BRABUS 700 BLUE SKY bietet eine Reise durch die Sinne. Ein Masterpiece Supercar auf höchstem …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/f/e/f/e/fefee65d5b0c152188395e5a1a379e7adbac7934/BRABUS%20Rocket%20GTS_Location_klein%20%2813%29-730x487.jpg?bust=fefee65d",
            p1:"BRABUS ROCKET GTS. THE POWER OF A VISION.",
            p2:"28.10.2024 - Willkommen im nächsten Kapitel der BRABUS ROCKET Legacy. Der ROCKET GTS ist die absolute Spitze …",
         },
          
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/c/9/1/2/c9124a5d807d52a4821598e3b6f2dc67a15bddf7/G800_%20Superblack%20elephant%20studio%20klein%20%20%2826%29-730x487.jpg?bust=c9124a5d",
            p1:"The Icon returns. BRABUS 800 based on Mercedes-AMG G 63.",
            p2:"24.10.2024 - Ein absolutes Highlight der diesjährigen BRABUS Signature Night: zwei brandneue Varianten des …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/5/7/2/a/572a841067e7a7a670aa09f74bec5a7d0f27f735/Cars%20Root%20Atelier%20x%20BRABUS%20%2825%29-730x487.jpg?bust=572a8410",
            p1:"OUT NOW – High-Performance Fashion trifft Urban Style in exklusiver ",
            p2:"29.09.2024 - It’s time to find your 1-Second-Wow. Der erste offizielle Drop der BRABUS x Root Atelier Clothing …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/a/c/7/c/ac7ceea30eb935ee152a3b22b246cf48f6621015/Messe_Europa_MonacoYacht%20Show_klein%20%2824%29-730x487.jpg?bust=ac7ceea3",
            p1:"BRABUS AT Monaco Yacht Show 2024 neuer Kollektion",
            p2:"20.09.2024 - Wir freuen uns, auch in diesem Jahr wieder auf der Monaco Yacht Show dabei zu sein! Erleben Sie …",
         },

         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/4/7/e/5/47e5d920e2cbce57f85a018c9f5bc24047b46c4f/2024_Brabus_Smart_3_Photo_Studio_D%C3%BCsseldorf_klein-730x487.jpg?bust=47e5d920",
            p1:"Individualisierungsprogramm für den smart #3 BRABUS",
            p2:"20.08.2024 - Sportlich, elegant und exklusiv: Das brandneue BRABUS Individualisierungsprogramm für den smart …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/8/8/c/8/88c81e936abab96d45b92c7d26d8d5098ac867df/2024_Brabus_Smart_1_Studio_Photo%20Studio%20D%C3%BCsseldorf_002-730x487.jpg?bust=88c81e93",
            p1:"Individualisierungsprogramm für den smart #1 BRABUS",
            p2:"09.07.2024 - Der smart #1 BRABUS ist zurück im Spotlight! Mit einem völlig neu entwickelten …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/9/e/c/6/9ec68d39efe6b256d731e418e8ac04a7c78076da/BRABUS%20D22_MB%20E-Klasse%20W%20S%20214_Outdoor_klein%20%2819%29-730x487.jpg?bust=9ec68d39",
            p1:"Individualisierungsprogramm der neuen E-Klasse",
            p2:"16.05.2024 - Tauchen Sie ein in die Welt von BRABUS mit unserem brandneuen Individualisierungsprogramm für die…",
         },

         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/7/2/f/4/72f420fa5c2b0f34e76702dd966583b2bf017f69/Techni%20Classica%202024_klein%20%287%29-730x487.jpg?bust=72f420fa",
            p1:"BRABUS Classic - 6 Sterne restauration meets ",
            p2:"26.03.2024 - Erleben Sie unsere BRABUS Klassiker vom 03. April bis zum 07. April 2024 auf der Techno Classica …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/8/5/3/b/853b4988a463e7839769675454e9a45207c4e70d/BRABUS%20930_S63%20E%20Performance_On%20Location_sky_klein%20%2835%29-730x487.jpg?bust=853b4988",
            p1:"BRABUS 930 - WE CALL IT - VOLLKOMMEN. Oldtimer weltmesse",
            p2:"13.03.2024 - Wir laden Sie ein, atemberaubende Performance in einer Welt der Klarheit zu entdecken, das sich …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/1/6/0/2/16022cbf6069dd8ff4816c5d1e6658f4bc612edf/BRABUS_Rocket_1000_M-AMG%20GT%2063_gray_outdoor-31-730x487.jpg?bust=16022cbf",
            p1:"BRABUS ROCKET 1000 1 of 25 - The Rocket Revolution.",
            p2:"16.02.2024 - Wie können wir das noch übertreffen? Eine Frage, die uns Fans und Kunden auf der ganzen Welt …",
         },

         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/5/e/0/f/5e0f1717734088d2a269edf496308bdad0ef2c3e/20231102_Brabus_GLC__fullres-730x487.jpg?bust=5e0f1717",
            p1:"Individualisierungsprogramm der neuen GLC-Klasse",
            p2:"18.12.2023 - Modernes Daily Driving trifft auf BRABUS typische Performance-Eleganz mit dem neuen …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/e/5/6/8/e56817cebe009f57f226296fee131b40c44268a0/mys_2023-6-730x487.jpg?bust=e56817ce",
            p1:"BRABUS AT Monaco Yacht Show 2023 der neuen GLC-Klasse",
            p2:"21.09.2023 - Die Monaco Yacht Show ist eine der meist erwarteten Luxusyacht-Veranstaltungen des Jahres und ein …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/5/d/8/5/5d85fc533a4590ee6f236cf7592d0061bc159bd7/BRABUS%20RR%20600%20outdoor%20klein%20%2818%29-730x487.jpg?bust=5d85fc53",
            p1:"BRABUS 600. innovation of art.der neuen GLC-Klasse",
            p2:"15.08.2023 - Die Avantgarde ist mehr als nur ein Experiment der Zeit. Es geht um Vertrauenssprünge und darum, …",
         },

         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/6/3/c/4/63c42242509cdf985dcb890625a3f319b9fed26d/20230719_Brabus850_1750841-Edit-730x487.jpg?bust=63c42242",
            p1:"BRABUS 850. Own Class of Excellence.1 OF 25. LEGENDS NEVER DIE.",
            p2:"08.08.2023 - Die ultimative Fusion von Power und Eleganz hat einen Namen – BRABUS 850. Ein Modern-Masterpiece…",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/8/e/8/4/8e84cc143557ae781b2fb6921936d8c3581faee6/BRABUS%20750%20BB%20Studio_klein%20%2820%29-730x487.jpg?bust=8e84cc14",
            p1:"BRABUS 750 BODO BUSCHMANN EDITION 1 OF 25. LEGENDS NEVER DIE.",
            p2:"11.07.2023 - Zurück in die Zukunft! Es ist 1996, der BRABUS 7.3S auf Basis des Mercedes-Benz 600 SL rollt für …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/1/c/3/a/1c3a822232cf806f6b373036a7450432d8aa74bf/Brabus_911-turbo-s_Rocket_900_003-2-730x487.jpg?bust=1c3a8222",
            p1:"BRABUS 900 Rocket R 1 of 25. FAST. FASTER. GONE.",
            p2:"06.07.2023 - Willkommen zu dem bisher außergewöhnlichsten Kapitel der BRABUS Rocket Legacy. Einem …",
         },

         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/c/0/6/f/c06f135279cfc992ee47648695f07de2c200af51/Brabus_6x6_XLP_900_DRV_091-2-730x487.jpg?bust=c06f1352",
            p1:"BRABUS XLP 900 6X6 SUPERBLACK. UNDENIABLE – UNBELIEVABLE.",
            p2:"30.06.2023 - Geboren an einem Ort zwischen dem Beton-Dschungel und der unerforschten Wildnis, wo sich …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/a/5/a/3/a5a30f88ded102734426b0503aa4c0a4ddb814be/Brabus_6x6_XLP_800_EXT_017-730x487.jpg?bust=a5a30f88",
            p1:"BRABUS XLP 800 6X6 Adventure. Embrace Your Wild Side.",
            p2:"30.06.2023 - Ein grenzenloser Eroberer der Elemente, der speziell dafür gebaut wurde, das Ungezähmte zu zähmen…",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/a/e/9/6/ae96317dcc1f4572f05520dc11ba99d76bd08fc0/BRABUS%20800%204x4%C2%B2%20Stealth%20Green%20Outdoor_klein%20%2847%29-730x487.jpg?bust=ae96317d",
            p1:"BRABUS 800 4x4² Stealth Green - The Wild side of luxury.",
            p2:"13.06.2023 - Die ultimative Kombination aus Abenteuer und Eleganz. Basierend auf der Mercedes-AMG G 63 4x4² …",
         },
      
          {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/4/5/0/c/450c2da03d386e48cb0c614d55cff2d011b5d5a6/BRABUS%20800%204x4%C2%B2%20Superblack%20Outdoor_klein%20%281%29-730x487.jpg?bust=450c2da0",
            p1:"BRABUS 800 4x4² Superblack - not regular - wE DOn't dO rEGULAR.",
            p2:"08.06.2023 - Basierend auf der ikonischen Mercedes-AMG G 63 4x4² Plattform, ist der BRABUS 800 4x4² Superblack…",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/d/e/d/c/dedc15be9531a4af780e0031b3f90f9288ed76e4/BRABUS%20930-Mercedes-AMG%20GT%2063S%20E%20Performance_Outdoor_CP_klein%20%2859%29-730x487.jpg?bust=dedc15be",
            p1:"BRABUS 930 - Striking Power - Go Beyond.",
            p2:"23.05.2023 - Basierend auf dem Mercedes-AMG GT 63 S E-Performance Model wurde dieses Next-Level Sport-Coupé …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/d/0/9/9/d099aba062dfc007382041e384131ade0c633adf/BRABUS%20for%20EQS%2053%20Masterpiece_Outdoor_klein%20%2826_2%29-730x487.jpg?bust=d099aba0",
            p1:"BRABUS for Mercedes-AMG EQS 53 - Electrified – How it should be",
            p2:"09.05.2023 - Vollelektrische Lösungen werden immer fortschrittlicher und die Frage, wie Luxus im Bereich der …",
         },

         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/2/6/6/b/266b61d12658cc1f8a23a10ec06fc9fe427e4c59/BRABUS%20GLS%20900%20Superblack%20Outdoor_klein%20%28115%29-1699x1132-730x486.jpg?bust=266b61d1",
            p1:"BRABUS 900 Superblack - It's Always Better in Black",
            p2:"25.04.2023 - Nichts bietet zeitgemäßeren, urbanen Luxus mit der Kraft und Eleganz eines modernen …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/6/6/e/9/66e9e3d4f39f71d3284ca911a55a8298a6a7ab01/BRABUS%20G900%20Deep%20Blue_On_Location_klein%20%285%29-730x487.jpg?bust=66e9e3d4",
            p1:"BRABUS 900 Deep Blue - The Deep Blue Statement",
            p2:"11.04.2023 - Erstmals im Jahr 2022 an den Küsten Mallorcas vorgestellt, verkörpert das Deep Blue Farbschema …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/f/6/f/9/f6f9c6fcb471a80f20b8a42936f92fc9575178b7/BRABUS%20Classic%40Techno%20Classica%202019%20%28125%20von%20127%29-730x487.jpg?bust=f6f9c6fc",
            p1:"BRABUS Classic - 6 Sterne restauration meets ",
            p2:"06.04.2023 - Erleben Sie unsere BRABUS Klassiker vom 12.04.2023-16.04.2023 auf der Techno Classica Essen in …",
         },

         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/1/4/e/3/14e3705cf58da4fbccdec7158f3bbb1de72bf7c2/BRABUS%20G800%204x4%20Outdoor%20-%20klein%20%288%29-730x487.jpg?bust=14e3705c",
            p1:"Veredelungsprogramm für den Mercedes-AMG G63 4x4²",
            p2:"21.02.2023 - Das brandneue BRABUS Individualisierungsprogramm für den Mercedes-AMG G63 4x4² bietet seinen …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/4/a/f/4/4af4dcf0f9c7e9a075cb9bd59614e7f99d490988/20220820_ContinentalTuning_1120484-730x487.jpg?bust=4af4dcf0",
            p1:"44. Continental Tuning Day X Brabus Special auf dem Contidrom",
            p2:"07.10.2022 - Am 20. August wurden die Tore des Contidroms exklusiv für uns geöffnet, um ganz im BRABUS Style …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/4/1/e/e/41eef61a21c41134be96b92e0026985a4935b268/BRABUS%20600%20based%20on%20Maybach%20580_Outdoor_BadDrieburg_klein%20%2858%29-730x487.jpg?bust=41eef61a",
            p1:"BRABUS 600 - A MASTERPIECE OF MODERN LUXURY",
            p2:"28.09.2022 - Der BRABUS 600 ist Haute Couture brabusized. Eine Limousine der Extraklasse, die pure Masterpiece…",
         },

         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/9/f/c/b/9fcb835c28f6c8da6a6ba8b8286770c8ebad7eca/EU_Brabus_AtomGreyMatt_RadiantRed_Ext_001_3_4_Front_Urban-730x487.jpg?bust=9fcb835c",
            p1:"0 to wow in 3.9 seconds - Smart #1 BRABUS",
            p2:"28.09.2022 - Der smart #1 BRABUS ist der Beginn eines neuen Kapitels in der langjährigen Geschichte zwischen …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/a/d/e/9/ade93a139c973b8e328fb94b1d019cfc0485d45f/BRABUS%20P900%20Rocket%20Edition%20-%20Mercedes%20AMG%20G63_Outdoor_%20klein%20%2879%29-730x487.jpg?bust=ade93a13",
            p1:"BRABUS P 900 ROCKET EDITION ONE OF TEN ",
            p2:"22.09.2022 - Willkommen im größten und stärksten Kapitel der BRABUS Rocket Legacy – Die BRABUS P 900 Rocket …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/d/5/d/a/d5da8ea7a15aa5f698c496ded7e8ac4d30b32583/BRABUS%20for%20MB%20EQS%20450_Outdoor%20klein%20%2812%29-730x487.jpg?bust=d5da8ea7",
            p1:"Veredelungsprogramm für den neuen MERCEDES-BENZ EQS",
            p2:"11.08.2022 - Mit dem BRABUS Individualisierungsprogramm für den Mercedes-Benz EQS bringen wir die Welt des...",
         },

         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/b/4/d/2/b4d2c209ecb966026d0b6075aa41e920c7e13175/BRABUS%20820%20Coup%C3%A9_Outdoor_klein%20%2822%29-730x487.jpg?bust=b4d2c209",
            p1:"Testing the All-New BRABUS 820 ",
            p2:"21.07.2022 - Bevor unsere BRABUS Supercars die Straßenzulassung erhalten, muss jedes Einzelne eine genaue und …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/c/d/8/3/cd8378603ff1fef591ea5f088158e3ab84ca28e4/Sequence%2001.00_00_00_01.Still002-730x487.jpg?bust=cd837860",
            p1:"BRABUS @ CONTI TUNING TAG 2022",
            p2:"08.07.2022 - Ein Kessel Buntes: Im Mai fand die 43. Ausgabe des Conti Tuning Tages statt. Auch in diesem Jahr …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/2/8/c/b/28cb1670c059a3fc333b60cd1d06aa5ef0d79718/C-Klassen_lim_combi-730x487.jpg?bust=28cb1670",
            p1:"VEREDELUNGSPROGRAMM DER NEUEN ",
            p2:"30.06.2022 - Das neue BRABUS Individualisierungsprogramm für die Mercedes-Benz C-Klasse W/S 206 vereint ganz …",
         },

         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/d/d/8/6/dd867c9bef25f708ecc2069c711b7e9884633422/MB%20300%20SL%20Gullwing%20Pop%20Art_klein%20%2812%29-730x487.jpg?bust=dd867c9b",
            p1:"IKONE TRIFFT IKONE - ANDY WARHOL STORY",
            p2:"21.06.2022 - 1986 beauftragte Daimler-Benz die legendäre Pop-Art-Ikone Andy Warhol mit einer Reihe von …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/7/a/e/0/7ae08014cd97496f358a8339e4e5826bf954dea5/100500_Brabus_G900-Rocket_1-730x487.jpg?bust=7ae08014",
            p1:"BRABUS 900 SUPERBLACK - Black is the new black",
            p2:"20.05.2022 - Der BRABUS 900 Superblack ist die dritte Ergänzung unserer Monochrome Design Serie von …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/5/a/8/b/5a8b59db467fe89402c19697b347e2ca92f61542/BRABUS%20820%20-%20911%20Turbo%20S%20Cabrio%20Outdoor%20%28131%29-730x487.jpg?bust=5a8b59db",
            p1:"BRABUS 820 - Stylish. Iconic. Exhilarating.",
            p2:"18.05.2022 - Der BRABUS 820 ist Adrenalin auf vier Rädern. Die ultimative Kombination aus Daily-Driving …",
         },

         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/3/c/5/c/3c5ca3423eb67679268742dbced84855361130e1/BRABUS%20700%20based%20on%20Rolls%20Royce%20Ghost%20Extended%20Outdoor%20klein%20%281%29-730x487.jpg?bust=3c5ca342",
            p1:"BRABUS 700 - Elegant. Luxurious. Uncompromising.",
            p2:"18.05.2022 - Der BRABUS 700 ist die höchste Stufe der modernen Eleganz. Eine unverkennbare 1-Second-Wow …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/c/5/d/b/c5db01141b4ab65bb760756a435a7e3784533b06/Brabus_Taycan_004-730x487.jpg?bust=c5db0114",
            p1:"BRABUS FÜR PORSCHE TAYCAN TURBO S - THE ELECTRIFIED LUXURY MASTERPIECE",
            p2:"18.05.2022 - Dieses Next-Level Supercar ist die nächste Generation der Veredelung. Ein elektrifiziertes …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/f/d/3/c/fd3c2b91896166f77278b575d9d046e3d598bff8/20220421_Brabus_Mallorca_7222_fullres-730x487.jpg?bust=fd3c2b91",
            p1:"BRABUS 900 XLP ONE OF TEN - STRONGER THAN EVER",
            p2:"16.05.2022 - The Ultimate Go-Anywhere Pickup - Mit dem brandneuen BRABUS 900 XLP „One of Ten“ verleihen wir …",
         },

         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/7/c/f/d/7cfd64766b12a8732515d0064404381514f92b04/20220224_Brabus_Crawler_RAK_-6_fullres-1027x684-730x486.jpg?bust=7cfd6476",
            p1:"BRABUS CRAWLER - A New Era of BRABUS Off-Road Power",
            p2:"05.05.2022 - Der BRABUS Crawler leitet eine neue Ära der BRABUS Off-Road-Power ein. Eine Ära, die von …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/d/e/5/e/de5ebb8163a7f7a4be303f2d8a5e2e2da15c6b5b/BRABUS%20900%20Mallorca%20%2836%29-730x487.jpg?bust=de5ebb81",
            p1:"BRABUS 900 - The ULtimate luxury suv BRABUS Off-Road Power",
            p2:"28.04.2022 - Der BRABUS 900 ist ein Masterpiece der modernen Veredelung. Ein Next-Level Luxus-SUV, konzipiert …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/9/9/2/d/992d6f81646538f722acb2e9cd3d63357adf071e/DSC_0855-730x487.jpg?bust=992d6f81",
            p1:"BRABUS 800 XLP SUPERWhite - Shine white like a diamond",
            p2:"24.03.2022 - Shine White Like a Diamond - Der brandneue BRABUS 800 XLP Superwhite ist purer High-End Luxus. Er… ",
         },

         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/8/c/1/f/8c1faa53e4a17dffe59818938ee89e82be326d86/DSC_0715-730x487.jpg?bust=8c1faa53",
            p1:"BRABUS 900 - The Wolf in Sheep’s Clothing",
            p2:"07.03.2022 - Der Wolf im Schafspelz – der brandneue BRABUS 900 bietet Understatement pur. Er kombiniert die …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/e/3/e/d/e3ed9c0561ae2a614cd5f30ad0502ed56ea1cb0a/20220103_XLP_Superblack_v2-730x487.jpg?bust=e3ed9c05",
            p1:"BRABUS 800 XLP SUPERBLACK - BLACK IS THE NEW BLACK",
            p2:"20.01.2022 - Mit der Weltpremiere des brandneuen BRABUS 800 Adventure XLP Superblack bringen wir eines unserer…",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/3/1/8/c/318c5756d980a16d5f3720fc78097ccd7d0cfe83/BRABU%20800%20-%20Maybach%20GLS%20600%20%2873%29-730x487.jpg?bust=318c5756",
            p1:"BRABUS 800 - THE SPIRIT OF Modern LUXURY",
            p2:"11.11.2021 - Mit dem BRABUS 800, basierend auf dem Mercedes-Maybach GLS 600, setzen wir neue Maßstäbe in der …",
         },

         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/7/a/9/f/7a9fb07e0058b158c05b3434326b4f3babbe10ee/BRABUS%20900%20Rocket%20Edition%20%20%2835%29-730x487.jpg?bust=7a9fb07e",
            p1:"Worlds fastest suv - BRABUS 900 ROCKET",
            p2:"22.09.2021 - Die brandneue BRABUS 900 ROCKET Edition, basierend auf dem Mercedes-AMG GLE 63 S 4MATIC+ Coupé, …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/4/6/6/7/4667bb5d726a28ff57933ae4d5cf0cee690330e4/20210614_Brabus_GLE800_Coupe_9309-Edit-730x487.jpg?bust=4667bb5d",
            p1:"BRABUS 800 - The SUV in Style",
            p2:"22.07.2021 - Das ultimative All-Terrain-Fahrzeug für jeden Tag, jetzt noch sportlicher! Überragende Leistung …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/0/8/b/c/08bcfd7a0682d89befa0e9911fabadc01cb8d5b1/invicto-tour-15-730x487.jpg?bust=08bcfd7a",
            p1:"invicto desert tour 2021",
            p2:"21.06.2021 -Voller Power startete die BRABUS Automotive in ein neues Abenteuer. Zusammen mit dem INVICTO Pure…",
         },

         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/3/b/1/b/3b1be1f60b36588dd3727b89a068d642489d694b/20210520_Brabus_Cannonball_event_4809-730x487.jpg?bust=3b1be1f6",
            p1:"TIME TO ROCKET! BRABUS 900 ROCKET EDITION - 1 OF 25",
            p2:"17.06.2021 -Bereits über mehrere Generationen steht das Label „BRABUS Rocket“ für kompromisslose Power und&nbs…",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/1/7/1/0/171088a7703f54b3c2737858c0290eb8461470f8/20210510_Brabus_GLS800_2531-Edit-730x487.jpg?bust=171088a7",
            p1:"Maximum space, comfort and power - BRABUS 800",
            p2:"20.05.2021 -Hochleistungs-SUV der Luxusklasse – herausragende Performance mit einem starken Aussehen. Der …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/7/a/2/8/7a28a93ce06075caeb7ae23c825445fa10c32ecd/DSC07168-730x487.jpg?bust=7a28a93c",
            p1:"THE SPORTY SUV - BRABUS 800",
            p2:"20.05.2021 -Das ultimative All-Terrain-Fahrzeug für jeden Tag – Sportlicher Look, Leistung und Luxus in einem …",
         },

         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/1/2/2/e/122e00d5dd73b86d587145ad154c55746c4065e5/20210422_Brabus_2168-Edit-730x487.jpg?bust=122e00d5",
            p1:"der wolf im schafspelz",
            p2:"06.05.2021 -Der Wolf im Schafspelz - maximaler Fahrspaß in einer sportlich-eleganten Limousine. Der brandneue …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/1/d/1/b/1d1bb992600d9ebab7315757bcc701a22dcba81a/361B2630-5A85-4010-AF46-279A5EAAD3E6-730x487.jpg?bust=1d1bb992",
            p1:"BRABUS @ Shanghai Motor Show 2021",
            p2:"30.04.2021 - Die Shanghai Motor Show war erneut die Bühne für unsere neuesten Weltpremieren und viele weitere …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/3/4/1/f/341ff5103fd02252ae4a19a356cecd2f80dfbbaf/DSC05792%20%281%29-Bearbeitet-730x487.jpg?bust=341ff510",
            p1:"Die ultimative Kombination aus Luxus ",
            p2:"15.04.2021 - Die ultimative Kombination aus Luxus und Leistung - die beste Limousine der Welt, Brabusized! …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/c/5/b/7/c5b7f495d0d3b77132a78c7757ed61199b16df51/20210115_Brabus_Smart_92R_5866-Edit-730x487.jpg?bust=c5b7f495",
            p1:"Das Brandneue Urban Supercar - BRABUS 92R",
            p2:"23.03.2021 Exklusiv ausgestattete Stadtsportwagen in limitierter Auflage, die großen Fahrspaß vermitteln, …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/1/2/e/a/12ea2a450dc6572926d86ede541cba2234d7b9be/BRABUS%20B45%20%281%29-1807x1205-730x487.jpg?bust=12ea2a45",
            p1:"BRABUS Performance Upgrade für den A 45 S 4MATIC+",
            p2:"26.01.2021 - Der Mercedes-AMG A 45 S 4MATIC+ wird vom stärksten Serienvierzylinder der Welt angetrieben. Wir …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/b/1/a/c/b1ac87ad5838e2d6fe37d931d53502c6ac6bcad2/_DSC2764-730x487.jpg?bust=b1ac87ad",
            p1:"BRABUS CLASSIC 6 STerne RESTAURATION - Mercedes-Benz 280 SE 3.5",
            p2:"16.11.2020 - Damit fährt man nicht, damit legt man ab: Im September 1969 debütiert das 280 SE 3.5 Cabriolet …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/2/5/d/2/25d2c261ce8f46259a40379723f70e8a1d3c2d66/INVICTO_Luxury-11-730x487.jpg?bust=25d2c261",
            p1:"BRABUS INVICTO LUXURY - ARMOURED VEHICLE",
            p2:"29.10.2020 Der INVICTO LUXURY verbindet – beinahe unsichtbar – überragenden Panzerungsschutz der Klasse VR6 …",
         },
         {
            type:"fahr",
            image:"https://www.brabus.com/_Resources/Persistent/7/3/2/0/7320c68d845fbca792ae776537d0f4faf2472c14/1837d11c-47f0-4486-b4b1-9f1175749b25-730x486.jpg?bust=7320c68d",
            p1:"A NEW MASTERPIECE - DER BRABUS ROCKET 900 ONE OF TEN",
            p2:"23.10.2020 - Ein weiteres Superlativ in der Automobilwelt - mit der Weltpremiere des BRABUS ROCKET 900 ONE OF…",
         },
         {
            type:"fahr",
            image:"",
            p1:"",
            p2:"",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/c/9/e/3/c9e36a6a40abfc39ca0ea44e63bd735b6f201962/BRABUS%20Deep%20Blue_On%20Location_klein%20%2823%29-730x487.jpg?bust=c9e36a6a",
            p1:"BRABUS DEEP BLUE MASTERPIECES. Elegant. Timeless. 904.",
            p2:"25.11.2024 - Die neueste BRABUS Deep Blue Series, die auf der Signature Night 2024 neben einer Vielzahl von …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/a/7/f/8/a7f8304ad8763019ae2a19f68d7f3bd97273eb38/BRABUS_600_PEETCH%20Range%20x%20Porsche%20Elephant%20Studio%20klein%20%288%29-730x487.jpg?bust=a7f8304a",
            p1:"BRABUS Peetch MASTERPIECES. Live to Stand Out.",
            p2:"15.11.2024 - Dynamisch. Elegant. Unverkennbar. Mit der weltweiten Premiere der BRABUS 900 PEETCH und BRABUS …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/4/c/9/0/4c902067387593fda6914b361d490ae48279abff/Lead%20Visual%20BRABUS%20Masterpiece%20Collection%20without%20Text%283%29-730x487.jpg?bust=4c902067",
            p1:"OUT NOW – Neue BRABUS Fashion Signature Night 2024",
            p2:"13.11.2024 - This is BRABUS, ready to wear. Ein weiteres brandneues Highlight der diesjährigen Signature Night: …",
         },
         
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/c/8/0/9/c809721e36cc55f12b4bd23b2df0bb5b228767d8/BRABUS%201000%20All%20Gray_S63_OnLocation%20%282%29-730x487.jpg?bust=c809721e",
            p1:"BRABUS 1000 ALL GRAY. ALL GRAY EVERYTHING.",
            p2:"11.11.2024 - Der BRABUS 1000 ALL GRAY ist eine einzigartige Übertragung des Designethos und der …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/7/7/2/4/772497452bc8d4f9569281f6363022d984b47449/BRABUS%20BIG%20BOY%201200_Outdoor%20klein%281%29-730x487.jpg?bust=77249745",
            p1:"BRABUS BIG BOY 1200. LUXURY BEYOND PLACES.",
            p2:"04.11.2024 - Auf der diesjährigen Signature Night enthüllten wir eine der größten und exklusivsten …",
         },
         {
             type:"neuer",
             image:"https://www.brabus.com/_Resources/Persistent/4/d/8/f/4d8fa7d4b4c36ee8b062d72a68d45c719152d1cc/Brabus_RRC_B700_klein%20%284%29-730x487.jpg?bust=4d8fa7d4",
             p1:"BRABUS 700 BLUE SKY. BEYOND ALL.",
             p2:"29.10.2024 - Der BRABUS 700 BLUE SKY bietet eine Reise durch die Sinne. Ein Masterpiece Supercar auf höchstem …",
          },


          {
             type:"neuer",
             image:"https://www.brabus.com/_Resources/Persistent/f/e/f/e/fefee65d5b0c152188395e5a1a379e7adbac7934/BRABUS%20Rocket%20GTS_Location_klein%20%2813%29-730x487.jpg?bust=fefee65d",
             p1:"BRABUS ROCKET GTS. THE POWER OF A VISION.",
             p2:"28.10.2024 - Willkommen im nächsten Kapitel der BRABUS ROCKET Legacy. Der ROCKET GTS ist die absolute Spitze …",
          },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/c/9/1/2/c9124a5d807d52a4821598e3b6f2dc67a15bddf7/G800_%20Superblack%20elephant%20studio%20klein%20%20%2826%29-730x487.jpg?bust=c9124a5d",
            p1:"The Icon returns. BRABUS 800 based on Mercedes-AMG G 63.",
            p2:"24.10.2024 - Ein absolutes Highlight der diesjährigen BRABUS Signature Night: zwei brandneue Varianten des …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/a/1/3/7/a13713fd3947cb1445d82192c9d2f5e9a4944a32/BRABUS%20Shadow%201000%20Sun%20Top%20PG%20klein%20%2833%29-730x487.jpg?bust=a13713fd",
            p1:"Shadow 1000 Sun-Top Phantom Gray Signature Edition. A True ",
            p2:"10.09.2024 - Atemberaubende Beschleunigung, hohe Geschwindigkeiten, rennsporttaugliches Handling und …",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/4/7/e/5/47e5d920e2cbce57f85a018c9f5bc24047b46c4f/2024_Brabus_Smart_3_Photo_Studio_D%C3%BCsseldorf_klein-730x487.jpg?bust=47e5d920",
            p1:"Individualisierungsprogramm für den smart #3 BRABUS",
            p2:"20.08.2024 - Sportlich, elegant und exklusiv: Das brandneue BRABUS Individualisierungsprogramm für den smart …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/8/8/c/8/88c81e936abab96d45b92c7d26d8d5098ac867df/2024_Brabus_Smart_1_Studio_Photo%20Studio%20D%C3%BCsseldorf_002-730x487.jpg?bust=88c81e93",
            p1:"Individualisierungsprogramm für den smart #1 BRABUS",
            p2:"09.07.2024 - Der smart #1 BRABUS ist zurück im Spotlight! Mit einem völlig neu entwickelten …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/c/e/e/9/cee98b30ddd401b4ff0b3dc57039d7d5fd82d166/AwakexBRABUS_Boat_and_Board%20%2855%29-730x487.jpg?bust=cee98b30",
            p1:"BRABUS X Awake - Brabusize the waves",
            p2:"28.05.2024 - Wir freuen uns, das erste Ergebnis unserer neuesten Kollaboration mit dem revolutionären …",
         },


         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/9/e/c/6/9ec68d39efe6b256d731e418e8ac04a7c78076da/BRABUS%20D22_MB%20E-Klasse%20W%20S%20214_Outdoor_klein%20%2819%29-730x487.jpg?bust=9ec68d39",
            p1:"Individualisierungsprogramm der neuen E-Klasse",
            p2:"16.05.2024 - Tauchen Sie ein in die Welt von BRABUS mit unserem brandneuen Individualisierungsprogramm für die…",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/f/2/3/f/f23f5f6e62ce72bf0f9f37da145a8e6cde76f999/BRABUS%20Shadow%201200%20Sun-Top%20Phantom%20Gray%20Signature%20Edition_0X0A0674-730x487.jpg?bust=f23f5f6e",
            p1:"Shadow 1200 Sun-Top Phantom Gray Signature Edition. Extreme. ",
            p2:"23.04.2024 - Die BRABUS Shadow 1200 Sun-Top Phantom Gray Signature Edition ist der Newcomer in der größten und …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/8/5/3/b/853b4988a463e7839769675454e9a45207c4e70d/BRABUS%20930_S63%20E%20Performance_On%20Location_sky_klein%20%2835%29-730x487.jpg?bust=853b4988",
            p1:"BRABUS 930 - WE CALL IT - VOLLKOMMEN. Epic. Legendary.",
            p2:"13.03.2024 - Wir laden Sie ein, atemberaubende Performance in einer Welt der Klarheit zu entdecken, das sich …",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/1/6/0/2/16022cbf6069dd8ff4816c5d1e6658f4bc612edf/BRABUS_Rocket_1000_M-AMG%20GT%2063_gray_outdoor-31-730x487.jpg?bust=16022cbf",
            p1:"BRABUS ROCKET 1000 1 of 25 - The Rocket Revolution.",
            p2:"16.02.2024 - Wie können wir das noch übertreffen? Eine Frage, die uns Fans und Kunden auf der ganzen Welt …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/a/f/c/8/afc8f964cb98d8bd6131a4990d4872854ec6c427/AXBR_1200_BOps_ACabin_HeroShot_01-730x487.jpg?bust=afc8f964",
            p1:"BRABUS Shadow 1200 Black Ops Signature Edition. A new dimension ",
            p2:"20.01.2024 - Mehr Leistung, mehr 1-Second-Wow, mehr BRABUS. Mit 45 Fuß ist die BRABUS Shadow 1200 XC Cross-Cabin…",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/7/c/f/6/7cf6f36c2f90d11bf6919927b4da0dcece7cc43b/BRABUS%20Shadow%201000%20XC%20Cross%20Cabin%20Black%20Ops%20Signature%20Edition_klein%20%2815%29-730x487.jpg?bust=7cf6f36c",
            p1:"BRABUS Shadow 1000 Black Ops Signature Edition. A whole ",
            p2:"20.01.2024 - Atemberaubende Beschleunigung und Geschwindigkeit, rennsporttaugliches Handling und …",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/5/e/0/f/5e0f1717734088d2a269edf496308bdad0ef2c3e/20231102_Brabus_GLC__fullres-730x487.jpg?bust=5e0f1717",
            p1:"Individualisierungsprogramm der neuen GLC-Klasse",
            p2:"18.12.2023 - Modernes Daily Driving trifft auf BRABUS typische Performance-Eleganz mit dem neuen …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/8/f/b/f/8fbf9116d374064448ada189a4bae42f31dad3de/BRABUS%201300%20R%20Masterpiece%20Edition_klein%20%2823%29-730x487.jpg?bust=8fbf9116",
            p1:"BRABUS 1300 R Masterpiece Edition - Too Rare to ride.",
            p2:"27.09.2023 - Die BRABUS 1300 R Masterpiece Edition ist die limitierteste Serie des weltweit ersten BRABUS …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/7/f/7/0/7f702e2f1a523746566db932b52e1290ded5d2cf/BRABUS%20Shadow%20900%20Sun-Top%20Platinum%20Gray%20CamoWrap%20%282%29-730x487.jpg?bust=7f702e2f",
            p1:"Die kommende Bootsaison 2024 mit kompromisslosen Premium-Upgrades",
            p2:"12.09.2023 - Bei BRABUS und BRABUS Marine streben wir nach dem Superlativ, nach ultimativem Luxus und …",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/e/7/f/b/e7fbb974eba25452c801dce0c5e90b680470d922/20230804_papenburg3000_1800364-730x487.jpg?bust=e7fbb974",
            p1:"Papenburg 3000 2023 | High-Speed Extravaganz auf 3000 Metern",
            p2:"28.08.2023 - Am 5. August 2023 versammelte sich die europäische Tuning-Elite in Norddeutschland zur vierten …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/5/5/3/a/553adcb0aeb961712115b343d64982ebad617fef/DSC03334-730x487.jpg?bust=553adcb0",
            p1:"PEBBLE BEACH Concours d´elegance 2023 - luxuriöse supercars und ",
            p2:"18.08.2023 - Die 72. Pebble Beach Concours d´Elegance ist das Highlight der Monterey Car Week und gilt als einer…",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/5/d/8/5/5d85fc533a4590ee6f236cf7592d0061bc159bd7/BRABUS%20RR%20600%20outdoor%20klein%20%2818%29-730x487.jpg?bust=5d85fc53",
            p1:"BRABUS 600. innovation of art. einmalige klassiker",
            p2:"15.08.2023 - Die Avantgarde ist mehr als nur ein Experiment der Zeit. Es geht um Vertrauenssprünge und darum, …",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/6/3/c/4/63c42242509cdf985dcb890625a3f319b9fed26d/20230719_Brabus850_1750841-Edit-730x487.jpg?bust=63c42242",
            p1:"BRABUS 850. Own Class of Excellence.1 OF 25. LEGENDS NEVER DIE.",
            p2:"08.08.2023 - Die ultimative Fusion von Power und Eleganz hat einen Namen – BRABUS 850. Ein Modern-Masterpiece…",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/a/5/d/6/a5d655d766aaa180ef04a859adfe53fd495e14ad/Brabus_Signature_Night_NS-426-730x487.jpg?bust=a5d655d7",
            p1:"One second is all it takes - #SN23",
            p2:"18.07.2023 - Über 600 VIP-Gäste aus aller Welt kamen erneut im Herzen des Ruhrgebiets zusammen, um das größte …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/8/e/8/4/8e84cc143557ae781b2fb6921936d8c3581faee6/BRABUS%20750%20BB%20Studio_klein%20%2820%29-730x487.jpg?bust=8e84cc14",
            p1:"BRABUS 750 BODO BUSCHMANN EDITION 1 OF 25. LEGENDS NEVER DIE.",
            p2:"11.07.2023 - Zurück in die Zukunft! Es ist 1996, der BRABUS 7.3S auf Basis des Mercedes-Benz 600 SL rollt für …",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/1/c/3/a/1c3a822232cf806f6b373036a7450432d8aa74bf/Brabus_911-turbo-s_Rocket_900_003-2-730x487.jpg?bust=1c3a8222",
            p1:"BRABUS 900 Rocket R 1 of 25. FAST. FASTER. GONE.",
            p2:"06.07.2023 - Willkommen zu dem bisher außergewöhnlichsten Kapitel der BRABUS Rocket Legacy. Einem …",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/c/0/6/f/c06f135279cfc992ee47648695f07de2c200af51/Brabus_6x6_XLP_900_DRV_091-2-730x487.jpg?bust=c06f1352",
            p1:"BRABUS XLP 900 6X6 SUPERBLACK. UNDENIABLE – UNBELIEVABLE.",
            p2:"30.06.2023 - Geboren an einem Ort zwischen dem Beton-Dschungel und der unerforschten Wildnis, wo sich …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/a/5/a/3/a5a30f88ded102734426b0503aa4c0a4ddb814be/Brabus_6x6_XLP_800_EXT_017-730x487.jpg?bust=a5a30f88",
            p1:"BRABUS XLP 800 6X6 Adventure. Embrace Your Wild Side.",
            p2:"30.06.2023 - Ein grenzenloser Eroberer der Elemente, der speziell dafür gebaut wurde, das Ungezähmte zu zähmen…",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/f/5/d/2/f5d28dab8de63a783a3e9d1f8ee9da4a7514da7a/PAM01403_DET_02_B-2-730x487.jpg?bust=f5d28dab",
            p1:"Panerai Submersible S BRABUS The Wild side of luxury.",
            p2:"30.06.2023 - Inspiriert von einer gemeinsamen Leidenschaft für luxuriöses Design und geleitet von bahnbrechender…",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/a/e/9/6/ae96317dcc1f4572f05520dc11ba99d76bd08fc0/BRABUS%20800%204x4%C2%B2%20Stealth%20Green%20Outdoor_klein%20%2847%29-730x487.jpg?bust=ae96317d",
            p1:"BRABUS 800 4x4² Stealth Green - The Wild side of luxury.",
            p2:"13.06.2023 - Die ultimative Kombination aus Abenteuer und Eleganz. Basierend auf der Mercedes-AMG G 63 4x4² …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/4/5/0/c/450c2da03d386e48cb0c614d55cff2d011b5d5a6/BRABUS%20800%204x4%C2%B2%20Superblack%20Outdoor_klein%20%281%29-730x487.jpg?bust=450c2da0",
            p1:"BRABUS 800 4x4² Superblack - not regular - wE DOn't dO rEGULAR.",
            p2:"08.06.2023 - Basierend auf der ikonischen Mercedes-AMG G 63 4x4² Plattform, ist der BRABUS 800 4x4² Superblack…",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/d/e/d/c/dedc15be9531a4af780e0031b3f90f9288ed76e4/BRABUS%20930-Mercedes-AMG%20GT%2063S%20E%20Performance_Outdoor_CP_klein%20%2859%29-730x487.jpg?bust=dedc15be",
            p1:"BRABUS 930 - Striking Power - Go Beyond.",
            p2:"23.05.2023 - Basierend auf dem Mercedes-AMG GT 63 S E-Performance Model wurde dieses Next-Level Sport-Coupé …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/d/0/9/9/d099aba062dfc007382041e384131ade0c633adf/BRABUS%20for%20EQS%2053%20Masterpiece_Outdoor_klein%20%2826_2%29-730x487.jpg?bust=d099aba0",
            p1:"BRABUS for Mercedes-AMG EQS 53 - Electrified – How it should be",
            p2:"09.05.2023 - Vollelektrische Lösungen werden immer fortschrittlicher und die Frage, wie Luxus im Bereich der …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/2/6/6/b/266b61d12658cc1f8a23a10ec06fc9fe427e4c59/BRABUS%20GLS%20900%20Superblack%20Outdoor_klein%20%28115%29-1699x1132-730x486.jpg?bust=266b61d1",
            p1:"BRABUS 900 Superblack - It's Always Better in Black",
            p2:"25.04.2023 - Nichts bietet zeitgemäßeren, urbanen Luxus mit der Kraft und Eleganz eines modernen …",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/6/6/e/9/66e9e3d4f39f71d3284ca911a55a8298a6a7ab01/BRABUS%20G900%20Deep%20Blue_On_Location_klein%20%285%29-730x487.jpg?bust=66e9e3d4",
            p1:"BRABUS 900 Deep Blue - The Deep Blue Statement",
            p2:"11.04.2023 - Erstmals im Jahr 2022 an den Küsten Mallorcas vorgestellt, verkörpert das Deep Blue Farbschema …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/8/a/c/1/8ac19df2dfedcb1fe0be82a42fde31e5f22c2be7/towable15-730x487.jpg?bust=8ac19df2",
            p1:"BRABUS X JOBE - IT'S TIME TO GEAR UP Blue Statement",
            p2:"29.03.2022 - Summer is on its way! Die vierte in Kollaboration mit Jobe entwickelte Bekleidungs- und …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/1/4/e/3/14e3705cf58da4fbccdec7158f3bbb1de72bf7c2/BRABUS%20G800%204x4%20Outdoor%20-%20klein%20%288%29-730x487.jpg?bust=14e3705c",
            p1:"Veredelungsprogramm für den Mercedes-AMG G63 4x4²",
            p2:"21.02.2023 - Das brandneue BRABUS Individualisierungsprogramm für den Mercedes-AMG G63 4x4² bietet seinen …",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/c/3/e/9/c3e9b7daf4fe60bf2724d584cd6fbf624bcbfa00/BRABUS%201300%20R%20Edition%2023%20-%20Wink%20BO%20klein%20%281%29-730x487.jpg?bust=c3e9b7da",
            p1:"BRABUS 1300 R Edition 23 - Back. In black.",
            p2:"13.02.2023 - Der BRABUS 1-Second-Wow-Effekt auf zwei Rädern geht in die nächste Runde mit der Weltpremiere …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/b/3/b/4/b3b48c62dc571fddd46ea55efbba579a74cb6da7/Pam1283_Cat_Dett01_B-730x487.jpg?bust=b3b48c62",
            p1:"Panerai Submersible S BRABUS Verde Militare Edition",
            p2:"21.01.2023 - Das erstklassige Portfolio der BRABUS x Panerai Kooperation wird mit der brandneuen Panerai …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/e/3/7/7/e3770355115f9e184ac40090d44fef5f060ffba9/BRABUS%20Shadow%20900Sun-Top_Stealth%20Green-730x487.jpg?bust=e3770355",
            p1:"BRABUS Shadow 900 Stealth green Signature Edition",
            p2:"21.01.2023 - BRABUS Marine setzt die Neudefinition des Dayboatings mit seiner neuesten Designevolution, der …",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/9/0/4/d/904d53b23213d38ad6e84a730f8efd6367ee0af1/BRABUS%20Collection%20-%20Winter%202022-23%20%282%29-730x487.jpg?bust=904d53b2",
            p1:"BRABUS Collection - Winter 2022/23",
            p2:"28.11.2022 - Mit Beginn der Winter-Saison launchen wir neue Fashion Pieces in einem völlig neuen Design und …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/a/2/3/9/a2392adc2f78d13c3efb38b4a73fb357fd38152e/BRABUS%20Business%20B25%20Sport_klein%20%286%29-730x487.jpg?bust=a2392adc",
            p1:"BRABUS präsentiert: BRABUS Business editions exklusiv für den ",
            p2:"18.11.2022 - BRABUS präsentiert eine brandneue Reihe von 1-Second-Wow Business Vans, die speziell für den …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/c/2/0/d/c20df2424d60919a6407e2e9bdc2ecf370277bd0/Pam1285_Cat_Dett02_B_2389465-730x487.jpg?bust=c20df242",
            p1:"Panerai Submersible S BRABUS Experience Edition",
            p2:"11.11.2022 - Ready for adventure? Das erstklassige Portfolio der BRABUS x Panerai Kooperation wird mit der …",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/4/1/e/e/41eef61a21c41134be96b92e0026985a4935b268/BRABUS%20600%20based%20on%20Maybach%20580_Outdoor_BadDrieburg_klein%20%2858%29-730x487.jpg?bust=41eef61a",
            p1:"BRABUS 600 - A MASTERPIECE OF MODERN LUXURY",
            p2:"28.09.2022 - Der BRABUS 600 ist Haute Couture brabusized. Eine Limousine der Extraklasse, die pure Masterpiece…",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/9/f/c/b/9fcb835c28f6c8da6a6ba8b8286770c8ebad7eca/EU_Brabus_AtomGreyMatt_RadiantRed_Ext_001_3_4_Front_Urban-730x487.jpg?bust=9fcb835c",
            p1:"0 to wow in 3.9 seconds - Smart #1 BRABUS",
            p2:"28.09.2022 - Der smart #1 BRABUS ist der Beginn eines neuen Kapitels in der langjährigen Geschichte zwischen …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/a/d/e/9/ade93a139c973b8e328fb94b1d019cfc0485d45f/BRABUS%20P900%20Rocket%20Edition%20-%20Mercedes%20AMG%20G63_Outdoor_%20klein%20%2879%29-730x487.jpg?bust=ade93a13",
            p1:"BRABUS P 900 ROCKET EDITION ONE OF TEN ",
            p2:"22.09.2022 - Willkommen im größten und stärksten Kapitel der BRABUS Rocket Legacy – Die BRABUS P 900 Rocket …",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/2/e/1/5/2e15b11e3206d7d7a8e5c951ed37e89458ff40ac/Mono%20ZV%20wei%C3%9F%202-730x487.jpg?bust=2e15b11e",
            p1:"NEUES FELGENDESIGN: DIE BRABUS MONOBLOCK ZV",
            p2:"15.09.2022 - Forged to Perfection - Die BRABUS Monoblock ZV „Platinum Edition ist die neueste Ergänzung unseres…",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/d/d/f/b/ddfb85ad4a2b630aa5552f2f5ae986cb64ecc163/BRABUS%20Shadow%20900XC%20Black%20Ops%20Signature%20Edition%20klein%20%285%29-730x487.jpg?bust=ddfb85ad",
            p1:"BRABUS Shadow 900 Black Ops Signature Edition",
            p2:"07.09.2022 - Es ist Zeit für eine Evolution. Unsere preisgekrönte BRABUS Shadow 900 Black Ops Serie wird mit der…",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/d/5/d/a/d5da8ea7a15aa5f698c496ded7e8ac4d30b32583/BRABUS%20for%20MB%20EQS%20450_Outdoor%20klein%20%2812%29-730x487.jpg?bust=d5da8ea7",
            p1:"Veredelungsprogramm für den neuen MERCEDES-BENZ EQS",
            p2:"11.08.2022 - Mit dem BRABUS Individualisierungsprogramm für den Mercedes-Benz EQS bringen wir die Welt des...",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/b/4/d/2/b4d2c209ecb966026d0b6075aa41e920c7e13175/BRABUS%20820%20Coup%C3%A9_Outdoor_klein%20%2822%29-730x487.jpg?bust=b4d2c209",
            p1:"Testing the All-New BRABUS 820",
            p2:"21.07.2022 - Bevor unsere BRABUS Supercars die Straßenzulassung erhalten, muss jedes Einzelne eine genaue und …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/2/8/c/b/28cb1670c059a3fc333b60cd1d06aa5ef0d79718/C-Klassen_lim_combi-730x487.jpg?bust=28cb1670",
            p1:"VEREDELUNGSPROGRAMM DER NEUEN ",
            p2:"30.06.2022 - Das neue BRABUS Individualisierungsprogramm für die Mercedes-Benz C-Klasse W/S 206 vereint ganz …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/7/a/e/0/7ae08014cd97496f358a8339e4e5826bf954dea5/100500_Brabus_G900-Rocket_1-730x487.jpg?bust=7ae08014",
            p1:"BRABUS 900 SUPERBLACK - Black is the ",
            p2:"20.05.2022 - Der BRABUS 900 Superblack ist die dritte Ergänzung unserer Monochrome Design Serie von …",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/5/a/8/b/5a8b59db467fe89402c19697b347e2ca92f61542/BRABUS%20820%20-%20911%20Turbo%20S%20Cabrio%20Outdoor%20%28131%29-730x487.jpg?bust=5a8b59db",
            p1:"BRABUS 820 - Stylish. Iconic. Exhilarating.",
            p2:"18.05.2022 - Der BRABUS 820 ist Adrenalin auf vier Rädern. Die ultimative Kombination aus Daily-Driving …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/3/c/5/c/3c5ca3423eb67679268742dbced84855361130e1/BRABUS%20700%20based%20on%20Rolls%20Royce%20Ghost%20Extended%20Outdoor%20klein%20%281%29-730x487.jpg?bust=3c5ca342",
            p1:"BRABUS 700 - Elegant. Luxurious. Uncompromising.",
            p2:"18.05.2022 - Der BRABUS 700 ist die höchste Stufe der modernen Eleganz. Eine unverkennbare 1-Second-Wow …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/c/5/d/b/c5db01141b4ab65bb760756a435a7e3784533b06/Brabus_Taycan_004-730x487.jpg?bust=c5db0114",
            p1:"BRABUS FÜR PORSCHE TAYCAN TURBO S - THE ELECTRIFIED LUXURY MASTERPIECE",
            p2:"18.05.2022 - Dieses Next-Level Supercar ist die nächste Generation der Veredelung. Ein elektrifiziertes …",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/f/d/3/c/fd3c2b91896166f77278b575d9d046e3d598bff8/20220421_Brabus_Mallorca_7222_fullres-730x487.jpg?bust=fd3c2b91",
            p1:"BRABUS 900 XLP ONE OF TEN - STRONGER THAN EVER",
            p2:"16.05.2022 - The Ultimate Go-Anywhere Pickup - Mit dem brandneuen BRABUS 900 XLP „One of Ten“ verleihen wir …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/7/c/f/d/7cfd64766b12a8732515d0064404381514f92b04/20220224_Brabus_Crawler_RAK_-6_fullres-1027x684-730x486.jpg?bust=7cfd6476",
            p1:"BRABUS CRAWLER - A New Era of BRABUS Off-Road Power",
            p2:"05.05.2022 - Der BRABUS Crawler leitet eine neue Ära der BRABUS Off-Road-Power ein. Eine Ära, die von …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/1/e/6/a/1e6a16e5391e501d3ed9d3e8f6ddb453ad77d4a4/20220426_Brabus_Mallorca_7274-730x487.jpg?bust=1e6a16e5",
            p1:"BRABUS Shadow 300 Edition One - Inspiring. Luxurious. Fun.",
            p2:"29.04.2022 - Das brandneue BRABUS Shadow 300 Edition One Sportboot von BRABUS Marine feiert seine Premiere und …",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/2/6/9/c/269ccb1c02fbc8d6cff4dc58de09b2e4cbbddfa5/Jobe%20Sports%20%26%20Brabus-16-730x487.jpg?bust=269ccb1c",
            p1:"BRABUS X JOBE - THE ADVENTURE CONTINUES",
            p2:"29.04.2022 - Nach den erfolgreichen High-End-Wassersport Kollektionen, erscheint nun die dritte Auflage der …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/0/4/2/6/042637dce4f20f50ec46bee55f2f854a8d05791c/20220426_Brabus_Mallorca_7306-730x487.jpg?bust=042637dc",
            p1:"Panerai Submersible S BRABUS Blue Shadow Edition",
            p2:"28.04.2022 - Die Partnerschaft mit dem weltbekannten Uhrenhersteller Panerai geht in die nächste Runde. …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/1/5/5/b/155b48603a2def798beb2add181089e26aec027b/BRABUS%20Shadow%20900%20Deep%20Blue%20%2829%29-730x487.jpg?bust=155b4860",
            p1:"BRABUS Shadow 900 Deep Blue Signature Edition",
            p2:"28.04.2022 - Unser neuestes Superboat aus der BRABUS Shadow Range feiert seine exklusive Weltpremiere. Die …",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/d/e/5/e/de5ebb8163a7f7a4be303f2d8a5e2e2da15c6b5b/BRABUS%20900%20Mallorca%20%2836%29-730x487.jpg?bust=de5ebb81",
            p1:"BRABUS 900 - The ULtimate luxury suv BRABUS Off-Road Power",
            p2:"28.04.2022 - Der BRABUS 900 ist ein Masterpiece der modernen Veredelung. Ein Next-Level Luxus-SUV, konzipiert …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/9/9/2/d/992d6f81646538f722acb2e9cd3d63357adf071e/DSC_0855-730x487.jpg?bust=992d6f81",
            p1:"BRABUS 800 XLP SUPERWhite - Shine white like a diamond",
            p2:"24.03.2022 - Shine White Like a Diamond - Der brandneue BRABUS 800 XLP Superwhite ist purer High-End Luxus. Er… ",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/8/c/1/f/8c1faa53e4a17dffe59818938ee89e82be326d86/DSC_0715-730x487.jpg?bust=8c1faa53",
            p1:"BRABUS 900 - The Wolf in Sheep’s Clothing",
            p2:"07.03.2022 - Der Wolf im Schafspelz – der brandneue BRABUS 900 bietet Understatement pur. Er kombiniert die …",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/3/5/3/f/353f8f8e203aef00a0cda1879769f7ff34e403c6/20211118_Brabus_1300R_8762_fullres-730x487.jpg?bust=353f8f8e",
            p1:"BRABUS 1300 R - heart of a rebel, soul of a gentleman",
            p2:"11.02.2022 - Wir freuen uns, Ihnen unsere neuste Markenkooperation mit dem führenden europäischen …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/e/3/e/d/e3ed9c0561ae2a614cd5f30ad0502ed56ea1cb0a/20220103_XLP_Superblack_v2-730x487.jpg?bust=e3ed9c05",
            p1:"BRABUS 800 XLP SUPERBLACK - BLACK IS THE NEW BLACK",
            p2:"20.01.2022 - Mit der Weltpremiere des brandneuen BRABUS 800 Adventure XLP Superblack bringen wir eines unserer…",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/e/2/6/2/e26219bca345ca4677864128aa0e3464e93dddc8/Foto%20Model11-730x487.jpg?bust=e26219bc   ",
            p1:"BRABUS COLLECTION - NEW IN",
            p2:"18.11.2021 - Es ist wieder soweit - Wir erweitern unsere Fashion Produktpalette um neue hochwertige stilbewusste…",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/3/1/8/c/318c5756d980a16d5f3720fc78097ccd7d0cfe83/BRABU%20800%20-%20Maybach%20GLS%20600%20%2873%29-730x487.jpg?bust=318c5756",
            p1:"BRABUS 800 - THE SPIRIT OF Modern LUXURY",
            p2:"11.11.2021 - Mit dem BRABUS 800, basierend auf dem Mercedes-Maybach GLS 600, setzen wir neue Maßstäbe in der …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/3/4/8/c/348cda3b3083c2aced09486de1f5d48b860592ca/Pam1240_Cat_Dett05_B_2231936-730x487.jpg?bust=348cda3b",
            p1:"Die Panerai Submersible S BRABUS Black Ops Edition",
            p2:"22.09.2021 - Wenn zwei Welten aufeinandertreffen – wir freuen uns, Ihnen unsere neueste, gewagte …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/7/a/9/f/7a9fb07e0058b158c05b3434326b4f3babbe10ee/BRABUS%20900%20Rocket%20Edition%20%20%2835%29-730x487.jpg?bust=7a9fb07e",
            p1:"BRABUS 900 ROCKET EDITION MERCEDES-AMG GLE 63S 4MATIC+ COUPÉ",
            p2:"22.09.2021 - Die brandneue BRABUS 900 ROCKET Edition, basierend auf dem Mercedes-AMG GLE 63 S 4MATIC+ Coupé, …",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/4/6/6/7/4667bb5d726a28ff57933ae4d5cf0cee690330e4/20210614_Brabus_GLE800_Coupe_9309-Edit-730x487.jpg?bust=4667bb5d",
            p1:"BRABUS 800 - The SUV in Style",
            p2:"22.07.2021 - Das ultimative All-Terrain-Fahrzeug für jeden Tag, jetzt noch sportlicher! Überragende Leistung …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/3/b/1/b/3b1be1f60b36588dd3727b89a068d642489d694b/20210520_Brabus_Cannonball_event_4809-730x487.jpg?bust=3b1be1f6",
            p1:"TIME TO ROCKET! BRABUS 900 ROCKET EDITION - 1 OF 25",
            p2:"17.06.2021 -Bereits über mehrere Generationen steht das Label „BRABUS Rocket“ für  Power und&nbs…",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/6/2/b/1/62b103fd9f5d8d82c92db1575f0248f28d37f90d/jobe-20-730x487.jpg?bust=62b103fd",
            p1:"BRABUS X JOBE - SHADOW collection 2021",
            p2:"02.06.2020 -Adventure Awaits–Zusammen mit der Premium-Wassersportmarke Jobe freuen wir uns, Ihnen die …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/1/7/1/0/171088a7703f54b3c2737858c0290eb8461470f8/20210510_Brabus_GLS800_2531-Edit-730x487.jpg?bust=171088a7",
            p1:"comfort and power - BRABUS 800",
            p2:"20.05.2021 -Hochleistungs-SUV der Luxusklasse – herausragende Performance mit einem starken Aussehen. Der …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/7/a/2/8/7a28a93ce06075caeb7ae23c825445fa10c32ecd/DSC07168-730x487.jpg?bust=7a28a93c",
            p1:"THE SPORTY SUV - BRABUS 800",
            p2:"20.05.2021 -Das ultimative All-Terrain-Fahrzeug für jeden Tag – Sportlicher Look, Leistung und Luxus in einem …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/1/2/2/e/122e00d5dd73b86d587145ad154c55746c4065e5/20210422_Brabus_2168-Edit-730x487.jpg?bust=122e00d5",
            p1:"der wolf im schafspelz",
            p2:"06.05.2021 -Der Wolf im Schafspelz - maximaler Fahrspaß in einer sportlich-eleganten Limousine. Der brandneue …",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/3/4/1/f/341ff5103fd02252ae4a19a356cecd2f80dfbbaf/DSC05792%20%281%29-Bearbeitet-730x487.jpg?bust=341ff510",
            p1:"Die ultimative Kombination aus Luxus und Leistung",
            p2:"15.04.2021 - Die ultimative Kombination aus Luxus und Leistung - die beste Limousine der Welt, Brabusized! …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/c/5/b/7/c5b7f495d0d3b77132a78c7757ed61199b16df51/20210115_Brabus_Smart_92R_5866-Edit-730x487.jpg?bust=c5b7f495",
            p1:"Das Brandneue Urban Supercar - BRABUS 92R",
            p2:"23.03.2021 Exklusiv ausgestattete Stadtsportwagen in limitierter Auflage, die großen Fahrspaß vermitteln, …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/1/2/e/a/12ea2a450dc6572926d86ede541cba2234d7b9be/BRABUS%20B45%20%281%29-1807x1205-730x487.jpg?bust=12ea2a45",
            p1:"BRABUS Performance Upgrade für den A 45 S 4MATIC+",
            p2:"26.01.2021 - Der Mercedes-AMG A 45 S 4MATIC+ wird vom stärksten Serienvierzylinder der Welt angetrieben. Wir …",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/9/f/6/2/9f620791c19e2630407ce490612dd0b0cd80873b/Vintage%20Capsule%20Collection%20%289%29-730x487.jpg?bust=9f620791",
            p1:"DIE NEUE BRABUS VINTAGE COLLECTIONCAPSULE COLLECTION‘",
            p2:"04.12.2020 - Die BRABUS Vintage Collection, bestehend aus hochwertigen Sweatshirts, T-Shirts und Hoodies, …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/2/5/d/2/25d2c261ce8f46259a40379723f70e8a1d3c2d66/INVICTO_Luxury-11-730x487.jpg?bust=25d2c261",
            p1:"BRABUS INVICTO LUXURY - ARMOURED VEHICLE",
            p2:"29.10.2020 Der INVICTO LUXURY verbindet – beinahe unsichtbar – überragenden Panzerungsschutz der Klasse VR6 …",
         },
         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/7/3/2/0/7320c68d845fbca792ae776537d0f4faf2472c14/1837d11c-47f0-4486-b4b1-9f1175749b25-730x486.jpg?bust=7320c68d",
            p1:"A NEW MASTERPIECE - DER BRABUS ROCKET 900 ONE OF TEN",
            p2:"23.10.2020 - Ein weiteres Superlativ in der Automobilwelt - mit der Weltpremiere des BRABUS ROCKET 900 ONE OF",
         },

         {
            type:"neuer",
            image:"https://www.brabus.com/_Resources/Persistent/d/2/c/1/d2c1095661fb86e5b12ea2214021b1d728f0d467/BRABUS-G900%20Capsule%20Collection%20%285%29-730x487.jpg?bust=d2c10956",
            p1:"BRABUS LAUNCHT die NEUE ‚G 900 CAPSULE COLLECTION‘",
            p2:"22.10.2020 - BRABUS ist nicht mehr nur ein Luxus-Automobilhersteller, sondern eine Lifestyle-Marke mit einer …",
         },
         {
            type:"neuer",
            image:"",
            p1:"",
            p2:"",
         },
         {
            type:"neuer",
            image:"",
            p1:"",
            p2:"",
         },

         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/5/7/2/a/572a841067e7a7a670aa09f74bec5a7d0f27f735/Cars%20Root%20Atelier%20x%20BRABUS%20%2825%29-730x487.jpg?bust=572a8410",
            p1:"OUT NOW – High-Performance Fashion trifft Urban Style in exklusiver neuer Kollektion",
            p2:"29.09.2024 - It’s time to find your 1-Second-Wow. Der erste offizielle Drop der BRABUS x Rootatelier Clothing …",
         },
         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/a/c/7/c/ac7ceea30eb935ee152a3b22b246cf48f6621015/Messe_Europa_MonacoYacht%20Show_klein%20%2824%29-730x487.jpg?bust=ac7ceea3",
            p1:"BRABUS AT Monaco Yacht Show 2024  A True Rulebreaker",
            p2:"20.09.2024 - Wir freuen uns, auch in diesem Jahr wieder auf der Monaco Yacht Show dabei zu sein! Erleben Sie …",
         },
         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/a/1/3/7/a13713fd3947cb1445d82192c9d2f5e9a4944a32/BRABUS%20Shadow%201000%20Sun%20Top%20PG%20klein%20%2833%29-730x487.jpg?bust=a13713fd",
            p1:"Shadow 1000 Sun-Top Phantom Gray Signature Edition. A True Rulebreaker",
            p2:"10.09.2024 - Atemberaubende Beschleunigung, hohe Geschwindigkeiten, rennsporttaugliches Handling und …",
         },

         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/f/0/4/a/f04a060913ff8871c21f9f9f61c436d09e307d1d/Cannes%20Bootshow%202024%20%282%29-730x487.jpg?bust=f04a0609",
            p1:"Cannes Yachting Festival 2024 - BRABUS Marine Shadow Boats und ",
            p2:"04.09.2024 - Vom 10. bis 15. September findet erneut Europas renommierte Bootsmesse für Luxusboote und …",
         },
         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/c/e/e/9/cee98b30ddd401b4ff0b3dc57039d7d5fd82d166/AwakexBRABUS_Boat_and_Board%20%2855%29-730x487.jpg?bust=cee98b30",
            p1:"BRABUS X Awake - Brabusize the waves",
            p2:"28.05.2024 - Wir freuen uns, das erste Ergebnis unserer neuesten Kollaboration mit dem revolutionären …",
         },
         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/f/2/3/f/f23f5f6e62ce72bf0f9f37da145a8e6cde76f999/BRABUS%20Shadow%201200%20Sun-Top%20Phantom%20Gray%20Signature%20Edition_0X0A0674-730x487.jpg?bust=f23f5f6e",
            p1:"Shadow 1200 Sun-Top Phantom Gray Signature Edition. Extreme. Epic. Legendary.",
            p2:"23.04.2024 - Die BRABUS Shadow 1200 Sun-Top Phantom Gray Signature Edition ist der Newcomer in der größten und …",
         },

         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/a/f/c/8/afc8f964cb98d8bd6131a4990d4872854ec6c427/AXBR_1200_BOps_ACabin_HeroShot_01-730x487.jpg?bust=afc8f964",
            p1:"BRABUS Shadow 1200 Black Ops Signature Edition. A new dimension ",
            p2:"20.01.2024 - Mehr Leistung, mehr 1-Second-Wow, mehr BRABUS. Mit 45 Fuß ist die BRABUS Shadow 1200 XC Cross-Cabin…   ",
         },
         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/7/c/f/6/7cf6f36c2f90d11bf6919927b4da0dcece7cc43b/BRABUS%20Shadow%201000%20XC%20Cross%20Cabin%20Black%20Ops%20Signature%20Edition_klein%20%2815%29-730x487.jpg?bust=7cf6f36c",
            p1:"BRABUS Shadow 1000 Black Ops Signature Edition. A whole new Beast.",
            p2:"20.01.2024 - Atemberaubende Beschleunigung und Geschwindigkeit, rennsporttaugliches Handling und …",
         },
         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/c/6/e/b/c6ebb280aae50a8c1fb6c0031f1e6d7db3353dea/Mallorca%202022_Grading%20Axopar%20%286%29-730x487.jpg?bust=c6ebb280",
            p1:"BRABUS Marine - Verfügbare Superboats",
            p2:"03.11.2023 - Damit Sie bestens auf die Boot-Saison 2024 vorbereitet sind, haben wir schon jetzt ausgewählte …",
         },

         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/9/d/f/2/9df258daf6153605cc7bd267e5b247ac2c5b688f/0X0A8486-2-730x487.jpg?bust=9df258da",
            p1:"Fort Lauderdale International Boat Show 2023",
            p2:"25.10.2023 – Die Fort Lauderdale International Boat Show (FLIBS) ist die bekannteste Bootsmesse für …",
         },
         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/e/5/6/8/e56817cebe009f57f226296fee131b40c44268a0/mys_2023-6-730x487.jpg?bust=e56817ce",
            p1:"BRABUS AT Monaco Yacht Show 2023 Premium Partner",
            p2:"21.09.2023 - Die Monaco Yacht Show ist eine der meist erwarteten Luxusyacht-Veranstaltungen des Jahres und ein …",
         },
         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/0/3/b/d/03bdbd474114793d813752bd31bfed79cacbe2f1/Cannes%20Boat%20Show%2023_Axopar_klein%20%2830%29-730x487.jpg?bust=03bdbd47",
            p1:"Cannes Yachting Festival 2023 - BRABUS Marine Shadow Boats und ",
            p2:"06.09.2023 - Vom 12. bis 17. September öffnet Europas renommierte Bootsmesse ihre Pforten für Luxusboote und …",
         },

         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/8/a/c/1/8ac19df2dfedcb1fe0be82a42fde31e5f22c2be7/towable15-730x487.jpg?bust=8ac19df2",
            p1:"BRABUS X JOBE - IT'S TIME TO GEAR UP Signature Edition",
            p2:"29.03.2022 - Summer is on its way! Die vierte in Kollaboration mit Jobe entwickelte Bekleidungs- und …",
         },
         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/e/3/7/7/e3770355115f9e184ac40090d44fef5f060ffba9/BRABUS%20Shadow%20900Sun-Top_Stealth%20Green-730x487.jpg?bust=e3770355",
            p1:"BRABUS Shadow 900 Stealth green Signature Edition",
            p2:"21.01.2023 - BRABUS Marine setzt die Neudefinition des Dayboatings mit seiner neuesten Designevolution, der …",
         },
         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/0/f/4/a/0f4a6dc58f4a3cff122cb04025b2d6a651fdb952/BRABUS%20Shadow%20900%20Black%20Ops-9074-730x487.jpg?bust=0f4a6dc5",
            p1:"BRABUS Marine @ Boot Düsseldorf 2023",
            p2:"13.01.2023 - Nach zwei Jahren öffnet Europas führende Indoor-Bootsmesse wieder ihre Tore. Vom 21. bis zum 29. …",
         },

         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/1/7/4/0/174058b4c3eae8a885f60496f52b4476819b9846/Axopar_Cannes%20yachting%20festival%202022%20%289%292-730x487.jpg?bust=174058b4",
            p1:"Fort Lauderdale International Boat Show 2022",
            p2:"25.10.2022 – Auf der diesjährigen Fort Lauderdale International Boat Show bringen BRABUS Marine und Axopar zum…",
         },
         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/9/6/9/9/96999e64abf269ab1c85a2197d38d8de97544044/MYS%202022-31-730x487.jpg?bust=96999e64",
            p1:"Monaco Yacht Show 2022 - Shadow bestes Côte d´Azur-Wetter",
            p2:"26.09.2022 - Die Monaco Yacht Show ist eines der meist erwarteten Luxusyacht-Events des Jahres und gilt als …",
         },
         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/d/d/f/b/ddfb85ad4a2b630aa5552f2f5ae986cb64ecc163/BRABUS%20Shadow%20900XC%20Black%20Ops%20Signature%20Edition%20klein%20%285%29-730x487.jpg?bust=ddfb85ad",
            p1:"BRABUS Shadow 900 Black Ops Signature Edition",
            p2:"07.09.2022 - Es ist Zeit für eine Evolution. Unsere preisgekrönte BRABUS Shadow 900 Black Ops Serie wird mit der…",
         },

         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/9/c/1/f/9c1fcae33fc15f1e6e9764243d55c1f84a56a3ee/0X0A4436-730x487.jpg?bust=9c1fcae3",
            p1:"Cannes Yachting Festival 2022 - Premium Partner",
            p2:"24.08.2022 - Vom 6. bis 11. September öffnet Europas renommierte Bootsmesse ihre Pforten für Luxusboote und …",
         },
         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/d/c/f/6/dcf6b99ee5fe8a3cc0b418b5c64e2184136f800a/_BRA1662_retusche-730x487.jpg?bust=dcf6b99e",
            p1:"BRABUS Shadow 300 Edition One - Inspiring. Luxurious. Fun.",
            p2:"29.04.2022 - Das brandneue BRABUS Shadow 300 Edition One Sportboot von BRABUS Marine feiert seine Premiere und …",
         },
         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/1/5/5/b/155b48603a2def798beb2add181089e26aec027b/BRABUS%20Shadow%20900%20Deep%20Blue%20%2829%29-730x487.jpg?bust=155b4860",
            p1:"BRABUS Shadow 900 Deep Blue Signature Edition",
            p2:"28.04.2022 - Unser neuestes Superboat aus der BRABUS Shadow Range feiert seine exklusive Weltpremiere. Die …",
         },

         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/b/4/6/2/b462803fb32d4e7636c60549d5c63799b53d1fe4/BRABUS%20Shadow%20900%20XC%20Black%20Ops%20MY2021-30-730x487.jpg?bust=b462803f",
            p1:"DIE BRABUS SHADOW 900 XC CROSS CABIN GEWINNT MOTOR BOAT AWARD 2022",
            p2:"14.02.2022 - Die BRABUS Shadow 900 XC Cross Cabin gewinnt zum ersten Mal den Motorboat Award 2022 in der …",
         },
         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/d/c/f/6/dcf6b99ee5fe8a3cc0b418b5c64e2184136f800a/_BRA1662_retusche-730x487.jpg?bust=dcf6b99e",
            p1:"MONACO YACHT SHOW 2021 - Shadow Boote, luxuriöse Fahrzeuge und ",
            p2:"11.10.2021 - Die Monaco Yacht Show ist eines der meist erwarteten Luxusyacht-Events des Jahres und gilt als …",
         },
         {
            type:"marine",
            image:"https://www.brabus.com/_Resources/Persistent/6/c/6/b/6c6b7c3d7fe2e274b66ae2c733a771f59fc96b4c/BRABUS%20Shadow%20900%20XC%20Black%20Ops%20MY2021_DSC00713-730x487.jpg?bust=6c6b7c3d",
            p1:"Monaco Yacht Show 2021 bestes Côte d´Azur-Wetter",
            p2:"20.09.2021 - Wir freuen uns darauf, Sie ab dem 22. September wieder auf der Monaco Yacht Show begrüßen zu dürfen…",
         },
         
         {
            type:"classic",
            image:"https://www.brabus.com/_Resources/Persistent/7/e/4/1/7e4183dbe429fb8af2486afe2cd489581631f6b6/300%20SL%20Warhol%20%2813%29-730x487.jpg?bust=7e4183db",
            p1:"Die Versteigerung des Andy Warhol 300 SL",
            p2:"02.11.2022 - In Zusammenarbeit mit RM Sotheby's wird der BRABUS Classic 6-Sterne restaurierte Mercedes-Benz …",
         },
         {
            type:"classic",
            image:"https://www.brabus.com/_Resources/Persistent/5/0/f/6/50f60eb0be4942dd3e5feeb10fdd4d539edbb9c6/20220812-DSC00035-Bearbeitet-730x487.jpg?bust=50f60eb0",
            p1:"Brabus Classic @ Oldtimer Grand Prix 2022 Nürburgring",
            p2:"12.08.2022 - Zusammen mit unserem Technologiepartner Continental nimmt BRABUS an einem der traditionsreichsten…",
         },
         {
            type:"classic",
            image:"https://www.brabus.com/_Resources/Persistent/d/d/8/6/dd867c9bef25f708ecc2069c711b7e9884633422/MB%20300%20SL%20Gullwing%20Pop%20Art_klein%20%2812%29-730x487.jpg?bust=dd867c9b",
            p1:"IKONE TRIFFT IKONE - ANDY WARHOL STORY",
            p2:"21.06.2022 - 1986 beauftragte Daimler-Benz die legendäre Pop-Art-Ikone Andy Warhol mit einer Reihe von …",
         },

         {
            type:"classic",
            image:"https://www.brabus.com/_Resources/Persistent/b/1/a/c/b1ac87ad5838e2d6fe37d931d53502c6ac6bcad2/_DSC2764-730x487.jpg?bust=b1ac87ad",
            p1:"BRABUS CLASSIC 6 STerne RESTAURATION - Mercedes-Benz 280 SE 3.5",
            p2:"16.11.2020 - Damit fährt man nicht, damit legt man ab: Im September 1969 debütiert das 280 SE 3.5 Cabriolet …",
         },
         {
            type:"classic",
            image:"",
            p1:"",
            p2:"",
         },
         {
            type:"classic",
            image:"",
            p1:"",
            p2:"",
         },


         {
            type:"uber",
            image:"https://www.brabus.com/_Resources/Persistent/d/9/0/b/d90bbb8c13a783c35d31053fea9756ccae846861/Pebble%20Beach%202024%20klein%20%2853%29-730x487.jpg?bust=d90bbb8c",
            p1:"PEBBLE BEACH Concours d´elegance 2024 - luxuriöse supercars und ",
            p2:"12.08.2024 - Die 73. Pebble Beach Concours d´Elegance ist das Highlight der Monterey Car Week und gilt als einer…",
         },
         {
            type:"uber",
            image:"https://www.brabus.com/_Resources/Persistent/8/e/4/b/8e4b6441c23e85a687e2913f24c4aad9ea93485e/BRABUS%20Supercar_Doku_Teil3_QF%20%2819%29-730x487.jpg?bust=8e4b6441",
            p1:"Exklusive BRABUS Behind The Scenes Supercar Dokumentation",
            p2:"30.04.2024 - Pünktlich zum Tag der Arbeit, am 01. Mai 2024, ist es soweit: Wir veröffentlichen nie zuvor …",
         },
         {
            type:"uber",
            image:"https://www.brabus.com/_Resources/Persistent/4/4/8/0/4480e5b9f07cc9de37f6dddce6945417364d9411/Brabus_Signature_Night_NS-388-730x487.jpg?bust=4480e5b9",
            p1:"Behind the scenes Einblicke in die Signature Night 2023",
            p2:"11.04.2024 - Tauchen Sie ein in die Welt von BRABUS und entdecken Sie in einer mehrteiligen Dokuserie noch nie…",
         },

         {
            type:"uber",
            image:"https://www.brabus.com/_Resources/Persistent/4/3/3/4/4334bb49422cbe26bd16e4e06b49f9a6884daaa5/Best-Brand-18-730x487.jpg?bust=4334bb49",
            p1:"Der Best Brand Award geht zum 18. Mal in Folge an BRABUS",
            p2:"27.03.2024 - Die BRABUS „Hall of Fame“ bekommt Zuwachs: Bereits zum 18. Mal wählten die auto motor und sport …",
         },
         {
            type:"uber",
            image:"https://www.brabus.com/_Resources/Persistent/c/8/0/0/c800347dcf6a9bc2b3b7e186b74a50058d82cd54/Webseite2mio%201610-730x487.jpg?bust=c800347d",
            p1:"BRABUS knackt die zwei Millionen",
            p2:"21.11.2023 - Danke für über zwei Millionen Abonnenten auf unserem @brabus Instagram-Kanal! Gemeinsam mit Euch …",
         },
         {
            type:"uber",
            image:"https://www.brabus.com/_Resources/Persistent/c/3/a/9/c3a9d1235fb8f1b0e3384d325d4013c5f9669d56/Teaserbild-730x487.jpg?bust=c3a9d123",
            p1:"Premium-Reifenhersteller Hankook ist offizieller BRABUS Technologiepartner",
            p2:"05.10.2023 - Hankook Tire wurde 1941 in Seoul gegründet und entwickelte sich in den vergangenen acht …",
         },


         {
            type:"uber",
            image:"https://www.brabus.com/_Resources/Persistent/7/f/7/0/7f702e2f1a523746566db932b52e1290ded5d2cf/BRABUS%20Shadow%20900%20Sun-Top%20Platinum%20Gray%20CamoWrap%20%282%29-730x487.jpg?bust=7f702e2f",
            p1:"Die kommende Bootsaison 2024 mit kompromisslosen Premium-Upgrades",
            p2:"12.09.2023 - Bei BRABUS und BRABUS Marine streben wir nach dem Superlativ, nach ultimativem Luxus und …",
         },
         {
            type:"uber",
            image:"https://www.brabus.com/_Resources/Persistent/e/7/f/b/e7fbb974eba25452c801dce0c5e90b680470d922/20230804_papenburg3000_1800364-730x487.jpg?bust=e7fbb974",
            p1:"Papenburg 3000 2023 | High-Speed Extravaganz auf 3000 Metern",
            p2:"28.08.2023 - Am 5. August 2023 versammelte sich die europäische Tuning-Elite in Norddeutschland zur vierten …",
         },
         {
            type:"uber",
            image:"https://www.brabus.com/_Resources/Persistent/5/5/3/a/553adcb0aeb961712115b343d64982ebad617fef/DSC03334-730x487.jpg?bust=553adcb0",
            p1:"PEBBLE BEACH Concours d´elegance 2023 - luxuriöse supercars",
            p2:"18.08.2023 - Die 72. Pebble Beach Concours d´Elegance ist das Highlight der Monterey Car Week und gilt als einer…",
         },


         {
            type:"uber",
            image:"https://www.brabus.com/_Resources/Persistent/a/5/d/6/a5d655d766aaa180ef04a859adfe53fd495e14ad/Brabus_Signature_Night_NS-426-730x487.jpg?bust=a5d655d7",
            p1:"One second is all it takes - #SN23",
            p2:"18.07.2023 - Über 600 VIP-Gäste aus aller Welt kamen erneut im Herzen des Ruhrgebiets zusammen, um das größte …",
         },
         {
            type:"uber",
            image:"https://www.brabus.com/_Resources/Persistent/8/8/4/8/8848970e66fd491c2ebe4592e5cbe63f04fe3ebd/BRABUS%20x%20KW%20automotive_klein-730x487.jpg?bust=8848970e",
            p1:"KW automotive ist offizieller BRABUS Technologiepartner",
            p2:"20.06.2023 - KW automotive ist seit mehr als 30 Jahren auf Entwicklung und Fertigung innovativer …",
         },
         {
            type:"uber",
            image:"https://www.brabus.com/_Resources/Persistent/7/b/5/d/7b5d092da4571b19b94e7ef1adec928a39ee5aa2/Best%20Brand_Jahre-730x487.jpg?bust=7b5d092d",
            p1:"Der Best Brand Award geht zum 17. Mal in Folge an BRABUS",
            p2:"23.03.2023 - Jedes Jahr verleiht das in Deutschland führende Fachmagazin Auto Motor und Sport den Titel „BEST …",
         },


         {
            type:"uber",
            image:"https://www.brabus.com/_Resources/Persistent/9/0/4/d/904d53b23213d38ad6e84a730f8efd6367ee0af1/BRABUS%20Collection%20-%20Winter%202022-23%20%282%29-730x487.jpg?bust=904d53b2",
            p1:"BRABUS Collection - Winter 2022/23",
            p2:"28.11.2022 - Mit Beginn der Winter-Saison launchen wir neue Fashion Pieces in einem völlig neuen Design und …",
         },
         {
            type:"uber",
            image:"https://www.brabus.com/_Resources/Persistent/e/9/1/e/e91e2d85e260090981472f64419e2a691c9440b4/Instagram%20Websitebild_00000-730x487.jpg?bust=e91e2d85",
            p1:"@TheOfficialBRABUS stürmt die TOP 3 ",
            p2:"29.07.2022 - Die Social-Media-Agentur Somention aus den Niederlanden kürt vierteljährlich die 100 …",
         },
         {
            type:"uber",
            image:"https://www.brabus.com/_Resources/Persistent/6/a/d/f/6adf05772f3245eac195fac0981b9097780b73b7/BRABUS_BB_2022_02-730x487.jpg?bust=6adf0577",
            p1:"BRABUS erhält zum 16. Mal IN folge ",
            p2:"10.03.2022 - Einer der wichtigsten Awards der Automobilbranche wird jedes Jahr von Deutschlands führendem …",
         },

         {
            type:"uber",
            image:"https://www.brabus.com/_Resources/Persistent/b/4/6/2/b462803fb32d4e7636c60549d5c63799b53d1fe4/BRABUS%20Shadow%20900%20XC%20Black%20Ops%20MY2021-30-730x487.jpg?bust=b462803f",
            p1:"DIE BRABUS SHADOW 900 XC CROSS CABIN GEWINNT MOTOR BOAT AWARD 2022",
            p2:"14.02.2022 - Die BRABUS Shadow 900 XC Cross Cabin gewinnt zum ersten Mal den Motorboat Award 2022 in der …",
         },
         {
            type:"uber",
            image:"https://www.brabus.com/_Resources/Persistent/e/2/6/2/e26219bca345ca4677864128aa0e3464e93dddc8/Foto%20Model11-730x487.jpg?bust=e26219bc",
            p1:"BRABUS COLLECTION - NEW IN",
            p2:"18.11.2021 - Es ist wieder soweit - Wir erweitern unsere Fashion Produktpalette um neue hochwertige stilbewusste…",
         },
         {
            type:"uber",
            image:"https://www.brabus.com/_Resources/Persistent/1/6/3/7/163781ddf9af2b0a0b144d40305cd4bc90eb3929/GLEPapenburg-730x487.jpg?bust=163781dd",
            p1:"rekordbrecher brabus 900 rocket edition",
            p2:"08.10.2021 - Wenn Continental und AUTOBILD SPORTSCARS zum Papenburg 3000 Event einladen, lassen wir es uns …",
         },

         {
            type:"uber",
            image:"https://www.brabus.com/_Resources/Persistent/6/1/7/8/6178a1ab6ce5b0d14e307aab0040e445e8353d96/Best_Brand_202112-730x487.jpg?bust=6178a1ab",
            p1:"BRABUS erhält zum 15. Mal IN folge ",
            p2:"11.03.2021 - Zum 15. Mal in Folge wählten die Leser des führenden deutschen Fachmagazins Auto Motor und Sport …",
         },
         {
            type:"uber",
            image:"https://www.brabus.com/_Resources/Persistent/9/f/6/2/9f620791c19e2630407ce490612dd0b0cd80873b/Vintage%20Capsule%20Collection%20%289%29-730x487.jpg?bust=9f620791",
            p1:"DIE NEUE BRABUS VINTAGE COLLECTION",
            p2:"04.12.2020 - Die BRABUS Vintage Collection, bestehend aus hochwertigen Sweatshirts, T-Shirts und Hoodies, …",
         },
         {
            type:"uber",
            image:"https://www.brabus.com/_Resources/Persistent/d/2/c/1/d2c1095661fb86e5b12ea2214021b1d728f0d467/BRABUS-G900%20Capsule%20Collection%20%285%29-730x487.jpg?bust=d2c10956",
            p1:"BRABUS LAUNCHT die NEUE ‚G 900",
            p2:"22.10.2020 - BRABUS ist nicht mehr nur ein Luxus-Automobilhersteller, sondern eine Lifestyle-Marke mit einer …",
         },

         {
            type:"koop",
            image:"https://www.brabus.com/_Resources/Persistent/7/c/c/2/7cc239a53bb5f94ade587c8dab735cfb118bc884/BRABUS%20x%20AURA%20%286%29-730x487.jpg?bust=7cc239a5",
            p1:"BRABUS tritt dem Aura Blockchain Consortium bei, um Authentizität und ",
            p2:"22.10.2024 - Wir präsentieren den Digital Product Passport für BRABUS Masterpiece Supercars – eine brandneue …",
         },
         {
            type:"koop",
            image:"https://www.brabus.com/_Resources/Persistent/e/a/8/c/ea8c1baacdf0c9a44b80e82a1de3053c10c65114/BRABUSxSunreef_LaunchEvent_Sep24%20%2824%29-730x487.jpg?bust=ea8c1baa",
            p1:"BRABUS x Sunreef Yachts - Together, beyond boUndaries.",
            p2:"08.10.2024 - In einer neuen strategischen Partnerschaft haben wir uns mit Sunreef Yachts, dem weltweit …",
         },
         {
            type:"koop",
            image:"https://www.brabus.com/_Resources/Persistent/c/e/e/9/cee98b30ddd401b4ff0b3dc57039d7d5fd82d166/AwakexBRABUS_Boat_and_Board%20%2855%29-730x487.jpg?bust=cee98b30",
            p1:"BRABUS X Awake - Brabusize the waves",
            p2:"28.05.2024 - Wir freuen uns, das erste Ergebnis unserer neuesten Kollaboration mit dem revolutionären …",
         },

         {
            type:"koop",
            image:"https://www.brabus.com/_Resources/Persistent/c/3/a/9/c3a9d1235fb8f1b0e3384d325d4013c5f9669d56/Teaserbild-730x487.jpg?bust=c3a9d123",
            p1:"Premium-Reifenhersteller Hankook ist offizieller BRABUS ",
            p2:"05.10.2023 - Hankook Tire wurde 1941 in Seoul gegründet und entwickelte sich in den vergangenen acht …",
         },
         {
            type:"koop",
            image:"https://www.brabus.com/_Resources/Persistent/8/f/b/f/8fbf9116d374064448ada189a4bae42f31dad3de/BRABUS%201300%20R%20Masterpiece%20Edition_klein%20%2823%29-730x487.jpg?bust=8fbf9116",
            p1:"BRABUS 1300 R Masterpiece Edition - Too Rare to ride.",
            p2:"27.09.2023 - Die BRABUS 1300 R Masterpiece Edition ist die limitierteste Serie des weltweit ersten BRABUS …",
         },
         {
            type:"koop",
            image:"https://www.brabus.com/_Resources/Persistent/f/5/d/2/f5d28dab8de63a783a3e9d1f8ee9da4a7514da7a/PAM01403_DET_02_B-2-730x487.jpg?bust=f5d28dab",
            p1:"Panerai Submersible S BRABUS",
            p2:"30.06.2023 - Inspiriert von einer gemeinsamen Leidenschaft für luxuriöses Design und geleitet von bahnbrechender…",
         },

         {
            type:"koop",
            image:"https://www.brabus.com/_Resources/Persistent/8/8/4/8/8848970e66fd491c2ebe4592e5cbe63f04fe3ebd/BRABUS%20x%20KW%20automotive_klein-730x487.jpg?bust=8848970e",
            p1:"KW automotive ist offizieller BRABUS Technologiepartner",
            p2:"20.06.2023 - KW automotive ist seit mehr als 30 Jahren auf Entwicklung und Fertigung innovativer …",
         },
         {
            type:"koop",
            image:"https://www.brabus.com/_Resources/Persistent/8/a/c/1/8ac19df2dfedcb1fe0be82a42fde31e5f22c2be7/towable15-730x487.jpg?bust=8ac19df2",
            p1:"BRABUS X JOBE - IT'S TIME TO GEAR UP",
            p2:"29.03.2022 - Summer is on its way! Die vierte in Kollaboration mit Jobe entwickelte Bekleidungs- und …",
         },
         {
            type:"koop",
            image:"https://www.brabus.com/_Resources/Persistent/c/3/e/9/c3e9b7daf4fe60bf2724d584cd6fbf624bcbfa00/BRABUS%201300%20R%20Edition%2023%20-%20Wink%20BO%20klein%20%281%29-730x487.jpg?bust=c3e9b7da",
            p1:"BRABUS 1300 R Edition 23 - Back. In black.",
            p2:"13.02.2023 - Der BRABUS 1-Second-Wow-Effekt auf zwei Rädern geht in die nächste Runde mit der Weltpremiere …",
         },

         {
            type:"koop",
            image:"https://www.brabus.com/_Resources/Persistent/b/3/b/4/b3b48c62dc571fddd46ea55efbba579a74cb6da7/Pam1283_Cat_Dett01_B-730x487.jpg?bust=b3b48c62",
            p1:"Panerai Submersible S BRABUS Verde Militare Edition",
            p2:"21.01.2023 - Das erstklassige Portfolio der BRABUS x Panerai Kooperation wird mit der brandneuen Panerai …",
         },
         {
            type:"koop",
            image:"https://www.brabus.com/_Resources/Persistent/a/2/3/9/a2392adc2f78d13c3efb38b4a73fb357fd38152e/BRABUS%20Business%20B25%20Sport_klein%20%286%29-730x487.jpg?bust=a2392adc",
            p1:"BRABUS präsentiert: BRABUS Business editions exklusiv für den ",
            p2:"18.11.2022 - BRABUS präsentiert eine brandneue Reihe von 1-Second-Wow Business Vans, die speziell für den …",
         },
         {
            type:"koop",
            image:"https://www.brabus.com/_Resources/Persistent/c/2/0/d/c20df2424d60919a6407e2e9bdc2ecf370277bd0/Pam1285_Cat_Dett02_B_2389465-730x487.jpg?bust=c20df242",
            p1:"Panerai Submersible S BRABUS Experience Edition",
            p2:"11.11.2022 - Ready for adventure? Das erstklassige Portfolio der BRABUS x Panerai Kooperation wird mit der …",
         },

         {
            type:"koop",
            image:"https://www.brabus.com/_Resources/Persistent/7/e/4/1/7e4183dbe429fb8af2486afe2cd489581631f6b6/300%20SL%20Warhol%20%2813%29-730x487.jpg?bust=7e4183db",
            p1:"Die Versteigerung des Andy Warhol 300 SL",
            p2:"02.11.2022 - In Zusammenarbeit mit RM Sotheby's wird der BRABUS Classic 6-Sterne restaurierte Mercedes-Benz …",
         },
         {
            type:"koop",
            image:"https://www.brabus.com/_Resources/Persistent/9/f/c/b/9fcb835c28f6c8da6a6ba8b8286770c8ebad7eca/EU_Brabus_AtomGreyMatt_RadiantRed_Ext_001_3_4_Front_Urban-730x487.jpg?bust=9fcb835c",
            p1:"0 to wow in 3.9 seconds - Smart #1 BRABUS",
            p2:"28.09.2022 - Der smart #1 BRABUS ist der Beginn eines neuen Kapitels in der langjährigen Geschichte zwischen …",
         },
         {
            type:"koop",
            image:"https://www.brabus.com/_Resources/Persistent/2/6/9/c/269ccb1c02fbc8d6cff4dc58de09b2e4cbbddfa5/Jobe%20Sports%20%26%20Brabus-16-730x487.jpg?bust=269ccb1c",
            p1:"BRABUS X JOBE - THE ADVENTURE CONTINUES",
            p2:"29.04.2022 - Nach den erfolgreichen High-End-Wassersport Kollektionen, erscheint nun die dritte Auflage der …",
         },

         {
            type:"koop",
            image:"https://www.brabus.com/_Resources/Persistent/0/4/2/6/042637dce4f20f50ec46bee55f2f854a8d05791c/20220426_Brabus_Mallorca_7306-730x487.jpg?bust=042637dc",
            p1:"Panerai Submersible S BRABUS Blue Shadow Edition",
            p2:"28.04.2022 - Die Partnerschaft mit dem weltbekannten Uhrenhersteller Panerai geht in die nächste Runde. …",
         },
         {
            type:"koop",
            image:"https://www.brabus.com/_Resources/Persistent/3/5/3/f/353f8f8e203aef00a0cda1879769f7ff34e403c6/20211118_Brabus_1300R_8762_fullres-730x487.jpg?bust=353f8f8e",
            p1:"BRABUS 1300 R - heart of a rebel, soul of a gentleman",
            p2:"11.02.2022 - Wir freuen uns, Ihnen unsere neuste Markenkooperation mit dem führenden europäischen …",
         },
         {
            type:"koop",
            image:"https://www.brabus.com/_Resources/Persistent/3/4/8/c/348cda3b3083c2aced09486de1f5d48b860592ca/Pam1240_Cat_Dett05_B_2231936-730x487.jpg?bust=348cda3b",
            p1:"Die Panerai Submersible S BRABUS Black Ops Edition",
            p2:"22.09.2021 - Wenn zwei Welten aufeinandertreffen – wir freuen uns, Ihnen unsere neueste, gewagte …",
         },

         {
            type:"koop",
            image:"https://www.brabus.com/_Resources/Persistent/6/2/b/1/62b103fd9f5d8d82c92db1575f0248f28d37f90d/jobe-20-730x487.jpg?bust=62b103fd",
            p1:"BRABUS X JOBE - SHADOW collection 2021",
            p2:"02.06.2020 -Adventure Awaits–Zusammen mit der Premium-Wassersportmarke Jobe freuen wir uns, Ihnen die …",
         },
         {
            type:"koop",
            image:"",
            p1:"",
            p2:"",
         },
         {
            type:"koop",
            image:"",
            p1:"",
            p2:"",
         },


         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/5/7/2/a/572a841067e7a7a670aa09f74bec5a7d0f27f735/Cars%20Root%20Atelier%20x%20BRABUS%20%2825%29-730x487.jpg?bust=572a8410",
            p1:"OUT NOW – High-Performance Fashion trifft Urban Style in exklusiver neuer Kollektion",
            p2:"29.09.2024 - It’s time to find your 1-Second-Wow. Der erste offizielle Drop der BRABUS x Rootatelier Clothing …",
         },
         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/a/c/7/c/ac7ceea30eb935ee152a3b22b246cf48f6621015/Messe_Europa_MonacoYacht%20Show_klein%20%2824%29-730x487.jpg?bust=ac7ceea3",
            p1:"BRABUS AT Monaco Yacht Show 2024  A True Rulebreaker",
            p2:"20.09.2024 - Wir freuen uns, auch in diesem Jahr wieder auf der Monaco Yacht Show dabei zu sein! Erleben Sie …",
         },
         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/a/1/3/7/a13713fd3947cb1445d82192c9d2f5e9a4944a32/BRABUS%20Shadow%201000%20Sun%20Top%20PG%20klein%20%2833%29-730x487.jpg?bust=a13713fd",
            p1:"Shadow 1000 Sun-Top Phantom Gray Signature Edition. A True Rulebreaker",
            p2:"10.09.2024 - Atemberaubende Beschleunigung, hohe Geschwindigkeiten, rennsporttaugliches Handling und …",
         },
         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/7/c/c/2/7cc239a53bb5f94ade587c8dab735cfb118bc884/BRABUS%20x%20AURA%20%286%29-730x487.jpg?bust=7cc239a5",
            p1:"BRABUS tritt dem Aura Blockchain Consortium bei, um Authentizität und ",
            p2:"22.10.2024 - Wir präsentieren den Digital Product Passport für BRABUS Masterpiece Supercars – eine brandneue …",
         },
         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/e/a/8/c/ea8c1baacdf0c9a44b80e82a1de3053c10c65114/BRABUSxSunreef_LaunchEvent_Sep24%20%2824%29-730x487.jpg?bust=ea8c1baa",
            p1:"BRABUS x Sunreef Yachts - Together, beyond boUndaries.",
            p2:"08.10.2024 - In einer neuen strategischen Partnerschaft haben wir uns mit Sunreef Yachts, dem weltweit …",
         },
         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/c/e/e/9/cee98b30ddd401b4ff0b3dc57039d7d5fd82d166/AwakexBRABUS_Boat_and_Board%20%2855%29-730x487.jpg?bust=cee98b30",
            p1:"BRABUS X Awake - Brabusize the waves",
            p2:"28.05.2024 - Wir freuen uns, das erste Ergebnis unserer neuesten Kollaboration mit dem revolutionären …",
         },

         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/9/d/f/2/9df258daf6153605cc7bd267e5b247ac2c5b688f/0X0A8486-2-730x487.jpg?bust=9df258da",
            p1:"Fort Lauderdale International Boat Show 2023",
            p2:"25.10.2023 – Die Fort Lauderdale International Boat Show (FLIBS) ist die bekannteste Bootsmesse für …",
         },
         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/e/5/6/8/e56817cebe009f57f226296fee131b40c44268a0/mys_2023-6-730x487.jpg?bust=e56817ce",
            p1:"BRABUS AT Monaco Yacht Show 2023",
            p2:"21.09.2023 - Die Monaco Yacht Show ist eine der meist erwarteten Luxusyacht-Veranstaltungen des Jahres und ein …",
         },
         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/7/f/7/0/7f702e2f1a523746566db932b52e1290ded5d2cf/BRABUS%20Shadow%20900%20Sun-Top%20Platinum%20Gray%20CamoWrap%20%282%29-730x487.jpg?bust=7f702e2f",
            p1:"Die kommende Bootsaison 2024 mit kompromisslosen Premium-Upgrades",
            p2:"12.09.2023 - Bei BRABUS und BRABUS Marine streben wir nach dem Superlativ, nach ultimativem Luxus und …",
         },


         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/0/3/b/d/03bdbd474114793d813752bd31bfed79cacbe2f1/Cannes%20Boat%20Show%2023_Axopar_klein%20%2830%29-730x487.jpg?bust=03bdbd47",
            p1:"Cannes Yachting Festival 2023 - BRABUS Marine Shadow Boats und ",
            p2:"06.09.2023 - Vom 12. bis 17. September öffnet Europas renommierte Bootsmesse ihre Pforten für Luxusboote und …",
         },
         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/e/7/f/b/e7fbb974eba25452c801dce0c5e90b680470d922/20230804_papenburg3000_1800364-730x487.jpg?bust=e7fbb974",
            p1:"Papenburg 3000 2023 | High-Speed Extravaganz auf 3000 Metern",
            p2:"28.08.2023 - Am 5. August 2023 versammelte sich die europäische Tuning-Elite in Norddeutschland zur vierten …",
         },
         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/5/5/3/a/553adcb0aeb961712115b343d64982ebad617fef/DSC03334-730x487.jpg?bust=553adcb0",
            p1:"PEBBLE BEACH Concours d´elegance 2023 - luxuriöse supercars und ",
            p2:"18.08.2023 - Die 72. Pebble Beach Concours d´Elegance ist das Highlight der Monterey Car Week und gilt als einer…",
         },

         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/a/5/d/6/a5d655d766aaa180ef04a859adfe53fd495e14ad/Brabus_Signature_Night_NS-426-730x487.jpg?bust=a5d655d7",
            p1:"One second is all it takes - #SN23",
            p2:"18.07.2023 - Über 600 VIP-Gäste aus aller Welt kamen erneut im Herzen des Ruhrgebiets zusammen, um das größte …",
         },
         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/b/3/4/2/b3429a9d8580675ed9c26b5ce611aaddb8c26f18/Top%20Marques%202023%20%284%29-730x487.jpg?bust=b3429a9d",
            p1:"Top Marques Monaco 2023 - Shadow ",
            p2:"06.06.2023 - Auch in diesem Jahr lädt die Top Marques in Monaco wieder zum automobilen Erlebnis ein. Vom 08. bis…",
         },
         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/f/6/f/9/f6f9c6fcb471a80f20b8a42936f92fc9575178b7/BRABUS%20Classic%40Techno%20Classica%202019%20%28125%20von%20127%29-730x487.jpg?bust=f6f9c6fc",
            p1:"BRABUS Classic - 6 Sterne ",
            p2:"06.04.2023 - Erleben Sie unsere BRABUS Klassiker vom 12.04.2023-16.04.2023 auf der Techno Classica Essen in …",
         },

         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/0/f/4/a/0f4a6dc58f4a3cff122cb04025b2d6a651fdb952/BRABUS%20Shadow%20900%20Black%20Ops-9074-730x487.jpg?bust=0f4a6dc5",
            p1:"BRABUS Marine @ Boot Düsseldorf 2023",
            p2:"13.01.2023 - Nach zwei Jahren öffnet Europas führende Indoor-Bootsmesse wieder ihre Tore. Vom 21. bis zum 29. …",
         },
         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/1/7/4/0/174058b4c3eae8a885f60496f52b4476819b9846/Axopar_Cannes%20yachting%20festival%202022%20%289%292-730x487.jpg?bust=174058b4",
            p1:"Fort Lauderdale International Boat Show 2022",
            p2:"25.10.2022 – Auf der diesjährigen Fort Lauderdale International Boat Show bringen BRABUS Marine und Axopar zum…",
         },
         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/4/a/f/4/4af4dcf0f9c7e9a075cb9bd59614e7f99d490988/20220820_ContinentalTuning_1120484-730x487.jpg?bust=4af4dcf0",
            p1:"44. Continental Tuning Day X Brabus Special auf dem Contidrom",
            p2:"07.10.2022 - Am 20. August wurden die Tore des Contidroms exklusiv für uns geöffnet, um ganz im BRABUS Style …",
         },

         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/9/6/9/9/96999e64abf269ab1c85a2197d38d8de97544044/MYS%202022-31-730x487.jpg?bust=96999e64",
            p1:"Monaco Yacht Show 2022 - Shadow Boote, luxuriöse Fahrzeuge und ",
            p2:"26.09.2022 - Die Monaco Yacht Show ist eines der meist erwarteten Luxusyacht-Events des Jahres und gilt als …",
         },
         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/9/c/1/f/9c1fcae33fc15f1e6e9764243d55c1f84a56a3ee/0X0A4436-730x487.jpg?bust=9c1fcae3",
            p1:"Cannes Yachting Festival 2022 - BRABUS Marine Shadow Boats und   ",
            p2:"24.08.2022 - Vom 6. bis 11. September öffnet Europas renommierte Bootsmesse ihre Pforten für Luxusboote und …",
         },
         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/5/0/f/6/50f60eb0be4942dd3e5feeb10fdd4d539edbb9c6/20220812-DSC00035-Bearbeitet-730x487.jpg?bust=50f60eb0",
            p1:"Brabus Classic @ Oldtimer Grand Prix 2022 Nürburgring",
            p2:"12.08.2022 - Zusammen mit unserem Technologiepartner Continental nimmt BRABUS an einem der traditionsreichsten…",
         },

         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/c/d/8/3/cd8378603ff1fef591ea5f088158e3ab84ca28e4/Sequence%2001.00_00_00_01.Still002-730x487.jpg?bust=cd837860",
            p1:"BRABUS @ CONTI TUNING TAG 2022",
            p2:"08.07.2022 - Ein Kessel Buntes: Im Mai fand die 43. Ausgabe des Conti Tuning Tages statt. Auch in diesem Jahr …",
         },
         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/3/3/8/4/3384dab16c172ff82d7b989afcafe7e6858962c4/Top%20Marques%20Monaco%202022%20%283%29-730x487.jpg?bust=3384dab1",
            p1:"Top Marques Monaco 2022 - Shadow Boote, luxuriöse Supercars und ",
            p2:"09.06.2022 - Nach zwei Jahren Pause öffnet die Top Marques in Monaco zum 17. Mal ihre Tore. Vom 09. bis zum 12. …",
         },
         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/d/c/f/6/dcf6b99ee5fe8a3cc0b418b5c64e2184136f800a/_BRA1662_retusche-730x487.jpg?bust=dcf6b99e",
            p1:"MONACO YACHT SHOW 2021 - Shadow Boote, luxuriöse Fahrzeuge und",
            p2:"11.10.2021 - Die Monaco Yacht Show ist eines der meist erwarteten Luxusyacht-Events des Jahres und gilt als …",
         },

         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/1/6/3/7/163781ddf9af2b0a0b144d40305cd4bc90eb3929/GLEPapenburg-730x487.jpg?bust=163781dd",
            p1:"rekordbrecher brabus 900 rocket edition",
            p2:"08.10.2021 - Wenn Continental und AUTOBILD SPORTSCARS zum Papenburg 3000 Event einladen, lassen wir es uns …",
         },
         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/6/c/6/b/6c6b7c3d7fe2e274b66ae2c733a771f59fc96b4c/BRABUS%20Shadow%20900%20XC%20Black%20Ops%20MY2021_DSC00713-730x487.jpg?bust=6c6b7c3d",
            p1:"Monaco Yacht Show 2021",
            p2:"20.09.2021 - Wir freuen uns darauf, Sie ab dem 22. September wieder auf der Monaco Yacht Show begrüßen zu dürfen…",
         },
         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/0/8/b/c/08bcfd7a0682d89befa0e9911fabadc01cb8d5b1/invicto-tour-15-730x487.jpg?bust=08bcfd7a",
            p1:"invicto desert tour 2021",
            p2:"21.06.2021 -Voller Power startete die BRABUS Automotive in ein neues Abenteuer. Zusammen mit dem INVICTO Pure…",
         },

         {
            type:"event",
            image:"https://www.brabus.com/_Resources/Persistent/1/d/1/b/1d1bb992600d9ebab7315757bcc701a22dcba81a/361B2630-5A85-4010-AF46-279A5EAAD3E6-730x487.jpg?bust=1d1bb992",
            p1:"BRABUS @ Shanghai Motor Show 2021",
            p2:"30.04.2021 - Die Shanghai Motor Show war erneut die Bühne für unsere neuesten Weltpremieren und viele weitere …",
         },
         {
            type:"event",
            image:"",
            p1:"",
            p2:"",
         },
         {
            type:"event",
            image:"",
            p1:"",
            p2:"",
         },

         {
            type:"all",
            image:"https://www.brabus.com/_Resources/Persistent/7/7/2/4/772497452bc8d4f9569281f6363022d984b47449/BRABUS%20BIG%20BOY%201200_Outdoor%20klein%281%29-730x487.jpg?bust=77249745",
            p1:"BRABUS BIG BOY 1200. LUXURY BEYOND PLACES.",
            p2:"04.11.2024 - Auf der diesjährigen Signature Night enthüllten wir eine der größten und exklusivsten …",
         },
         {
             type:"all",
             image:"https://www.brabus.com/_Resources/Persistent/4/d/8/f/4d8fa7d4b4c36ee8b062d72a68d45c719152d1cc/Brabus_RRC_B700_klein%20%284%29-730x487.jpg?bust=4d8fa7d4",
             p1:"BRABUS 700 BLUE SKY. BEYOND ALL.",
             p2:"29.10.2024 - Der BRABUS 700 BLUE SKY bietet eine Reise durch die Sinne. Ein Masterpiece Supercar auf höchstem …",
          },
          {
             type:"all",
             image:"https://www.brabus.com/_Resources/Persistent/f/e/f/e/fefee65d5b0c152188395e5a1a379e7adbac7934/BRABUS%20Rocket%20GTS_Location_klein%20%2813%29-730x487.jpg?bust=fefee65d",
             p1:"BRABUS ROCKET GTS. THE POWER OF A VISION.",
             p2:"28.10.2024 - Willkommen im nächsten Kapitel der BRABUS ROCKET Legacy. Der ROCKET GTS ist die absolute Spitze …",
          },
           
          {
             type:"all",
             image:"https://www.brabus.com/_Resources/Persistent/c/9/1/2/c9124a5d807d52a4821598e3b6f2dc67a15bddf7/G800_%20Superblack%20elephant%20studio%20klein%20%20%2826%29-730x487.jpg?bust=c9124a5d",
             p1:"The Icon returns. BRABUS 800 based on Mercedes-AMG G 63.",
             p2:"24.10.2024 - Ein absolutes Highlight der diesjährigen BRABUS Signature Night: zwei brandneue Varianten des …",
          },
          {
             type:"all",
             image:"https://www.brabus.com/_Resources/Persistent/5/7/2/a/572a841067e7a7a670aa09f74bec5a7d0f27f735/Cars%20Root%20Atelier%20x%20BRABUS%20%2825%29-730x487.jpg?bust=572a8410",
             p1:"OUT NOW – High-Performance Fashion trifft Urban Style in exklusiver ",
             p2:"29.09.2024 - It’s time to find your 1-Second-Wow. Der erste offizielle Drop der BRABUS x Root Atelier Clothing …",
          },
          {
             type:"all",
             image:"https://www.brabus.com/_Resources/Persistent/a/c/7/c/ac7ceea30eb935ee152a3b22b246cf48f6621015/Messe_Europa_MonacoYacht%20Show_klein%20%2824%29-730x487.jpg?bust=ac7ceea3",
             p1:"BRABUS AT Monaco Yacht Show 2024 neuer Kollektion",
             p2:"20.09.2024 - Wir freuen uns, auch in diesem Jahr wieder auf der Monaco Yacht Show dabei zu sein! Erleben Sie …",
          },
          {
            type:"all",
            image:"https://www.brabus.com/_Resources/Persistent/c/9/e/3/c9e36a6a40abfc39ca0ea44e63bd735b6f201962/BRABUS%20Deep%20Blue_On%20Location_klein%20%2823%29-730x487.jpg?bust=c9e36a6a",
            p1:"BRABUS DEEP BLUE MASTERPIECES. Elegant. Timeless. 904.",
            p2:"25.11.2024 - Die neueste BRABUS Deep Blue Series, die auf der Signature Night 2024 neben einer Vielzahl von …",
         },
         {
            type:"all",
            image:"https://www.brabus.com/_Resources/Persistent/a/7/f/8/a7f8304ad8763019ae2a19f68d7f3bd97273eb38/BRABUS_600_PEETCH%20Range%20x%20Porsche%20Elephant%20Studio%20klein%20%288%29-730x487.jpg?bust=a7f8304a",
            p1:"BRABUS Peetch MASTERPIECES. Live to Stand Out.",
            p2:"15.11.2024 - Dynamisch. Elegant. Unverkennbar. Mit der weltweiten Premiere der BRABUS 900 PEETCH und BRABUS …",
         },
         {
            type:"all",
            image:"https://www.brabus.com/_Resources/Persistent/4/c/9/0/4c902067387593fda6914b361d490ae48279abff/Lead%20Visual%20BRABUS%20Masterpiece%20Collection%20without%20Text%283%29-730x487.jpg?bust=4c902067",
            p1:"OUT NOW – Neue BRABUS Fashion Signature Night 2024",
            p2:"13.11.2024 - This is BRABUS, ready to wear. Ein weiteres brandneues Highlight der diesjährigen Signature Night: …",
         },

         {
            type:"all",
            image:"https://www.brabus.com/_Resources/Persistent/e/a/8/c/ea8c1baacdf0c9a44b80e82a1de3053c10c65114/BRABUSxSunreef_LaunchEvent_Sep24%20%2824%29-730x487.jpg?bust=ea8c1baa",
            p1:"BRABUS x Sunreef Yachts - Together, beyond boUndaries.",
            p2:"08.10.2024 - In einer neuen strategischen Partnerschaft haben wir uns mit Sunreef Yachts, dem weltweit …",
         },
         {
            type:"all",
            image:"https://www.brabus.com/_Resources/Persistent/c/e/e/9/cee98b30ddd401b4ff0b3dc57039d7d5fd82d166/AwakexBRABUS_Boat_and_Board%20%2855%29-730x487.jpg?bust=cee98b30",
            p1:"BRABUS X Awake - Brabusize the waves",
            p2:"28.05.2024 - Wir freuen uns, das erste Ergebnis unserer neuesten Kollaboration mit dem revolutionären …",
         },

         {
            type:"all",
            image:"https://www.brabus.com/_Resources/Persistent/9/d/f/2/9df258daf6153605cc7bd267e5b247ac2c5b688f/0X0A8486-2-730x487.jpg?bust=9df258da",
            p1:"Fort Lauderdale International Boat Show 2023",
            p2:"25.10.2023 – Die Fort Lauderdale International Boat Show (FLIBS) ist die bekannteste Bootsmesse für …",
         },

         {
            type:"all",
            image:"https://www.brabus.com/_Resources/Persistent/4/3/3/4/4334bb49422cbe26bd16e4e06b49f9a6884daaa5/Best-Brand-18-730x487.jpg?bust=4334bb49",
            p1:"Der Best Brand Award geht zum 18. Mal in Folge an BRABUS",
            p2:"27.03.2024 - Die BRABUS „Hall of Fame“ bekommt Zuwachs: Bereits zum 18. Mal wählten die auto motor und sport …",
         },
         {
            type:"all",
            image:"https://www.brabus.com/_Resources/Persistent/c/8/0/0/c800347dcf6a9bc2b3b7e186b74a50058d82cd54/Webseite2mio%201610-730x487.jpg?bust=c800347d",
            p1:"BRABUS knackt die zwei Millionen",
            p2:"21.11.2023 - Danke für über zwei Millionen Abonnenten auf unserem @brabus Instagram-Kanal! Gemeinsam mit Euch …",
         },
         {
            type:"all",
            image:"https://www.brabus.com/_Resources/Persistent/c/3/a/9/c3a9d1235fb8f1b0e3384d325d4013c5f9669d56/Teaserbild-730x487.jpg?bust=c3a9d123",
            p1:"Premium-Reifenhersteller Hankook ist offizieller BRABUS Technologiepartner",
            p2:"05.10.2023 - Hankook Tire wurde 1941 in Seoul gegründet und entwickelte sich in den vergangenen acht …",
         },
         {
            type:"all",
            image:"https://www.brabus.com/_Resources/Persistent/5/0/f/6/50f60eb0be4942dd3e5feeb10fdd4d539edbb9c6/20220812-DSC00035-Bearbeitet-730x487.jpg?bust=50f60eb0",
            p1:"Brabus Classic @ Oldtimer Grand Prix 2022 Nürburgring",
            p2:"12.08.2022 - Zusammen mit unserem Technologiepartner Continental nimmt BRABUS an einem der traditionsreichsten…",
         },
         {
            type:"all",
            image:"https://www.brabus.com/_Resources/Persistent/d/d/8/6/dd867c9bef25f708ecc2069c711b7e9884633422/MB%20300%20SL%20Gullwing%20Pop%20Art_klein%20%2812%29-730x487.jpg?bust=dd867c9b",
            p1:"IKONE TRIFFT IKONE - ANDY WARHOL STORY",
            p2:"21.06.2022 - 1986 beauftragte Daimler-Benz die legendäre Pop-Art-Ikone Andy Warhol mit einer Reihe von …",
         },

         {
            type:"all",
            image:"https://www.brabus.com/_Resources/Persistent/b/1/a/c/b1ac87ad5838e2d6fe37d931d53502c6ac6bcad2/_DSC2764-730x487.jpg?bust=b1ac87ad",
            p1:"BRABUS CLASSIC 6 STerne RESTAURATION - Mercedes-Benz 280 SE 3.5",
            p2:"16.11.2020 - Damit fährt man nicht, damit legt man ab: Im September 1969 debütiert das 280 SE 3.5 Cabriolet …",
         },
         
    ]

    const [val2,setVal2] = useState("all")

    const NewsEventsDiv = NewsEvents.map((item,key)=>{
        
        if(val2 == item.type){
            return <div className="NEdiv">
            <img src={item.image} alt="" />
            <p className='p1'>{item.p1}</p>
            <p className='p2'>{item.p2}</p>
        </div>
        }
    })

    return <div className="newsevents2">
        
        <div className="newsevents2div1">
         <div>
            <p>NEWS AND EVENTS</p>
            <select value={val2} name="" id="select" onChange={(e)=>{
            setVal2(e.target.value)
           }} >
                <option value="all" >- News-Kategorie ausvahlen -</option>
                <option value="fahr">BRABUS Fahrzeunge</option>
                <option value="neuer">Neuer launch & neues Product </option>
                <option value="marine">BRABUS Marine</option>
                <option value="classic">BRABUS Classic</option>
                <option value="uber">Uber BRABUS</option>
                <option value="koop">Kooperationen</option>
                <option value="event">Messen & Events</option>
            </select>
         </div>
        </div>
      
      <div className="newseventsrol">
        {NewsEventsDiv}
      </div>

      <Image10 />
      <Bottom />
         
    </div>
}