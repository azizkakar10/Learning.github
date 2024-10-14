const incr_btn = document.getElementById("incr_btn") as HTMLButtonElement;
const decr_btn = document.getElementById("decr_btn") as HTMLButtonElement;
const num = document.getElementById("number") as HTMLHeadingElement;

let countNum : number = 0;

decr_btn.disabled = true;

function handleIncrDecr (ClickOn : "incr" | "decr") {
    if (ClickOn == "incr") countNum++ ;
    if (ClickOn == "decr") countNum-- ;

    if (countNum == 0){
        decr_btn.disabled = true;
    }else{
        decr_btn.disabled = false;
    }
    num.innerText = countNum.toString();
};

incr_btn.addEventListener('click' , ()=> handleIncrDecr("incr"));
decr_btn.addEventListener('click' , ()=> handleIncrDecr("decr"));