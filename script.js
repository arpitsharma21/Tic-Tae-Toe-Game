console.log("Welcome to Tic Tac toe");

let music = new Audio("music.mp3");
let turnmusic = new Audio("ting.mp3");
let gameover = new Audio("game.mp3");
let isGameOver = false;

let turn = "X";

// function to change turns
const changeTurn = () =>{
    return turn ==='X'?"0":"X";
}

// Function to check winner
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxContent');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    console.log(isGameOver)
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isGameOver = true;
            document.querySelector('.imgbox').style.width = "200px";
            console.log("Game is over");
        }
    })
}

// game Logic
let boxes = document.getElementsByClassName('box');  //It returns html collection so we use array.from
Array.from(boxes).forEach(element =>{
    //1 box is stored in boxText now
    let boxText = element.querySelector('.boxContent');
    element.addEventListener('click',()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            turnmusic.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName('info')[0].innerText = "Turn for "+ turn;
            }
        }
    })
})

//Add onclick listener to reset button
reset.addEventListener('click',()=>{
    let boxText = document.querySelectorAll('.boxContent');
    Array.from(boxText).forEach(element =>{
        element.innerText = "";
    })
    turn = "X";
    isGameOver = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for "+ turn;
    document.querySelector('.imgbox').style.width = "0";
})