import './style.css';
import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';

const createNav = () => {
    let navBar = document.createElement("div");
    navBar.setAttribute("id", "navBar");
    let homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    let menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    let contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);
    homeButton.addEventListener('click', () => {
        loadHomePage();
    });
    menuButton.addEventListener('click', () => {
        loadMenuPage();
    })
    contactButton.addEventListener('click', () => {
        loadContactPage();
    })
    return navBar
}

const createTitle = () => {
    let title = document.createElement("div");
    title.setAttribute("id", "title");
    title.textContent = "Golden Cafe";
    return title;
}


(() => {
    const contentEl = document.getElementById("content");
    contentEl.appendChild(createTitle());
    contentEl.appendChild(createNav());
    let mainContent = document.createElement("div");
    mainContent.setAttribute("id", "main");
    contentEl.appendChild(mainContent);
    loadHomePage();
})();


