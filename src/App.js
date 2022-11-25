import React, { useState } from "react";

import { Navbar } from "./components/Navbar";
import TextField from "@mui/material/TextField";
import { GameList } from "./components/GameList";
import { Boletim } from "./components/Boletim";
import { Login } from "./components/Login";

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
  const [selectedOutcomes, setSelectedOutcomes] = useState([]);
  const [searchInput,setSearchInput] = useState("");
  const [desporto,setDesporto] = useState("all");
  const [isLogginin,setIsLogginin] = useState(false);

  const handleLoginClick = () => {
    setIsLogginin((isLogginin) => !isLogginin);
  }

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
      <Navbar desporto={desporto} changeDesporto={handleSportClick} handleLoginClick={handleLoginClick}/>
      <div className="flex h-[90vh]">
        <div className="flex flex-col grow-[1] m-6 gap-4">
          <input placeholder="Search" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} className=" w-[100%] p-2 border-green-700 border-2 rounded-3xl" type="text"></input>
          <GameList selectedOutcomes={selectedOutcomes} input={searchInput} games={games} desporto={desporto} outcomeClick={handleOutcomeClick}/>
        </div>
        <Boletim selectedOutcomes={selectedOutcomes} games={games} outcomeClick={handleOutcomeClick}/>
      </div>
      <Login isLogginin={isLogginin}/>
    </div>
  );
}

export default App;