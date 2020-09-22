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

let card = document.querySelector('ul');

const cardChange = (e) => {
    e.preventDefault();
    e.target.nodeName === "IMG"
    ? (e.target.src = "https://picsum.photos/300")
    : e.target.nodeName === "H3"
    ? (e.target)
    : e.target.nodeName === "BUTTON"
    ? (e.target)
    : "";
}

card.addEventListener('click', cardChange);