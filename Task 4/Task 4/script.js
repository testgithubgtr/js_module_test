let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".computer");
console.log(computer);
let user = document.querySelector(".user");
let win = document.querySelector(".win")
let winner = document.querySelector(".winner")
let playAgain = document.querySelector(".play")
let machine = document.querySelector(".machine");
let triangle = document.querySelector(".triangle");
let Button = document.querySelector(".next-btn");
let Custom = document.querySelector(".custom")

let random = Math.floor(Math.random()*3);
console.log(random);

let myScore = JSON.parse(localStorage.getItem("my-score"));
let myScoreEle = document.getElementById("myscore");

let pcScore = JSON.parse(localStorage.getItem("pc-score"));
let pcScoreEle = document.getElementById("pcscore");

if(pcScore) {
    pcScoreEle.innerText = pcScore
}

if(myScore) {
    myScoreEle.innerText = myScore;
}
let userCount = myScore;
let pcCount = pcScore;



con.forEach((element,index) => {
    element.addEventListener("click", () => {
        // console.log(element);
        user.style.opacity = "1"
        triangle.style.display = "none";

        con.forEach(item => {
            item.style.display = "none";
        });
        element.style.display = "block";
        element.classList.add("show")

        setTimeout(() => {
            machine.style.opacity="1";
            setTimeout(() => {
                computer[random].style.display="block";
                computer[random].classList.add("right");

            }, 1000)
        },500);

        setTimeout(() => {
            if(random == index) {
                win.style.display = "grid";
                winner.innerText = "TIE UP";
                playAgain.innerText = "REPLAY"
            }
            else if(index == 0 && random ==2 || index == 1 && random == 0 || index == 2 && random == 1 ) {
                win.style.display = "grid";
                winner.innerText = "YOU WIN";
                Custom.innerText = "AGAINST PC";
                userCount = myScore;
                userCount++; 
                myScoreEle.innerText = userCount;
                localStorage.setItem("my-score", JSON.stringify(userCount));
                Button.style.display = "block";

            } else {
                win.style.display="grid";
                winner.innerText = "YOU LOST";
                Custom.innerText = "AGAINST PC"
                pcCount = pcScore;
                pcCount++;
                pcScoreEle.innerText = pcCount;
                localStorage.setItem("pc-score", JSON.stringify(pcCount));
            }
        }, 1500)
    })
});

playAgain.addEventListener("click", () => {
    window.location.reload();
})


function togglePopup(){
    document.getElementById("rules-popup").classList.toggle("active");
}

document.getElementById('navigateButton').addEventListener('click', function() {
    // Navigate to the new HTML page
    window.location.href = 'win.html';
});

