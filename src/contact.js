export default function createContactPage() {
    const content = document.getElementById('content');
    const contact = document.createElement('div');
    contact.textContent = "Contact us at (555) 555-5555!";
    content.appendChild(contact);
}
