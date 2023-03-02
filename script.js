let start = document.querySelector('.start')
let lab = document.querySelector('.container');
let alvo = document.querySelector('.target')

const height = document.documentElement.clientHeight;
const width = document.documentElement.clientWidth;


const gameStart = () => {


    for (i = 0; i < 3; i++) {
        let Y = Math.floor((Math.random() * height) + 1);
        let X = Math.floor((Math.random() * width) + 1);
        let target = document.createElement("div");

        target.classList.add('target')
        target.style.transform = `translate(${X}px, ${Y}px)`;
        lab.appendChild(target)
    }

    document.querySelectorAll('.target').forEach((target) => {
        target.onclick = () => {
            X = Math.floor((Math.random() * height));
            Y = Math.floor((Math.random() * width));
            target.style.transform = `translate(${Y}px, ${X}px)`;
        }
    })
}



start.onclick = () => {
    start.style.display = 'none';
    gameStart()
}
