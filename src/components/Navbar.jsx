import React, {useContext, useState} from 'react'
import { userDetailsContext } from './UserDetailsProvider';
import { BellIcon } from '@heroicons/react/24/solid';
import APIService from '../APIService';
import { useEffect } from 'react';

export const Navbar = (props) => {
    const [userDetails, setUserDetails] = useContext(userDetailsContext);
    const isLoggedIn = userDetails.online;

    const [notifications,setNotifications] = useState([]);
    const [unreadNotifications,setUnreadNotifications] = useState(0);

    useEffect(() => {
        async function startFetching() {
            console.log("Fetching notifications for " + userDetails.email);
            const result = await APIService.getNotificacoes(userDetails.email);
            console.log("Notificaoes: " + result);
    
            const sizeNots = notifications.length;
            const newSizeNots = result.length;
    
            if(sizeNots !== newSizeNots){
                setUnreadNotifications(unreadNotifications + newSizeNots - sizeNots);
                setNotifications(result.reverse());
            }
        }

        const interval = setInterval(() => {
            startFetching();
        }, 8000);

        return () => clearInterval(interval);
    },[userDetails.email,notifications.length,unreadNotifications]);

    return (
        <div className='w-screen h-[10vh] top-0 bg-green-900 drop-shadow-lg fixed'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 onClick={() => props.closeAllWindows()} className='cursor-pointer font-bold mr-4 text-4xl text-[#FFD700]'>RASBET.</h1>
                    <ul className='flex '>
                        <li className={"cursor-pointer hover:rounded-3xl " + (props.desporto === "todos" ? "bg-white text-black rounded-3xl" : "hover:bg-gray-100/10 text-white")}
                            onClick={props.changeDesporto}>
                            TODOS</li>
                        <li className={"cursor-pointer hover:rounded-3xl " + (props.desporto === "futebol" ? "bg-white text-black rounded-3xl" : "hover:bg-gray-100/10 text-white")}
                            onClick={props.changeDesporto}>
                            FUTEBOL</li>
                        <li className={"cursor-pointer hover:rounded-3xl " + (props.desporto === "basquetebol" ? "bg-white text-black rounded-3xl" : "hover:bg-gray-100/10 text-white")}
                            onClick={props.changeDesporto}>
                            BASQUETEBOL</li>
                        <li className={"cursor-pointer hover:rounded-3xl " + (props.desporto === "ténis" ? "bg-white text-black rounded-3xl" : "hover:bg-gray-100/10 text-white")}
                            onClick={props.changeDesporto}>
                            TÉNIS</li>
                        <li className={"cursor-pointer hover:rounded-3xl " + (props.desporto === "motogp" ? "bg-white text-black rounded-3xl" : "hover:bg-gray-100/10 text-white")}
                            onClick={props.changeDesporto}>
                            MOTOGP</li>
                    </ul>
                </div>
                <div className='flex pr-4'>
                    {isLoggedIn ? (
                        <div className='flex items-center'>
                            <div className='flex items-center relative justify-center'>
                                <BellIcon onClick={() => {setUnreadNotifications(0); props.nClick();}} className={`w-12 h-12 text-white ease-in transition delay-100 duration-300 border-transparent border-2 hover:cursor-pointer rounded-3xl p-2 ${props.nValue ? 'border-white' : ''} hover:border-white`}>
                                </BellIcon>
                                {
                                    props.nValue &&
                                    <div className='absolute rounded-xl overflow-y-auto no-scrollbar items-center justify-center text-lg font-bold h-[30vh] top-14 -left-30 w-72 flex-col p-2 bg-white'>
                                        {notifications.map((notification) => {
                                            const tDate = new Date((notification.data));
                                            return(
                                                <div className='border-b hover:bg-gray-100 border-gray-400 py-4'>
                                                <p className='pb-2'>{notification.descricao}</p>
                                                <p className='text-gray-300 text-xs'>{`${tDate.toLocaleDateString()} ${tDate.getHours()}:${tDate.getMinutes()}`}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                }
                                <div className={`${unreadNotifications !== 0 ? '' : 'opacity-0'} flex items-center justify-center text-white bg-red-600 rounded-3xl relative top-[-8px] right-6 w-4 h-4`}>{unreadNotifications}</div>
                            </div>
                            <p className='text-white'>Bem vindo, <i onClick={props.handleProfileClick} className='hover:underline hover:cursor-pointer'>{userDetails.email}</i></p>
                        </div>
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