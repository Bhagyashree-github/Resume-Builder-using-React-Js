const reducer = (state,action) =>{
    switch(action.type){
      case 'ADD_SKILL':
        return {
          ...state,
          skills: [...state.skills,
          {
            id:crypto.randomUUID(),
            skill: action.payload
          }]
        }
      
      case 'ADD_EDUCATION':
        return {
          ...state,
          education: [...state.education,
            {
              eid:crypto.randomUUID(),
              institute:action.payload
            }]
        }
      case 'ADD_INTEREST':
        return {
            ...state,
            interests: [...state.interests,{
              iid: crypto.randomUUID(),
              interest:action.payload
        }]
        }
      case 'ADD_EXPERIENCE':
        return {
            ...state,
            experience:[ ...state.experience,{
              xid: crypto.randomUUID(),
              year: action.payload.year,
              company:action.payload.company,
              role:action.payload.role
            }]
        }
  
      case 'DELETE_SKILL':
        const newSkill = state.skills.filter(item => item.id !== action.payload)
        return{
          ...state,
          skills:newSkill
        }
      case 'DELETE_INSTITUTE':
        return {
          ...state,
          education:state.education.filter(item => item.eid !== action.payload)
        }
      case 'DELETE_EXPERIENCE':
        return{
          ...state,
          experience: state.experience.filter(item => item.xid !== action.payload)
  
        }
      case 'DELETE_INTEREST':
        return{
          ...state,
          interests:state.interests.filter(item => item.iid !== action.payload)
        }

      case 'EDIT_SKILL':
        return{
          ...state,
          
        }
  
      default:
        return state;
    }
  }

  export default reducer;