import { userDetailsContext } from "./components/UserDetailsProvider";

class APIService { 
    getJogos(){
        return fetch('http://localhost:8080/jogo/getAllComplete',{ 
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
        let url = new URL('http://localhost:8080/apostador/getTransacaoList');
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
        let url = new URL('http://localhost:8080/apostador/getInfo');
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