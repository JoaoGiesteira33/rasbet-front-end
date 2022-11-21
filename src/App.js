import React, { useState } from "react";

import { Navbar } from "./components/Navbar";
import TextField from "@mui/material/TextField";
import { GameList } from "./components/GameList";
import { Boletim } from "./components/Boletim";

function App() {
  const [games,setGames] = useState([]);
  const [searchInput,setSearchInput] = useState("");
  const [desporto,setDesporto] = useState("all");

  let inputHandler = (e) => {
    //convert input text to lower case
    let lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  };

  const handleSportClick = (e) => {
    console.log(e.target.innerHTML);
    setDesporto(e.target.innerHTML.toLowerCase());
  };

  return (
    <div>
      <Navbar desporto={desporto} changeDesporto={handleSportClick}/>
        <div className="search m-4">
          <TextField
            onChange={inputHandler}
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <GameList input={searchInput} games={games} desporto={desporto}/>
        <Boletim/>
    </div>
  );
}

export default App;