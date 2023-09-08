import pizza1 from "./images/pizza1.png"
import pizza2 from "./images/pizza2.png"
import pizza3 from "./images/pizza3.png"
import pizza4 from "./images/pizza4.png"
import pizza5 from "./images/pizza5.png"

const createItem = function(img,name,desc){
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item")
    const menuImage = document.createElement("img")
    menuImage.src = img;
    const menuItemName = document.createElement("p")
    menuItemName.textContent = name
    const menuItemDesc = document.createElement("p")
    menuItemDesc.textContent = desc
    menuItem.appendChild(menuImage)
    menuItem.appendChild(menuItemName)
    menuItem.appendChild(menuItemDesc)
    return menuItem
}

const menu = function(){
    const content = document.querySelector("#content");
    
    const menuContent = document.createElement("div")
    menuContent.classList.add("menu-content");
    content.appendChild(menuContent)
    
    const menuIntro = document.createElement("p");
    menuIntro.textContent = "Take a look at our delicious selections..."
    
    const menuList = document.createElement("div");
    menuList.classList.add("menu-list");
    menuContent.appendChild(menuList)
    menuList.appendChild(menuIntro)

    menuList.appendChild(createItem(pizza1,"Nice Pizza","Pizza that is red and round, made with cheese and tomatoes. It tastes nice."))
    menuList.appendChild(createItem(pizza2,"Big Pizza","Pizza that is red and round, made with cheese and tomatoes. It is also very big and juicy."))
    menuList.appendChild(createItem(pizza3,"Round Pizza","Pizza that is red and round, made with cheese and tomatoes. It is round like any other pizza."))
    menuList.appendChild(createItem(pizza4,"Broccoli Pizza","Pizza that is red and round, made with cheese and tomatoes. Not sure whether broccolis belong in pizzas. Buy this to find out!"))
    menuList.appendChild(createItem(pizza5,"Normal Pizza","Pizza that is red and round, made with cheese and tomatoes. Just a normal pizza, Nothing too special"))


    



}

export default menu