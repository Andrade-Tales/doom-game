const slayer = document.querySelector('.slayer');
const monster = document.querySelector('.monster');

const jump = () =>{
    slayer.classList.add('jump');

    setTimeout(() => {
        slayer.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const monsterPosition = monster.offsetLeft;
    const slayerPosition = +window.getComputedStyle(slayer).bottom.replace('px', '');

if (monsterPosition <= 120 && monsterPosition > 0 && slayerPosition < 80){

    monster.style.animation = 'none';
    monster.style.left = `${monsterPosition}px`;

    slayer.style.animation = 'none';
    slayer.style.bottom = `${slayerPosition}px`;

    slayer.src = './images/game-over2.webp';
    slayer.style.width = '140px'
    slayer.style.marginLeft = '50px'

    clearInterval(loop);

}

}, 10);

document.addEventListener('keydown', jump);