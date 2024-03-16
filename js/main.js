isResize('.header__img', '.header__wrapper', '.header__mob', 850);
isResize('.who__img', '.who__content', '.who__mob', 768);

window.addEventListener('resize', () => {
  isResize('.header__img', '.header__wrapper', '.header__mob', 850);
  isResize('.who__img', '.who__content', '.who__mob', 768);
});

function isAccordion() {
  const accoreonAll = document.querySelectorAll('.plans__item');

  accoreonAll.forEach((item) => {
    const accoreonBtn = item.querySelector('.plans__item-header-btn');
    accoreonBtn.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
}

isAccordion();

//modal

function isModal() {
  let modalBtns = document.querySelectorAll('.modal__btn');

  if (modalBtns.length > 0) {
    for (let modalBtn of modalBtns) {
      modalBtn.addEventListener('click', function () {
        let modalBtnData = modalBtn.getAttribute('data-modal-src');
        let modalWindow = document.querySelector(`*[data-modal-window="${modalBtnData}"]`);
        let body = document.querySelector('body');

        if (modalWindow) {
          modalWindow.classList.add('active');
          body.classList.add('lock');
        }
      });
    }
  }
}

function isModalClose() {
  let modalCloseBtns = document.querySelectorAll('.modal__btn-close');
  if (modalCloseBtns.length > 0) {
    for (let modalCloseBtn of modalCloseBtns) {
      modalCloseBtn.addEventListener('click', function () {
        let modalWindow = modalCloseBtn.closest('*[data-modal-window]');
        let body = document.querySelector('body');

        modalWindow.classList.remove('active');
        body.classList.remove('lock');
      });
    }
  }
}

isModal();
isModalClose();
