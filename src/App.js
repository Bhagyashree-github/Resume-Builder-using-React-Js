import { useEffect, useState } from 'react';
import './App.css';
import Resume from './components/Resume';
import Switch from '@mui/material/Switch';

function App() {
  const [theme,setTheme] = useState('dark-theme')
    

  function changeTheme(){
    if(theme === 'light-theme') {
      setTheme('dark-theme')}
      else { setTheme('light-theme')
   }
    console.log(theme)
    document.body.className = theme;
  }
  return (
    < >
      <div className='navbar'>
      <h1 style={{ display: 'grid', margin:"10px", justifyContent:'center' , color:'white' }}>Resume Builder</h1>
        <div className='themecss'>
          <Switch onClick={changeTheme} />
        </div>
        </div>
        {/* <Boarder> */}
        <Resume />
        {/* </Boarder> */}
      
    </>
  );
}

export default App;
