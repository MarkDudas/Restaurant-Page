export default function createHomePage() {
    const content = document.getElementById('content');
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to Our Restaurant";
    const description = document.createElement('p');
    description.textContent = "Best food in town!";
    content.appendChild(headline);
    content.appendChild(description);
}
