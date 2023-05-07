import React, { useState } from 'react'
import { useGlobalReducerContext } from '../context/ReferenceContext';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/BorderColorOutlined';
import CloseIcon from '@mui/icons-material/Close';
import EditItemIcon from '@mui/icons-material/Edit';


const Interests = (props) => {

    const [isdelete,setIsdelete] = useState(true)
    const [isedit, setIsedit] = useState(true)

    const dispatch = useGlobalReducerContext();

    if(props.data.length >= 10){
        props.data.length = 10
    }

    function handleDeleteInterestbtn(){
      setIsedit(true)
        setIsdelete(!isdelete)
      }
      
      function deleteInterestitem(iidx){
        // console.log(xidx)
      dispatch({
        type:'DELETE_INTEREST',
        payload:iidx
      })
      }

      function handleEditInterest(){
        setIsdelete(true)
      
      setIsedit(!isedit)
    }
    function editInterestItem(iidx){
      const editableitem = props.data.find(item => item.iid === iidx)
      console.log(editableitem)
      props.updateInterest(editableitem)
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
      <IconButton  aria-label="edit" color="primary" onClick={handleEditInterest}>
        <EditIcon/>
      </IconButton>
      </span>
        </h3>
        <ul>
        { props.data.map((item,i) =>{
            return(
                <li key ={i}>{item.interest}
            {isdelete ? '' :<span style={{marginLeft: '25px'}}> 
          <IconButton  aria-label="deleteitem" sx={{padding:"0"}} color="error" onClick={()=>deleteInterestitem(item.iid)}>
          <CloseIcon sx={{fontSize: '17px'}} />
        </IconButton>
          </span>}

          {isedit ? '' :<span style={{marginLeft: '25px'}}>
             <IconButton  aria-label="deleteitem" size="small" 
             sx={{padding:"0"}} color="primary"
              onClick={()=>editInterestItem(item.iid)}>
        <EditItemIcon  sx={{fontSize: '17px'}} />
      </IconButton>
          </span>}
          </li>
            )
        })}
        </ul>
        {/* props.data.length && */}
    </div>
  )
}

export default Interests