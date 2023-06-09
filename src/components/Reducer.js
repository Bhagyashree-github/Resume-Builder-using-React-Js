const reducer = (state, action) => {
  switch (action.type) {

    case 'ADD_SKILL':
      console.log(action.payload)
      return {
        ...state,
        skills: [...state.skills,
        {
          id: crypto.randomUUID(),
          skill: action.payload
        }]
      }

    case 'ADD_EDUCATION':
      return {
        ...state,
        education: [...state.education,
        {
          eid: crypto.randomUUID(),
          institute: action.payload
        }]
      }
    case 'ADD_INTEREST':
      return {
        ...state,
        interests: [...state.interests, {
          iid: crypto.randomUUID(),
          interest: action.payload
        }]
      }
    case 'ADD_EXPERIENCE':
      return {
        ...state,
        experience: [...state.experience, {
          xid: crypto.randomUUID(),
          year: action.payload.year,
          company: action.payload.company,
          role: action.payload.role
        }]
      }

    case 'DELETE_SKILL':
      const newSkill = state.skills.filter(item => item.id !== action.payload)
      return {
        ...state,
        skills: newSkill
      }
    case 'DELETE_INSTITUTE':
      return {
        ...state,
        education: state.education.filter(item => item.eid !== action.payload)
      }
    case 'DELETE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.filter(item => item.xid !== action.payload)

      }
    case 'DELETE_INTEREST':
      return {
        ...state,
        interests: state.interests.filter(item => item.iid !== action.payload)
      }

    case 'UPDATE_SKILL':
      const newValues = [...state.skills]
      const index = state.skills.findIndex(item => item.id === action.payload.id)
      newValues.splice(index, 1, action.payload)
      return {
        ...state,
        skills: newValues
      }

    case 'UPDATE_EDUCATION':
      const newInstitute = [...state.education]
      const eduindex = state.education.findIndex(item => item.eid === action.payload.eid)
      newInstitute.splice(eduindex, 1, action.payload)
      return {
        ...state,
        education: newInstitute
      }

    case 'UPDATE_EXPERIENCE':
      const newExperience = [...state.experience]
      const experienceindex = state.experience.findIndex(item => item.xid === action.payload.xid)
      newExperience.splice(experienceindex, 1, action.payload)
      return {
        ...state,
        experience: newExperience
      }

    case 'UPDATE_INTEREST':
      const newInterest = [...state.interests]
      const interestindex = state.interests.findIndex(item => item.iid === action.payload.iid)
      newInterest.splice(interestindex, 1, action.payload)
      return {
        ...state,
        interests: newInterest
      }

    default:
      return state;
  }
}

export default reducer;