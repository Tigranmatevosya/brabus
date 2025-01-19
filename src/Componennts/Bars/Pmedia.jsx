import Bottom from '../Main/Bottom'
import './Pmedia.scss'
import Pmediaslider from './Pmediaslider'

export default function Pmedia(){

    return <div className="pmedia">
        
        <div className="pmediaimg1">
            <img src="https://www.brabus.com/_Resources/Persistent/7/0/2/1/70210eac69a697ae894766f3b75f633b0252d860/BRABUS%20Shadow%20500%20and%20900%20range%20MY23%20%284%29.jpg" alt="" />
        </div>

     <div className="pmslider1">
        <div className="div1">
        PRESS & MEDIA
        </div>
        <div className="div2">
        VIDEO REVIEWS & WALKTHROUGHS
        </div>

        <Pmediaslider />
     </div>

     <div className="pmediaimg2">
        <div className="div1">
            <div className="div11">
                <p className='p1'>IMAGES & VIDEOS OF <br /> OUR BOATS</p>
                <p className='p2'>
                Find the right image or video for your needs: for press and <br />
                 marketing purposes or as a stunning wallpaper background. <br />   
                  The new Media Library makes it easy for you to find latest <br />
                   content of our stunning Shadow ranges.


                </p>
                <button>MEDIA LIBRARY</button>
            </div>
        </div>
        <div className="div2">
            
        </div>
     </div>

     <div className="pmediaimg3">
     <div className="div2">
            
            </div>
        <div className="div1">
            <div className="div11">
                <p className='p1'>BRABUS MARINE PRESS <br /> RELEASES</p>
                <p className='p2'>Find all BRABUS Marine Press Release packages available for <br />
                 download: 


                </p>
                <button>PRESSROOM</button>
            </div>
        </div>
      
     </div>


     <div className="pmediadiv1">
         <p className='p1'>Members of the press and BRABUS Marine dealers can download our press releases and marketing material for <br />
          use in their magazines, web publishing and other marketing. All pictures and other material are copyrighted.</p>
      <p className='p2'>DOWNLOAD OUR BROCHURES</p>
     </div>

     <div className="rol1">
      <div className="rol">
           <div className="col">
              <a href="https://online.flippingbook.com/view/617446471/">
              <div className="colimg">
               <img src="https://www.brabus.com/_Resources/Persistent/f/6/a/0/f6a0b8ed9783319e083868c69e61cab01502b7ec/DSC05973-648x432.jpg" alt="" />
               </div>
                <p className='p1'>BRABUS SHADOW 1200 BROCHURE
                </p>
                <p className='p2'>
                featuring the BRABUS Shadow 1200 XC <br />
                 Cross Cabin Black Ops Signature Edition
                </p>
              </a>
            </div>
           <div className="col">
          <a href="https://online.flippingbook.com/view/344696/">
          <div className="colimg">
           <img src="https://www.brabus.com/_Resources/Persistent/6/2/0/e/620ec9158db321ec83a627eb0710dd9db22b014d/BRABUS%20Shadow%201000%20XC%20Cross%20Cabin%20Black%20Ops%20Signature%20Edition_DSC03417-Enhanced-NR-648x432.jpg" alt="" />
           </div>
                <p className='p1'>
                BRABUS SHADOW 1000/900 BROCHURE
                     </p>
                <p className='p2'>
                featuring the BRABUS Shadow 1000 Black <br />
                BRABUS Shadow 900 range
                </p>
          </a>
            </div>
           <div className="col">
            <a href="https://online.flippingbook.com/view/254928/">
            <div className="colimg">
             <img src="https://www.brabus.com/_Resources/Persistent/6/6/4/0/664094666e628ebeda5fde4b3575ee280e4aff09/BRABUS%20Shadow%20500%20T-Top%20Glacier%20Blue%20Camo%20Wrap%20MY22%20%282%29-648x432.jpg" alt="" />
              </div>
                <p className='p1' >BRABUS SHADOW 500 
                </p>
                <p className='p2'>
                featuring the BRABUS Shadow 500 Range <br />    
                BRABUS Shadow 900 range

                </p>
            </a>
            </div>
            
        </div>
      </div>
      <div className="rol1">
        <div className="rol">
        <div className="col">
            <a href="https://online.flippingbook.com/view/873138395/">
            <div className="colimg">
             <img src="https://www.brabus.com/_Resources/Persistent/6/3/3/b/633b0ac0c66455f33eb5bdc14efe5e93c398ca41/E29A5728_waterline-648x432.jpg" alt="" />
              </div>
                <p className='p1' >BRABUS SHADOW 300 
                </p>
                <p className='p2'>
                featuring BRABUS Shadow 300 Edition One <br />
                 and Quantum White 
                </p>
            </a>
            </div>
        </div>
      </div>

      <div className="buttonimg2">
      <div>
        <div>STAY UP TO DATE !</div>
        <div className='div2'>BRABUS MARTINE NEWSLETTER</div>
      </div>
  </div>

      <Bottom />

    </div>
}