export default function createMenuPage() {
    const content = document.getElementById('content');
    const menu = document.createElement('div');
    menu.textContent = "Our delicious menu!";
    content.appendChild(menu);
}
