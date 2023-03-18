import { ADD_USER_VALUES } from "./actions"

const addValue = (value) => {
  return {
    type: ADD_USER_VALUES,
    payload: value,
  }
}

export default addValue;