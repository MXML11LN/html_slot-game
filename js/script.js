"use strict"

const buttonSpinStart       = document.querySelector("#spin-btn");
const spinBallance          = document.querySelector("#current_ballance");
const spinStatus            = document.querySelector("#spin-status");
const spinRolerFirst        = document.querySelector("#slot1");
const spinRolerSecond       = document.querySelector("#slot2");
const spinRolerthird        = document.querySelector("#slot3");

buttonSpinStart.addEventListener("click",checkBalanceOnClick);

let userBalance = 1000;

function spinSlots(){
    buttonSpinStart.removeEventListener("click",checkBalanceOnClick)
    spinStatus.innerHTML=" Wait...";
    userBalance -= 100;
    spinBallance.innerHTML=`${userBalance} spins`

    let slot1Value = randomInt(1,10);
    let slot2Value = randomInt(1,10);
    let slot3Value = randomInt(1,10);
    let valuesArray = [slot1Value,slot2Value,slot3Value]

    let slot1Cycle = setInterval(spinFirst, 50);
    let slot2Cycle = setInterval(spinSecond, 50);
    let slot3Cycle = setInterval(spinThird, 50);

    setTimeout(() => { clearInterval(slot1Cycle); spinRolerFirst.className = `tile${slot1Value}`;}, 2000);
    setTimeout(() => { clearInterval(slot2Cycle); spinRolerSecond.className = `tile${slot2Value}`;}, 4000);
    setTimeout(() => { clearInterval(slot3Cycle); spinRolerthird.className = `tile${slot3Value}`;}, 6000);

    function spinFirst(){
        let innerCycle = randomInt(1,10);
        spinRolerFirst.className = `tile${innerCycle}`; 
    }
    function spinSecond(){
        let innerCycle = randomInt(1,10);
        spinRolerSecond.className = `tile${innerCycle}`;
    }
    function spinThird(){
        let innerCycle = randomInt(1,10);
        spinRolerthird.className = `tile${innerCycle}`;
    }

    if(valuesArray.every((value)=>(value === slot1Value))){
        setTimeout(() => {spinStatus.innerHTML=" You Win!!!";userBalance +=300;buttonSpinStart.disabled = false;}, 6000); 
    }else{
        setTimeout(() => {spinStatus.innerHTML=" You lose ..."; buttonSpinStart.disabled = false;},6000);
        }
    setTimeout(()=>{buttonSpinStart.addEventListener("click",checkBalanceOnClick)},6000);
}


function checkBalanceOnClick(){
    if(userBalance>=100){
        spinSlots()
    }else{
        buttonSpinStart.disabled = true;
        spinStatus.innerHTML="Sorry Friend,not enougth spins...";
        buttonSpinStart.removeEventListener("click",checkBalanceOnClick)
    }
}

function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}