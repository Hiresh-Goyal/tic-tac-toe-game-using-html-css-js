let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let turn = document.querySelector("#turn");
let winmsg = document.querySelector(".win")

let turnO = true;
let winnerdone = false;

const winning = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const checkWinner = () =>
{
    for(i =0;i<8;i++)
    {
        let first = boxes[winning[i][0]].innerText;
        let second = boxes[winning[i][1]].innerText;
        let third = boxes[winning[i][2]].innerText;
        if((first == ""))
            continue;
        if((first == second) && (second == third) && (third == first))
        {
            winnerdone = true;
            winmsg.innerText = "The winner is "+first;
            winmsg.classList.remove("hide");
            boxes.forEach((box) =>
                {
                    box.disabled = true;
                })
            break;
        }
    }
    if(!winnerdone)
    {
        let empty = false;
        for(box of boxes)
        {
            if(box.innerText == "")
                empty = true;
        }
        if((!empty) && (!winnerdone))
        {
            winmsg.innerText = "Its a Draw";
            winmsg.classList.remove("hide");
        }
    }
}



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

            checkWinner();

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
    winmsg.classList.add("hide");
})