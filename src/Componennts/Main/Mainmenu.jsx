import { useContext } from 'react'
import './Mainmenu.scss'
import { Maincont } from '../../App'
export default function Mainmenu(){

    const mmenucont = useContext(Maincont)

    return <div className="mainmenu1">
        {/* <div className="mainmenu">
        <div onClick={()=>{
         mmenucont.setMmenu("supercars")
        }} className="supercars">
            SUPERCARS
        </div>
        <div onClick={()=>{
            mmenucont.setMmenu("tuning")
        }} className="tuning">
            TUNING
        </div> 
        <div onClick={()=>{
        mmenucont.setMmenu("classics")
       }} className="classics">
        CLASSICS
       </div>
       
       <div onClick={()=>{
        mmenucont.setMmenu("cars4sale")
       }} className="cars4sale">
        CARS4SALE
       </div>
        </div>

    <div className="maingic"></div> */}

    </div>
}