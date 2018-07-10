import { SIGN_IN, SIGN_OUT } from './type';

export function SignIn(id,pw){
  return {
    type: SIGN_IN,
    id: id,
    pw: pw,
  }
}

export function SignOut(){
  return {
    type: SIGN_OUT,
  }
}