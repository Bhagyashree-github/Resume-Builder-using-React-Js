import './App.css';
import Resume from './components/Resume';
import Switch from '@mui/material/Switch';

function App() {
  return (
    < >
      <div className='navbar'>
      <h1 style={{ display: 'grid', margin:"10px", justifyContent:'center' , color:'white' }}>Resume Builder</h1>
        <div className='themecss'>
          <Switch defaultChecked />
        </div>
        </div>
        {/* <Boarder> */}
        <Resume />
        {/* </Boarder> */}
      
    </>
  );
}

export default App;
