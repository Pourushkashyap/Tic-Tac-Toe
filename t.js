let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turno = true;


const winpattern = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
];

  const resetgame = () =>{
    turno = true;
    enableboxes();
    msgContainer.classList.add("hide");
     
  }


  boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        
     if(turno === true){
        box.innerText = "O";
        turno = false;
     }
     else{
        box.innerText = "X"
        turno = true;
     }
     box.disabled = true;


     checkwinner() 
    });
});

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}


const showwinner = (winner) =>{
  msg.innerText = `congratulation , winner is ${winner}`
  msgContainer.classList.remove("hide");
  disableboxes();
}

 const checkwinner = () =>{
    for( let pattern of winpattern){
        let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if(pos1val != "" && pos2val !="" && pos3val !=""){
        if(pos1val === pos2val && pos2val === pos3val){
      
       showwinner(pos1val);
        }
    }
    }
    
 };

 newgamebtn.addEventListener("click",resetgame);
  reset.addEventListener("click",resetgame);

 



 