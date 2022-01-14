const createContactPage = () => {
    let contactContent = document.createElement("div");
    contactContent.setAttribute("id", "contactContent");
    contactContent.textContent = "Contact Page";
    return contactContent;
}

const loadContactPage = () => {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContactPage());
}

export default loadContactPage;