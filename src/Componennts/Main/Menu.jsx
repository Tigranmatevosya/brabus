import { useContext } from 'react'
import './Menu.scss'
import { Maincont } from '../../App'

export default function Menu(){
    
   const menucont = useContext(Maincont)
   
    return <div className="menu">
      <div onClick={()=>{
          menucont.setMenubars("bars")
      }} className="menuicondiv">
      <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
        <div className="menuimg">
        <img onClick={()=>{
          menucont.setMmenu("");
          menucont.setMenubars("");
          window.scrollTo(0,0);
   }} src="https://www.brabus.com/_Resources/Static/Packages/Wysiwyg.Brabus.Website/Images/logos/Logo--desktop.svg?bust=c929d569" alt="" />
        </div>
      <div className="menuicons">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg" alt="" />
        <i class="fa fa-user" aria-hidden="true"></i>
        <i class="fa fa-shopping-bag" aria-hidden="true"></i>
  
      </div>
    </div>
}