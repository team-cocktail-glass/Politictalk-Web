import {CHANGE_LOCATION} from './type';
export function changeLocation (location, peopleList)  {
  return {
    type: CHANGE_LOCATION,
    location,
    peopleList,
  }
}