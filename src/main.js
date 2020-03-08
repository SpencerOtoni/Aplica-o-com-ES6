const api = require('./api')

class App{
    constructor(){
        this.repositorios = [],
        this.formEl = document.querySelector('form'),
        this.inputEL = document.querySelector("input[name=repository]")
        this.ulEl = document.querySelector('ul')
        this.registerHandlers()
    } 

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event)
    }

   async addRepository(event){
        event.preventDefault()

        const repoInput = this.inputEL.value
        
        if(repoInput === ''){
            return
        }
        try {
            const response = await api.get(`/repos/${repoInput}`) //react-community/react-navigation
            const {name, description, html_url, owner:{avatar_url}} = response.data
            this.repositorios.push({
                name,
                description,
                avatar_url,
                html_url
            })
            this.inputEL.value = ''
            this.render()
        } catch (error) {
            alert('Repositorio não existe!!')
        }
    }

    render(){
        this.ulEl.innerHTML = ''
        this.repositorios.forEach(element =>{
           let imgEl = document.createElement('img')
            imgEl.setAttribute('src', element.avatar_url)

            let strongEl = document.createElement('strong')
            strongEl.appendChild(document.createTextNode(element.name))

            let pEl = document.createElement('p')
            pEl.appendChild(document.createTextNode(element.description))

            let aEl = document.createElement('a')
            aEl.setAttribute('target', '_blank')
            aEl.setAttribute('href',element.html_url)
            aEl.appendChild(document.createTextNode('Acessar'))

            let liEl = document.createElement('li')
            liEl.appendChild(imgEl)
            liEl.appendChild(strongEl)
            liEl.appendChild(pEl)
            liEl.appendChild(aEl)

            this.ulEl.appendChild(liEl)
        })
    }
}

new App()