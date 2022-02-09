'use strict';

// Accordion in the footer

let accordionItems = document.querySelectorAll('.page-footer__accordion');
let accordionToggles = document.querySelectorAll('.page-footer__accordion h3');
let mobileScreen = window.matchMedia('(max-width: 767px)');

if (accordionItems) {
  for (let i = 0; i !== accordionItems.length; i++) {
    accordionItems[i].classList.remove('page-footer__accordion_nojs');
  }
}
if (accordionToggles) {
  for (let i = 0; i !== accordionToggles.length; i++) {
    accordionToggles[i].addEventListener('click', function (evt) {
      if (mobileScreen.matches) {
        let array = Array.from(accordionToggles);
        let index = array.indexOf(evt.target);
        accordionItems[index].classList.toggle('page-footer__accordion_active');
        array.forEach(function (item, j) {
          if (j !== index) {
            accordionItems[j].classList.remove('page-footer__accordion_active');
          }
        });
      }
    });
  }
}

// Modal

let buttonModal = document.querySelector('.page-header button');
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal__close');
let overlay = document.querySelector('.overlay');

buttonModal.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('modal__opened');
  overlay.classList.add('overlay__show');
  let closePopups = () => {
    modal.classList.remove('modal__opened');
    overlay.classList.remove('overlay__show');
    overlay.removeEventListener('click', modalsClickClose);
    document.removeEventListener('keydown', onFormEscKeydown);
  };
  modalClose.addEventListener('click', () => {
    closePopups();
  });
  let onFormEscKeydown = (event) => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      event.preventDefault();
      closePopups();
    }
  };
  document.addEventListener('keydown', onFormEscKeydown);
  let modalsClickClose = (event) => {
    event.preventDefault();
    closePopups();
  };
  overlay.addEventListener('click', modalsClickClose);
});

// localStorage

let formInputs = document.querySelectorAll('.form input, .form textarea');

formInputs.forEach((item) => {
  item.value = localStorage.getItem(item.getAttribute('id'));
  item.addEventListener('input', () => {
    localStorage.setItem(item.getAttribute('id'), item.value);
  });
});

