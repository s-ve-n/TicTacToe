let fields = [];
let x = 'cross';

function fillShape(i) {
  if (fields[i] == undefined) {
    if (x == 'cross') {
      fillShapeX(i);
      inactiveX();
    } else {
      fillShapeO(i);
      inactiveO();
    }
  } else {
    alert('Dieses Feld ist besetzt');
  }

  winnerX();
  winnerO();

  console.log(fields);
}

function fillShapeX(i) {
  fields[i] = x; // x is cross
  x = 'circle';
  document.getElementById(`${i}-cross`).classList.remove('d-none');
}

function fillShapeO(i) {
  fields[i] = x; // x is circle
  x = 'cross';
  document.getElementById(`${i}-circle`).classList.remove('d-none');
}

// function gameOver() {
//   setTimeout(function () {
//     document.getElementById('game-over').classList.remove('d-none');
//     document.getElementById('body').style.backgroundColor = 'black';
//     showWinner();
//   }, 1000);
//   setTimeout(function () {
//     alert('PLAYER 1 hat gewonnen');
//   }, 1100);
// }

function timeout(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function gameOverX() {
  await timeout(1000);
  document.getElementById('game-over').classList.remove('d-none');
  document.getElementById('body').style.backgroundColor = 'black';
  document.getElementById('restart').classList.remove('d-none');
  await timeout(10);
  alert('PLAYER 1 hat gewonnen');
}

async function gameOverO() {
  await timeout(1000);
  document.getElementById('game-over').classList.remove('d-none');
  document.getElementById('body').style.backgroundColor = 'black';
  document.getElementById('restart').classList.remove('d-none');
  await timeout(10);
  alert('PLAYER 2 hat gewonnen');
}

function winnerX() {
  // prettier-ignore
  if (
    fields[0] == 'cross' &&
    fields[1] == 'cross' && 
    fields[2] == 'cross'
    ) {
    document.getElementById('line-1').style.transform = 'scaleX(1)';
    gameOverX().then(()=>{});
  } else if (
    fields[3] == 'cross' &&
    fields[4] == 'cross' &&
    fields[5] == 'cross'
  ) {
    document.getElementById('line-2').style.transform = 'scaleX(1)';
    gameOverX().then(()=>{});
  } else if (
    fields[6] == 'cross' &&
    fields[7] == 'cross' &&
    fields[8] == 'cross'
  ) {
    document.getElementById('line-3').style.transform = 'scaleX(1)';
    gameOverX().then(()=>{});
  } else if (
    fields[0] == 'cross' &&
    fields[3] == 'cross' &&
    fields[6] == 'cross'
  ) {
    document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    gameOverX().then(()=>{});
  } else if (
    fields[1] == 'cross' &&
    fields[4] == 'cross' &&
    fields[7] == 'cross'
  ) {
    document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    gameOverX().then(()=>{});
  } else if (
    fields[2] == 'cross' &&
    fields[5] == 'cross' &&
    fields[8] == 'cross'
  ) {
    document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    gameOverX().then(()=>{});
  } else if (
    fields[0] == 'cross' &&
    fields[4] == 'cross' &&
    fields[8] == 'cross'
  ) {
    document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1)';
    gameOverX().then(()=>{});
  } else if (
    fields[2] == 'cross' &&
    fields[4] == 'cross' &&
    fields[6] == 'cross'
  ) {
    document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1)';
    gameOverX().then(()=>{});
  }
}

function winnerO() {
  // prettier-ignore
  if (
    fields[0] == 'circle' && 
    fields[1] == 'circle' && 
    fields[2] == 'circle'
  ) {
    document.getElementById('line-1').style.transform = 'scaleX(1)';
    gameOverO().then(()=>{});
  } else if (
    fields[3] == 'circle' &&
    fields[4] == 'circle' &&
    fields[5] == 'circle'
  ) {
    document.getElementById('line-2').style.transform = 'scaleX(1)';
    gameOverO().then(()=>{});
  } else if (
    fields[6] == 'circle' &&
    fields[7] == 'circle' &&
    fields[8] == 'circle'
  ) {
    document.getElementById('line-3').style.transform = 'scaleX(1)';
    gameOverO().then(()=>{});
  } else if (
    fields[0] == 'circle' &&
    fields[3] == 'circle' &&
    fields[6] == 'circle'
  ) {
    document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    gameOverO().then(()=>{});
  } else if (
    fields[1] == 'circle' &&
    fields[4] == 'circle' &&
    fields[7] == 'circle'
  ) {
    document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    gameOverO().then(()=>{});
  } else if (
    fields[2] == 'circle' &&
    fields[5] == 'circle' &&
    fields[8] == 'circle'
  ) {
    document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    gameOverO().then(()=>{});
  } else if (
    fields[0] == 'circle' &&
    fields[4] == 'circle' &&
    fields[8] == 'circle'
  ) {
    document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1)';
    gameOverO().then(()=>{});
  } else if (
    fields[2] == 'circle' &&
    fields[4] == 'circle' &&
    fields[6] == 'circle'
  ) {
    document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1)';
    gameOverO().then(()=>{});
  }
}

function inactiveX() {
  document.getElementById('player-1').classList.add('inactive');
  document.getElementById('player-2').classList.remove('inactive');
}

function inactiveO() {
  document.getElementById('player-2').classList.add('inactive');
  document.getElementById('player-1').classList.remove('inactive');
}

function restart() {
  window.location.reload();
}