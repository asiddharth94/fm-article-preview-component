var shareIcon = document.querySelector('.share-icon-background');
var popup = document.querySelector('.action-state-popup');
var popupTriangle = document.querySelector('.action-state-popup-triangle');
var cardContactContent = document.querySelector('.card-content-contact');
var avatar = document.querySelector('.avatar');
var contactInfo = document.querySelector('.card-content-contact-info');
// var mobileActionState = document.querySelector('.mobile-action-state-popup');

shareIcon.addEventListener('click', function (event) {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if(isMobile) {
        popup.classList.add('mobile-action-state-popup');
        shareIcon.classList.toggle('mobile-share-icon-action-state');
        popupTriangle.classList.toggle("toggle-display");
    }
   popup.classList.toggle("toggle-display");
   shareIcon.classList.toggle("share-icon-background-transition");
});