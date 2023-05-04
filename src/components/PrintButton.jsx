import React from 'react'
import Button from '@mui/material/Button';

const PrintButton = () => {
    function printform(){
        window.print()
    }
  return (
    <div style={{display:'grid',justifyContent:'center'}}>
        {/* <button onClick={printform}>Print</button> */}
        <Button variant="outlined"onClick={printform} >Print</Button>
    </div>
  )
}

export default PrintButton