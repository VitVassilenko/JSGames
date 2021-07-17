"use strict";

let field = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
];
let typeField = [],
    number = '1',
    erase = false,
    check=true;

const miniBlocks = document.querySelectorAll('.miniBlock');
      
async function gridFix () {
    miniBlocks.forEach((miniBlock, index)=>{
        let i = (index - index%9)/9;
        let j = index%9;
        if (i == 3) {
            miniBlock.style.marginTop = '4px';
        }
        if (i == 6) {
            miniBlock.style.marginTop = '4px';
        }
        if (j == 2) {
            miniBlock.style.marginRight = '3px';
        }
        if (j == 6) {
            miniBlock.style.marginLeft = '3px';
        }
    });
}
gridFix();

function inputNumbers(){
    miniBlocks.forEach((miniBlock, index)=>{
        let i = (index - index%9)/9;
        let j = index%9;
        miniBlock.addEventListener('click',()=>{
            if(!erase){
                let bool = true;
                if (miniBlock.classList.contains('const')) {
                    alert('Вы не можете изменить эту цифру!');
                    bool=false;
                } else {
                    for(let ii=0;ii<9;ii++){
                    if(field[i][ii]==number){
                        alert(`Поле ${(i)}:${(ii)} занято таким же числом`);
                        bool =false;
                    }
                    console.log(field[i][j]);
                }
                for(let jj=0;jj<9;jj++){
                    if(field[jj][j]==number){
                        alert(`Поле ${(jj)}:${(j)} занято таким же числом`);
                        bool =false;
                    }
                }
                }
                if(bool){

                    field[i][j]=number;
                    miniBlock.textContent = number;
                    console.log(field);
                }

            }else{
                if (miniBlock.classList.contains('const')) {
                    alert('Вы не можете удалить эту цифру!');
                } else {
                    field[i][j]=0;
                    miniBlock.textContent = '';
                    console.log(field);
                }
            }
        });
    });
    const buttons = document.querySelectorAll('.number');
    buttons.forEach((elm)=>{
        elm.addEventListener('click',(event)=>{
            number=elm.textContent;
            document.querySelector('.choisen').classList.remove('choisen');
            event.target.classList.add('choisen');
            if (erase) {
                eraseElm.classList.toggle('eraseOn');
                erase=false;
            } 
        });
    });
    const eraseElm = document.querySelector('.erase');
    eraseElm.addEventListener('click',()=>{
        erase=!erase;
        eraseElm.classList.toggle('eraseOn');
    });
}


async function randomizer() {
    // let r = 0;
    for (let r = 1; r <= 35; r++) {
        let randIndex = Math.floor(Math.random()*80),
              randNum = Math.ceil(Math.random()*9);
        console.log(randIndex);
        console.log(randNum);
        let i = (randIndex - randIndex%9) /9;
        let j = randIndex%9;
        let check = true;
        if (field[i][j] == 0) {
            field[i][j] = randNum;
            document.querySelector(`.miniBlock${randIndex}`).textContent = randNum;
            document.querySelector(`.miniBlock${randIndex}`).classList.add('const');
            for(let jj=0;jj<9;jj++){
                if(field[jj][j] == randNum) {
                    check = false;
                    console.log(`Совпадение на шаге${r} линии${jj}`);
                }
            }

            for(let ii=0;ii<9;ii++){
                if(field[i][ii] == randNum) {
                   check = false;
                    console.log(`Совпадение на шаге${r} строки${ii}`);
                }
            } 
            } else {
                check = false;
                console.log(`Занято на шаге номер${r}`);
        }
        if (check) {
            return r-1 ;
        }
        console.log(`Step:${r} cell:${i}|${j} value:${field[i][j]}`);
    }
}


function checking (num) {
    for (let i=0; i<9; i++) {
        for (let j=0; j<9; j++) {
        if (field[i][j] == 0) {
            return true;
        } else {
            return false;
        }
    }
    }
    
}

console.log(check);

randomizer();
inputNumbers();
// checking();
// check = checking();
// console.log(check);