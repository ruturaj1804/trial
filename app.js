let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function(){  
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250)
}

function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250)
}

// function levelUp(){
//     level++;
//     h2.innerText = `Level ${level}`;

//     let ranIndex = Math.floor(Math.random() * btns.length);
//     let randColor = btns[ranIndex];
//     let randbtn = document.querySelector(`#${randColor}`);

//     // store the chosen color in the game sequence
//     gameSeq.push(randColor);

//     // flash the chosen button
//     gameFlash(randbtn);

//     // reset user sequence for this round
//     userSeq = [];
// }


function levelUp(){
     userSeq = []
    level++;
    h2.innerText = `Level ${level}`;

    let ranIndex = Math.floor(Math.random() * 3);
    let randColor = btns[ranIndex];
    let randbtn = document.querySelector(`.${randColor}`);
       gameSeq.push(randColor);
       console.log(gameSeq);
       gameFlash(randbtn);
    //random button choose
    gameFlash(randbtn);

}   

function checkAns(){

    console.log("Cur  level:", level);
    let idx = level - 1;
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            levelUp();
        }
    }else{  
        h2.innerText = `Game over ${level}`
    }
}

// function checkAns(){
//     let idx = userSeq.length - 1;

//     if(userSeq[idx] === gameSeq[idx]){
//         if(userSeq.length === gameSeq.length){
//             setTimeout(levelUp, 1000);
//         }
//     } else {
//         h2.innerText = `Game Over! You reached level ${level}`;
//         started = false;
//         gameSeq = [];
//         userSeq = [];
//         level = 0;
//     }
// }

//add new feature - button
// add new feature - form

