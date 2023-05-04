import React, { useReducer } from 'react'
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
// import ThemeContext from '../context/ThemeContext'
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


const Resume = () => {

  const [newState, dispatch] = useReducer(reducer, resumeData)

  const { experience, education, skills, interests } = newState


  // 'contentstyle '
  return (
    <>
      <ReferenceContext.Provider value={dispatch} >

        <div className='contentstyle' >

          <div className="maincontent">
            <div className='Resumeform'>
              <Card sx={{ minWidth: 300, maxWidth: 400 }}>
                <CardContent>
                  <ResumeEditor dispatch={dispatch} />
                </CardContent>
              </Card>
            </div>

            <div className='Resumebuilder'>
              <Card sx={{ minWidth: 350, maxWidth: 500 }}>
                <CardContent>
                  <h2 style={{ display: 'grid', justifyContent: 'center' }}>Resume Builder</h2>
                  <h3>Bhagyashree Sahoo</h3>
                  <hr />

                  {skills.length > 0 ? <Skills data={skills} /> : null}
                  {education.length > 0 ? <Education data={education} /> : null}
                  {experience.length > 0 ? <Experience data={experience} /> : null}
                  {interests.length > 0 ? <Interests data={interests} /> : null}
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