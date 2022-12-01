import React,{useContext,useState,useEffect} from 'react';
import '../styles/login.css';
import { userDetailsContext } from './UserDetailsProvider';
import APIService from '../APIService';

export const HistoricoTransacoes = ({isOnHistoricoTransacoes}) => {
    const [userDetails, setUserDetails] = useContext(userDetailsContext);
    const [transacoes, setTransacoes] = useState([]);

    useEffect(() => {
        APIService.getTransacoes(userDetails.email).then((data) => {
          console.log(data)
        })
        .catch(function (ex) {
            console.log('Response parsing failed. Error: ', ex);
        });;
      }, [userDetails.email]);
    /*
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

    },{
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

    },{
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

    },{
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

    }]*/

    return (
    <div className={`${!isOnHistoricoTransacoes ? "active" : ""} gap-4 items-center show w-[1280px] h-[700px] bg-white border-dotted  border-[2px] border-green-900  flex flex-col shrink rounded-3xl p-4`}>
        <p className='text-4xl mt-4'>Histórico de Transações</p>
        <p className='text-2xl mt-4'>Saldo: {} €</p>
        <div className='w-[1000px] no-scrollbar overflow-y-auto'>
        <table className="w-full">
        <thead className="bg-white sticky top-0 h-[50px] text-xl">
            <tr>
                <th className='text-center ml-2'>Data</th>
                <th className='text-left'>Descrição</th>
                <th className='text-left'>Operação</th>
                <th className='text-center'>Saldo após movimento</th>
            </tr>
        </thead>
        <tbody>
        {
            transacoes.map((transacao) => {
                return(
                    <tr>
                        <td className='text-center text-xl h-[50px]'>{transacao.data}</td>
                        <td className='text-left text-xl h-[50px]'>{transacao.descricao}</td>
                        <td className='text-left text-xl h-[50px]'>{transacao.operacao}</td>
                        <td className='text-center text-xl h-[50px]'>{transacao.saldoDepois}</td>
                    </tr>
                );
            })
        }
        </tbody>
        </table>
        </div>
        <hr className='w-[1000px] border-[1.5px] border-green-700 absolute top-[150px]'/>
        <hr className='w-[1000px] border-[1.5px] border-green-700 absolute top-[200px]'/>
        <hr className='w-[1000px] border-[1.5px] border-green-700 absolute bottom-[15px]'/>
    </div>
    )
}