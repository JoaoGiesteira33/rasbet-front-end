import React,{useContext} from 'react'
import '../styles/login.css';
import { userDetailsContext } from './UserDetailsProvider';

export const HistoricoTransacoes = ({isOnHistoricoTransacoes}) => {
    const [userDetails, setUserDetails] = useContext(userDetailsContext);
    const transacoes = [{
        data: "18/11/2021",
        descricao: "Ganho de aposta",
        operacao: "+ 13,29 €",
        saldoDepois: 13.29,
    },{
        data: "12/11/2021",
        descricao: "Aposta",
        operacao: "- 3 €",
        saldoDepois: 0,

    },{
        data: "12/11/2021",
        descricao: "Depósito",
        operacao: "+ 3 €",
        saldoDepois: 3,

    }]

    return (
    <div className={`${!isOnHistoricoTransacoes ? "active" : ""} gap-4 items-center show w-[1280px] h-[700px] bg-white border-dotted  border-[2px] border-green-900  flex flex-col shrink rounded-3xl p-4`}>
        <p className='text-4xl mt-4'>Histórico de Transações</p>
        <p className='text-2xl mt-4'>Saldo: {} €</p>
        <table class="table-auto w-[1000px]">
        <thead className="border-t-2 border-b-2 border-green-700">
            <tr>
                <th className='text-left'>Data</th>
                <th className='text-left'>Descrição</th>
                <th>Operação</th>
                <th>Saldo após movimento</th>
            </tr>
        </thead>
        <tbody>
        {
            transacoes.map((transacao) => {
                return(
                    <tr>
                        <td className='text-left'>{transacao.data}</td>
                        <td className='text-left'>{transacao.descricao}</td>
                        <td className='text-left'>{transacao.operacao}</td>
                        <td className=" text-center">{transacao.saldoDepois}</td>
                    </tr>
                );
            })
        }
        </tbody>
        </table>
    </div>
    )
}