'strict mode';

let headerWrapper = document.querySelector('.page-header__wrapper');
let menu = document.querySelector('.page-header__toggle');
let navList = document.querySelector('.main-nav__list');

navList.classList.remove('main-nav__list--nojs');
navList.classList.remove('main-nav__list--opened');
headerWrapper.classList.remove('page-header__wrapper--nojs');

menu.addEventListener('click', () => {
  navList.classList.toggle('main-nav__list--opened');
  menu.classList.toggle('page-header__toggle--closed');
});


let buttonPopup = document.querySelectorAll('.button--popup');
let popupForm = document.querySelector('.popup-form__form');
let success = document.querySelector('.popup-success');
let popupClose = document.querySelectorAll('.popup-form__close');
let modals = document.querySelector('.modals');

buttonPopup.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    popupForm.style.display = 'block';
    let openSuccess = (evt) => {
      evt.preventDefault();
      popupForm.style.display = 'none';
      success.style.display = 'flex';
    };
    let closePopups = () => {
      popupForm.style.display = 'none';
      success.style.display = 'none';
      document.removeEventListener('click', modalsClickClose, {capture: true});
      popupForm.removeEventListener('submit', openSuccess);
      document.removeEventListener('keydown', onFormEscKeydown)
    }
    popupForm.addEventListener('submit', openSuccess);
    popupClose.forEach((item) => {
      item.addEventListener('click', () => {
        closePopups()
      });
    });
    let onFormEscKeydown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        closePopups()
      }
    };
    document.addEventListener('keydown', onFormEscKeydown);
    let modalsClickClose = (evt) => {
      if (!(modals.compareDocumentPosition(evt.target) === 20)) {
        evt.preventDefault();
        evt.stopPropagation();
        closePopups()
      }
    };
    document.addEventListener('click', modalsClickClose, {capture: true});
  });
});


let tabsItems = document.querySelectorAll('.tabs__item');
let catalogItems = document.querySelectorAll('.catalog__item');
let tabs = document.querySelector('.tabs');

document.addEventListener('click', (evt) => {
  let i = 0;
  while (i !== tabsItems.length && !(evt.target.getAttribute('href') === tabsItems[i].getAttribute('href'))) {
    i++;
  }
  if (i !== tabsItems.length) {
    if (tabs.compareDocumentPosition(evt.target) === 20) {
      evt.preventDefault();
    }
    tabsItems[i].classList.add('tabs__item--active');
    i = 0;
    while (i !== tabsItems.length && !tabsItems[i].classList.contains('tabs__item--active')) {
      i++;
    }
    tabsItems[i].classList.remove('tabs__item--active');
    i = 0;
    while (i !== catalogItems.length && !catalogItems[i].classList.contains('catalog__item--active')) {
      i++;
    }
    catalogItems[i].classList.remove('catalog__item--active');
    document.querySelector(evt.target.getAttribute('href')).classList.add('catalog__item--active');
  }
})


let formInputs = document.querySelectorAll('.form__input');

formInputs.forEach((item) => {
  item.value = localStorage.getItem(item.getAttribute('id'));
  item.addEventListener('input', () => {
    localStorage.setItem(item.getAttribute('id'), item.value);
  });
});

