import React, { useReducer, useState } from 'react'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import resumeData from './Resumedata'
import Interests from "./Interests";
import '../App.css'
import PrintButton from './PrintButton'
import ResumeEditor from './ResumeEditor'
import reducer from './Reducer'
import { ReferenceContext } from '../context/ReferenceContext'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const Resume = () => {

  const [newState, dispatch] = useReducer(reducer, resumeData)
  const [skilledit, setskillEdit] = useState(null)
  const [educationedit, seteducationEdit] = useState(null)
  const [interestedit, setinterestEdit] = useState(null)
  const [experienceedit, setexperiencEdit] = useState(null)

  const { experience, education, skills, interests } = newState

  function updateSkill(editskill) {
    setskillEdit(editskill)
  }

  function updateEducation(editEducation) {
    seteducationEdit(editEducation)
  }

  function updateExperience(editExperience) {
    setexperiencEdit(editExperience)
  }

  function updateInterest(editInterest) {
    setinterestEdit(editInterest)
  }

  return (
    <>
      <ReferenceContext.Provider value={dispatch} >

        <div className='contentstyle' >

          <div className="maincontent">
            <div className='Resumeform'>
              <Card  sx={{ minWidth: 300, maxWidth: 400 }}>
                <CardContent className ='cardbg'>
                  <ResumeEditor
                    dispatch={dispatch}
                    skilledit={skilledit}
                    educationedit={educationedit}
                    experienceedit={experienceedit}
                    interestedit={interestedit}
                  />
                </CardContent>
              </Card>
            </div>

            <div className='Resumebuilder'>
              <Card  sx={{ minWidth: 330, maxWidth: 500 }}>
                <CardContent className ='cardbg'>
                  <h1 className= 'resumeHeading'
                   style={{ display: 'grid', margin: "6px", paddingBottom: '10px' }}>Bhagyashree Sahoo</h1>
                  <div className="adresscss">
                    <p>Address :</p>
                    <p>City - xxxxxxxxxx</p>
                    <p>Country - India</p>
                    <p>Mob no - xxxxxxxxx</p>
                  </div>

                  <hr />

                  {skills.length > 0 ? <Skills data={skills} updateSkill={updateSkill} /> : null}
                  {education.length > 0 ? <Education data={education} updateEducation={updateEducation} /> : null}
                  {experience.length > 0 ? <Experience data={experience} updateExperience={updateExperience} /> : null}
                  {interests.length > 0 ? <Interests data={interests} updateInterest={updateInterest} /> : null}
                  <PrintButton />
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </ReferenceContext.Provider>
    </>
  )

}
export default Resume