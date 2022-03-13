import { useState } from "react";

const App = () => {
  const [data, setData] = useState([
    { id: 0, name: "barry" },
    { id: 1, name: "john" },
    { id: 2, name: "jane" },
  ]);

  const doSomeUpdate = () => {
    setData(
      data.map((element) => {
        return {
          id: element.id,
          name: "heather",
        };
      })
    );
  };

  return (
    <div className="app">
      {data.map(({ name, id }) => {
        return (
          <p>
            {name} ({id})
          </p>
        );
      })}
      <button onClick={doSomeUpdate}>click</button>
    </div>
  );
};

export default App;