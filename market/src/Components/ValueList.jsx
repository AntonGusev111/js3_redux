import React from 'react'
import { useState } from 'react';
import { useSelector,useDispatch } from "react-redux"
import dellValue from '../Redux/DellValue';
import Fuse from 'fuse.js'

export default function ValueList() {
  const items = useSelector((state) => state.values);
  const dispatch = useDispatch();
  const [serachState, setSearch]=useState('');

  const fuse = new Fuse(items, {
    keys: [
      'name',
    ],
    includeScore: true
  });

  const result = fuse.search(serachState);
  const searchResult =  serachState? result.map(result => result.item) : items;

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
    };

    const handleChangeSearch =({currentTarget ={}}) =>{
      const {value} = currentTarget;
      setSearch(value)
    };



  return (
    <>
    <input className='SearchInput' onChange={handleChangeSearch}></input>
    <ul>
      {searchResult.map((o) => (
        <li>
          {o.name} {o.count}
          <button onClick={() => handleChange(o)}>R</button>
          <button onClick={() => handleRemove(o)}>✕</button>
        </li>
      ))}
    </ul>
    </>
  )
}
