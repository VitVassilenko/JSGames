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
let typeField = [];
let number = '1';
let erase = false;

function inputNumbers(){
    const miniBlocks = document.querySelectorAll('.miniBlock');
    miniBlocks.forEach((miniBlock,index)=>{
        let i = (index- index%9)/9;
        let j = index%9;
        miniBlock.addEventListener('click',()=>{
            if(!erase){
                let bool = true;
                for(let ii=0;ii<9;ii++){
                    if(field[i][ii]==number){
                        alert(`Поле ${(i)} ${(ii)} занято таким же числом`);
                        bool =false;
                    }
                    console.log(field[i][j]);
                }
                if(bool){

                    field[i][j]=number;
                    miniBlock.textContent = number;
                    console.log(field);
                }

            }else{
                 field[i][j]=0;
                miniBlock.textContent = '';
                console.log(field);
            }
        });
    });
    const buttons = document.querySelectorAll('.number');
    buttons.forEach((elm)=>{
        elm.addEventListener('click',(event)=>{
            number=elm.textContent;
            document.querySelector('.choisen').classList.remove('choisen');
            event.target.classList.add('choisen');
        });
    });
    const eraseElm = document.querySelector('.erase');
    eraseElm.addEventListener('click',()=>{
        erase=!erase;
        eraseElm.classList.toggle('eraseOn');
    });
}
inputNumbers();
