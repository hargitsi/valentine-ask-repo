// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
// const funText = document.getElementById("fun-text");

const min = 200;
const max = 200;
let mouseOverNo = 0;


// const noPositions = [
//     { x: -220, y: 0 },
//     { x: 220, y: 0 },
//     { x: 0, y: -120 },
//     { x: 0, y: 120 },
//     { x: -180, y: -100 },
//     { x: 180, y: -100 },
//     { x: -180, y: 100 },
//     { x: 180, y: 100 },
//     { x: 0, y: 0 }
// ];

const noPositions = [
    { x: -235, y: 18 },
    { x: 215, y: -22 },
    { x: 14, y: -135 },
    { x: -18, y: 128 },
    { x: -195, y: -112 },
    { x: 168, y: -92 },
    { x: -162, y: 118 },
    { x: 202, y: 96 },
    { x: 6, y: -6 }
];

let noIndex = 0;


// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    // funText.style.display = "none";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    if (mouseOverNo < 21 ){
        moveNoButton()
    } else{
        resetNoButton()
    }
    if (mouseOverNo >= 3){
        catImg.src = "cat_flying_kiss.gif";
        title.textContent = "DON'T PRESS NOOO";
    }
    if (mouseOverNo >= 6){
        catImg.src = "cat_excited.gif";
        title.textContent = "PLEASEEE BE MY VALENTINEEEE SAYANGG";
    }
    if (mouseOverNo >= 9){
        catImg.src = "cat_lick.gif";
        title.textContent = "I KNOW YOU WANT A NICE DATEE";
    }
    if (mouseOverNo >= 12){
        catImg.src = "cat_muscle.gif";
        title.textContent = "YOU'RE MISSING OUT ON THISSS";
    }
    if (mouseOverNo >= 15){
        catImg.src = "cat_sweet.gif";
        title.textContent = "MAHALLL KITA BABY KO, AKIN SINTAK";
    }
    if (mouseOverNo >= 18){
        catImg.src = "cat_dicipline.gif";
        title.textContent = "STOP PLAYING WITH ME";
    }
    if (mouseOverNo >= 21){
        catImg.src = "cat_gun.gif";
        title.textContent = "Press Yes or else";
    }
    mouseOverNo += 1;
});

// Logic to make YES btn to grow

let yesScale = 1;
noBtn.addEventListener("click", () => {
    yesScale += 4.5;

    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }else{
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }
    if (mouseOverNo < 21 ){
        moveNoButton()
    }
});

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "YAYYYYYYYY!";

    catImg.src = "cat_accept.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});

// function moveNoButton(){
//     let distance = Math.random() * (max - min) + min;
//     if (distance < 100) {distance = 300}
//     const angle = Math.random() * Math.PI * 2;

//     const moveX = Math.cos(angle) * distance;
//     const moveY = Math.sin(angle) * distance;

//     noBtn.style.transition = "transform 0.3s ease";
//     noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
// }

// function moveNoButton() {
//     let distance = Math.random() * 300; // move 100-300px
//     const angle = Math.random() * Math.PI * 2;

//     let moveX = Math.cos(angle) * distance;
//     let moveY = Math.sin(angle) * distance;
//     if (distance < 150) {distance = 200}
//     // Get viewport size
//     const vw = window.innerWidth;
//     const vh = window.innerHeight;

//     const btnRect = noBtn.getBoundingClientRect();

//     // Current position on screen
//     let currentLeft = btnRect.left + moveX;
//     let currentTop = btnRect.top + moveY;

//     // Clamp so it stays visible
//     currentLeft = Math.max(0, Math.min(vw - btnRect.width, currentLeft));
//     currentTop = Math.max(0, Math.min(vh - btnRect.height, currentTop));

//     // Move relative to the page using transform
//     noBtn.style.transition = "transform 0.3s ease";
//     noBtn.style.transform = `translate(${currentLeft - btnRect.left}px, ${currentTop - btnRect.top}px)`;
// }

function moveNoButton() {
    noIndex = (noIndex + 1) % noPositions.length;

    const pos = noPositions[noIndex];

    noBtn.style.transition = "transform 0.25s ease";
    noBtn.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
}

function resetNoButton(){
    noBtn.style.transform = '';
}

// function resetNoButton(){
//     currentX = 0;
//     currentY = 0;
//     noBtn.style.transition = "transform 0.3s ease";
//     noBtn.style.transform = '';
// }