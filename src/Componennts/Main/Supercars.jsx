import Supercarsslider from "./Supercarsslider";
import "./Supercars.scss"
import Supercarsslider2 from "./Supercarsslider2";
import { useState } from "react";
import Supercarsslider3 from "./Supercarsslider3";
import Bottom from "./Bottom";
import Image10 from "./Image10";

export default function Supercars(){

  const [supcarimg1,setSupcarimg1] = useState("https://www.brabus.com/_Resources/Persistent/9/0/2/c/902cc44693ed703fe41160bb935b75bea3ccf877/C4S_136%20%2888%29-1920x1080.jpg")
    
    return <div className="supcar">
      
      <Supercarsslider />
      
      <div className="supercarmain">
         <p className="sp1">SUPERCARS</p>
         <p>Vom ULTIMATE E bis zum ROCKET 1000 – jedes BRABUS Supercar ist das Ergebnis eines perfekten Zusammenspiels: Vollendete Technik, ausgefeilte Ingenieurskunst und individuelle Handarbeit machen jedes BRABUS Supercar einzigartig in seiner Klasse.</p>
      </div>

      <div className="supercarscars">

        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/e/7/2/9/e72911bc15495941dd62124b18ed64abdef4e51c/Supercar_Rocket%201000-730x487.jpg" alt="" />
         <p className="p1">BRABUS ROCKET 1000 "1 OF 25"</p>
         <p className="p2">Mercedes-AMG GT 63 S E Performance</p>
        </div>
       
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/9/8/9/9/989952a7b3ced9e9818064654d75f03b9391dd2e/Supercar-730x487.jpg" alt="" />
         <p className="p1">  BRABUS 930 </p>
         <p className="p2">  Mercedes-AMG GT 63 S E Performance </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/8/6/6/3/8663b743fc97511d41c38ed74458250d34ca5b9d/Supercars-730x487.jpg" alt="" />
         <p className="p1">  BRABUS 930 </p>
         <p className="p2">Mercedes-AMG S 63 E Performance  </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/7/4/9/5/74959ae9f6721d812f5a5c1e953449c198428a4f/BRABUS%20ROCKET%20R%20Studio_klein%20%2853%29-730x487.jpg" alt="" />
         <p className="p1">BRABUS 900 Rocket R "1 of 25"</p>
         <p className="p2">Porsche 911 Turbo S Coupé</p>
        </div>
       
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/1/9/f/b/19fbfca6a716ea45750c28cfa375865b2aa6d359/Crawler_Supercar-1920x1279-730x486.jpg" alt="" />
         <p className="p1"> BRABUS CRAWLER </p>
         <p className="p2">High Performance Offroad-Fahrzeug </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/a/7/0/9/a709bf2cb80d39149fd5dcef8e8b3091aa17bb3d/E900%20Supercars-730x487.jpg    " alt="" />
         <p className="p1">  BRABUS 900 </p>
         <p className="p2">Mercedes-AMG E 63 S 4MATIC+ </p>
        </div>


        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/0/0/a/1/00a1d87e4fcdf2ead6620c460db1fca36f3746d4/BRABUS%20900%206x6%20Superblack%20Studio_klen%20%2870%29-730x487.jpg" alt="" />
         <p className="p1"> BRABUS XLP 900 6x6 SUPERBLACK
       </p>
         <p className="p2">    Mercedes-AMG G 63 (W463A)  </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/0/b/9/1/0b917a52145ff228a0908e1ed320ddbec08f35d5/Supercar.-730x487.jpg" alt="" />
         <p className="p1"> BRABUS 900 XLP "ONE OF TEN"
  </p>
         <p className="p2"> 
Mercedes-AMG G 63 (W463A)
</p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/8/0/e/a/80ea1e99309b38768b4afbfce9af8e4dd3fef56e/SuperCars-730x487.jpg" alt="" />
         <p className="p1">  BRABUS P 900 ROCKET EDITION "one of ten"         </p>
         <p className="p2">  Mercedes-AMG G 63 (W463A)</p>
        </div>


        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/d/b/b/3/dbb33f11512b3ff391c5b3253b36e65741553d6b/003_BRA_RO_900_G_side-730x487.jpg" alt="" />
         <p className="p1">  BRABUS 900 ROCKET EDITION </p>
         <p className="p2"> 
         Mercedes-AMG G 63 (W463A)  </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/6/d/5/7/6d57bd5edb2ccf6d05e56b8a6a73aed257092ce5/003_BRABUS_G900_deepblue_side.-730x487.jpg" alt="" />
         <p className="p1">  BRABUS 900 DEEP BLUE </p>
         <p className="p2">  
         Mercedes-AMG G 63 (W463A) </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/2/2/f/3/22f32f12c9114d82a8e3999a451d5911a539562f/SuperCar-730x487.jpg" alt="" />
         <p className="p1"> BRABUS 900 SUPERBLACK  </p>
         <p className="p2"> 
         Mercedes-AMG G 63 (W463A)  </p>
        </div>


        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/1/4/4/b/144b74eb65e0b71a519e04013604082ab627acd9/Supercar%20%282%29%20Kopie%20%281%29-730x487.jpg" alt="" />
         <p className="p1"> BRABUS 900 ROCKET EDITION  </p>
         <p className="p2">  
         Mercedes-AMG GLE 63 S 4MATIC+ </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/b/6/3/8/b638ab994b3f4c1620b39db4aeaeb09705430e97/BRABUS%20GLS%20900%20Superblack%20Studio_klein%20%2845%29-730x487.jpg" alt="" />
         <p className="p1"> BRABUS 900 SUPERBLACK  </p>
         <p className="p2"> 
         Mercedes-AMG GLS 63 4MATIC+  </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/8/7/e/8/87e84a2a882c3657c2be6332ff20bb8a573455da/Supercar-730x487.jpg" alt="" />
         <p className="p1"> BRABUS 900  </p>
         <p className="p2">  
         Mercedes-Maybach GLS 600 </p>
        </div>

        
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/9/7/f/d/97fd5c457dbb03c0dbadaa5b0df074145e199c1d/Supercar-730x487.jpg" alt="" />
         <p className="p1">  BRABUS ROCKET 900 "ONE OF TEN" </p>
         <p className="p2"> 
         Mercedes-AMG GT 63 S 4MATIC+  </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/a/7/f/4/a7f4a2d1083ceafa957d2d105f5247d303ebdc5d/003_BRABUS%20Maybach_850_V12_Masterpiece_side-730x487.jpg" alt="" />
         <p className="p1"> BRABUS 850 </p>
         <p className="p2"> 
         Mercedes-Maybach S 680   </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/4/5/5/2/455269f75b2f5d64b9f0c754ef36351e842bc853/Supercar-730x487.jpg" alt="" />
         <p className="p1">  BRABUS 820</p>
         <p className="p2">  
         Porsche 911 Turbo S Cabriolet  </p>
        </div>


        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/0/a/7/d/0a7d5a5bae05fbb79628870e06f72d75793ae8b9/BRABUS%206x6%20wei%C3%9F%20studio_klein%20%2866%29-730x487.jpg" alt="" />
         <p className="p1">  BRABUS XLP 800 6x6 ADVENTURE </p>
Mercedes-AMG G 63 (W463A)
<p className="p2">   </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/b/9/c/6/b9c629638fe69995d95a026a4cc9155b0ef9cdb8/SC-730x487.jpg" alt="" />
         <p className="p1">  BRABUS 800 ADVENTURE XLP </p>
         <p className="p2">  
         Mercedes-AMG G 63 (W463A) </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/3/2/a/a/32aafe097dca3351a72756fc0d1a02157f2189ca/Superblack_Supercar-730x487.jpg" alt="" />
         <p className="p1"> BRABUS 800 XLP SUPERBLACK </p>
         <p className="p2"> 
         Mercedes-AMG G 63 (W463A)   </p>
        </div>



        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/6/3/3/4/6334c34121823cd479cf8f4f7b1fcb40446fb95c/Supercars%20superwhite-713x475.jpg" alt="" />
         <p className="p1">  BRABUS 800 XLP SUPERWHITE </p>
         <p className="p2"> 
         Mercedes-AMG G 63 (W463A)  </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/a/1/d/8/a1d81ca7368351feb7aadb6cb8b5be71bd5b9571/Supercars%204x4%20Stealth%20Green-730x487.jpg" alt="" />
         <p className="p1">  BRABUS 800 4x4² Stealth Green</p>
         <p className="p2">  
         Mercedes-AMG G 63 4x4²  </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/8/0/4/f/804f88b672ac5abf2b1b091edf8c605f37fc67a6/BRABUS_Supercar_4x4_Superblack-730x487.jpg" alt="" />
         <p className="p1"> BRABUS 800 4x4² Superblack  </p>
         <p className="p2">  
         Mercedes-AMG G 63 4x4² </p>
        </div>



        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/9/b/2/8/9b2843f6c56004da5aa1414ff9b0489fb5775517/003_BRABUS_G800_4x4_side_2-2-730x487.jpg" alt="" />
         <p className="p1">  BRABUS 800 4x4² Edition RHD "1 of 25"</p>
         <p className="p2"> 
         Mercedes-AMG G 63 (W463A)   </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/6/2/4/1/6241fa619f7a5b0a114a7f355fa8aaac6519bfcf/SuperCarBlackgold-730x487.jpg" alt="" />
         <p className="p1"> BRABUS 800 BLACK & GOLD Edition
  </p>
<p className="p2">  
Mercedes-AMG G 63 (W463A)
</p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/a/5/8/e/a58e53c0ccbc2d5f16a3c44de0284c95377202cd/G800BLACKOPS%20%2840%29-730x487.jpg" alt="" />
         <p className="p1"> BRABUS 800 BLACK OPS Edition </p>
         <p className="p2"> 
         Mercedes-AMG G 63 (W463A)   </p>
        </div>



        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/e/6/4/2/e642ba44fb539122245a201da5073872cd26bfe3/Shadow800%20%2817%29-730x487.jpg" alt="" />
         <p className="p1"> BRABUS 800 SHADOW Edition</p>
         <p className="p2"> 
         Mercedes-AMG G 63 (W463A)    </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/0/c/7/9/0c7994b9ac9bd635fb786766a68bb4baf1bf3b2d/003_B800_side-730x487.jpg" alt="" />
         <p className="p1">  BRABUS 800 </p>
         <p className="p2">  
         Mercedes-AMG G 63 (W463A) </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/7/d/9/b/7d9b3c9c1f3e7390e66fede5ddf00d4ec3680faf/Supercar-730x487.jpg" alt="" />
         <p className="p1"> BRABUS 800</p>
         <p className="p2">  
         Mercedes-AMG GLE 63 S 4MATIC   </p>
        </div>

        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/3/3/6/2/33623d533325820193d5d7beb7f507b2be85bbd1/Supercar-1920x1279-730x486.jpg" alt="" />
         <p className="p1"> BRABUS 800 </p>
         <p className="p2">  
         Mercedes-AMG GLS 63 S 4MATIC  </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/6/e/e/b/6eebc6900d763a071482038ef4b37a4a6182d8e4/BRABUS%20750%20Studio_klein%20%2870%29-730x487.jpg" alt="" />
         <p className="p1"> BRABUS 750 Bodo Buschmann Edition "1 of 25"</p>
<p className="p2">
Mercedes-AMG SL 63 4MATIC+
</p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/e/9/c/a/e9ca2cb93b4204af789ff8027f4848ec838ac9b1/Ghost_Supercars-730x487.jpg" alt="" />
         <p className="p1"> BRABUS 700 </p>
         <p className="p2">  
         Rolls-Royce Ghost Extended  </p>
        </div>

        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/d/f/5/c/df5c6bfa2549d379543edf7bf693c5fbca209cac/BRABUS%20RANGE%20ROVER%20600%20Studio_klein%20%2855%29-730x487.jpg" alt="" />
         <p className="p1"> BRABUS 600  </p>
         <p className="p2">  
         Range Rover P530 LWB </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/5/c/1/c/5c1c9cba71cbedcb9d45679951315cfa05429e4b/003_B_GLC63_side-730x483.jpg" alt="" />
         <p className="p1"> BRABUS 600 </p>
         <p className="p2">  
         Mercedes-AMG GLC 63 SUV  </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/d/f/7/2/df724c886e6ffbecfdad301ffa91b4fbe8e3ca36/Supercars-730x487.jpg" alt="" />
         <p className="p1"> BRABUS 600</p>
         <p className="p2"> 
         Mercedes-Maybach S 580   </p>
        </div>


        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/7/c/5/1/7c510adf656c031b9ab7929e9080a2ffeb20f7db/Supercar-730x487.jpg" alt="" />
         <p className="p1"> BRABUS for Taycan Turbo S </p>
         <p className="p2">  
         Porsche Taycan Turbo S  </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/9/6/f/2/96f2b6e45c457207a28c1e3dad8365a12207c71d/Supercar%20EQS-730x487.jpg" alt="" />
         <p className="p1"> BRABUS for EQS 53  </p>
         <p className="p2"> 
         Mercedes-AMG EQS 53 4MATIC+  </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/3/9/f/3/39f3a267d6b2ce9fd6e30d41ee0c25301003fc26/ultimateEfacelift%20%2832%29-730x487.jpg" alt="" />
         <p className="p1"> BRABUS ultimate E  </p>
         <p className="p2"> 
         smart EQ fortwo cabrio  </p>
        </div>

        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/4/1/c/f/41cf5a1bed419281c31d5d11f728b00842ab57f3/92R%20Supercar-730x487.jpg" alt="" />
            <p className="p1"> BRABUS 92R </p>
         <p className="p2"> 
         smart EQ fortwo cabrio  </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/3/4/5/7/3457384f9c7a20a6d8ec70f5383daf2146c76206/003_INVICTO_L_side-1-730x487.jpg" alt="" />
         <p className="p1"> BRABUS INVICTO LUXURY - Armoured vehicle  </p>
         <p className="p2"> 
         Mercedes-AMG G 63 (W463A)  </p>
        </div>
        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/3/d/2/7/3d276c6b5f50711dba64fd5069c67739a6790f61/003_INVICTO_M_side-1-730x487.jpg" alt="" />
         <p className="p1"> INVICTO MISSION - Armoured vehicle </p>
         <p className="p2"> 
         Mercedes-Benz G 500 (W463A)   </p>
        </div>

        <div className="supercarscar">
            <img src="https://www.brabus.com/_Resources/Persistent/f/d/0/c/fd0c967f08b12eea3969c8ba69e995299cab1075/003_INVICTO_P_side-730x487.jpg" alt="" />
         <p className="p1"> INVICTO PURE - Armoured Vehicle </p>
         <p className="p2">  
         Mercedes-Benz G 500 (W463A)  </p>
        </div>
        <div className="supercarscar">
            <img src="" alt="" />
         <p className="p1">   </p>
         <p className="p2">   </p>
        </div>
        <div className="supercarscar">
            <img src="" alt="" />
         <p className="p1">   </p>
         <p className="p2">   </p>
        </div>

      








      </div>


      <div className="supercarslux">
          
          <div>
            LUXURIOS
          </div>
      </div>

      <div className="supercarseleganz">
         
         <h1>
         <h1 className="h1">OPTISCHE ELEGANZ. </h1>
          
          ÜBERLENGENE MOTORISIERUNG. </h1>

    <p>
    BRABUS Supercars setzen neue Standards für unvergessliche Fahrerlebnisse. 
    </p>

         <p>
Rekordverdächtige Höchstgeschwindigkeiten, eine überragende Performance und ein ultimativ luxuriöses Fahrgefühl machen jedes Supercar aus. Die unverwechselbare Optik und ein außergewöhnliches Aerodynamik-Konzept vollenden die Einzigartigkeit jedes BRABUS Supercars.
         </p>
      </div>

      <Supercarsslider2 />

      <div className="supercarseleganz2">
         
         <h1>
         <h1 className="h1">MANUFACTURING INDIVIDUALITY.</h1>
          
        VOLLE INDIVIDUALITAT. </h1>

         <p>Zur besten Lösung gelangt man manchmal über ungewöhnliche Wege. Bei BRABUS feilt das ganze Team an jedem Detail – bis zum optimalen Ergebnis. Damit der souveräne Auftritt im Großstadt-Dschungel genauso viel Spaß macht wie die Langstrecke auf der Autobahn.  </p>
      </div>


       <div onClick={()=>{
          
          if(supcarimg1 == "https://www.brabus.com/_Resources/Persistent/a/9/7/9/a9792ebb3e86c2a315e808d572aa8174716185d7/_BRA0393-1920x1080.jpg"){
            setSupcarimg1("https://www.brabus.com/_Resources/Persistent/9/0/2/c/902cc44693ed703fe41160bb935b75bea3ccf877/C4S_136%20%2888%29-1920x1080.jpg")
          }else{
            setSupcarimg1("https://www.brabus.com/_Resources/Persistent/a/9/7/9/a9792ebb3e86c2a315e808d572aa8174716185d7/_BRA0393-1920x1080.jpg")
          }
       }} className="supercarsimg1">
         <img src={supcarimg1} alt="" />
       </div>

       <div className="supercarseleganz3">

        <p>       Intensive Tests im Windkanal und auf den Prüfständen, tausende Testkilometer auf der eigenen Teststrecke – wenn ein BRABUS Supercar das Werk verlässt, ist jedes Detail geprüft und für exzellent befunden worden. Erst dann erfolgt die Freigabe.
        </p>
       </div>

       <div className="supercarslux2">
          
          <div>
            INDIVIDUAL <br /> HAUTE COUTURE
          </div>
      </div>


      <div className="supercarseleganz4">
         
         <h1>
         <h1 className="h1">INTELLIGENTER LUXUS.
         </h1>
         KEINE KOMPROMISSE.  </h1>


         <p>
         Das Interieur jedes Supercars ist so individuell wie sein Fahrer. <br />
         Edelhölzer, Kohlefaser, handschuhweiches BRABUS fine leather in 3.500 Lederfarben – der Ausstattung sind keine Grenzen gesetzt. Jeder besondere Wunsch wird berücksichtigt. In durchdachter Symbiose von Handarbeit und modernster maschineller Fertigung entstehen maßgefertigte automobile Träume.         </p>
      </div>
     <div className="supercarsimg2">
     <img src="https://www.brabus.com/_Resources/Persistent/f/1/0/9/f109f100f30466021dbb3587821e1da08d03b34d/_BRA1115-1920x1080.jpg" alt="" />

     </div>
     

     <div className="supercarseleganz2">
         
         <h1>
         <h1 className="h1">THE FASTEST OFFICE ON WHEELS.
         </h1>
         WORLDWIDE.  </h1>


         <p>Innovative Business- und Multimedia-Lösungen machen Ihr BRABUS Supercar zum schnellsten Arbeitsplatz auf Rädern – und zu einem alle Erwartungen übertreffenden Entertainment-Universum. Individuelle Konzepte und die neueste Technologie sorgen dafür, dass Sie jederzeit komfortabel vernetzt sind – überall und unbegrenzt. </p>
      </div>

      <Supercarsslider3 />

      <div className="supercarseleganz5">
         
         <h1>
         <h1 className="h1"> FINEST INTERIOR.
         </h1> 
         BRABUS MASTERPIECE. </h1>

    <p>
    BRABUS Masterpiece verbindet leidenschaftliche Handwerkskunst mit bedingungslosem Luxus. Kompromisslos <br /> und extravagant, makellose Verarbeitung, die bis ins kleinste Detail veredelt wird.    </p>

         <p>
         Vollausgestattet und maßgeschneidert – Individualität, die ihre Einzigartigkeit ausstrahlt und das BRABUSized <br /> Supercar zu einem exklusiven Masterpiece werden lässt. Über die BRABUS fine leather Innenausstattung  <br /> hinaus, werden spezielle Akzente in dem Supercar nach ihren Wünschen umgesetzt oder durch limitierte <br /> Editionen exklusiv unterstrichen.         </p>

 <a href="https://www.brabus.com/de-de/dealersearch-supercars.html">
 <button>KONTACT AUFNEHMEN</button>
 </a>     
     
     </div>
     <Image10 />
     <Bottom />

    </div>
}