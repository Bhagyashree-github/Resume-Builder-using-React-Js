import React, { useState } from 'react'
import { useGlobalReducerContext } from '../context/ReferenceContext';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/BorderColorOutlined';
import CloseIcon from '@mui/icons-material/Close';
import EditItemIcon from '@mui/icons-material/Edit';


const Education = ({data}) => {
  const [isdelete, setIsdelete] = useState(true)
  const [isedit, setIsedit] = useState(true)

  const dispatch = useGlobalReducerContext();


  if(data.length >= 5){
    data.length = 5
}

function handleDeleteeducationbtn(){
  setIsedit(true)
  setIsdelete(!isdelete)
}

function deleteEitem(eidx){
  // console.log(eidx)
dispatch({
  type:'DELETE_INSTITUTE',
  payload:eidx
})
}

function handleEditEducation(){
  setIsdelete(true)

setIsedit(!isedit)
}
function editEItem(eidx){
dispatch({
  type:'EDIT_INSTITUTE',
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
      <IconButton  aria-label="edit" color="primary" onClick={handleEditEducation} >
        <EditIcon/>
      </IconButton>
      </span>
      
        </h3>
        <ul>
        {data.map((item,index) =>{ return(
          <li key={index}>{item.institute}
           {isdelete ? '' :<span style={{marginLeft: '25px'}}>
             <IconButton  aria-label="deleteitem" sx={{padding:"0"}} color="error" onClick={()=>deleteEitem(item.eid)}>
                <CloseIcon sx={{fontSize: '17px'}} />
            </IconButton>
            </span>}
            {isedit ? '' :<span style={{marginLeft: '25px'}}>
             <IconButton  aria-label="deleteitem" size="small" 
             sx={{padding:"0"}} color="primary"
              onClick={()=>editEItem(item.eid)}>
        <EditItemIcon  sx={{fontSize: '17px'}} />
      </IconButton>
          </span>}
          </li>
        )})}
      </ul>
    </div>
  )
}

export default Education