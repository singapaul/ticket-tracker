import "./App.scss";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Tickets from "./components/Tickets/Tickets";
import team from "./data/team.js";

function App() {

// my states go here



  return (
    <div className="App">
      <div className="App-grid">
        <Nav className="App-grid__Nav" />
        <Filter className="App-grid__Filter" />
        <Tickets className="App-grid__Tickets" teamArray={team} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
