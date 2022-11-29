import React from 'react'
import '../styles/login.css';
import loginimage from '../assets/Betting.jpg'

export const Login = ({isLogginin, onSubmit, handleRegisterClick}) => {
  return (
    <div className={`${!isLogginin ? "active" : ""} gap-4 show w-[1280px] h-[700px] bg-white  border-[4px] border-black flex shrink rounded-3xl p-4`}>
        <div className='flex flex-col items-center w-[50%]'>
            <p className=' font-bold  text-5xl mb-[100px] mt-[50px]'>BEM VINDO</p>
            <form onSubmit={onSubmit} className='flex flex-col w-full px-[120px]'>
                <input name="userEmail" className=' placeholder:text-center border-green-700 border-2 rounded-2xl p-4 mb-8' placeholder='E-mail' type="text"></input>
                <input name="userPassword" className='placeholder:text-center border-green-700 border-2 rounded-2xl p-4 mb-8' placeholder='Palavra-passe' type="password"></input>
                <button type="submit" className='self-center text-2xl font-bold w-full py-3 bg-orange-500 rounded-2xl'>Aceder</button>
            </form>
            <p className='pt-[60px]'>Não tem conta?</p>
            <p onClick={handleRegisterClick} className='font-bold underline cursor-pointer mt-[8px]'>Registe-se já!</p>
        </div>
        <div className=' w-[50%]'><img className="h-[100%] object-cover rounded-3xl" alt='logina' src={loginimage}></img></div>
    </div>
  )
}