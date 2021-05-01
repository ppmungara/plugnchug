import actions from "../data/actions";

function reducer(state, action) {
  if (action.type === actions.changeUni) {
    return { 
        ...state, 
        university: action.payload.value,
        course: Object.keys(state.universities[action.payload.value])[0],
        assignment: 1,
        question: 1
    };
  }

  if (action.type === actions.changeCourse) {
    return { 
        ...state, 
        course: action.payload.value,
        assignment: 1,
        question: 1
    };
  }

  if (action.type === actions.changeAssignment) {
    return { 
        ...state, 
        assignment: action.payload.value,
        question: 1
    };
  }

  if (action.type === actions.changeQuestion) {
    return { 
        ...state, 
        question: action.payload.value
    };
  }

  if (action.type === actions.changeUrl) {
    if (action.payload.value) {
      return { 
        ...state, 
        url: action.payload.value
    };
    } else {
      return { 
        ...state, 
        url: ""
    };
    }
  }

  if (action.type === actions.changeNumQuestions) {
    if (action.payload.value) {
      return { 
        ...state, 
        numQuestions: action.payload.value
    };
    } else {
      return { 
        ...state, 
        numQuestions: 0
    };
    }
  }

  if (action.type === actions.changeCommentData) {
    if (action.payload.value) {
      return {
        ...state, 
        commentData: action.payload.value
      }
    } else {
      return {
        ...state, 
        commentData: null
      }
    }
  }

  return state;
}

export default reducer;
