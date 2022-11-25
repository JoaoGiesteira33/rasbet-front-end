import React, { useState, useContext } from "react";
import { Navbar } from "./components/Navbar";
import { GameList } from "./components/GameList";
import { Boletim } from "./components/Boletim";
import { Login } from "./components/Login";
import {userDetailsContext} from "./components/UserDetailsProvider";
import { Register } from "./components/Registo";

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
  const [desporto,setDesporto] = useState("todos");
  const [isLogginin,setIsLogginin] = useState(false);
  const [isRegistinn, setIsRegistinn] = useState(false);
  const [userDetails, setUserDetails] = useContext(userDetailsContext);

  const handleLoginClick = () => {
    setIsRegistinn(false);
    setIsLogginin((isLogginin) => !isLogginin);
  }

  const handleRegisterClick = ()  => {
    setIsLogginin(false);
    setIsRegistinn((isRegistinn) => !isRegistinn);
  }

  const handleSportClick = (e) => {
    setDesporto(e.target.innerHTML.toLowerCase());
  };

  const handleOutcomeClick = (id) => {
    if(!selectedOutcomes.includes(id))
      setSelectedOutcomes([...selectedOutcomes,id])
    else{
      setSelectedOutcomes(selectedOutcomes.filter(g => id !== g));
    } 
  }

  const handleLoginFinal = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userEmail = formData.get("userEmail");
    const userPassword = formData.get("userPassword");

    setUserDetails({
      email: userEmail,
      online: true,
    });

    //Login logic here

    setIsLogginin(false);
  }

  const handleRegisterFinal = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(formData);

    //Register logic here

  }

  return (
    <div>
      <Navbar desporto={desporto} changeDesporto={handleSportClick} handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick}/>
      <div className="flex h-[90vh]">
        <div className="flex flex-col grow-[1] m-6 gap-4">
          <input placeholder="Search" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} className=" w-[100%] p-2 border-green-700 border-2 rounded-3xl" type="text"></input>
          <GameList selectedOutcomes={selectedOutcomes} input={searchInput} games={games} desporto={desporto} outcomeClick={handleOutcomeClick}/>
        </div>
        <Boletim selectedOutcomes={selectedOutcomes} games={games} outcomeClick={handleOutcomeClick}/>
      </div>
      <Login isLogginin={isLogginin} onSubmit={handleLoginFinal}/>
      <Register isRegistinn={isRegistinn} onSubmit={handleRegisterFinal}/>
    </div>
  );
}

export default App;