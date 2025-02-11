let boxes=document.querySelectorAll('.b');
let btn=document.getElementById('btn');
let btn2=document.getElementById('btn2');
let win=document.querySelector('.win');
let hello=document.getElementById('hello');
let hide=document.getElementsByClassName('hide');
let hidden=document.getElementsByClassName('hidden');
let but=document.querySelector('.but');
let turn0=true;//playerx,playery

const winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
boxes.forEach((b)=>{
  b.addEventListener("click",()=>{
   // console.log("clicked");
    if(turn0){
      b.innerText="O";
      turn0=false;
    }
    else{
      b.innerText="X";
      turn0=true;
    }
    b.disabled=true;
    
    checkWinner();
  });
})
const dummy=()=>{
  turn0=true;
  enableBox();
  win.classList.add("hide");
}
const resetGame=()=>{
  turn0=true;
  enableBox();
  win.classList.add("hide");
}

const checkBox=()=>{
  for(let box of boxes){
    box.disabled=true;
  //  box.innerText="";
  }
}
const enableBox=()=>{
  for(let box of boxes){
    box.innerText="";
    box.disabled=false;
    but.disabled=false;
  }
}
const showWinner=(winner)=>{
  
  hello.innerText=`Congrulations,winner is ${winner}`;
   win.classList.remove("hide");
   checkBox();
   but.disabled=true;
   bu
}

const checkWinner=()=>{
  for(let pattern of winPatterns){
  /*  console.log(pattern[0],pattern[1],pattern[2]);*/
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;
 /*   console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);*/
   if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
     if(pos1Val===pos2Val&&pos2Val===pos3Val){
   //    console.log("winner",pos1Val);
       showWinner(pos1Val);
     }
   }
  }
}
//btn.addEventListener("click",resetGame);
btn2.addEventListener("click",resetGame);
btn.addEventListener("click",dummy);