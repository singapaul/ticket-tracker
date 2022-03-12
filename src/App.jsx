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
  );

// function to increment a value 
const handleIncrement = (event) => {
  console.log(event.target)
  setTeamData(
    teamData.map((obj) =>
      obj.id == event.target.id ? { ...obj, counter: (obj.counter +1) } : obj
    )
  );
  console.log(teamData)
};

// function to decrement a value 
const handleDecrement = (event) => {
  console.log(event)
  console.log(event.target)
  setTeamData(
    teamData.map((obj) =>
      obj.id == event.target.id ? { ...obj, counter: (obj.counter -1) } : obj
    )
  );
};


console.log(teamData)


  return (
    <div className="App">
      <div className="App-grid">
        <Nav className="App-grid__Nav" />
        <Filter className="App-grid__Filter" />
        <Tickets ident={teamData.id} teamData={teamData} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
