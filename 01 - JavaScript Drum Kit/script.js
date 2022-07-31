
const audioKeys = [65, 83, 68, 70, 71, 72, 74, 75, 76];

window.addEventListener('keydown', e => {
    if (audioKeys.includes(e.keyCode)) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        audio.pause();
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        audio.play();
        key.classList.toggle('playing');
    }
})

window.addEventListener('keyup', e => {
    if (audioKeys.includes(e.keyCode)) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        key.classList.toggle('playing');
    }
})