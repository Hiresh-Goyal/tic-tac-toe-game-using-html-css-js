let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let turn = document.querySelector("#turn");

let turnO = true;

const winning = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const checkWinner = () =>



boxes.forEach((box) =>
    {
        box.addEventListener("click",() =>
        {
            if(turnO)
            {
                box.innerText = "O";
                turn.innerText = "It is X's turn";
                turnO = false;
            }
            else
            {
                box.innerText = "X";
                turn.innerText = "It is O's turn";
                turnO = true;
            }
            box.disabled = true;
        })
    })

resetbtn.addEventListener("click",() =>
{
    boxes.forEach((box) =>
    {
        box.innerText = "";
        box.disabled = false;
    })
    turn.innerText = "It is O's turn";
    turnO = true;
})