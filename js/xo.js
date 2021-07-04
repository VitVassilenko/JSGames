"use strict";
const cells = document.querySelectorAll('.cell'),
      button1 = document.getElementById('1_player'),
      button2 = document.getElementById('2_player'),
      button3 = document.getElementById('new_game');

 
let field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    player = 1,
    counter = 1;

    
function playerClick () {
    cells.forEach((cell, i) => {
        cell.addEventListener('click', (e) => {
        let y = i%3;
        let x = (i-y)/3;
        if (field[x][y] == 0) {
            field[x][y]=player;
            cell.classList.add(`player_${player}`);
            if (checkWin()) {
                alert(`Победил игрок ${player}`);
                let ans = confirm('Начать новую игру?');
                if (ans) {
                    clearAll();
                } else {
                    alert('Новая игра!');
                    clearAll();
                }
            }
            if (player == 1) {
               player = 2; 
            } else {
                player = 1;
            }
        } 
        console.log(field);
        counter++;
        document.querySelector('.counter').textContent = counter;
        if (counter == 10) {
            let ans = confirm('Ничья! Начать новую игру?');
            if (ans) {
                clearAll();
            } else {
                clearAll();
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



function clearAll () {
    cells.forEach((cell) =>{
        cell.classList.remove(`player_1`);
        cell.classList.remove(`player_2`);
    });
    field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    player = 1;
    counter = 1;
    document.querySelector('.counter').textContent = counter;
}



playerClick();
button3.addEventListener('click', clearAll);