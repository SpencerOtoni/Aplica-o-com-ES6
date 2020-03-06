/*
class Pai{
    constructor() {
        this.arr = []
    }

    add(nome){
        this.arr.push(nome)
    }

}

class Filha extends Pai{
    constructor(){
        super()
    }

    exibe(){
        return this.arr
    }
}

const pai = new Pai()
const filha = new Filha()

const elementInput = document.querySelector('input')
const elementButton = document.querySelector('button')

const elementDiv = document.querySelector('#app')
const elementUl = document.createElement("ul")
elementDiv.appendChild(elementUl)

elementButton.onclick = () =>{
    const valor  = elementInput.value
    filha.add(valor)
    const elementLi = document.createElement("li")
    const texto = document.createTextNode(filha.exibe())
    elementLi.appendChild(texto)
    elementUl.appendChild(elementLi)
    elementDiv.appendChild(elementUl)
}
*/

const usuario = {
    nome : "Spencer",
    idade : 36,
    endereco : {
        cidade : "Araçuaí",
        estado : 'MG'
    }
}
const arry = [1,5,6,9]
/*
const nome = usuario.nome
const idade = usuario.idade
const estado = usuario.endereco.estado
*/
/*
const {nome, idade, endereco: {estado}} = usuario
console.log(nome, idade, estado)
const {nome, idade, ...resto} = usuario
console.log(nome, idade, resto)
const [a, b, ...resto1] = arry
console.log(a, b, resto1)
*/
/*
function mostarUsuario ({nome, idade, endereco: {cidade}}) {
    console.log(nome, idade, cidade)
}
mostarUsuario(usuario)
*/

const usuario2 = {...usuario, nome : 'Dexter'}
console.log(usuario2)