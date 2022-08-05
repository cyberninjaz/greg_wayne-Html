function speak(text) {
    alert(text);
    let utter = new SpeechSynthesisUtterance (text);
    window.speechSynthesis.speak(utter);
}

function appear(index) {
    CMusic.pause();
    GOm.pause();
    let mains = document.querySelectorAll("main");
    mains[0].classList.remove("appear");
    mains[1].classList.remove("appear");
    mains[2].classList.remove("appear");
    mains[3].classList.remove("appear");
    mains[index].classList.add("appear");
    go.style.display="none";
}

let gameOver2 = null;

function startGame () {
    go.style.display="none";
    let gameBoard = document.querySelector("#gameBoard");
    let GOm = document.querySelector("#GOm");
    GOm.pause();
    let CMusic = document.querySelector("#CMusic");
    CMusic.play ();
    let span = document.querySelector('#scoreN');
    let scoreN = 0;
    span.innerText = scoreN;
    let con = document.querySelector("#con");
    con.style.top = 40 + "%";
    con.style.left = 20 + "%";

    class WM {
        constructor() {
            this.ele = document.createElement("img");
            this.ele.src = "WM.png";
            this.ele.className = "wm";
            gameBoard.append(this.ele);
            this.x = 100;
            this.y = Math.random() * 100;
        }

        set x(value) {
            this._x = value;
            this.ele.style.left = value + "%";
        }

        set y(value) {
            this._y = value;
            this.ele.style.top = value + "%";
        }

        get x() {
            return this._x;
        }

        get y() {
            return this._y;
        }
    }

    let wmArray = [new WM()];  // array containing 1 WM
    let stime = 0;

    let cx = 20;
    let cy = 40;

    document.addEventListener("keydown", function(event) {
        event.preventDefault();
        console.log(event);
        if (event.key === "ArrowUp") {
            cy=cy-3.2;
        }
        else if (event.key === "ArrowDown") {
            cy=cy+3.2;
        }
        else if (event.key === "ArrowLeft") {
            cx=cx-1.8;
        }
        else if (event.key === "ArrowRight") {
            cx=cx+1.8;
        }

        con.style.top = cy + "%";
        con.style.left = cx + "%";

    });

    let Umph = document.querySelector("#Umph");

    function tackle(wm) {
        Umph.play ();
        let span = document.querySelector('#scoreN');
        scoreN = scoreN + 1;
        span.innerText = scoreN;
        wm.ele.remove();
        i = wmArray.indexOf(wm);
        wmArray.splice(i,1); 

    }

    function gameOver () {
        clearInterval(intId);
        for (wm of wmArray) {
            wm.ele.remove();
        }
        let go = document.querySelector("#go");
        go.style.display="block";
        CMusic.pause();
        GOm.play ();
    }

    gameOver2 = function () {
        clearInterval(intId);
        for (wm of wmArray) {
            wm.ele.remove();
        }
        CMusic.pause();
    };

    let intId = setInterval(function() {
        // loop through each wm, and move them
        for (let wm of wmArray) {
            wm.x = wm.x - 2;
        }
        
        // spawn new wm every 10 ticks
        stime = stime + 1;
        if (stime === 11) {
            wmArray.push(new WM());
            stime = 0;
        }

        // collision detection
        for (wm of wmArray) {
            if (cx > wm.x + 4) {

            }
            else if (cy > wm.y + 10) {

            }
            else if (cx + 6 < wm.x) {

            }
            else if (cy + 15 < wm.y) {

            }
            else {
                console.log("colliding");
                tackle(wm);
            }

        }

        // game over check
        for (wm of wmArray) {
            if (wm.x > 15) {

            }
            else {
                gameOver();
            }
        }

    },100);

}