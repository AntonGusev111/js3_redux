import React from 'react'
import { useSelector,useDispatch } from "react-redux"
import dellValue from '../Redux/DellValue';


export default function ValueList() {
  const items = useSelector((state) => state.values);
  const dispatch = useDispatch();

    const handleRemove = (id) => {
      const inputs = document.querySelectorAll('input');
        inputs[0].value='';
        inputs[1].value='';

      dispatch(dellValue(id));
    };

    const handleChange = (object) =>{
      const inputs = document.querySelectorAll('input');
        inputs[0].value=object.name;
        inputs[1].value=object.count;
        inputs[2].value=object.id
    }


  return (
    <ul>
      {items.map((o) => (
        <li>
          {o.name} {o.count} 
          <button onClick={() => handleChange(o)}>R</button>
          <button onClick={() => handleRemove(o)}>✕</button>
        </li>
      ))}
    </ul>
  )
}
