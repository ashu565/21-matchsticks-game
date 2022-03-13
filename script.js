const inputName = document.querySelector('.input-name');
const submitName = document.querySelector('.submit-btn');
const enterPage = document.querySelector('.enter-page');

let remainingSticks = 21;

const gamePage = document.querySelector('.game-page');
const inputScore = document.getElementById('input-score');
const inputScoreButton = document.getElementById('input-score-button');

inputName.addEventListener('input', function (e) {
  if (e.target.value === '') {
    inputName.style.border = '2px solid rgb(248, 8, 8)';
  } else {
    inputName.style.border = '2px solid rgb(6, 238, 76)';
  }
});

const playerNameElement = document.getElementById('playerName');

submitName.addEventListener('click', () => {
  const name = inputName.value || '';
  if (!name) {
    return alert('Can u Please Enter your Name?');
  } else if (name.length < 4) {
    return alert('The Name Entered Should be of length 4');
  }
  playerNameElement.innerText = name;
  enterPage.style.display = 'none';
  gamePage.style.display = 'flex';
});

const history = document.querySelector('.history');
const matchStickCount = document.getElementById('matchstickCount');

const matchStiksView = document.querySelector('.matchstick-container');
function initislizeSticks() {
  matchStiksView.innerHTML = '';
  const newArr = new Array(21).fill(1);
  newArr.forEach((e) => {
    const element = document.createElement('div');
    element.className = 'matchstick';
    matchStiksView.appendChild(element);
  });
}
initislizeSticks();

inputScoreButton.addEventListener('click', () => {
  const numberValue = parseInt(inputScore.value) || 0;
  if (numberValue >= 1 && numberValue <= 4) {
    if (numberValue > remainingSticks) {
      return alert('number cannot be greater than availble sticks');
    }
    if (remainingSticks === 1) {
      const myElement = document.createElement('div');
      myElement.className = 'player';
      myElement.innerText = `${playerNameElement.innerText} : 1`;
      history.appendChild(myElement);
      alert('You Lost to Computer! Please Think of an algorithm!');
      return reset();
      // reset everythings make sticks again to 21
    }
    inputScore.value = '';
    const computerTurn = 5 - numberValue;
    // my choose numberValue and computer choose is computerValue
    // render that stuff
    remainingSticks -= 5;
    const myElement = document.createElement('div');
    myElement.className = 'player';
    myElement.innerText = `${playerNameElement.innerText} : ${numberValue}`;
    history.appendChild(myElement);
    const computerElement = document.createElement('div');
    computerElement.className = 'computer';
    computerElement.innerText = `Computer : ${computerTurn}`;
    history.appendChild(computerElement);
    matchStickCount.innerText = `Available Match Sticks : ${remainingSticks}`;
    for (let i = 0; i < 5; i++) {
      matchStiksView.removeChild(matchStiksView.lastChild);
    }
  } else {
    return alert('Please choose the sticks between 1 and 4');
  }
});

function reset() {
  matchStickCount.innerText = `Available Match Sticks : 21`;
  remainingSticks = 21;
  history.innerHTML = '';
  inputScore.value = '';
  initislizeSticks();
}
