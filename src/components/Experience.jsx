import React ,{useState}from 'react'
import { useGlobalReducerContext } from '../context/ReferenceContext';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/BorderColorOutlined';



const Experience = (props) => {
    const [isdelete,setIsdelete] = useState(true)

    const dispatch = useGlobalReducerContext();

    if(props.data.length >= 5){
      props.data.length = 5
  }

  function handleDeleteExperiencebtn(){
    setIsdelete(!isdelete)
  }
  
  function deleteExperienceitem(xidx){
    // console.log(xidx)
 dispatch({
    type:'DELETE_EXPERIENCE',
    payload:xidx
  })
  }
  return (
    <>
   <h3>Experience :
   <span>
   <IconButton  aria-label="delete" color="error" onClick={handleDeleteExperiencebtn}>
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
    {props.data.map((items,index)=>
    {
        return(
            <li key ={index}> company : {items.company} and role : {items.role} year : {items.year}
            {isdelete ? '' :<span style={{color:'red',marginLeft:'2em'}}
          onClick={()=>deleteExperienceitem(items.xid)}
          >x</span>}
            </li>

        )
    }
    )}
   </ul>

    </>
  )
}

export default Experience