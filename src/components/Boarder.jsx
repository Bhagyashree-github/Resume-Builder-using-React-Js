import React from 'react'
// import './bordercss.css'
 
const borderstyle = {
  body :{
    position: "relative"
    },
    sideOrder :{
        height:'100%',
        width:'50px',
        marginLeft: '5px',
        backgroundColor: 'aquamarine',
        zIndex: '-1',
        position: 'absolute'
    },
    topBorder :{
        height: '50px',
        width: '100%',
        marginTop: '5px',
        backgroundColor: 'rgb(247, 162, 211)',
        position: 'absolute',
        top:'2px'
        
    }
}

const Boarder = ({children}) => {

  return (
   <>
    <div style = {borderstyle.sideOrder}>
      </div>
    {/* <div className='side-order'>
      </div> */}
      <div style={borderstyle.topBorder}>
            
       </div>
       {children}
      
   </>
  )
}

export default Boarder