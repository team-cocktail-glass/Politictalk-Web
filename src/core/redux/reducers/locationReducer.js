import { CHANGE_LOCATION } from "../actions/type";

const initialState = {
  location: '대전광역시 유성구',
  peopleList: []
}

export default function locationReducer(state = initialState, action) {
  switch(action.type){
    case CHANGE_LOCATION:
      return {
        ...state,
        location: action.location,
        peopleList: action.peopleList
      }
    default:
      return state;
  }
}