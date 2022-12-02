import React, { useState,useContext } from 'react';
import {userDetailsContext} from "./UserDetailsProvider";

export const Deposito = ({cancelAction}) => {
    const [userDetails, setUserDetails] = useContext(userDetailsContext);
    const [inputValue,setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleDeposito = () => {
        fetch("http://localhost:8080/apostador/depositar", {
            method: "post",
            body: JSON.stringify({
                email: userDetails.email,
                valor: inputValue,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json()).then(result => {
            console.log(result);
        });
    }

    return (
    <div className='gap-4 show w-[900px] h-[300px] bg-white border-dotted  border-[2px] border-green-900 items-center  flex flex-col shrink rounded-3xl p-4'>
        <div className='flex flex-col items-center gap-5 w-full grow'>
            <p className='font-semibold text-2xl'>Quanto deseja depositar?</p>
            <input value={inputValue} onChange={handleInputChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[45%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '  type="text"></input>
        </div>
        <div className='flex gap-10'>
            <button onClick={() => {setInputValue(""); cancelAction();}} className=' border-orange-500 border-2 py-2 w-[140px] font-semibold text-orange-500 rounded-xl'>Cancelar</button>
            <button onClick={() => handleDeposito()} className="bg-orange-500 text-white rounded-xl w-[140px] font-semibold">OK</button>
        </div>
    </div>
    )
}
