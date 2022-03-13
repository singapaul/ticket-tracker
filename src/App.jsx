import "./App.scss";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Tickets from "./components/Tickets/Tickets";
import team from "./data/team.js";
import React, { useState } from "react";

function App() {
  // Setting the initial app state
  const [teamData, setTeamData] = useState(
    team.map((member) => {
      return {
        id: member.id,
        name: member.name,
        role: member.role,
        counter: 0,
      };
    })
  )

  // setting the state for the job role filter

  const [showCard, setShowCard] = useState(true)

const onToggle =() =>{
  setShowCard(!showCard)
}


  // function to increment a value
  const handleIncrement = (event) => {
    setTeamData(
      teamData.map((obj) =>
        obj.id == event.target.id ? { ...obj, counter: obj.counter + 1 } : obj
      )
    );
    console.log(teamData);
  };

  // function to decrement a value
  const handleDecrement = (event) => {
    setTeamData(
      teamData.map((obj) => {
        if (obj.counter > 0) {
          return obj.id == event.target.id
            ? { ...obj, counter: obj.counter - 1 }
            : obj;
        } else {
          return obj.id == event.target.id ? { ...obj, counter: 0 } : obj;
        }
      })
    );
  };

  return (
    <div className="App">
      <Nav className="App-grid__Nav" />
      <div className="App-grid">
        <Filter className="App-grid__Filter" />
        <Tickets
          className="Tickets"
          ident={teamData.id}
          teamData={teamData}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
