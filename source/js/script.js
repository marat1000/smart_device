'use strict';

// Accordion in the footer

const accordionItems = document.querySelectorAll('.page-footer__accordion');
const accordionToggles = document.querySelectorAll('.page-footer__accordion h3');
const mobileScreen = window.matchMedia('(max-width: 767px)');

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
