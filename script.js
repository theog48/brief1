document.getElementById("revealSecret").addEventListener("click", function() {
    document.getElementById("secretText").style.display = "block";
});
// Récupère l'élément de la modale et l'image
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.getElementById('close-btn');

// Sélectionne toutes les images de la galerie 
const images = document.querySelectorAll('.galerie__item');

images.forEach(image => {
image.addEventListener('click', function() {
    modal.style.display = 'block';
    modalImage.src = image.src;
});
});
closeBtn.addEventListener('click', function() {
modal.style.display = 'none';
});
window.addEventListener('click', function(event) {
if (event.target === modal) {
    modal.style.display = 'none';
}
});
document.getElementById('contact__form').addEventListener('submit', function(event) {
    event.preventDefault();  // Empêche l'envoi du formulaire pour vérifier les champs

    // Récupération des valeurs des champs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessages = document.getElementById('errorMessages');

    // Réinitialisation des messages d'erreur
    errorMessages.innerHTML = '';
    let isValid = true;

    // Validation du champ "Nom"
    if (name === '') {
        isValid = false;
        errorMessages.innerHTML += "<p>Le champ 'Nom' est obligatoire.</p>";
    }

    // Validation du champ "Email"
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
        isValid = false;
        errorMessages.innerHTML += "<p>Le champ 'Email' est obligatoire.</p>";
    } else if (!emailPattern.test(email)) {
        isValid = false;
        errorMessages.innerHTML += "<p>Veuillez entrer un email valide.</p>";
    }

    // Validation du champ "Message" (doit contenir au moins 50 caractères)
    if (message.length < 50) {
        isValid = false;
        errorMessages.innerHTML += "<p>Le message doit contenir au moins 50 caractères !</p>";
    }

    // Si le formulaire est valide, il peut être soumis
    if (isValid) {
        alert("Formulaire soumis avec succès !");
    }
});
