import { DELL_VALUE } from "./actions"

const dellValue = (value) => {
  return {
    type: DELL_VALUE,
    payload: value,
  }
}

export default dellValue;