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
let overlay = document.querySelector('.overlay');
if (modal) {
  let firstInput = modal.querySelector('input');
  let modalClose = modal.querySelector('.modal__close');
  let close = modal.querySelector('.modal__close');

  if (buttonModal && firstInput && modalClose && close && overlay) {
    buttonModal.addEventListener('click', (evt) => {
      evt.preventDefault();
      modal.classList.add('modal__opened');
      overlay.classList.add('overlay__show');
      document.body.style.overflow = 'hidden';
      firstInput.focus();
      let closePopups = () => {
        modal.classList.remove('modal__opened');
        overlay.classList.remove('overlay__show');
        overlay.removeEventListener('click', modalsClickClose);
        document.removeEventListener('keydown', onFormEscKeydown);
        document.body.style.overflow = '';
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
    close.addEventListener('keydown', function (event) {
      if (event.code === 'Tab' && !event.shiftKey) {
        event.preventDefault();
        firstInput.focus();
      }
    });
  }
}

// localStorage

let formInputs = document.querySelectorAll('.form input, .form textarea');

if (formInputs) {
  formInputs.forEach((item) => {
    item.value = localStorage.getItem(item.getAttribute('id'));
    item.addEventListener('input', () => {
      localStorage.setItem(item.getAttribute('id'), item.value);
    });
  });
}

// Mask for phone inputs

let phone = document.querySelector('#user-phone');
let modalPhone = document.querySelector('#modal-user-phone');
let MASK_OPTIONS = {
  mask: '+{7}(000)0000000'
};
if (phone) {
  IMask(phone, MASK_OPTIONS);
}
if (modalPhone) {
  IMask(modalPhone, MASK_OPTIONS);
}
