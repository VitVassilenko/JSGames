"use strict";
const cells = document.querySelectorAll('.cell'),
      button1 = document.getElementById('1_player'),
      button2 = document.getElementById('2_player'),
      button3 = document.getElementById('new_game');

 
let field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    player = 1,
    counter = 1,
    goals = {
        'goal_1': 0,
        'goal_2': 0,
    };

function changeGoals () {
    goals[`goal_${player}`]++;
    document.querySelector(`.goal_${player}`).textContent = goals[`goal_${player}`];
}
    
function playerClick () {
    cells.forEach((cell, i) => {
        cell.addEventListener('click', (e) => {
        let y = i%3;
        let x = (i-y)/3;
        if (field[x][y] == 0) {
            field[x][y]=player;
            cell.classList.add(`player_${player}`); 
            console.log(field);
            counter++;
            document.querySelector('.counter').textContent = counter;
            if (checkWin()) {
                    confirm2(`Победил игрок ${player}`, 'alert');
                    changeGoals();
                    let ans = confirm2('Начать новую игру?');
                    console.log(ans);
                    if (ans == true) {
                        clearAll();
                    }
                }
                if (player == 1) {
                player = 2; 
                } else {
                    player = 1;
                }
            if (counter == 10) {
                let ans = confirm2('Ничья! Начать новую игру?');
                console.log(ans);
                if (ans == true) {
                    clearAll();
                } 
            }
        }
        });
    }
    );
}

function checkWin () {
    if (field[0][0]!== 0 && field[0][0] == field[0][1] && field[0][0] == field[0][2]) {
        return true;
    } else if (field[1][0]!== 0 && field[1][0] == field[1][1] && field[1][0] == field[1][2]) {
        return true;
    } else if (field[2][0]!== 0 && field[2][0] == field[2][1] && field[2][0] == field[2][2]) {
        return true;
    } else if (field[0][0]!== 0 && field[0][0] == field[1][0] && field[0][0] == field[2][0]) {
        return true;
    } else if (field[0][1]!== 0 && field[0][1] == field[1][1] && field[0][1] == field[2][1]) {
        return true;
    } else if (field[0][2]!== 0 && field[0][2] == field[1][2] && field[0][2] == field[2][2]) {
        return true;
    } else if (field[0][0]!== 0 && field[0][0] == field[1][1] && field[0][0] == field[2][2]) {
        return true; 
    } else if (field[0][2]!== 0 && field[0][2] == field[1][1] && field[0][2] == field[2][0]) {
        return true;
    } else {
        return false;
    }
}

async function confirm2 (question, type = 'confirm') {
    let modalBlock = document.querySelector('.modal'),
        ok = document.querySelector('.confirm_1'),
        cancel = document.querySelector('.confirm_2');
    modalBlock.querySelector('p').textContent = question;
    if (type == 'alert') {
        cancel.classList.add('hide');
    } else {
        cancel.classList.remove('hide');
    }
    modalBlock.classList.remove('hide');
    ok.addEventListener('click', (e) => {
        modalBlock.classList.add('hide');
        // console.log(true);
        clearAll();
        return true;
    });
    cancel.addEventListener('click', (e) => {
        modalBlock.classList.add('hide');
        return false;
    });

}

function clearAll () {
    cells.forEach((cell) =>{
        cell.classList.remove(`player_1`);
        cell.classList.remove(`player_2`);
    });
    field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    counter = 1;
    document.querySelector('.counter').textContent = counter;
}



playerClick();
button3.addEventListener('click', clearAll);