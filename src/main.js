class App{
    constructor(){
        this.repositorios = [],
        this.formEl = document.querySelector('form'),
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

        console.log(this.repositorios)
    }
}

new App()