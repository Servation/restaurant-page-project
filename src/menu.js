const createMenuPage = () => {
    let menuContent = document.createElement("div");
    menuContent.setAttribute("id", "menuContent");
    menuContent.textContent = "menu content";
    return menuContent;
}

const loadMenuPage = () => {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenuPage());
}

export default loadMenuPage;