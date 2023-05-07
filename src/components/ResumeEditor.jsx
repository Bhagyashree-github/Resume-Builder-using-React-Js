import React from 'react'
import { useState,useEffect } from 'react'
import '../App.css'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';

const initialState = {
  skills: {
    skill: ''
  },
  education: {
    institute: ''
  },
  experience: {
    year: 0,
    company: '',
    role: ''
  },
  interests: {
    interest: ''
  }
}

const ResumeEditor = ({ dispatch,skilledit,educationedit,interestedit }) => {
  const [addedvalue, setAddedvalue] = useState(initialState)
  // const [updateskill,setUpdateSkill] = useState(skilledit)
  useEffect(()=>{
    console.log(skilledit)
    if(skilledit){
      // console.log(skilledit)
      setAddedvalue({
        ...addedvalue,
        skills: skilledit})
    }
    
  },[skilledit])

  useEffect(()=>{
    console.log(educationedit)
    if(educationedit){
      console.log(educationedit)
      setAddedvalue({
        ...addedvalue,
       education : educationedit})
    }
    
  },[educationedit])

  useEffect(()=>{
    console.log(interestedit)
    if(interestedit){
      console.log(interestedit)
      setAddedvalue({
        ...addedvalue,
        interests : interestedit})
    }
    
  },[interestedit])
  

  const handleEducation = (e) => {
    setAddedvalue({
      ...addedvalue, education: {
        institute: e.target.value
      }
    })
  }

  const handleExperience = (e) => {
    setAddedvalue({
      ...addedvalue, experience: {
        ...addedvalue.experience,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleInterest = (e) => {
    setAddedvalue({
      ...addedvalue, interests: {
        interest: e.target.value
      }
    })
  }

  const handleSkill = (e) => {

    setAddedvalue({
      ...addedvalue, skills: {
        ...addedvalue.skills.skill,
        skill: e.target.value
      }
    })
  }

  const handleSkillClick = () => {
    if (addedvalue.skills.skill.length > 0 ) {
      if(skilledit){
        dispatch({
          type:'UPDATE_SKILL',
          payload: {
            id:skilledit.id,
            skill:addedvalue.skills.skill
          }
        })
        skilledit = null
        console.log(skilledit)
      }
      else   {
        dispatch({
          type: "ADD_SKILL",
          payload: addedvalue.skills.skill
        })
        
      }
    }
    
    setAddedvalue(initialState)//you should write initialstate here as it is a controlled form
  }

  function handleEducationClick() {
    if (addedvalue.education.institute.length > 0) {
      if(educationedit){
        dispatch({
          type:'UPDATE_EDUCATION',
          payload: {
            eid:educationedit.eid,
            institute:addedvalue.education.institute
          }
        })
        educationedit = null
      }
      else{
        dispatch({
          type: "ADD_EDUCATION",
          payload: addedvalue.education.institute
        })
      }
    }

    setAddedvalue(initialState)
  }


  function handleInterestClick() {
    if (addedvalue.interests.interest.length > 0) {
      if(interestedit){
        dispatch({
          type:'UPDATE_INTEREST',
          payload: {
            iid:interestedit.iid,
            interest:addedvalue.interests.interest
          }
        })
        interestedit = null
      }
      else{
        dispatch({
          type: "ADD_INTEREST",
          payload: addedvalue.interests.interest
        })
      }
    }

    setAddedvalue(initialState)
  }
  function handleExperienceClick() {
    if (addedvalue.experience.length > 0) {
      dispatch({
        type: "ADD_EXPERIENCE",
        payload: addedvalue.experience
      })
    }

    setAddedvalue(initialState)
  }


  return (
    <>
      <h2 style={{display:'grid' ,justifyContent:'center',marginBottom:"13px", color:'rgb(6 130 237)'}}>Resume Editor</h2>
      <div>
        <TextField
          id="filled-search"
          label="Add Skill"
          type="search"
          variant="filled"
          value={addedvalue.skills.skill}
          onChange={handleSkill}
        />
        <Button variant="contained"
          sx={{ m: 2.5 }}
          endIcon={<AddIcon />}
          onClick={handleSkillClick}>Add</Button>
      </div>
      <div>
        <TextField
          id="filled-search"
          label="Add Education"
          type="search"
          variant="filled"
          value={addedvalue.education.institute}
          onChange={handleEducation}
        />
        <Button variant="contained"
          sx={{ m: 2.5 }}
          endIcon={<AddIcon />}
          onClick={handleEducationClick}> Add</Button>
      </div>

      <div className='experienceblock'>
        <div>
          <TextField
            id="filled-search"
            label="Add year"
            type="search"
            name="year"
            variant="filled"
            value={addedvalue.experience.year}
            onChange={handleExperience}
          />
        </div>
        <div>
          <TextField
            id="filled-search"
            label="Previous Company Name"
            type="search"
            name="company"
            variant="filled"
            value={addedvalue.experience.company}
            onChange={handleExperience}
          />
        </div>
      </div>
      <div>
        <TextField
          id="filled-search"
          label="Add Role"
          type="search"
          variant="filled"
          name="role"
          value={addedvalue.experience.role}
          onChange={handleExperience}
        />
        <Button variant="contained"
          sx={{ m: 2.5 }}
          endIcon={<AddIcon />}
          onClick={handleExperienceClick}> Add</Button>
      </div>


      <div>
        <TextField
          id="filled-search"
          label="Add Interest"
          type="search"
          variant="filled"
          value={addedvalue.interests.interest}
          onChange={handleInterest}
        />
        <Button variant="contained"
          sx={{ m: 2.5 }}
          endIcon={<AddIcon />}
          onClick={handleInterestClick}> Add</Button>
      </div>
    </>
  )
}

export default ResumeEditor