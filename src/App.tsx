import React from 'react';
import './App.css';
import {useState} from 'react'

function App() {
  const [fieldSize, setFieldSize] = useState([{
    value:1,
    position: "0px",
    moveable: true
  }])
  let field = fieldSize.map(square=>{
    if(typeof square.value == "number"){
      return <div key = {square.value} className="table-inner" onClick={(e)=>console.log(e)}>{square.value}</div>
    }else{
      return <div key = {square.value} className="empty-square"></div>
    }
  })

  return (
    <div className="table">
      {field}
    </div>
  );
}

export default App;
