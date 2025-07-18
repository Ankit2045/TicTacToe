let boxes = document.querySelectorAll('.box')
let playerX = true;
let message =document.querySelector('.message-container');
let para = document.querySelector('.message-text');
let newBtn = document.querySelector('#NewBtn');
let Play = document.querySelector("#playGame");
let darkBtn= document.querySelector('.darkmode');
let lightBtn= document.querySelector('.lightmode')
document.querySelector('body').classList.remove('light');
let game = document.querySelector(".game");
let container = document.querySelector('.container');

//dark and light modes
darkBtn.addEventListener('click', ()=>{
    document.querySelector('body').classList.remove('light');
    document.querySelector('body').classList.add('dark');
    game.style.backgroundColor = '#13070C';
    container.style.backgroundColor='#6B4D57';
    document.querySelector('p').style.color="white" 

})
lightBtn.addEventListener('click', ()=>{
    document.querySelector('body').classList.remove('dark');
    document.querySelector('body').classList.add('light');
    game.style.backgroundColor = '#BCD3F2';
    container.style.backgroundColor='#D4CB92';
    document.querySelector('p').style.color="black" 


})

//for play game
Play.addEventListener("click", ()=>{
    document.querySelector('main').classList.remove("hide");
    document.querySelector('#reset').classList.remove('hide');
    Play.classList.add("hide");
})

//winning outcomes
let winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//game logic
const enable =()=>{
    for(let box of boxes){
        box.disabled = false;
    }
}
const disable = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}


const showWinner=()=>{
    message.classList.remove("hide");
    para.innerText=`Congratulations..${pos1Value} is winner..!!`;
    disable();
}
const checkWinner=()=>{
for(pattern of winning){
    // console.log(pattern[0], pattern[1], pattern[2]); 
    pos1Value=boxes[pattern[0]].innerText;
    pos2Value=boxes[pattern[1]].innerText; 
    pos3Value=boxes[pattern[2]].innerText;
    if(pos1Value !="" && pos2Value !="" && pos3Value !=""){
        if(pos1Value === pos2Value && pos2Value === pos3Value){
            if(playerX===false){console.log('X is winner');}
            else{console.log("O is winner");}
            showWinner();
            }
        }  
    }  
    
};
boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        console.log(`Box was clicked`);
        if(playerX){
            box.innerText = 'X';
            box.style.color = '#4B9CD3';
            playerX=false;
        }
        else {
            box.innerText = 'O';
            box.style.color = '#E07A5F';
            playerX = true;
        }
        box.disabled = true;
        checkWinner();
    }); 
    
});


//NEW AND RESET BUTTONS
newBtn.addEventListener("click", ()=>{
    enable();
    playerX = true;
    for(let box of boxes){
        box.innerText="";
    }
    message.classList.add("hide");
})


let resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', ()=>{
    playerX=true;
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        message.classList.add("hide");
    });
});



