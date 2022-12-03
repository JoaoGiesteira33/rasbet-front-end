import {React, useContext, useState} from 'react'
import  {userDetailsContext} from './UserDetailsProvider';

export const BoletimBot = ({selecoes}) => {
    const [valorAposta,setValorAposta] = useState('');
    const [userDetails, setUserDetails] = useContext(userDetailsContext);
    const canBet = userDetails.online;

    const cotaTotal = selecoes.reduce(
        function(acc,currValue){
            return acc * currValue.cota;
        },1
    ).toFixed(2);

    const onValorApostaChange = (e) => {
        setValorAposta(e.target.value);
    }

    const handleAposta = () => {
        console.log(selecoes);
        console.log(JSON.stringify({
            selecoes: selecoes,
            valor: valorAposta,
            idApostador: userDetails.email,
        }));
        if(isNaN(valorAposta))
        {
            alert("Valor inválido!");
            return;
        }

        let url = new URL('http://localhost:8080/aposta/registaAposta');

        fetch(url, {
            method: "post",
            body: JSON.stringify({
                selecoes: selecoes,
                valor: valorAposta,
                idApostador: userDetails.email,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json()).then(result => {
            console.log(result);
            if(result["resposta"] === "Aposta Registada."){
                alert("sucesso");
            }else if(result["resposta"] === "Saldo Insuficiente."){
                alert("Saldo insuficiente!");
            }
        });
    }

  return (
    <div className='flex min-w-full flex-col gap-1 mb-5'>
        <div className='flex bg-white content-center rounded-sm justify-between mx-6 p-5'>
            <div className='border-gray-700 p-2 border-2 rounded-xl'>Cota: {cotaTotal}</div>
            <div className='flex'>
                <div className='border-gray-200 border-2 p-2'>Montante</div>
                <input onChange={onValorApostaChange} value={valorAposta} type="text" className='border-gray-200  max-w-[80px] border-2 p-2'></input>
                <div className='p-2'>€</div>
            </div>
        </div>
        <div className='flex bg-white content-center rounded-sm justify-between mx-6 px-5 py-4'>
            <div className='flex flex-col items-center'>
                <p>Total de ganhos</p>
                <p className=' text-orange-600 font-bold'>{(cotaTotal*valorAposta).toFixed(2)} €</p>
            </div>
            <button disabled={!canBet} onClick={handleAposta} className='font-bold hover:bg-orange-200 transition-colors bg-orange-500 px-7 py-3'>APOSTAR</button>
        </div>
    </div>
  )
}