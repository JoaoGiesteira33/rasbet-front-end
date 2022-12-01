import React from 'react'
import '../styles/login.css';
import loginimage from '../assets/Betting.jpg'

export const Register = ({isRegistinn, onSubmit}) => {
  return (
    <div className={`${!isRegistinn ? "active" : ""} gap-4 show w-[1280px] h-[700px] bg-white  border-[4px] border-black flex shrink rounded-3xl p-4`}>
        <div className='flex flex-col items-center w-[50%]'>
            <p className=' font-bold  text-5xl mb-[30px] mt-[30px]'>REGISTO</p>
            <form onSubmit={onSubmit} className='flex flex-col w-full px-[120px]'>
                <input required name="userEmail" className='text-center placeholder:text-center border-green-700 border-2 rounded-2xl p-4 mb-4' placeholder='E-mail' type="text"></input>
                <input required name="userPassword" className='text-center placeholder:text-center border-green-700 border-2 rounded-2xl p-4 mb-4' placeholder='Palavra-passe' type="password"></input>
                <input required name="userDate" className='text-center placeholder:text-center border-green-700 border-2 rounded-2xl p-4 mb-4' onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} placeholder='Data de Nascimento' type="text"></input>
                <input required name="userNIF" className='text-center placeholder:text-center border-green-700 border-2 rounded-2xl p-4 mb-4' placeholder='NIF' type="text"></input>
                <input required name="userTelemovel" className='text-center placeholder:text-center border-green-700 border-2 rounded-2xl p-4 mb-4' placeholder='Telemóvel' type="tel"></input>
                <input required name="userMorada" className='text-center placeholder:text-center border-green-700 border-2 rounded-2xl p-4 mb-10' placeholder='Morada' type="text"></input>
                <button type="submit" className='text-center self-center text-2xl font-bold w-full py-3 bg-orange-500 rounded-2xl'>Concluir</button>
            </form>
        </div>
        <div className=' w-[50%]'><img className="h-[100%] object-cover rounded-3xl" alt='logina' src={loginimage}></img></div>
    </div>
  )
}