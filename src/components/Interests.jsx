import React, { useState } from 'react'
import { useGlobalReducerContext } from '../context/ReferenceContext';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/BorderColorOutlined';



const Interests = (props) => {

    const [isdelete,setIsdelete] = useState(true)

    const dispatch = useGlobalReducerContext();

    if(props.data.length >= 10){
        props.data.length = 10
    }

    function handleDeleteInterestbtn(){
        setIsdelete(!isdelete)
      }
      
      function deleteInterestitem(iidx){
        // console.log(xidx)
      dispatch({
        type:'DELETE_INTEREST',
        payload:iidx
      })
      }
  return (
    <div>
        <h3>Interests :
        <span>
        <IconButton  aria-label="delete" color="error" onClick={handleDeleteInterestbtn}>
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
        { props.data.map((item,i) =>{
            return(
                <li key ={i}>{item.interest}
            {isdelete ? '' :<span style={{color:'red',marginLeft:'2em'}}
          onClick={()=>deleteInterestitem(item.iid)}
          >x</span>}</li>
            )
        })}
        </ul>
        {/* props.data.length && */}
    </div>
  )
}

export default Interests