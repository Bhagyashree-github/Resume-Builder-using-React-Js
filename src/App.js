import { useContext,useReducer } from 'react';
import './App.css';
import Boarder from './components/Boarder';
import Clock from './components/Clock';
import DigitalClock from './components/DigitalClock';
import DropDown from './components/DropDown';
import NewTest from './components/NewTest';
// import List from './components/List';
import Resume from './components/Resume';
import  useCounter  from './custom/useCounter';
import { useWindowSize } from './custom/useWindowSize';
// import ThemeContext, {ThemeContextProvider} from './context/ThemeContext';
// import './components/bordercss.css'
import Switch from '@mui/material/Switch';

function App() {
  // const {theme, toggleTheme} = useContext(ThemeContext)
  const [count, increment, decrement] = useCounter(0);
  // const [counter,dispatch] = useReducer(reducer,0)
  const [width, height] = useWindowSize();
  
 
  return (
    < >
       <div className = 'navbar'>
       <div className='themecss'>
            {/* <button  className='themebutton' > Change mode</button> */}
            <Switch  defaultChecked />
          </div>
        {/* <Boarder> */}
          <Resume />
        {/* </Boarder> */}
       </div>
    </>
  );
}

export default App;







//  {/* <Test/> */}

//       {/* <NewTest message='hii lucky' onPlay={()=>console.log({message})}/> */}
//       {/* <List layout='alpha' items={items}/>
//       <List layout='bullet' items={items}/>
//       <List layout='numbered' items={items}/> */}

//       {/* <DigitalClock/> */}
//       {/* <Clock/> */}
//       {/* <DropDown/> */}
//       {/* <Search/> */}


{/* <h2>{count}</h2>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
      <div>
        width - {width} height - {height}
      </div> */}