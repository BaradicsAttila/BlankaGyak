import './style.css'

const dino: HTMLDivElement = document.querySelector('.dino') as HTMLDivElement;
const grid: HTMLDivElement = document.querySelector('.grid') as HTMLDivElement;
const alert: HTMLHeadingElement = document.querySelector('#alert') as HTMLHeadingElement;

let position: number = 30;
let gravity: number = 9.81;
let isJumping: boolean = false;
let isGameOver: boolean = false;
let score: number = 0;

document.addEventListener('keyup', (event) => {
    if (event.code == "Space") {
        if (!isJumping) {
            isJumping = true;
            Jump()
        }
    }
});

function Jump():void{
    let jumptimer: number = setInterval(() => {
        if (position >= 200) {
            clearInterval(jumptimer);
            let downtimer: number = setInterval(() => {
                if (position <= 30) {
                    clearInterval(downtimer);
                    isJumping = false
                }
                position -= 5;
                dino.style.bottom = position + 'px';
                position--;

            }, gravity);
        }
        position += 5;
        dino.style.bottom = position + 'px';
        position++;

    }, gravity);
}