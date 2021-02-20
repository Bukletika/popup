let showPopupButton = document.querySelector('#show-popup');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');


function togglePopup(event) {
  event.preventDefault();
  popup.classList.toggle('popup_is-opened');
}

showPopupButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);


// Закрытие по клику на затемненную область
popup.addEventListener('click', togglePopup);
document.querySelector('.popup__content').addEventListener('click', function (event) {
  event.stopPropagation();
});


