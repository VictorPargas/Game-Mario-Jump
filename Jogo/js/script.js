const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

setTimeout(() => {

    mario.classList.remove('jump');
}, 500)
}

const loop = setInterval(() =>{

console.log('loop')

const batataDoce = pipe.offsetLeft;
const marioposition = +window.getComputedStyle(mario).bottom.replace('px','');


console.log(marioposition);

if (batataDoce <= 120 && batataDoce > 0 &&  marioposition < 80)  {

    pipe.style.animation = 'none';
    pipe.style.left = `${batataDoce}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioposition}px`;

    mario.src = './game-over.png';
    mario.style.widht = '75px'
    mario.style.marginLeft = '50px'

    clearInterval(loop);

}


}, 10);



document.addEventListener('keydown', jump);