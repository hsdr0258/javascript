document.addEventListener('DOMContentLoaded', function() {
    const choices = ['rock', 'paper', 'scissors'];

    function computerPlay() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return 'It\'s a tie!';
        } else if (
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            return 'You win! ' + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ' beats ' + computerSelection + '.';
        } else {
            return 'You lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ' beats ' + playerSelection + '.';
        }
    }

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const playerSelection = this.id;
            const computerSelection = computerPlay();
            const result = playRound(playerSelection, computerSelection);
            document.getElementById('result').textContent = result;
        });
    });
});
