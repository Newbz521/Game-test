let gameScreen = document.body;
let yourCharacter = document.querySelector("#player");

let gameOver = document.querySelector(".restartContainer");
let gameText = document.querySelector(".restartText");
// console.log(scoreBoard)

gameOver.style.display = "none";

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    // console.log('left');
    movePlayerLeft();
    // createBullet()
  }
  if (event.key === "ArrowRight") {
    // console.log('right');
    movePlayerRight();
    // createBullet()
  }
  if (event.key === "ArrowUp") {
    // console.log("space")
    movePlayerUp();
  }
  if (event.key === "ArrowDown") {
    // console.log("space")
    movePlayerDown();
  }
});



function createChar() {
  let makeChar = document.createElement("div");
  makeChar.setAttribute("id", "player");
  gameScreen.append(makeChar);
  setInterval(createBullet, 0.2);
}
createChar();

let playerStartHorrizontal = 10;
let playerStartVertical = 10;
let playerMoveLeftRight = 0;
let playerMoveUpDown = 0;
let right = false;
let left = false;

function movePlayerLeft() {
  let player = document.querySelector("#player");
  let playerLocation = player.getBoundingClientRect();
  // console.log(playerLocation);
  if (playerMoveLeftRight > 0) {
    playerMoveLeftRight -= 80 / 3;
    player.style.left = `calc(${playerStartHorrizontal}% + ${playerMoveLeftRight}%)`;
  }
}

function movePlayerRight() {
  let player = document.querySelector("#player");
  let playerLocation = player.getBoundingClientRect();
  if (playerMoveLeftRight < 80) {
    playerMoveLeftRight += 80 / 3;
    player.style.left = `calc(${playerStartHorrizontal}% + ${playerMoveLeftRight}%)`;
  }
}
function movePlayerUp() {
  let player = document.querySelector("#player");
  let playerLocation = player.getBoundingClientRect();
  if (playerMoveUpDown > 0) {
    playerMoveUpDown -= 80 / 3;
    player.style.top = `calc(${playerStartVertical}% + ${playerMoveUpDown}%)`;
  }
}
function movePlayerDown() {
  let player = document.querySelector("#player");
  let playerLocation = player.getBoundingClientRect();
  // console.log(playerLocation);
  if (playerMoveUpDown < 80) {
    playerMoveUpDown += 80 / 3;
    player.style.top = `calc(${playerStartVertical}% + ${playerMoveUpDown}%)`;
  }
}

function createBullet() {
  let player = document.querySelector("#player").getBoundingClientRect();
  let makeBullet = document.createElement("div");
  makeBullet.setAttribute("id", "bullet");
  makeBullet.style.left = player.left + player.width / 5 + "px";
  makeBullet.style.top = player.top + player.height / 5 + "px";
  gameScreen.append(makeBullet);
  setTimeout(() => {
    makeBullet.remove();
  }, 600);
}

function createPole() {
  let makePole = document.createElement("div");
  makePole.classList.add("pole");
  gameScreen.append(makePole);
}

for (let i = 0; i < 16; i++) {
  createPole();
}
let poles = document.querySelectorAll(".pole");
// poles.addEventListener("click", function(e){console.log("clicked")} )
// console.log(poles);
let ids = [
  {
    "id": "poleOne",
    "top": 10,
    "left": 10,
  },
  {
    "id": "poleTwo",
    "top": 10,
    "left": 10 + 80/3,
  },
  {
    "id": "poleThree",
    "top": 10,
    "left": 10 + 160/3,
  },
  {
    "id": "poleFour",
    "top": 10,
    "left": 90,
  },
  {
    "id": "poleFive",
    "top": 10 + 80/3,
    "left": 10,
  },
  {
    "id": "poleSix",
    "top": 10 + 80/3,
    "left": 10 + 80/3,
  },
  {
    "id": "poleSeven",
    "top": 10 + 80/3,
    "left": 10 + 160/3,
  },
  {
    "id": "poleEight",
    "top": 10 + 80/3,
    "left": 90,
  },
  {
    "id": "poleNine",
    "top": 10 + 160/3,
    "left": 10,
  },
  {
    "id": "poleTen",
    "top": 10 + 160/3,
    "left": 10 + 80/3,
  },
  {
    "id": "poleEleven",
    "top": 10 + 160/3,
    "left": 10 + 160/3,
  },
  {
    "id": "poleTwelve",
    "top": 10 + 160/3,
    "left": 90,
  },
  {
    "id": "poleThirteen",
    "top": 90,
    "left": 10,
  },
  {
    "id": "poleFourteen",
    "top": 90,
    "left": 10 + 80/3,
  },
  {
    "id": "poleFifteen",
    "top": 90,
    "left": 10 + 160/3,
  },
  {
    "id": "poleSixteen",
    "top": 90,
    "left": 90,
  },
];
function clickPlayerMove(e) {
  let player = document.querySelector("#player");
  // console.log(e.target.getBoundingClientRect())
 
  player.style.left = `calc(${e.target.getBoundingClientRect().left}px + 1.5vh)`;
  player.style.top = `calc(${e.target.getBoundingClientRect().top}px + 1.5vh )`;
}
for (let i = 0; i < poles.length; i++) {
  // poles[i].setAttribute("id", ids[i].id);
  poles[i].style.left = ids[i].left + "%";
  poles[i].style.top = ids[i].top + "%";
  poles[i].addEventListener("click", clickPlayerMove)
}
function createPrisoner() {
  let makePrison = document.createElement("div")
  makePrison.classList.add("prisoner")
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  makePrison.style.background = `radial-gradient(circle at 1vh 1vh, #${randomColor}, black)`;
  // `radial-gradient(circle at 100px 100px, #${randomColor}, #000)`;
  makePrison.style.left = 50 + "%";
  makePrison.style.top = 50 + "%";
  gameScreen.append(makePrison);
  let randomIndex = Math.floor(Math.random() * ids.length)
  let targetPoles = document.querySelectorAll(".pole")[randomIndex]
  
  targetPoles.style.border = .25 + "vh " + "solid " + "#" + randomColor;
  console.log(makePrison.getBoundingClientRect(),  targetPoles.getBoundingClientRect())

  function change() {
    makePrison.style.left = `calc(${targetPoles.getBoundingClientRect().left}px + 1.5vh)`;
    makePrison.style.top = `calc(${targetPoles.getBoundingClientRect().top}px + 1.5vh)`;
  }
  function createExplosion(a) {
    let explosion = document.createElement("div");
    explosion.classList.add("explode")
    explosion.style.left = a.getBoundingClientRect().left + "px";
    explosion.style.top = a.getBoundingClientRect().top + "px";
    explosion.style.border = "black " + 4 + "px" + " solid";
    gameScreen.append(explosion)
    setTimeout(() => {
      explosion.remove();
    }, 500);
  }

  function checkCollision() {
    let laser = document.querySelectorAll("#bullet")
    let player = document.querySelector("#player")
    laser.forEach((data) => {
      if (isCollide(makePrison.getBoundingClientRect(), data.getBoundingClientRect())) {
        createExplosion(makePrison)
        makePrison.remove()
        targetPoles.style.border = .25 + "vh " + "solid " + "black";;
        points += 10
        setScore();
      }
    })
    if (isCollide(makePrison.getBoundingClientRect(), targetPoles.getBoundingClientRect())) {
      // console.log("touchdown!")
      targetPoles.style.border =  .25 + "vh " + "solid " + "black";
      makePrison.remove()
      hp -= 10;
      setScore();
      if (hp == 0) {
        let restart = document.querySelector("#restart")
        gameOver.style.display = "flex";
        restart.style.display = "flex";
        gameText.innerText = `Game Over! Your Score:${ points }`;
      }
    }
    if (isCollide(makePrison.getBoundingClientRect(), player.getBoundingClientRect())) {
      // console.log("you're hit!")
      targetPoles.style.border = .25 + "vh " + "solid " + "black";
      // makePrison.classList.add("explode")
      createExplosion(makePrison)
      makePrison.remove()
      points += 1;
      setScore();
      
    }
  }
  setInterval(checkCollision, 20)
  setTimeout(change, 500)
}

function isCollide(a, b) {
  return !(
    a.y + a.height < b.y ||
    a.y > b.y + b.height ||
    a.x + a.width < b.x ||
    a.x > b.x + b.width
  );
}


let points = 0;
let hp = 100;
let health = document.querySelector(".HP")
let playerScore = document.querySelector(".score")

function setScore() {
  playerScore.innerText = `Score : ${ points }`;
  health.innerText = `HP: ${hp}`;
}

setScore()
let start = document.querySelector("#start")
let restart = document.querySelector("#restart")
let infoRestart= document.querySelector("#info-restart")
let info = document.querySelector("#how-to")
let resume = document.querySelector("#continue")
let question = document.querySelector(".question")
start.addEventListener("click", function run() {
  info.style.display = "none"
  start.style.display = "none"
  setInterval(createPrisoner, 1000)
})
question.addEventListener("click", function toggle() {
  info.style.display = "flex"
  infoRestart.style.display = "flex"
  resume.style.display = "flex"
})
infoRestart.addEventListener("click", function start() {location.reload()})
resume.addEventListener("click", function close(){info.style.display = "none"})
restart.addEventListener("click", function start() {location.reload()})