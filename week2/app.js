let leftBtn = document.getElementById("btn__left");
let rightBtn = document.getElementById("btn__right");
let grabBtn = document.getElementById("btn__grab");
let clawDynamic = document.getElementById("claw__dynamic");
let clawStatic = document.getElementById("claw__static");
let btnSoundDirections = document.getElementById("btn__sound--directions");
let btnSoundGrab = document.getElementById("btn__sound--grab");
let sfxLoss = document.getElementById("sfx__loss");
let sfxWin = document.getElementById("sfx__win");

let positionX = 0;
let positionY = 0;

leftBtn.addEventListener("click", function () {

    if (positionX > 0) positionX = positionX - 20;
    clawDynamic.setAttribute('transform', `translate(${positionX}, 0)`);
    clawStatic.setAttribute('transform', `translate(${positionX}, 0)`);
    btnSoundDirections.play();
});

rightBtn.addEventListener("click", function () {
    if (positionX < 1400) positionX = positionX + 20;
    clawDynamic.setAttribute('transform', `translate(${positionX}, 0)`);
    clawStatic.setAttribute('transform', `translate(${positionX}, 0)`);
    console.log(positionX);
    btnSoundDirections.play();
});

grabBtn.addEventListener("click", function () {
    btnSoundGrab.play();
    clawDynamic.setAttribute('transform', `translate(${positionX}, 40)`);
    if (positionX == 500 || positionX == 520 || positionX == 840 || positionX == 920 || positionX == 940) {
        clawDynamic.setAttribute('transform', `translate(${positionX}, 100)`);
        sfxWin.play();
        setTimeout(() => {
            if(!alert('You won! Congrats!')){window.location.reload();}
        }, 1500);
    } else {
        sfxLoss.play();
        setTimeout(() => {
            if(!alert('You lost! Try again!')){window.location.reload();}
        }, 1500);
    
    }

});