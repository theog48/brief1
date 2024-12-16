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