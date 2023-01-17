import React, { useState, useContext, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { GameList } from "./components/GameList";
import { Boletim } from "./components/Boletim";
import { Login } from "./components/Login";
import {userDetailsContext} from "./components/UserDetailsProvider";
import { Register } from "./components/Registo";
import { Profile } from "./components/Profile";
import { HistoricoApostas } from "./components/HistoricoApostas";
import { HistoricoTransacoes } from "./components/HistoricoTransacoes";
import { Promocao } from "./components/Promocao";
import { EspecialistaBoletim } from "./components/EspecialistaBoletim";
import { AdminBoletim } from "./components/AdminBoletim";
import APIService from "./APIService";
import { Levantamento } from "./components/Levantamento";
import { Deposito } from "./components/Deposito";
import { apostadorDetailsContext } from "./components/ApostadorDetailsProvider";

function App() {
  const [apiGames, setApiGames] = useState([]);

  const [selectedOutcomes, setSelectedOutcomes] = useState([]);
  const [espSelectedOutcomes, setEspSelectedOutcomes] = useState([]);

  const [searchInput,setSearchInput] = useState("");
  const [desporto,setDesporto] = useState("todos");

  const [isLogginin,setIsLogginin] = useState(false);
  const [isRegistinn, setIsRegistinn] = useState(false);
  
  const [userDetails, setUserDetails] = useContext(userDetailsContext);
  const [apostadorDetails, setApostadorDetails] = useContext(apostadorDetailsContext);
  const [followedGames, setFollowedGames] = useState([]);

  const [isOnProfile, setIsOnProfile] = useState(false);
  const [isOnLevantar,setIsOnLevantar] = useState(false);
  const [isOnDepositar,setIsOnDepositar] = useState(false);
  const [isOnHistoricoApostas, setIsOnHistoricoApostas] = useState(false);
  const [isOnHistoricoTransacoes, setIsOnHistoricoTransacoes] = useState(false);
  const [isOnAutoexclusao,setIsOnAutoexclusao] = useState(false);
  const [isOnProm, setIsOnProm] = useState(false);
  const [isOnNotificacoes, setIsOnNotificacoes] = useState(false);

  const [promGameID, setPromGameID] = useState(-1);
  const [adminSelectedGame,setAdminSelectedGame] = useState("");

  useEffect(() => {
    console.log("User Details updated, fetching followed games...");
    async function startFetchingFollowedGames() {
      const result = await APIService.getJogosSeguidos(userDetails.email);
      setFollowedGames(result);
    }

    startFetchingFollowedGames();
  },[userDetails])

  useEffect(() => {
    async function startFetching() {
      const result = await APIService.getJogos();
      setApiGames(result);
    }

    const interval = setInterval(() => {
      console.log('This will be called every 8 seconds');
      startFetching();
    }, 8000);
  
    return () => clearInterval(interval);
  }, []);

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
      if(selectedOutcomes.length < 20)
        setSelectedOutcomes([...selectedOutcomes,id]);
      else
        alert("Não pode apostar em mais de 20 eventos!");
    else{
      setSelectedOutcomes(selectedOutcomes.filter(g => id !== g));
    } 
  }

  const handleAdminOutcomeClick = (id) => {
    console.log("INPUT: " + id);
    console.log("but current is: " + adminSelectedGame);
    if(adminSelectedGame === id)
      setAdminSelectedGame("");
    else{
      setAdminSelectedGame(id);
    }
  }

  const adminCancelChangeState = () => {
    setAdminSelectedGame("");
  }

  const espHandleOutcomeClick = (id) => {
    if(!selectedOutcomes.includes(id)){
      setSelectedOutcomes([...selectedOutcomes,id])
      setEspSelectedOutcomes([...espSelectedOutcomes,{id: id, value: "1.0"}])
    }
    else{
      setSelectedOutcomes(selectedOutcomes.filter(g => id !== g));
      setEspSelectedOutcomes(espSelectedOutcomes.filter(g => g.id !== id));
    } 
  }

  const espCancelButtonBoletim = () => {
    setEspSelectedOutcomes([]);
    setSelectedOutcomes([]);
  }

  const handleEspOddChange = (id, newValue) => {
    const newSelectedOutcomeOdds = espSelectedOutcomes.map(o => {
      if(o.id === id)
        return {id: id, value: newValue};
      else
        return o;
    });

    setEspSelectedOutcomes(newSelectedOutcomeOdds);
  }

  const espHandleNewOddsSubmission = () => {
    console.log(espSelectedOutcomes);

    //Handle new odds submission
    let allAreValid = true;
    espSelectedOutcomes.forEach((valor,index) => {
      if(isNaN(valor.value)){
        allAreValid = false;
      }else if(valor.valur < 1.0){
        allAreValid = true;
      }
    })

    if(!allAreValid){
      alert("Valores inválidos!");
      return;
    }

    let url = new URL(process.env.REACT_APP_BACKEND + '/especialista/mudaOdds');

    fetch(url, {
        method: "post",
        body: JSON.stringify(espSelectedOutcomes),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json()).then(result => {
        console.log(result);
    });
  }

  const handleLoginFinal = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userEmail = formData.get("userEmail");
    const userPassword = formData.get("userPassword");
  
    //Login logic here
    fetch(process.env.REACT_APP_BACKEND + "/utilizador/login", {
      method: "post",
      body: JSON.stringify({
        email: userEmail,
        password: userPassword
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      }).then((response) => response.json()).then((result) => {
        console.log(result);
        if(result["tipo"] === null){
          alert("Login inválido!")
        }else{
          setUserDetails({
            ...result,
            online: true,
          });
          if(result["tipo"] === "Apostador"){
            APIService.getApostador(result.email).then((data) => {
              console.log(data);
              setApostadorDetails(data);
            })
            .catch(function (ex) {
                console.log('Response parsing failed. Error: ', ex);
            });
          }
          setIsLogginin(false);
        }
   });
  }

  const handleRegisterFinal = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    //Register logic here
    fetch(process.env.REACT_APP_BACKEND + "/utilizador/registar", {
      method: "post",
      body: JSON.stringify({
        userEmail: formData.get("userEmail"),
        userPassword: formData.get("userPassword"),
        userNIF: formData.get("userNIF"),
        userTelemovel: formData.get("userTelemovel"),
        userMorada: formData.get("userMorada"),
        userDate: formData.get("userData"),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      }).then((response) => response.json()).then(result => {
        if(result["resposta"] === "Utilizador já existente ")
          alert("Utilizador já existente!")
        else
          setIsRegistinn(false);
      });
  }

  const handleProfileClick = () => {
    setIsLogginin(false);
    setIsRegistinn(false);
    setIsOnHistoricoApostas(false);
    setIsOnProfile((isOnProfile) => (!isOnProfile));
    setIsOnHistoricoApostas(false);
    setIsOnHistoricoTransacoes(false);
    setIsOnNotificacoes(false);
  }

  const handleHistoricoApostasClick = () => {
    setIsOnProfile(false);
    setIsOnHistoricoApostas(true);
  }

  const handleHistoricoTransacoesClick = () => {
    setIsOnProfile(false);
    setIsOnHistoricoTransacoes(true);
  }

  const handleLevantarClick = () => {
    setIsOnLevantar(true);
  }

  const handleDepositarClick = () => {
    setIsOnDepositar(true);
  }

  const closeAllWindows = () => {
    setIsLogginin(false);
    setIsRegistinn(false);
    setIsOnProfile(false);
    setIsOnHistoricoApostas(false);
    setIsOnHistoricoTransacoes(false);
    setIsOnAutoexclusao(false);
    setIsOnLevantar(false);
    setIsOnDepositar(false);
    setIsOnNotificacoes(false);
    if(isOnProm) setIsOnProm(false);
  }

  const handleAEClick = () => {
    setIsOnAutoexclusao((isOnAutoexclusao) => (!isOnAutoexclusao));
  }

  const handlePromClick = (id) => {
    setIsOnProm(true);
    setPromGameID(id);
  }

  const cancelAE = () => {
    setIsOnAutoexclusao(false);
  }

  const clearSelected = () => {
    setSelectedOutcomes([]);
  }

  const closeProm = () => {
    setPromGameID('1');
    setIsOnProm(false);
  }

  const addToFollowedGames = (email, game_id) => {
    console.log("Adding to followed games..." + email + " " + game_id);
    setFollowedGames([...followedGames, game_id]);

    let url = new URL(process.env.REACT_APP_BACKEND + '/utilizador/addNotifica');
    let params = {email:email, idJogo: game_id};
    url.search = new URLSearchParams(params).toString();

    fetch(url, {
        method: "post",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
      }
    ).then((response) => response.json()).then((result) => {
      console.log(result);
    });
  }

  const removeFollowedGames = (email, game_id) => {
    console.log("Removing from followed games..." + email + " " + game_id);
    setFollowedGames(followedGames.filter((id) => id !== game_id));

    let url = new URL(process.env.REACT_APP_BACKEND + '/utilizador/removeNotifica');
    let params = {email:email, idJogo: game_id};
    url.search = new URLSearchParams(params).toString();

    fetch(url, {
        method: "post",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
      }
    ).then((response) => response.json()).then((result) => {
      console.log(result);
    });
  }

  const handleNotificacoesClick = () => {
    setIsOnNotificacoes(!isOnNotificacoes);
  }

  const isEspecialista = userDetails.tipo === "Especialista";
  const isAdmin = userDetails.tipo === "Administrador";
  const isApostador = userDetails.tipo === "Apostador";

  return (
    <div>
      <Navbar nClick={handleNotificacoesClick} nValue={isOnNotificacoes} closeAllWindows={closeAllWindows} desporto={desporto} changeDesporto={handleSportClick} handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick} handleProfileClick={handleProfileClick}/>
      <div onClick={() => closeAllWindows()} className="flex h-[90vh] mt-[10vh]">
        <div className="flex flex-col grow-[1] m-6 gap-4">
          <input placeholder="Search" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} className=" w-[100%] p-2 border-green-700 border-2 rounded-3xl" type="text"></input>
          {
            isEspecialista && <GameList handlePromClick={handlePromClick}
             selectedOutcomes={selectedOutcomes}
              input={searchInput}
               games={apiGames}
                desporto={desporto}
                 outcomeClick={espHandleOutcomeClick}
                 addToFollowedGames={addToFollowedGames}
                 removeFollowedGames={removeFollowedGames}
                 followedGames={followedGames}/>
          }
          {
            isApostador && <GameList handlePromClick={handlePromClick}
             selectedOutcomes={selectedOutcomes}
              input={searchInput}
               games={apiGames}
                desporto={desporto}
                 outcomeClick={handleOutcomeClick}
                 addToFollowedGames={addToFollowedGames}
                 removeFollowedGames={removeFollowedGames}
                 followedGames={followedGames}/>
          }
          {
            isAdmin && <GameList handlePromClick={handlePromClick}
             selectedOutcomes={selectedOutcomes}
              input={searchInput}
               games={apiGames}
                desporto={desporto}
                 outcomeClick={handleAdminOutcomeClick}
                 selectedGame={adminSelectedGame}
                 addToFollowedGames={addToFollowedGames}
                 removeFollowedGames={removeFollowedGames}
                 followedGames={followedGames}/>
          }
          {
            !(isAdmin || isApostador || isEspecialista) && <GameList handlePromClick={handlePromClick}
            selectedOutcomes={selectedOutcomes}
             input={searchInput}
              games={apiGames}
               desporto={desporto}
                outcomeClick={handleOutcomeClick}
                followedGames={followedGames}/>
          }
        </div>
        {
          isEspecialista && <EspecialistaBoletim cancelAction={espCancelButtonBoletim}
           handleOddChange={handleEspOddChange}
            finishAction={espHandleNewOddsSubmission}
             selectedOutcomes={selectedOutcomes}
              espSelectedOutcomes={espSelectedOutcomes}
               games={apiGames}
                outcomeClick={espHandleOutcomeClick}/>
        }
        {
          isApostador &&  <Boletim selectedOutcomes={selectedOutcomes}
           games={apiGames}
            outcomeClick={handleOutcomeClick}
              clearSelected={clearSelected}/>
        }
        {
          isAdmin && <AdminBoletim
           games={apiGames}
           selectedGameId={adminSelectedGame}
           cancelAction={adminCancelChangeState}
           />
        }
        {
          !(isAdmin || isApostador || isEspecialista) && <Boletim selectedOutcomes={selectedOutcomes}
          games={apiGames}
           outcomeClick={handleOutcomeClick}/>

        }
      </div>
      <Login isLogginin={isLogginin} onSubmit={handleLoginFinal} handleRegisterClick={handleRegisterClick}/>
      <Register isRegistinn={isRegistinn} onSubmit={handleRegisterFinal}/>
      {(isOnProfile && isApostador) && <Profile
        isOnProfile={isOnProfile}
        isOnAutoexclusao={isOnAutoexclusao}
        cancelAE={cancelAE}
        handleHAClick={handleHistoricoApostasClick} 
        handleHTClick={handleHistoricoTransacoesClick}
        handleAEClick={handleAEClick}
        handleLevantarClick={handleLevantarClick}
        handleDepositarClick={handleDepositarClick}
        isOnLevantar={isOnLevantar}
        isOnDepositar={isOnDepositar}/>}
      {<HistoricoApostas isOnHistoricoApostas={isOnHistoricoApostas}/>}
      {isOnHistoricoTransacoes && <HistoricoTransacoes isOnHistoricoTransacoes={ isOnHistoricoTransacoes }/>}
      {isOnProm && <Promocao game={apiGames.find(g => g.id === promGameID)} closeProm={closeProm}/>}
      {isOnLevantar && <Levantamento cancelAction={() => setIsOnLevantar(false)}/>}
      {isOnDepositar && <Deposito cancelAction={() => setIsOnDepositar(false)}/>}
    </div>
  );
}

export default App;