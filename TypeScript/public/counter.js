"use strict";
const incr_btn = document.getElementById("incr_btn");
const decr_btn = document.getElementById("decr_btn");
const num = document.getElementById("number");
let countNum = 0;
decr_btn.disabled = true;
function handleIncrDecr(ClickOn) {
    if (ClickOn == "incr")
        countNum++;
    if (ClickOn == "decr")
        countNum--;
    if (countNum == 0) {
        decr_btn.disabled = true;
    }
    else {
        decr_btn.disabled = false;
    }
    num.innerText = countNum.toString();
}
;
incr_btn.addEventListener('click', () => handleIncrDecr("incr"));
decr_btn.addEventListener('click', () => handleIncrDecr("decr"));
