import React, { useState } from 'react'
import { useGlobalReducerContext } from '../context/ReferenceContext';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/BorderColorOutlined';


const Education = ({data}) => {
  const [isdelete, setIsdelete] = useState(true)
  const dispatch = useGlobalReducerContext();


  if(data.length >= 5){
    data.length = 5
}

function handleDeleteeducationbtn(){
  setIsdelete(!isdelete)
}

function deleteEitem(eidx){
  // console.log(eidx)
dispatch({
  type:'DELETE_INSTITUTE',
  payload:eidx
})
}
  return (
    <div>
        <h3>Education :
        
<span>
      <IconButton  aria-label="delete" color="error" onClick={handleDeleteeducationbtn}>
        <DeleteIcon />
      </IconButton>
      </span>
      <span>
      <IconButton  aria-label="edit" color="primary" >
        <EditIcon/>
      </IconButton>
      </span>
      
        </h3>
        <ul>
        {data.map((item,index) =>{ return(
          <li key={index}>{item.institute}
           {isdelete ? '' :<span style={{color:'red',marginLeft:'2em'}}
          onClick={()=>deleteEitem(item.eid)}
          >x</span>}
          </li>
        )})}
      </ul>
    </div>
  )
}

export default Education