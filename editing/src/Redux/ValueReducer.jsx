import { CHANGE_VALUES, ADD_USER_VALUES, DELL_VALUE } from "./actions";

const initialState = [];


const valuesReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELL_VALUE:
            const { id } = action.payload;
            console.log(id)
        return state.filter((obj) => obj.id !== id);
        
      case ADD_USER_VALUES:

        const { name, count } = action.payload;
      return [ ...state, {id:Math.random(),name: name, count:count} ];
      default:
        return state;
    }

    
  };
  
  export default valuesReducer;