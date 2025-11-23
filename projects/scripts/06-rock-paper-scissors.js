    //object
var score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updatescore();

function playgame(PlayersMove) {
    const computermove = pickComputersMove();
    let results = '';

    if (PlayersMove === 'rock') {
        if (computermove === 'rock') {
            results = 'Tie';
        } else if (computermove === 'paper') {
            results = 'You lose';
        } else if (computermove === 'scissors') {
            results = 'You win';
        }
    } else if (PlayersMove === 'paper') {
        if (computermove === 'rock') {
            results = 'You win';
        } else if (computermove === 'paper') {
            results = 'Tie';
        } else if (computermove === 'scissors') {
            results = 'You lose';
        }
    } else if (PlayersMove === 'scissors') {
        if (computermove === 'rock') {
            results = 'You lose';
        } else if (computermove === 'paper') {
            results = 'You win';
        } else if (computermove === 'scissors') {
            results = 'Tie';
        }
    }

    if (results === 'You win') {
        score.wins = score.wins + 1;
    } else if (results === 'You lose') {
        score.losses = score.losses + 1;
    } else if (results === 'Tie') {
        score.ties = score.ties + 1;
    }
    //local storage only supports strings 

    localStorage.setItem('score', JSON.stringify(score));

    updatescore();

    document.querySelector('.js-results').innerHTML = results;


    let playerImage = getImageFilename(PlayersMove);
    let computerImage = getImageFilename(computermove);
    document.querySelector('.js-move').innerHTML = `You <img src = "${playerImage}" class="move-icon"> Computer <img src = "${computerImage}" class="move-icon">`;

}

function getImageFilename(move) {
    if (move === 'rock') return 'Images/emojir.png';
    if (move === 'paper') return 'Images/emoji2.png';
    if (move === 'scissors') return 'Images/emojis-sci.png';
    return '';
}

function updatescore() {
    document.querySelector('.js-score').innerHTML = `wins:${score.wins},losses:${score.losses},Ties:${score.ties}`;
}

function pickComputersMove() {
    let computermove = '';

    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computermove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computermove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computermove = 'scissors';
    }

    return computermove;
}
