import React, { useState } from 'react'
import '../styles/login.css';

export const Promocao = ({game,closeProm}) => {
    const [valorProm, setValorProm] = useState("");

    const handlePromChange = (e) => {
        setValorProm(e.target.value);
    }

    console.log(game);

    const handlePromInsertion = (e) => {
        console.log("Prom value: " + valorProm);
        console.log("Game id: " + game.id)

        //Insert prom logic
        if(isNaN(valorProm))
        {
            alert("Valor inválido!");
            return;
        }

        let url = new URL(process.env.REACT_APP_BACKEND + '/administrador/addPromocao');
        let params = {idJogo:game.id, valor:valorProm};

        url.search = new URLSearchParams(params).toString();

        fetch(url, {
            method: "post",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json()).then(result => {
            console.log(result);
            if(result["resposta"] === "Promocão adicionada"){
                closeProm();
            }else{
                alert("Erro! Promoção não adicionada.");
            }
        });
    }

    return (
    <div className={`gap-4 show w-[900px] h-[300px] bg-white border-dotted  border-[2px] border-green-900 items-center flex flex-col shrink rounded-3xl p-4`}>
        <p className='font-bold text-3xl'>ADICIONAR PROMOÇÃO</p>
        <label htmlFor='valorProm'>Promoção: <span className=' font-semibold'>{game.home} - {game.away}</span>. Insira valor da promoção:</label>
        <div>
            <input
             className='rounded-xl mr-2 border-green-700 border-2 p-2  outline-none'
             value={valorProm} onChange={handlePromChange} id="valorProm" type="text"></input>€
             <div className='mt-4'>
                <button onClick={handlePromInsertion} className='w-[260px] hover:bg-green-500 text-black bg-green-700 rounded-xl border-black border-2 px-6'>Inserir</button>
             </div>
        </div>
    </div>
    );
}
