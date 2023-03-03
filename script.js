let start = document.querySelector('.start')
let lab = document.querySelector('.container');
let alvo = document.querySelector('.target')

let time = document.querySelector('#time');
let hits = document.querySelector('#shots')
let accuracy = document.querySelector('#accuracy');

let s = 1;
let m = 0;
let acc = 100;
const height = window.innerHeight;
const width = window.innerWidth;


const init= () => {
    s = 1;
    m = 0;
    start.style.display = 'none';
    gameStart()
    startCount(59)
}

const gameStart = () => {

    for (i = 0; i < 3; i++) {
        let Y = Math.floor(100 + Math.random() * height / 2);
        let X = Math.floor(300 + Math.random() * width/2);
        let target = document.createElement("div");

        target.classList.add('target')
        target.style.transform = `translate(${X}px, ${Y}px)`;
        lab.appendChild(target)
    }

    document.querySelectorAll('.target').forEach((target) => {
        target.onclick = () => {
            shoot(target)
        }
        target.ondragstart = () => {
            shoot(target)
        }
    })
    lab.onclick = misses
    hits.innerHTML = `Targets hitted: 0`
}

const startCount = (i) =>{
    let timer = setInterval(() =>{
        time.innerHTML = `Time: ${i--}`;
        if (i == 0){
            clearInterval(timer)
            endgame()
        }
    }, 1000);
}

const endgame = () =>{
    start.style.display = 'block';
    document.querySelectorAll('.target').forEach((target) => {target.remove()})
    
    alert(`voce acertou ${s-1} alvos e errou ${m-1-s} tiros`)
    lab.onclick = () =>{return false}
}
const shoot = (target) =>{
    X = Math.floor(width/3 + Math.random() * width/3);
    Y = Math.floor(height/3 + Math.random() * height / 4);
    console.log(X, Y)
    target.style.transform = `translate(${X}px, ${Y}px)`;

    var audio = new Audio('./media/shoot.mp3');
    audio.play();
    
    hits.innerHTML = `Targets hitted: ${s}`
    s++

}
const misses = () =>{
    m++;
    accuracy.innerHTML = `Accuracy = ${ Math.round(100 +(s/m-1)*100).toFixed(0)}%`
}

start.onclick = init
