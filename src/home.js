import EnchantedApple from './Enchanted_Golden_Apple.webp';

const homePage = () => {
    let homeContent = document.createElement("div");
    homeContent.setAttribute("id", "homeContent");
    let subTitle = document.createElement("div");
    subTitle.setAttribute("id", "subTitle");
    subTitle.textContent = "Home of the Enchanted Golden Apple";
    homeContent.appendChild(subTitle);
    let enchantedAppleIMG = new Image();
    enchantedAppleIMG.src = EnchantedApple;
    homeContent.appendChild(enchantedAppleIMG);
    let quote = document.createElement("div");
    quote.textContent = "You'll feel invigorated after having our food!"
    homeContent.appendChild(quote);
    return homeContent;
}

const loadHomePage = () => {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(homePage());
}

export default loadHomePage;