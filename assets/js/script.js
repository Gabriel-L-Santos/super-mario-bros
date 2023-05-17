const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

// Reproduz o som da fase
const level = document.getElementById('level');
level.play();

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);

    // Reproduz o som de pulo
    const soundtrack = document.getElementById('soundtrack');
    soundtrack.play();
}

const loop = setInterval(() => {

        console.log('loop');

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/images/game-over.png';

        // Reproduz som de game over
        const gameover = document.getElementById('gameover');
        gameover.play();
        level.pause();

        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);

        // Pausa a trilha sonora
        const soundtrack = document.getElementById('soundtrack');
        soundtrack.pause();
        soundtrack.currentTime = 0; // Reinicia a reprodução para o início da trilha sonora
    }

}, 10);

document.addEventListener('keydown', jump);