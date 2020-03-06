/*
// Modulo 3
//alert("Teste OK!!!!!")

import ClasseUsuario, {idade as IdadeUsuario} from  '../Desafios/Modulo2'

//import ClasseUsuario from '../functions'
console.log(ClasseUsuario.info())

//import {idade} from '../functions'
//console.log(idade)

console.log(IdadeUsuario)
*/

// Modulo 3
// Questão 1 - Funão delay aciona o .then após 1s
/*const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function umPorSegundo() {
    delay().then(() => {
        console.log('1s');
        delay().then(() => {
            console.log('2s');
            delay().then(() => {
                console.log('3s');
            });
        })
    });
}

async function umPorSegundo() {
    await delay(console.log('1s'))
    await delay(console.log('2s'))
    await delay(console.log('3s'))
}
umPorSegundo(); */

// Questão 2
/*import axios from 'axios';
function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log('Usuário não existe');
    })
}*
const getUserFromGithub = async(user) =>{
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data)
    }catch{
        console.log('Usuário não existe');
    }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123'); */

// Questão 3
/*
import axios from 'axios';
class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/users/${repo}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Repositório não existe');
        })
    }
}
class Github {
    static async getRepositories (repo){
        try{
            const response = await axios.get(`https://api.github.com/users/${repo}`)
            console.log(response.data)
        }catch{
            console.log('Repositório não existe');
        }
    }
}
Github.getRepositories('diego3g');
Github.getRepositories('diego3g3333'); */

// Questão 4 
/*const buscaUsuario = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log('Usuário não existe');
    });
}
const buscaUsuario = async(user) => {
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data)
    }catch{
        console.log('Usuário não existe');
    }
}
buscaUsuario('diego3g');
buscaUsuario('diego3g3333');*/