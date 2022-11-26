import React, {useContext} from 'react'
import '../styles/login.css';
import { userDetailsContext } from './UserDetailsProvider';
import { Aposta } from './Aposta';

export const HistoricoApostas = ({isOnHistoricoApostas}) => {
    const [userDetails, setUserDetails] = useContext(userDetailsContext);
    const apostas = [
        {
            id: 1,
            apostado: 10,
            ganhos: 0,
            selecoes: [{
                id: 1,
                jogo: 'Sporting - Varzim',
                resultado: 'Sporting'
            },
            {
                id: 2,
                jogo: 'Porto - Benfica',
                resultado: 'Empate'
            },
            {
                id: 3,
                jogo: 'Porto - Benfica',
                resultado: 'Empate'
            },
            {
                id: 4,
                jogo: 'Porto - Benfica',
                resultado: 'Empate'
            }],
        },{
            id: 2,
            apostado: 5,
            ganhos: 25,
            selecoes: [{
                id: 1,
                jogo: 'Sporting - Varzim',
                resultado: 'Varzim'
            },
            {
                id: 2,
                jogo: 'Porto - Benfica',
                resultado: 'Porto'
            },
            ],
        },{
            id: 3,
            apostado: 5,
            ganhos: 25,
            selecoes: [{
                id: 1,
                jogo: 'Sporting - Varzim',
                resultado: 'Varzim'
            },
            {
                id: 2,
                jogo: 'Porto - Benfica',
                resultado: 'Porto'
            },
            ],
        },
    ]

    return (
    <div className={`${!isOnHistoricoApostas ? "active" : ""} gap-4 items-center show w-[1280px] h-[700px] bg-white border-dotted  border-[2px] border-green-900  flex flex-col shrink rounded-3xl p-4`}>
        <p className='text-6xl'>{userDetails.email}</p>
        <p className='text-2xl mt-4'>Histórico de apostas</p>
        <hr className=' border-[1.5px] w-[1000px]'/>
        <div className='w-[80%] flex flex-col gap-10 no-scrollbar overflow-y-auto'>
            {
                apostas.map((aposta) => {
                    return <Aposta key={aposta.id} aposta={aposta}/>
                })
            }
        </div>
    </div>
    );
}
