const home = function(){
    const content = document.querySelector("#content");
    
    const homeContent = document.createElement("div")
    homeContent.classList.add("home-content")
    const welcome = document.createElement("div")
    welcome.classList.add("welcome")
    const p1 =document.createElement("p")
    p1.textContent = "Best Pizza in Town"
    const p2 =document.createElement("p")
    p2.textContent = "Made with the Freshest Ingredients Everyday!"
    welcome.appendChild(p1)
    welcome.appendChild(p2)
    homeContent.appendChild(welcome)

    content.appendChild(homeContent)
}

export default home