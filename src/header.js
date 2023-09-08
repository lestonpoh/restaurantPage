import logoImgLink from "./images/logo.jpg"

const header = function(){
    const content = document.querySelector("#content");

    const header = document.createElement("div");
    header.classList.add("header");

    // logos
    const logos = document.createElement("div");
    logos.classList.add("logos");
    const logoImg = document.createElement("img");
    logoImg.src = logoImgLink;
    const name = document.createElement("p");
    name.textContent = "POOKIE's PIZZA";
    logos.appendChild(logoImg);
    logos.appendChild(name);
    header.appendChild(logos);

    // tabs
    const tabs = document.createElement("div");
    tabs.classList.add("tabs");
    const home = document.createElement("p");
    home.textContent = "HOME";
    home.classList.add("home");
    tabs.appendChild(home);

    const menu = document.createElement("p");
    menu.textContent = "MENU";
    menu.classList.add("menu");
    tabs.appendChild(menu);

    const contact = document.createElement("p");
    contact.textContent = "CONTACT";
    contact.classList.add("contact");
    tabs.appendChild(contact);

    header.appendChild(tabs)


    content.appendChild(header)
}

export default header