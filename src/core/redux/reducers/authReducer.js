import { SIGN_IN, SIGN_OUT } from './../actions/type';
import axios from 'axios';

const initialState = {
  JWT: '',
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      const userInfo = {
        id: action.id,
        pw: action.pw,
      };
      axios.post('/signin', {
        userInfo
      }).then(res => {
        return {
          ...state,
          JWT: res
        }
      })
      break;
    case SIGN_OUT:
      return {
        ...state,
        JWT: ''
      }
    default:
      return state;
  }
}