/*
// Q1
class user {
    constructor(senha, email){
        this.senha = senha,
        this.email = email
    }

    isAdmin(){
        return this.admin === true //? true : false
    }
}

class admin extends user {
    constructor(senha, email){
        super(senha, email)
        this.admin = true
    }
}

const user1 = new user('email@teste.com', 'senha123')
const adm1 = new admin('email@teste.com', 'senha1234')

console.log(user1, adm1)

console.log(user1.isAdmin()) // false
console.log(adm1.isAdmin()) // true
*/
/*
// Q2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
]

//const idade = (elemento) => elemento.idade
//const filtro = (elemento) => elemento.idade > 18 && elemento.empresa === 'Rocketseat' 

const arryMap = usuarios.map((elemento) => elemento.idade)
console.log(arryMap)
const elemento = usuarios.filter((elemento) =>{
    if(elemento.idade > 18 && elemento.empresa === 'Rocketseat' ){
        return elemento
    }
})
console.log(elemento)
const elemento1 = usuarios.find((elemento) => elemento.empresa === undefined)
console.log(elemento1)

const resultado = usuarios.map((elemento) => {
    elemento.idade *= 2 
    return elemento
}).filter((elemento) => elemento.idade <= 50)
console.log(resultado)
*/

//Q3
/*
const arr = [1,2,3,4,5]
const q1 = arr.map((element) => element + 10)
console.log(q1)

const usuario = {nome : 'Spencer', idade: 23}
const q2 = (usuario) => usuario.idade
console.log(q2(usuario))
*/

const nome = 'Spencer'
const idade = 23
const q3 = (nome = 'Diego', idade = 18) => {
    return {nome, idade}
}
console.log(q3(nome, idade))
console.log(q3(nome))

/*
// 3.3 Desestruturação simples
const nome = "Spencer"
const idade = 23
const q3 = (nome = 'Diego', idade = 18) => {
 return { nome, idade }
}
console.log(q3(nome, idade))
console.log(q3(nome))
console.log(q3())

// 3.4
const promise = () => {
    return new Promise((resolve, reject) =>{
        return resolve()
    })
}
console.log(promise())
*/
/*
// 4.1 Desestruturação em parâmetros
const empresa = {
    nome: 'Rocketseat',
    idade: 20,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
}
const {nome} = empresa
const {endereco : {cidade}} = empresa
const {endereco: {estado}} = empresa
console.log(nome)
console.log(cidade)
console.log(estado)

// 4.1
function mostraInfo({nome, idade} = usuario) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }))
console.log(mostraInfo(empresa))
*/
/*
//5.1 Rest
const arr = [1, 2, 3, 4, 5, 6]
const [a ,...y] = arr
console.log(a)
console.log(y)

const soma = (...parametro) => {
    return parametro.reduce((prev, next) => prev+= next)
}
console.log(soma(1,2,3,6,9))
//5.2 Spread
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
 }

 const usuario2 = {...usuario, nome : "Spencer"}
 console.log(usuario2)

 const usuario3 = {...usuario, endereco : {...usuario.endereco, cidade : 'Lontas'} }
 console.log(usuario3)
 */
/*
 //6  Template Literals
 const usuario = 'Diego';
const idade = 23;
console.log(`O usuário  ${usuario}  possui  ${idade}  anos`);
*/