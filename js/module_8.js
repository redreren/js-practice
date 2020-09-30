// let card = document.querySelector('.card');

// const cardChange = (e) => {
//     e.preventDefault();
//     console.log(e.target.nodeName);
//     e.target.nodeName === "IMG"
//     ? (e.target.src = "https://picsum.photos/200")
//     : e.target.nodeName === "LI"
//     ? (e.target.style.background = "black")
//     : e.target.nodeName === "H3"
//     ? (e.target.textContent = "Bye-bye!")
//     : "";
// }

// card.addEventListener('click', cardChange);

// ---------------------------

// let card = document.querySelector('ul');

// const cardChange = (e) => {
//     e.preventDefault();
//     e.target.nodeName === "IMG"
//     ? (e.target.src = "https://picsum.photos/300")
//     : e.target.nodeName === "H3"
//     ? (e.target)
//     : e.target.nodeName === "BUTTON"
//     ? (e.target)
//     : "";
// }

// card.addEventListener('click', cardChange);

// ---------------------

// import gallery from './gallery.js';

// const body = document.querySelector('body');

// gallery.map(el=> {
//   body.innerHTML += `<img width="300" src="${el.src}" data-src="${el.data}"  class="imgs" id="${el.id}">`
// })

// window.onload = () => {

// const options = {
//   root: null,
//   rootMargin: '0px 0px -60px 0px',
//   threshold: 1,
// }

// const observer = new IntersectionObserver((entries) => {
//   // для каждой записи-целевого элемента
//   console.log(entries);
//   entries.forEach(entry => {
//       // если элемент является наблюдаемым
//       entry.isIntersecting ? entry.target.src = entry.target.dataset.src: '';
//       // entry.isIntersecting ? console.log(entry.target.src) : '';
//   })
// }, options);

// let images = document.querySelectorAll('.imgs');

// images.forEach(el=> {
//   observer.observe(el)
// })
// }

// ---------------------

// import {sayHi, sayBye} from './greeting.js';
// console.log(sayHi('John'));

import * as greeting from './greeting.js';
console.log(greeting.sayHi('John'))

