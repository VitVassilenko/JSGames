"use strict";
const cell = document.querySelectorAll('.cell'),
      button1 = document.getElementById('1_player'),
      button2 = document.getElementById('2_player'),
      button3 = document.getElementById('new_game');

function Oplay () {
    cell.forEach((item) =>{
        item.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.target);
        item.lastElementChild.classList.add ("visible");
        item.firstElementChild.classList.remove("visible");
    });
    });
}

function Xplay () {
    cell.forEach((item) =>{
        item.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.target);
        item.firstElementChild.classList.add ("visible");
        item.lastElementChild.classList.remove("visible");
    });
    });
}

function clearAll () {
    cell.forEach((item) =>{
        item.firstElementChild.classList.remove("visible");
        item.lastElementChild.classList.remove("visible");
    });
}



button1.addEventListener('click', Oplay);
button2.addEventListener('click', Xplay);
button3.addEventListener('click', clearAll);