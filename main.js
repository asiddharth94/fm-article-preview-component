var shareIcon = document.querySelector('.share-icon-background');
var popup = document.querySelector('.action-state-popup');
var contactArea = document.querySelector('.card-content-contact');

shareIcon.addEventListener('click', function (event) {
   popup.classList.toggle("toggle-popup");
   shareIcon.classList.toggle("share-icon-background-transition");
   var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
});