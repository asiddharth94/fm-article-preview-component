var shareIcon = document.querySelector('.share-icon-background');
var popup = document.querySelector('.action-state-popup');

shareIcon.addEventListener('click', function (event) {
   popup.classList.toggle("toggle-popup");
});