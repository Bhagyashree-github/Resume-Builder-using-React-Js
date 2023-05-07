import React, { useState } from 'react'
import { useGlobalReducerContext } from '../context/ReferenceContext';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/BorderColorOutlined';
import CloseIcon from '@mui/icons-material/Close';
import EditItemIcon from '@mui/icons-material/Edit';

const Experience = (props) => {
  const [isdelete, setIsdelete] = useState(true)
  const [isedit, setIsedit] = useState(true)

  const dispatch = useGlobalReducerContext();

  if (props.data.length >= 5) {
    props.data.length = 5
  }

  function handleDeleteExperiencebtn() {
    setIsedit(true)
    setIsdelete(!isdelete)
  }

  function deleteExperienceitem(xidx) {
    dispatch({
      type: 'DELETE_EXPERIENCE',
      payload: xidx
    })
  }

  function handleEditExperience() {
    setIsdelete(true)
    setIsedit(!isedit)
  }
  function editExItem(xidx) {
    const editableitem = props.data.find(item => item.xid === xidx)
    props.updateExperience(editableitem)
  }

  return (
    <>
      <h3>Experience :
        <span>
          <IconButton aria-label="delete" color="error" onClick={handleDeleteExperiencebtn}>
            <DeleteIcon />
          </IconButton>
        </span>
        <span>
          <IconButton aria-label="edit" color="primary" onClick={handleEditExperience} >
            <EditIcon />
          </IconButton>
        </span>
      </h3>
      <ul>
        {props.data.map((items, index) => {
          return (
            <li key={index}> company : {items.company} and role : {items.role} year : {items.year}
              {isdelete ? '' : <span style={{ marginLeft: '25px' }}>
                <IconButton aria-label="deleteitem" sx={{ padding: "0" }} color="error" onClick={() => deleteExperienceitem(items.xid)}>
                  <CloseIcon sx={{ fontSize: '17px' }} />
                </IconButton>
              </span>}
              {isedit ? '' : <span style={{ marginLeft: '25px' }}>
                <IconButton aria-label="deleteitem" size="small"
                  sx={{ padding: "0" }} color="primary"
                  onClick={() => editExItem(items.xid)}>
                  <EditItemIcon sx={{ fontSize: '17px' }} />
                </IconButton>
              </span>}
            </li>

          )
        }
        )}
      </ul>

    </>
  )
}

export default Experience