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
  // console.log(playerLocation);
  if (playerMoveLeftRight < 80) {
    playerMoveLeftRight += 80 / 3;
    player.style.left = `calc(${playerStartHorrizontal}% + ${playerMoveLeftRight}%)`;
  }
}
function movePlayerUp() {
  let player = document.querySelector("#player");
  let playerLocation = player.getBoundingClientRect();
  // console.log(playerLocation);
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
  makeBullet.style.left = player.left + player.width / 4 + "px";
  makeBullet.style.top = player.top + player.height / 4 + "px";
  gameScreen.append(makeBullet);
  setTimeout(() => {
    makeBullet.remove();
  }, 1500);
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
for (let i = 0; i < poles.length; i++) {
  // poles[i].setAttribute("id", ids[i].id);
  poles[i].style.left = ids[i].left + "%";
  poles[i].style.top = ids[i].top + "%";
}

function createPrisoner() {
  let makePrison = document.createElement("div")
  makePrison.classList.add("prisoner")
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  makePrison.style.background = "#" + randomColor;
  makePrison.style.left = 50 + "%";
  makePrison.style.top = 50 + "%";
  gameScreen.append(makePrison);
  let randomIndex = Math.floor(Math.random() * ids.length)
  let targetPoles = document.querySelectorAll(".pole")[randomIndex]
  
  targetPoles.style.background = "#" + randomColor;
  console.log(makePrison.getBoundingClientRect(),  targetPoles.getBoundingClientRect())

  function change() {
    makePrison.style.left = targetPoles.getBoundingClientRect().left + "px";
    makePrison.style.top = targetPoles.getBoundingClientRect().top + "px";
  }
  function checkCollision() {
    let laser = document.querySelectorAll("#bullet")
    let player = document.querySelector("#player")
    laser.forEach((data) => {
      if (isCollide(makePrison.getBoundingClientRect(), data.getBoundingClientRect())) {
        makePrison.remove()
        targetPoles.style.background = "white";
        points += 10
        setScore();
      }
    })
    if (isCollide(makePrison.getBoundingClientRect(), targetPoles.getBoundingClientRect())) {
      console.log("touchdown!")
      targetPoles.style.background = "white";
      makePrison.remove()
      points -= 5
      setScore()
    }
    if (isCollide(makePrison.getBoundingClientRect(), player.getBoundingClientRect())) {
      console.log("you're hit!d")
      targetPoles.style.background = "white";
      makePrison.remove()
      hp -= 20;
      setScore();
      if (hp == 0) {
        gameOver.style.display = "flex";
        gameText.innerText = `Game Over! Your Score:${ points }`;
      }
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
setInterval(createPrisoner, 5000)

let points = 0;
let hp = 100;
let health = document.querySelector(".HP")
let playerScore = document.querySelector(".score")

function setScore() {
  playerScore.innerText = `Score : ${ points }`;
  health.innerText = `HP: ${hp}`;
}

setScore()

let restart = document.querySelector("#restart")
restart.addEventListener("click", function start() {location.reload()})