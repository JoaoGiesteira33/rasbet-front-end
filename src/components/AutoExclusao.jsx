import React, { useState,useContext } from 'react';
import '../styles/login.css';

import { userDetailsContext } from './UserDetailsProvider';
import { apostadorDetailsContext } from './ApostadorDetailsProvider';

export const AutoExclusao = ({isOnAutoexclusao, cancelAE}) => {
    const [userDetails, setUserDetails] = useContext(userDetailsContext);
    const [apostadorDetails, setApostadorDetails] = useContext(apostadorDetailsContext);

    const [inputDias,setInputDias] = useState("");

    const isAutoExcluido = apostadorDetails.auto_Exclusao > 0;

    const handleInputChane = (e) => {
        setInputDias(e.target.value);
    }

    //Autoexclusao logic
    const handleSubmit = () => {
        //Insert prom logic
        if(isNaN(inputDias))
        {
            alert("Valor inválido!");
            return;
        }

        let url = new URL(process.env.REACT_APP_BACKEND + '/apostador/autoExclusao');
        let params = {email: userDetails.email, dias:inputDias};

        url.search = new URLSearchParams(params).toString();

        fetch(url, {
            method: "post",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json()).then(result => {
            console.log(result);
            if(result["resposta"] > 0){ 
                alert("Sucesso. Poderá voltar a apostar dentro de " + result["resposta"] + " dias.");
                setInputDias("");
                cancelAE();
            }
        });
    }

    if(isAutoExcluido){
        return(
            <div className={`${!isOnAutoexclusao ? "active" : ""} gap-4 show w-[900px] h-[100px] bg-white border-dotted  border-[2px] border-green-900 items-center  flex flex-col shrink rounded-3xl p-4`}>
                <p>Faltam {apostadorDetails.auto_Exclusao} dias para poder apostar.</p>
            </div>
        )
    }

    return (
    <div className={`${!isOnAutoexclusao ? "active" : ""} gap-4 show w-[900px] h-[300px] bg-white border-dotted  border-[2px] border-green-900 items-center  flex flex-col shrink rounded-3xl p-4`}>
        <p className='text-3xl'>Auto-exclusão</p>
        <p>Deseja excluir-se do sistema?</p>
        <p>(<span className='text-red-700'>Aviso</span>: Ao selecionar um período de tempo irá perder todo o acesso às funcionalidades do sistema. Não é possivel reverter o processo depois de prosseguir.)</p>
        <div className='flex gap-4 items-center'>
            <label className='flex items-center gap-3'>
            <input value={inputDias} onChange={handleInputChane} id="numberOfDays" type="text" name="numberOfDays"
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'></input>
            Dias
            </label>
        </div>
        <div className='flex gap-10'>
            <button onClick={() => {setInputDias(""); cancelAE();}} className=' border-orange-500 border-2 text-orange-500 rounded-xl'>Cancelar</button>
            <button onClick={() => handleSubmit()} className="bg-orange-500 text-white rounded-xl">OK</button>
        </div>
    </div>
    )
}
