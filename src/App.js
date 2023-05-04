import './App.css';
import Resume from './components/Resume';
import Switch from '@mui/material/Switch';

function App() { 
  return (
    < >
       <div className = 'navbar'>
       <div className='themecss'>
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
