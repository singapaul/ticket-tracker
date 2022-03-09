import { useState } from "react";
import React from 'react'



const App = () => {
  const [data, setData] = useState([
    { id: 0, name: "barry" },
    { id: 1, name: "john" },
    { id: 2, name: "jane" },
  ]);

let variableValue = 4

  const doSomeUpdate = () => {
    setData(
      data.map((element) => {
        return {
          id: element.id,
          name: "heather",
          StateNum: variableValue
        };
      })
    );
  };

  const doSomeOtherUpdate = () => {
    variableValue +=1;
  }


  return (
    <div className="app">
      {data.map(({ name, id, StateNum }) => {
        return (
          <p>
            {name} ({id}) {StateNum} <button onClick={doSomeOtherUpdate}>TEST BUTTON</button>
          </p>
        );
      })}
      <button onClick={doSomeUpdate}>click</button>
     
    </div>
  );
};

export default App;