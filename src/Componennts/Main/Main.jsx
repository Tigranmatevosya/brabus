import { createContext, useContext, useState } from 'react';
import './Main.scss'
import Mainmenu from './Mainmenu';
import Slider from "./Slider";
import Supercars from './Supercars';
import Tuning from './Tuning';
import Classics from './Classics';
import Car4sale from './Car4sale';
import { Maincont } from '../../App';
import Newsevents from './Newsevents';
import Image1 from './Image1';
import Slider2 from './Slider2';
import Image2 from './Image2';
import Video2 from './Video2';
import Image3 from './Image3';
import Slider3 from './Slider3';
import Sliderbots from './Sliderboats';
import Image4 from './Image4';
import Image5 from './Image5';
import Image6 from './Image6';
import Image7 from './Image7';
import Slider4 from './Slider4';
import Image8 from './Image8';
import Image9 from './Image9';
import Image10 from './Image10';
import Bottom from './Bottom';
import Bars from './Bars';
import Sonder from './Sonder';
import Brabusmarine from '../Bars/Brabusmarine';
import Superboats from '../Bars/Superboats';
import Fdiler from '../Bars/Fdiler';
import Pmedia from '../Bars/Pmedia';
import Brabusxsmart from '../Bars/Brabusxsmart';
import Brabusxktm from '../Bars/Brabusxktm';
import Brabusxpan from '../Bars/Brabusxpan';
import Brabusxjob from '../Bars/Brabusxjob';
import Brabusxawk from '../Bars/Brabusxawk';
import Whoweare from '../Bars/Whoweare';
import Brabushistory from '../Bars/Brabushistory';
import Newsevents2 from '../Bars/Newsevents2';
import Barsvideos from '../Bars/Barsvideos';
import Barskarriere from '../Bars/Barskarriere';
import Barstour from '../Bars/Barstour';
import Barsabout from '../Bars/Barsabout';

export default function Main(){
  
  const mainmenu = useContext(Maincont)
  
    return <div className="main">

        {mainmenu.mmenu == "" ?<Slider />:""}
        {mainmenu.mmenu == "" ?<Mainmenu />:""}
        {mainmenu.mmenu == "" ?<Newsevents /> :""}
        {mainmenu.mmenu == "" ?<Image1 /> :""}
        {mainmenu.mmenu == "" ? <Slider2 /> :""}
        {mainmenu.mmenu == "" ? <Image2 /> :""}
        {mainmenu.mmenu == "" ? <Video2 /> :""}
        {mainmenu.mmenu == "" ? <Slider3 /> :""}
        {mainmenu.mmenu == "" ? <Image3 /> :""}
        {mainmenu.mmenu == "" ? <Sliderbots /> :""}
        {mainmenu.mmenu == "" ? <Image4 /> :""}
        {mainmenu.mmenu == "" ? <Image5 /> :""}
        {mainmenu.mmenu == "" ? <Image6 /> :""}
        {mainmenu.mmenu == "" ? <Image7 /> :""}
        {mainmenu.mmenu == "" ? <Slider4 /> :""}
        {mainmenu.mmenu == "" ? <Image8 /> :""}
        {mainmenu.mmenu == "" ? <Image9 /> :""}
        {mainmenu.mmenu == "" ? <Image10 /> :""}
        {mainmenu.mmenu == "" ? <Bottom /> :""}
        {mainmenu.mmenu == "brxsmart" ? <Bars /> :""}
        {mainmenu.mmenu == "supercars" ?<Supercars />:""}
        {mainmenu.mmenu == "tuning" ?<Tuning />:""}
        {mainmenu.mmenu == "classics" ?<Classics />:""}
        {mainmenu.mmenu == "cars4sale" ?<Car4sale />:""}
        {mainmenu.mmenu == "sonder" ? <Sonder /> :""}
        {mainmenu.mmenu == "marine" ? <Brabusmarine />:""}
        {mainmenu.mmenu == "sboats" ? <Superboats /> :""}
        {mainmenu.mmenu == "fdiler" ? <Fdiler /> :""}
        {mainmenu.mmenu == "pmedia" ?  <Pmedia /> :""}
        {mainmenu.mmenu == "brxsmart" ?  <Brabusxsmart /> :""}
        {mainmenu.mmenu == "brxktm" ?  <Brabusxktm /> :""}
        {mainmenu.mmenu == "brxpan" ?  <Brabusxpan /> :""}
        {mainmenu.mmenu == "brxjob" ?  <Brabusxjob /> :""}
        {mainmenu.mmenu == "brxawk" ? <Brabusxawk /> :""}
        {mainmenu.mmenu == "wwa" ? <Whoweare /> :""}
        {mainmenu.mmenu == "brhis" ? <Brabushistory /> :""}
        {mainmenu.mmenu == "nwevt" ? <Newsevents2 /> :""}
        {mainmenu.mmenu == "barsvideos" ? <Barsvideos /> :""}
        {mainmenu.mmenu == "barskar" ? <Barskarriere /> :""}
        {mainmenu.mmenu == "barstour" ? <Barstour /> :""}
        {mainmenu.mmenu == "about" ? <Barsabout /> :""}
        <Bars />
        
    </div>
}