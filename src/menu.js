import cookie from './Cookie.webp';
import apple from './Enchanted_Golden_Apple.webp';
import mushStew from './Mushroom_Stew.webp';
import pumpPie from './Pumpkin_Pie.webp';

const createMenuPage = () => {
    let menuContent = document.createElement("div");
    menuContent.setAttribute("id", "menuContent");
    let menuSubtitle = document.createElement("div");
    menuSubtitle.setAttribute("id", "menuSubtitle");
    menuSubtitle.textContent = "Menu";
    menuContent.appendChild(menuSubtitle)
    let cookieIMG = new Image();
    let appleIMG = new Image();
    let mushroomStewIMG = new Image();
    let pumpkinPieIMG = new Image();
    cookieIMG.src = cookie;
    appleIMG.src = apple;
    mushroomStewIMG.src = mushStew;
    pumpkinPieIMG.src = pumpPie;
    let menuItems = document.createElement("div");
    menuItems.setAttribute("id", "menuItems")
    let item1 = document.createElement("div");
    item1.appendChild(cookieIMG);
    let cookieInfo = document.createElement("div");
    cookieInfo.textContent = "Cookies";
    item1.appendChild(cookieInfo);
    menuItems.appendChild(item1);
    let item2 = document.createElement("div");
    item2.appendChild(appleIMG);
    let appleInfo = document.createElement("div")
    appleInfo.textContent = "Enchanted Golden Apple";
    item2.appendChild(appleInfo);
    menuItems.appendChild(item2);
    let item3 = document.createElement("div");
    item3.appendChild(mushroomStewIMG);
    let mushInfo = document.createElement("div");
    mushInfo.textContent = "Mushroom Stew";
    item3.appendChild(mushInfo);
    menuItems.appendChild(item3);
    let item4 = document.createElement("div");
    item4.appendChild(pumpkinPieIMG);
    let pumpPieInfo = document.createElement("div")
    pumpPieInfo.textContent = "Pumpkin Pie";
    item4.appendChild(pumpPieInfo);
    menuItems.appendChild(item4);
    menuContent.appendChild(menuItems);
    return menuContent;
}

const loadMenuPage = () => {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenuPage());
}

export default loadMenuPage;