import React from 'react'
import { connect, useDispatch, useSelector } from "react-redux";
import { CHANGE_VALUES, ADD_USER_VALUES } from "../redux/actions";
import addValue from '../Redux/AddValue';
import dellValue from '../Redux/DellValue';


export default function UserInput() {
  const items = useSelector((state) => state.values);
  const dispatch = useDispatch();
  

    const addValues=(e)=>{
      e.preventDefault();
      const inputs = document.querySelectorAll('input');
      const value ={
          name:inputs[0].value,
          count: inputs[1].value
      };
      items.map((obj)=>{
        if(obj.name==value.name){
          dispatch(dellValue({id:obj.id}));
        }
      })
      clearValue();
      dispatch(addValue(value));
    };

    const clearValue = ()=>{
        const inputs = document.querySelectorAll('input');
        inputs[0].value='';
        inputs[1].value='';
    };


  return (
    <div>
      <input></input>
      <input></input>
      <button onClick={addValues} >Save</button>
      <button onClick={clearValue}>Clear</button>
    </div>
  )
}
