let game = [];
let user = [];
let started = false;
let level = 0;
let hscore = 0;
let h2 = document.querySelector("h2");
h2.classList.add('Text')
let btns = ["red", "yellow", "green", "purple"];
document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelup();
    }
})

function flash(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 350);
}
function userflash(btn) {
    btn.classList.add('userflash');
    setTimeout(function () {
        btn.classList.remove('userflash');
    }, 150);
}
function levelup() {
    user = [];
    level++;
    h2.innerText = `Level ${level}`;
    let r = Math.floor(Math.random() * 4);
    let color = btns[r];
    let rbtn = document.querySelector(`.${color}`);
    game.push(color);
    flash(rbtn);
}
function reset() {
    game = [];
    user = [];
    started = false;
    level = 0;
}
function checkans(idx) {

    if (user[idx] === game[idx]) {
        if (user.length == game.length) {
            setTimeout(levelup, 1000);
        }
    }
    else {

        h2.innerHTML = `Game over ! <br><b>Your score is ${level} </b><br>Press any key to restart the game.`;

        if (hscore > level) {
            let h3 = document.createElement('h3');
            document.querySelector('h2').append(h3);
            h3.innerText = `Highest Score : ${hscore} `;
        }
        else {
            hscore = level;
            let h3 = document.createElement('h3');
            document.querySelector('h2').append(h3);
            h3.innerText = `Highest Score : ${hscore} `;
        }
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "#1F2667";
        }, 150);
        reset();
    }
}
function btnpress() {
    userflash(this);
    let color = this.getAttribute('id');
    user.push(color);
    checkans(user.length - 1);
}
let allbtn = document.querySelectorAll('.btn');
for (let btn of allbtn) {
    btn.addEventListener('click', btnpress);
}
