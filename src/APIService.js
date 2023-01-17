import { userDetailsContext } from "./components/UserDetailsProvider";

class APIService { 
    getJogos(){
        return fetch(process.env.REACT_APP_BACKEND + '/jogo/getAllComplete',{ 
            method: 'get',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin'
        })
        .then(res => res.json());        
    }

    getJogosSeguidos(emailValue){
        let url = new URL(process.env.REACT_APP_BACKEND + '/utilizador/getSeguidos');
        let params = {email:emailValue};

        url.search = new URLSearchParams(params).toString();

        return fetch(url,{ 
            method: 'get',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin'
        })
        .then(res => res.json());       
    }

    getTransacoes(emailValue){
        let url = new URL(process.env.REACT_APP_BACKEND + '/apostador/getTransacaoList');
        let params = {email:emailValue};

        url.search = new URLSearchParams(params).toString();

        return fetch(url,{ 
            method: 'get',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin'
        })
        .then(res => res.json()); 
    }

    getApostador(emailValue){
        let url = new URL(process.env.REACT_APP_BACKEND + '/apostador/getInfo');
        let params = {email:emailValue};

        url.search = new URLSearchParams(params).toString();

        return fetch(url,{ 
            method: 'get',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin'
        })
        .then(res => res.json()); 
    }

    getHistoricoApostas(emailValue){
        let url = new URL(process.env.REACT_APP_BACKEND + '/apostador/getApostaList');
        let params = {email:emailValue};

        url.search = new URLSearchParams(params).toString();

        return fetch(url,{ 
            method: 'get',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin'
        })
        .then(res => res.json());
    }
}

export default new APIService();