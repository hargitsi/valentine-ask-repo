// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const min = 200;
const max = 200;
let mouseOverNo = 0;

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    if (mouseOverNo < 35 ){
        moveNoButton()
    }
    if (mouseOverNo >= 5){
        catImg.src = "cat_flying_kiss.gif";
        title.textContent = "DON'T PRESS NOOO";
    }
    if (mouseOverNo >= 10){
        catImg.src = "cat_excited.gif";
        title.textContent = "PLEASEEE BE MY VALENTINEEEE SAYANGG";
    }
    if (mouseOverNo >= 15){
        catImg.src = "cat_lick.gif";
        title.textContent = "I KNOW YOU WANT A NICE DATEE";
    }
    if (mouseOverNo >= 20){
        catImg.src = "cat_muscle.gif";
        title.textContent = "YOU'RE MISSING OUT ON THISSS";
    }
    if (mouseOverNo >= 25){
        catImg.src = "cat_sweet.gif";
        title.textContent = "MAHALLL KITA BABY KO, AKIN SINTAK";
    }
    if (mouseOverNo >= 30){
        catImg.src = "cat_dicipline.gif";
        title.textContent = "STOP PLAYING WITH ME";
    }
    if (mouseOverNo >= 35){
        catImg.src = "cat_gun.gif";
        title.textContent = "Press Yes or else";
    }
    mouseOverNo += 1;
});

// Logic to make YES btn to grow

let yesScale = 1;
noBtn.addEventListener("click", () => {
    yesScale += 6;

    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }else{
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }

    moveNoButton();
});

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "YAYYYYYYYY!";

    catImg.src = "cat_accept.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});

function moveNoButton(){
    let distance = Math.random() * (max - min) + min;
    if (distance < 100) {distance = 300}
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}
