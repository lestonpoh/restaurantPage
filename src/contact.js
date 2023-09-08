import phoneImgLink from "./images/phone.png"
import addressImgLink from "./images/address.png"
import mapImgLink from "./images/map.png"


const contact = function(){
    const content = document.querySelector("#content");
    
    const contactContent = document.createElement("div")
    contactContent.classList.add("contact-content");
    content.appendChild(contactContent)

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container")
    contactContent.appendChild(contactContainer)

    const phoneImg = document.createElement("img")
    phoneImg.src = phoneImgLink
    const phone = document.createElement("p")
    phone.textContent = "+65 82828235"

    const addressImg = document.createElement("img")
    addressImg.src = addressImgLink
    const address = document.createElement("p")
    address.textContent = "Avenue Anatole France, Paris, France"

    const mapImg = document.createElement("img")
    mapImg.src = mapImgLink

    contactContainer.appendChild(phoneImg)
    contactContainer.appendChild(phone)
    contactContainer.appendChild(addressImg)
    contactContainer.appendChild(address)
    contactContainer.appendChild(mapImg)

}

export default contact