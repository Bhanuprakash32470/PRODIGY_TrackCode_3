let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let msgcont=document.querySelector(".msgcon");
let msg=document.querySelector("#msg");
let newbtn=document.querySelector("#newbtn");
let turnO=false;
const pattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgcont.classList.add('hide');
};
boxes.forEach((box)=>
{
    box.addEventListener("click",()=>{
       
        box.innerText=""
        if(turnO)
        {
            box.innerText="O";
            turnO=false;


        }
        else{
            box.innerText="X";
            turnO=true;

        }
        box.disabled=true;
        checkwinner();
    });

});
const disableboxes=()=>
    {
        for(let box of boxes)
        {
            box.disabled=true;
        }
    };
    const enableboxes=()=>
    {
        for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
    };
const showwinner=(winner)=>{
    msg.innerText=`Congratulations ,Winner is ${winner}`;
    msgcont.classList.remove('hide');
    disableboxes();
};
const checkwinner=()=>{
for(let patt of pattern){
  let pos1val=boxes[patt[0]].innerText;
  let pos2val=boxes[patt[1]].innerText;
  let pos3val=boxes[patt[2]].innerText;
if(pos1val!=""&&pos2val!=""& pos3val!="")
{
    if(pos1val===pos2val&& pos2val===pos3val)
    {
       
    showwinner(pos1val);
    }

}
}
};
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);