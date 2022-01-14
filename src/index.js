import './style.css';
import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';

const loadWebsite = (() => {
    const contentEl = document.getElementById("content");
    let title = document.createElement("h1");
    title.setAttribute("id", "title");
    title.textContent = "Golden Cafe";
    contentEl.appendChild(title);
    let menuBar = document.createElement("div");
    menuBar.setAttribute("id", "menuBar");
    let homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    let menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    let contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    menuBar.appendChild(homeButton);
    menuBar.appendChild(menuButton);
    menuBar.appendChild(contactButton);
    contentEl.appendChild(menuBar);
    let mainContent = document.createElement("div");
    mainContent.setAttribute("id", "main");
    contentEl.appendChild(mainContent);
    homeButton.addEventListener('click', function () {
        loadHomePage();
    });
    menuButton.addEventListener('click', function () {
        loadMenuPage();
    })
    contactButton.addEventListener('click', function () {
        loadContactPage();
    })
    loadHomePage();
})();


