import React, {useContext,useState,useEffect} from 'react'
import '../styles/login.css';
import { userDetailsContext } from './UserDetailsProvider';
import { apostadorDetailsContext } from './ApostadorDetailsProvider';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { AutoExclusao } from './AutoExclusao';
import APIService from '../APIService';

export const Profile = ({isOnAutoexclusao,
      cancelAE,
       handleHAClick,
        handleHTClick,
         handleAEClick,
          handleLevantarClick,
           handleDepositarClick}) => {
    const [userDetails, setUserDetails] = useContext(userDetailsContext);
    const [apostadorDetails, setApostadorDetails] = useContext(apostadorDetailsContext);

    const [userMorada, setUserMorada] = useState(apostadorDetails.morada);
    const [userTelemovel, setUserTelemovel] = useState(apostadorDetails.telemovel);
    const [userSaldo, setUserSaldo] = useState(apostadorDetails.carteira);
    const [userPassword, setUserPassword] = useState(userDetails.password);

    const handleMoradaInput = (e) => {
        setUserMorada(e.target.value);
    }
    const handleTelemovelInput = (e) => {
        setUserTelemovel(e.target.value);
    }
    const handlePasswordInput = (e) => {
        setUserPassword(e.target.value);
    }
    return (
    <div className={`gap-4 items-center show w-[1280px] h-[710px] bg-white border-dotted  border-[2px] border-green-900  flex flex-col shrink rounded-3xl p-4`}>
        <p className='text-6xl'>{userDetails.email}</p>
        <p className='text-2xl mt-4'>Saldo: {userSaldo} €</p>
        <hr className=' border-[1.5px] w-[1000px]'/>
        <div className='flex gap-[160px]'>
            <button onClick={handleLevantarClick} className='py-2 text-xl bg-white text-orange-500 font-semibold border-2 border-orange-500 rounded-md w-[200px]'>Levantar</button>
            <button onClick={handleDepositarClick} className='hover:bg-orange-300 py-2 text-xl font-semibold bg-orange-500 text-white rounded-md w-[200px]'>Depositar</button>
        </div>
        <div className='flex flex-col w-[1000px] items-center'>
            <div className='flex w-full justify-between my-10'>
                <div className='flex items-center'>
                    <p className='font-bold text-2xl'>Consular Histórico de apostas</p>
                    <button onClick={() => handleHAClick()} className='hover:bg-transparent'><ChevronRightIcon className='w-10 h-10 border-2 border-black rounded-full p-2 hover:bg-orange-500'/></button>
                </div>
                <div className='flex items-center'>
                    <p className='font-bold text-2xl'>Consular Histórico de transações</p>
                    <button onClick={() => handleHTClick()} className='hover:bg-transparent'><ChevronRightIcon className='w-10 h-10 border-2 border-black rounded-full p-2 hover:bg-orange-500'/></button>
                </div>
            </div>
            <div className='flex flex-col items-center w-[1000px] gap-[40px]'>
                <div className='flex justify-between items-center w-[1000px]'>
                    <p className='text-2xl'>Morada:</p>
                    <input value={userMorada} onChange={handleMoradaInput} className='w-[600px] border-black border-2 rounded-xl py-4 px-2' type="text"></input>
                </div>
                <div className='flex justify-between items-center w-[1000px]'>
                    <p className='text-2xl'>Telemóvel:</p>
                    <input value={userTelemovel} onChange={handleTelemovelInput} className='w-[600px] border-black border-2 rounded-xl py-4 px-2' type="text"></input>
                </div>
                <div className='flex justify-between items-center w-[1000px]'>
                    <p className='text-2xl'>Password:</p>
                    <input value={userPassword} onChange={handlePasswordInput} className='w-[600px] border-black border-2 rounded-xl py-4 px-2' type="text"></input>
                </div>
            </div>
        </div>
        <p onClick={() => handleAEClick()} className='self-end hover:underline hover:cursor-pointer bg-red-400 rounded-xl p-3'>Auto-exclusão</p>
        <AutoExclusao cancelAE={cancelAE} isOnAutoexclusao={isOnAutoexclusao}/>
    </div>
    );
}