"use strict";

const mainBlock = document.querySelector('.main__block'),
      blocks = document.querySelectorAll('.mini__block'),
      newBtn = document.querySelector('.new'),
      cancBtn = document.querySelector('.cancel');

let score = document.querySelector('.score-number'),
    highScore = document.querySelector('.high-number'),
    question = document.querySelector('.question'),
    field = [[0, 0, 2, 0], [0, 4, 0, 0], [16, 0, 0, 0], [0, 0, 0, 0]];

document.addEventListener('keydown', (e) => {
    e.preventDefault();
    // console.log(e);
    if (e.key == 'ArrowDown') {
        console.log(e);
    } else if (e.key == 'ArrowUp') {
        console.log(e);
    } else if (e.key == 'ArrowLeft') {
        console.log(e);
    } else if (e.key == 'ArrowRight') {
        console.log(e);
    } else {

    }
});

function blocksRender() {
    for (let i=0; i<4; i++) {
        for (let j=0; j<4; j++) {
            let index = i*4+j;
            let block = blocks[index];
            block.className = 'mini__block';
            if (field[i][j] == 0) {
                console.log(field[i][j] == 0);
                block.innerHTML = '';
            } else {
                block.innerHTML = `<span class="number">${field[i][j]}</span>`;
                block.classList.add(`num-${field[i][j]}`);
            }
        }
    }
}

function randomizer () {
    let randIndex = Math.floor(Math.random()*16),
        i = (randIndex - randIndex%4) /4,
        j = randIndex%4,
        index = i*4+j,
        block = mainBlock.querySelectorAll('.mini__block')[index];
        if (field[i][j] == 0) {
            field[i][j] = 2;
            block.innerHTML = `<span class="number">2</span>`;
            block.classList.add(`num-${field[i][j]}`);
        } else {
            randomizer();
        }
}

document.addEventListener('click', (e) =>{
    let target = e.target;
    if (target==newBtn) {
        document.querySelector('.main__block').innerHTML='';
        for (let i = 0; i <= 15; i++) {
            // let newBlock = document.createElement('DIV');
            // newBlock.classList.add('mini__block');
            mainBlock.insertAdjacentHTML('afterbegin','<div class="mini__block"><span class="number"></span></div>');
        }
       
    }
     
    randomizer();
});

blocksRender();