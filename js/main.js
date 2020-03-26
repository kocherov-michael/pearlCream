// var buttonElement = document.querySelector('[data-add-button]')
var cartElement = document.querySelector('[data-cart]')
var closeCrossElement = document.querySelector('[data-close-cross]')
var closeButtonElement = document.querySelector('[data-close-button]')

document.querySelector('[data-add-button]').addEventListener('click', function () {document.querySelector('[data-cart]').classList.add('cart--show')})
document.querySelector('[data-close-cross]').addEventListener('click', function () {document.querySelector('[data-cart]').classList.remove('cart--show')})
document.querySelector('[data-close-button]').addEventListener('click', function () {document.querySelector('[data-cart]').classList.remove('cart--show')})
