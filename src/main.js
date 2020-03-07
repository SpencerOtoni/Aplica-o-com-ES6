class App{
    constructor(){
        this.repositorios = [],
        this.formEl = document.querySelector('form'),
        this.ulEl = document.querySelector('ul')
        this.registerHandlers()
    } 

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event)
    }

    addRepository(event){
        event.preventDefault()

        this.repositorios.push({
            name: "rocketseat.com.br",
            description: "Tire a sua ideia do papel e dê vida à sua startup.",
            avatar_url: "https://avatars0.githubusercontent.com/u/28929274?v=4",
            html_url:"http://github.com/rocketseat"
        })

        this.render()
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