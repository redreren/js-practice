// const hello = document.querySelector('.hello');
// hello.textContent = "Shalom!";
// hello.classList.add('greeting', 'gooloogooloo');
// hello.classList.remove('hello');
// hello.classList.toggle('greeting');
// hello.classList.toggle('greeting');
// console.log(hello.textContent);
// console.log(hello.classList);
// let body = document.querySelector('body');
// body.style.background = 'purple';
// let body = document.querySelector('body');
// for (let index = 0; index < 10; index++) {
//     const tittle = document.createElement('ul');
//     tittle.textContent = 'TITTLE';
//     tittle.style.color = 'red';
//     // body.append(tittle);
//     body.prepend(tittle);
//   }
// let arr = [ 'no', 'simp', 'september'];
// for (let index = 0; index < arr.length; index++) {
//   const tittle = document.createElement('h3');
//   tittle.textContent = arr[index];
//   setInterval(() => {
//        tittle.style.color = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
//        tittle.style.transform = `translate(${Math.floor(Math.random()*10)}px, ${Math.floor(Math.random()*10)}px)`
//      }, 500);
//   body.append(tittle);
//   // body.prepend(tittle);
// }
// for (let index = 0; index < 10; index++) {
//   const image = document.createElement('img');
//   image.setAttribute('src', 'https://picsum.photos/200/300');
//   // body.append(tittle);
//   body.prepend(image);
// }

// const body = document.querySelector('body');

// for(let i = 0; i < 3; i += 1) {
//     const btn = document.createElement('button');
//     btn.classList.add('colored');
//     // console.log(btn);
//     body.append(btn);
//     const randomColor = `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`

//     btn.textContent = 'SOME COLOR';
//     btn.style.background = randomColor;
//     btn.style.margin = '50px';
// }
// const buttonList = document.querySelectorAll('.colored');
// const btn1 = buttonList[0];
// const btn2 = buttonList[1];
// const btn3 = buttonList[2];

// btn1.addEventListener('click', (e) => body.style.background = e.target.style.background);
// btn2.addEventListener('click', (e) => body.style.background = e.target.style.background);
// btn3.addEventListener('click', (e) => body.style.background = e.target.style.background);

// --------------

// const body = document.querySelector('body');

// for(let i = 0; i < 10; i += 1) {
//     const cube = document.createElement('div');
//     cube.classList.add('cube');
//     cube.textContent = i;
//     body.append(cube);

//     // cube.addEventListener('click', () => {
//     //     alert(cube.textContent);
//     // })
// }

// body.addEventListener('click', (e) => {
//     alert(e.target.textContent);
// })

// ------------------

// let form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     console.log(e.target[0].value);
// })

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     console.log(e.target.value)

//     console.log(`Welcome, ${e.target[0].value} from ${e.target[1].value}`)
// })

// ------------------------------

// let input = document.querySelector('.input');

// input.addEventListener('focus', () => {
//     console.log('INPUT IS IN FOCUS');
// })

// input.addEventListener('blur', () => {
//     console.log('INPUT HAS BEEN BLURED');
// })

// input.addEventListener('input', (e) => {
//     console.log(e.target.value)
// })

// input.addEventListener('change', (e) => {
//     console.log(e.target.value);
// })

// let body = document.querySelector('body');

// body.addEventListener('keypress', (e) => {
//     console.log(e.key);
// })

//--------------------------------

