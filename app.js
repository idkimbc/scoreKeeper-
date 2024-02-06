const player1 = document.querySelector('span#player1');
const p1Button = document.querySelector('button#p1');
const player2 = document.querySelector('span#player2');
const p2button = document.querySelector('button#p2');
const finalScore = document.querySelector('#score');
const resetButton = document.querySelector('#reset');

let count1 = 0;
let count2 = 0;
let winningScore = 3;
let isGameOver = false;


finalScore.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

p1Button.addEventListener('click', function () {
    if (isGameOver === false) {
        count1++;
        if (count1 === winningScore) {
            isGameOver = true;
        }
        player1.textContent = count1;
        if (parseInt(player1.textContent) === winningScore) {
            player1.style.color = 'blue';
        }
        if ((parseInt(player2.textContent) !== winningScore) && (parseInt(player1.textContent) === winningScore)) {
            player2.style.color = 'green';
        }
    }
})
p2button.addEventListener('click', function () {
    if (isGameOver === false) {
        count2++;
        if (count2 === winningScore) {
            isGameOver = true;
        }
        player2.textContent = count2;
        if (parseInt(player2.textContent) === winningScore) {
            player2.style.color = 'blue';
        }
        if ((parseInt(player1.textContent) !== winningScore) && (parseInt(player2.textContent) === winningScore)) {
            player1.style.color = 'green';
        }
    }
})

resetButton.addEventListener('click', reset);
function reset () {
    player1.textContent = '0';
    player2.textContent = '0';
    count1 = 0;
    count2 = 0;
    isGameOver = false;
    player1.style.color = 'black';
    player2.style.color = 'black';
}