"use strict";
const cell = document.querySelectorAll('.cell');

cell.forEach((item,i) =>{
    item.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
});
});
