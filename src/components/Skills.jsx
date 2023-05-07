import React, { useState } from 'react'
import { useGlobalReducerContext } from '../context/ReferenceContext'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/BorderColorOutlined';
import CloseIcon from '@mui/icons-material/Close';
import EditItemIcon from '@mui/icons-material/Edit';

const Skills = (props) => {
  const [isdelete, setIsdelete] = useState(true)
  const [isedit, setIsedit] = useState(true)

  const dispatch = useGlobalReducerContext();

  if (props.data.length >= 10) {
    props.data.length = 10
  }
  function handleDeleteskillbtn() {
    setIsedit(true)
    setIsdelete(!isdelete)
  }
  function deleteItem(idx) {
    dispatch({
      type: 'DELETE_SKILL',
      payload: idx
    })
  }

  function handleEditSkill() {
    setIsdelete(true)

    setIsedit(!isedit)
  }
  function editItem(ide) {
    const editableitem = props.data.find(item => item.id === ide)
    props.updateSkill(editableitem)
  }
  return (
    <div>
      <h3>Skills:
        <span>
          <IconButton aria-label="delete" color="error" onClick={handleDeleteskillbtn}>
            <DeleteIcon />
          </IconButton>
        </span>
        <span>
          <IconButton aria-label="edit" color="primary" onClick={handleEditSkill} >
            <EditIcon />
          </IconButton>
        </span>

      </h3>
      <ul>
        {props.data.map((item, index) => {
          return (
            <li key={index}>{item.skill}
              {isdelete ? '' : <span style={{ marginLeft: '25px' }}>
                <IconButton aria-label="deleteitem" sx={{ padding: "0" }} color="error" onClick={() => deleteItem(item.id)}>
                  <CloseIcon sx={{ fontSize: '17px' }} />
                </IconButton>
              </span>}
              {isedit ? '' : <span style={{ marginLeft: '25px' }}>
                <IconButton aria-label="deleteitem" size="small"
                  sx={{ padding: "0" }} color="primary"
                  onClick={() => editItem(item.id)}>
                  <EditItemIcon sx={{ fontSize: '17px' }} />
                </IconButton>
              </span>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Skills