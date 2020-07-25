//Select element function
const selectElement = function (element) {
  return document.querySelector(element);
};

let menuToggler = selectElement('.menu_toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
  body.classList.toggle('open');
})
