import React, {useContext, useState} from 'react'
import { userDetailsContext } from './UserDetailsProvider';

export const Navbar = (props) => {
    const [userDetails, setUserDetails] = useContext(userDetailsContext);
    const isLoggedIn = userDetails.online;

    return (
        <div className='w-screen h-[10vh] z-1 bg-green-900 drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='font-bold mr-4 text-4xl text-[#dce923]'>RASBET.</h1>
                    <ul className='flex '>
                        <li className={"text-white cursor-pointer hover:rounded-3xl " + (props.desporto === "todos" ? "bg-white text-black rounded-3xl" : "hover:bg-gray-100/10")}
                            onClick={props.changeDesporto}>
                            TODOS</li>
                        <li className={"text-white cursor-pointer hover:rounded-3xl " + (props.desporto === "futebol" ? "bg-white text-black rounded-3xl" : "hover:bg-gray-100/10")}
                            onClick={props.changeDesporto}>
                            FUTEBOL</li>
                        <li className={"text-white cursor-pointer hover:rounded-3xl " + (props.desporto === "basquetebol" ? "bg-white text-black rounded-3xl" : "hover:bg-gray-100/10")}
                            onClick={props.changeDesporto}>
                            BASQUETEBOL</li>
                        <li className={"text-white cursor-pointer hover:rounded-3xl " + (props.desporto === "ténis" ? "bg-white text-black rounded-3xl" : "hover:bg-gray-100/10")}
                            onClick={props.changeDesporto}>
                            TÉNIS</li>
                        <li className={"text-white cursor-pointer hover:rounded-3xl " + (props.desporto === "motogp" ? "bg-white text-black rounded-3xl" : "hover:bg-gray-100/10")}
                            onClick={props.changeDesporto}>
                            MOTOGP</li>
                    </ul>
                </div>
                <div className='flex pr-4'>
                    {isLoggedIn ? (
                        <p className='text-white'>Bem vindo, <i onClick={props.handleProfileClick} className='hover:underline hover:cursor-pointer'>{userDetails.email}</i></p>
                    ) : (
                        <>
                        <button onClick={() => props.handleLoginClick()} className='bg-transparent mr-4 text-white hover:bg-transparent'>Login</button>
                        <button onClick={() => props.handleRegisterClick()}>Register</button>
                        </>
                    )}
                </div>
            </div>
        </div>
  )
}