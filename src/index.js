import header from "./header"
import home from "./home"
import menu from "./menu"
import contact from "./contact"
import "./styles.css"

header()
home()

const content = document.querySelector("#content");

const homeButton = document.querySelector(".home");
homeButton.addEventListener("click",()=>{
    content.removeChild(content.childNodes[1])
    home()
})

const menuButton = document.querySelector(".menu");
menuButton.addEventListener("click",()=>{
    content.removeChild(content.childNodes[1])
    menu()
})

const contactButton = document.querySelector(".contact");
contactButton.addEventListener("click",()=>{
    content.removeChild(content.childNodes[1])
    contact()
})