import createHomePage from './homepage';
import createMenuPage from './menu';
import createContactPage from './contact';

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

document.getElementById('home-btn').addEventListener('click', () => {
    clearContent();
    createHomePage();
});

document.getElementById('menu-btn').addEventListener('click', () => {
    clearContent();
    createMenuPage();
});

document.getElementById('contact-btn').addEventListener('click', () => {
    clearContent();
    createContactPage();
});

document.addEventListener('DOMContentLoaded', () => {
    createHomePage();
});
