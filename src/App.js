import { createContext, useState } from 'react';
import './App.scss';
import Main from './Componennts/Main/Main';
import Menu from './Componennts/Main/Menu';

export const Maincont = createContext()

// 12 037 Bars line 
// 20 345 All  line
function App() {
  
  const [mmenu,setMmenu] = useState("")
  const [menubars,setMenubars] = useState("")

  return (
    <div className="App">
    
    <Maincont.Provider value={{
      mmenu,
      setMmenu,
      menubars,
      setMenubars,
    }}>
    
    <Menu />
    <Main />
    </Maincont.Provider>

    </div>
  );
}

export default App;