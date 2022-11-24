import React, { useState } from "react";

import { Navbar } from "./components/Navbar";
import TextField from "@mui/material/TextField";
import { GameList } from "./components/GameList";
import { Boletim } from "./components/Boletim";

function App() {
  const [games,setGames] = useState([{
    id: 1,
    home:'Porto',
    away:'Benfica',
    date:'20-11 17:30',
    outcomes: [
        {
            resultado: 'Porto',
            cota: 1.6,
            id: 1,
        },
        {
            resultado: 'Empate',
            cota: 4.6,
            id: 2,
        },
        {
            resultado: 'Benfica',
            cota: 1.9,
            id: 3,
        }
    ]
    },{
    id: 2,
    home:'Sporting',
    away:'Braga',
    date:'20-12 17:30',
    outcomes: [
        {
            resultado: 'Sporting',
            cota: 1.5,
            id: 4,
        },
        {
            resultado: 'Empate',
            cota: 3.6,
            id: 5,
        },
        {
            resultado: 'Braga',
            cota: 2.9,
            id: 6,
        }
    ]
    },]);
  const [selectedOutcomes, setSelectedOutcomes] = useState([1,5]);
  const [searchInput,setSearchInput] = useState("");
  const [desporto,setDesporto] = useState("all");

  const inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  };

  const handleSportClick = (e) => {
    console.log(e.target.innerHTML);
    setDesporto(e.target.innerHTML.toLowerCase());
  };

  const handleOutcomeClick = (id) => {
    if(!selectedOutcomes.includes(id))
      setSelectedOutcomes([...selectedOutcomes,id])
    else{
      setSelectedOutcomes(selectedOutcomes.filter(g => id !== g));
    } 
  }

  return (
    <div>
      <Navbar desporto={desporto} changeDesporto={handleSportClick}/>
      <div className="flex h-[90vh]">
        <div className="flex flex-col grow-[1] m-6 gap-4">
          <div>
            <TextField
              onChange={inputHandler}
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Search"
              /> 
          </div>   
          <GameList selectedOutcomes={selectedOutcomes} input={searchInput} games={games} desporto={desporto} outcomeClick={handleOutcomeClick}/>
        </div>
        <Boletim selectedOutcomes={selectedOutcomes} games={games}/>
      </div>
    </div>
  );
}

export default App;