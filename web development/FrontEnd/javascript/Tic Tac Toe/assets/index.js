const Boxes = document.querySelectorAll(".Box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");


let currentPlayer ="X";
let gameGrid;

const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//let's create a function to initialize the game 
function initGame()
{
    currentPlayer="X";
    gameGrid = ["","","","","","","","",""];
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
    //to clear empty boxex in ui
    Boxes.forEach(function(Box){
        Box.innerText = "";
        Box.classList.remove('win');
        Box.style.pointerEvents ="all";
    })
}

initGame();

function swapPlayer()
{
    if(currentPlayer === "X")
    {
        currentPlayer = "O";
    }
    else
    {
        currentPlayer ="X";
    }
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function checkGameOver(){
//    for(let i=0;i<8;i++)
//    {
//         let flag = 0;
//         for(let j=0;j<3;j++)
//         {
//             let a = winningPositions[i][j];
//             if(gameGrid[a] != 'X')
//             {
//                 flag = 1;
//                 break;
//             }
//         }
//         if(flag === 0)
//         {
//             for(let k=0;k<3;k++)
//             {
//                 let p = winningPositions[i][k];
//                 Boxes[p].classList.add('win');
//             }
//             newGameBtn.classList.add('active');
//             return;
//         }
//    }
//    for(let i=0;i<8;i++)
//    {
//         let flag = 0;
//         for(let j=0;j<3;j++)
//         {
//             let a = winningPositions[i][j];
//             if(gameGrid[a] != 'O')
//             {
//                 flag = 1;
//                 break;
//             }
//         }
//         if(flag === 0)
//         {
//             for(let k=0;k<3;k++)
//             {
//                 let p = winningPositions[i][k];
//                 Boxes[p].classList.add('win');
//             }
//             newGameBtn.classList.add('active');
//             return;
//         }
//    }
    let answer=""; 
    winningPositions.forEach((position) => {

    if((gameGrid[position[0]] !== "" && gameGrid[position[1]] !== "" && gameGrid[position[2]] !== "")
    && ((gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])))
    {
        
        if(gameGrid[position[0]] === 'X')
        {
            answer = 'X';
        }
        else
        {
            answer = 'O';
        }
        Boxes.forEach((Box) => {
            Box.style.pointerEvents = "none";
        });
        Boxes[position[0]].classList.add("win");
        Boxes[position[1]].classList.add("win");
        Boxes[position[2]].classList.add("win");
    }
    });
    
    if(answer !== "")
    {
        newGameBtn.classList.add("active");
        gameInfo.innerText = `Winner is - ${answer}`;
    }

    let fillcount = 0;
    gameGrid.forEach((box) => {
        if(box != "")
        {
            fillcount++;
        }
    }) 
    if(fillcount === 9)
    {
        gameInfo.innerText = `Game is tie`;
        newGameBtn.classList.add("active");
    }
    
}

function handleClick(index)
{
    if(gameGrid[index] === "")
    {
        gameGrid[index] = currentPlayer;
        Boxes[index].innerText = currentPlayer;
        //swap the player
        swapPlayer();
        //cheak current player is winner or not
        checkGameOver();
    }
}

Boxes.forEach((Box,index) => {
    Box.addEventListener('click',()=>{
        handleClick(index);
    })
})

newGameBtn.addEventListener("click",initGame);