import React, { useState } from 'react'
import { useGlobalReducerContext } from '../context/ReferenceContext'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/BorderColorOutlined';

const Skills = (props) => {
const [isdelete, setIsdelete] = useState(true)
const [isedit, setIsedit] = useState(true)

const dispatch = useGlobalReducerContext();

  if(props.data.length >= 10){
    props.data.length = 10
}
function handleDeleteskillbtn(){
  setIsedit(true)
  setIsdelete(!isdelete)
}
function deleteItem(idx){
  // console.log(idx)
dispatch({
  type:'DELETE_SKILL',
  payload:idx
})
}

function handleEditSkill(){
    setIsdelete(true)
  
  setIsedit(!isedit)
}
function editItem(ide){
  dispatch({
    type:'EDIT_SKILL',
    payload:ide
  })
}
  return (
    <div>
      <h3>Skills: 
      <span>
      <IconButton  aria-label="delete" color="error" onClick={handleDeleteskillbtn}>
        <DeleteIcon />
      </IconButton>
      </span>
      <span>
      <IconButton  aria-label="edit" color="primary" onClick={handleEditSkill} >
        <EditIcon/>
      </IconButton>
      </span>
      
       </h3>
      <ul>
        {props.data.map((item,index) => {return(
          <li key={index}>{item.skill}
          {isdelete ? '' :<span style={{color:'red',marginLeft:'2em' }}
          onClick={()=>deleteItem(item.id)}
          >x</span>
          }
          {isedit ? '' :<span style={{color:'blue',marginLeft:'2em' }}
          onClick={()=>editItem(item.id)}
          >E</span>
          }
          </li>
        )})}
      </ul>
    </div>
  )
}

export default Skills