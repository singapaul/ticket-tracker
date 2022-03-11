import "./App.scss";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Tickets from "./components/Tickets/Tickets";
import team from "./data/team.js";
import React, { useState } from "react";
import Dummy from "./components/Dummy";

function App() {
  // my states go here

  // for Demo purpose in real use use the value below commented out
  // const [counter, setCounter] = useState(Math.floor(Math.random() * 20));
  // const [counter, setCounter] = useState(0);

  // make a copy of the data object
  // this cant be static
  // const teamCopy = [...team];
  // // console.log(teamCopy);
  // teamCopy.forEach((member) => {
  //   member.state = team.map();
  // });

  // console.log(teamCopy)
  // set our base state
  // setting original condition

  const [teamData, setTeamData] = useState(
    team.map((member) => {
      return {
        id: member.id,
        name: member.name,
        role: member.role,
        counter: 0,
      };
    })
  );

  console.log(teamData);
  // const [counter, setCounter] = useState(teamData);

  // const handleDecrement = (event) => {
  //   console.log(event.target.className);
  //   if (counter < 1) {
  //     setCounter(0);
  //   } else {
  //     setCounter(counter - 1);
  //   }
  // };
  // const handleIncrement = (event) => {
  //   setCounter(counter + 1);
  //   console.log(event.target.className);
  // };

  // const colorIncrement = () => {
  //   if (counter >= 0 && counter <= 5) {
  //     return "teamMember green";
  //   } else if (counter >= 6 && counter <= 15) {
  //     return "teamMember yellow";
  //   } else if (counter >= 16) {
  //     return "teamMember red";
  //   } else {
  //     return "teamMember red";
  //   }
  // };
  // default settings
  const [linkText, setLinkText] = useState("Learn React");

  const [count, setCount] = useState(0);

  // This function takes whatever you put in and returns a state of the text
  // We pass this function down as props
  const changeLinkText = (text) => {
    setLinkText(text);
  };

  // need to covert these so it maps to an object instead
  const changeCountUp = (val) => {
    setCount(val);
  };

  const changeCountDown = (val) => {
    setCount(val);
  };

  const updateValueinArray = (event) => {
    console.log(event)
    setTeamData(
      teamData.map((teamMember) =>
        teamMember.id === 2
          ? { ...teamMember, counter: 2 }
          : { ...teamMember }
      )
    );
  };

  return (
    <div className="App">
      <div className="App-grid">
        <Nav className="App-grid__Nav" />
        <Filter className="App-grid__Filter" />
        <Tickets teamArr={team} />
      </div>
      <Footer />
      <Dummy
        changeLinkText={changeLinkText}
        changeCountUp={changeCountUp}
        count={count}
        changeCountDown={changeCountDown}
        updateValueinArray={updateValueinArray}
        teamData={teamData}
      />
      
      <a>{linkText}</a>
      {/* Display the state value there */}
      <p>{count}</p>
    
    </div>
  );
}

export default App;
