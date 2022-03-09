import "./App.scss";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Tickets from "./components/Tickets/Tickets";
import team from "./data/team.js";
import React, { useState } from "react";

function App() {
  // my states go here

  // const setDemo = () => {
  //   console.log("Hello Console")
  // }
  // const [demo, setDemo] = useState(" ");

  // for Demo purpose in real use use the value below commented out
  // const [counter, setCounter] = useState(Math.floor(Math.random() * 20));
  const [counter, setCounter] = useState(0);

  // make a copy of the data object
  const teamCopy = [...team];
  console.log(teamCopy);
  team.forEach((member) => {member.counter = 0});
  console.log(teamCopy);


  // set our base state


const [count,  setCount] = useState([teamCopy])

  const handleDecrement = () => {
    if (counter < 1) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const colorIncrement = () => {
    if (counter >= 0 && counter <= 5) {
      return "teamMember green";
    } else if (counter >= 6 && counter <= 15) {
      return "teamMember yellow";
    } else if (counter >= 16) {
      return "teamMember red";
    } else {
      return "teamMember red";
    }
  };

  return (
    <div className="App">
      <div className="App-grid">
        <Nav className="App-grid__Nav" />
        <Filter className="App-grid__Filter" />
        <Tickets
          className="App-grid__Tickets"
          teamArray={team}
          counter={counter}
          teamCopyWState = {teamCopy}
          setCounter={setCounter}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          colorIncrement={colorIncrement}
          // warning={warning}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
