// Tableau pour stocker les contacts
const contacts = [];

function addContact() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();

    if (name === '' || phone === '' || email === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Créer un objet de contact
    const contact = {
        name: name,
        phone: phone,
        email: email,
    };

    // Ajouter le contact au tableau
    contacts.push(contact);

    // Mettre à jour l'affichage de la liste de contacts
    displayContacts();

    // Réinitialiser les champs de saisie
    nameInput.value = '';
    phoneInput.value = '';
    emailInput.value = '';
}

function displayContacts() {
    const contactList = document.getElementById('contactList');

    // Effacer la liste actuelle
    contactList.innerHTML = '';

    // Parcourir les contacts et les ajouter à la liste
    contacts.forEach(contact => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h2>${contact.name}</h2>
            <p>Téléphone: ${contact.phone}</p>
            <p>E-mail: ${contact.email}</p>
            <button onclick="deleteContact('${contact.name}')">Supprimer</button>
        `;
        contactList.appendChild(listItem);
    });
}

function deleteContact(name) {
    // Supprimer le contact du tableau en fonction du nom
    const index = contacts.findIndex(contact => contact.name === name);
    if (index !== -1) {
        contacts.splice(index, 1);
    }

    // Mettre à jour l'affichage de la liste de contacts
    displayContacts();
}

// Afficher les contacts initiaux au chargement
displayContacts();
