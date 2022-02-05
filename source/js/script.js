'use strict';

// accordion

const accordionElements = document.querySelectorAll('.page-footer__accordion');
const accordionToggles = document.querySelectorAll('.page-footer__accordion h3');
const mobileScreen = window.matchMedia('(max-width: 767px)');

if (accordionElements) {
  for (let i = 0; i !== accordionElements.length; i++) {
    accordionElements[i].classList.remove('page-footer__accordion_nojs');
  }
}
if (accordionToggles) {
  for (let i = 0; i !== accordionToggles.length; i++) {
    accordionToggles[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      if (mobileScreen.matches) {
        let array = Array.from(accordionToggles);
        let index = array.indexOf(evt.target);
        accordionElements[index].classList.toggle('page-footer__accordion_active');

        array.forEach(function (item, j) {
          if (j !== index) {
            accordionElements[j].classList.remove('page-footer__accordion_active');
          }
        });
      }
    });
  }
}
