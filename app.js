window.addEventListener('DOMContentLoaded', () => {
    var tiles = Array.from(document.querySelectorAll('.tile'));
    var playerDisplay = document.querySelector('.display-player');
    var resetButton = document.querySelector('#reset');
    var announcer = document.querySelector('.announcer');

    var board = ['', '', '', '', '', '', '', '', ''];
    var currentPlayer = 'X';
    var isGameActive = true;

    var PLAYERX_WON = 'PLAYERX_WON';
    var PLAYERO_WON = 'PLAYERO_WON';
    var TIE = 'TIE';


    var winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleResultValidation() {
        var flag = false;
        for (let i = 0; i <= 7; i++) {
            var winCondition = winningConditions[i];
            var a = board[winCondition[0]];
            var b = board[winCondition[1]];
            var c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                flag = true;
                break;
            }
        }

    if (flag) {
            announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

    if (!board.includes(''))
        announce(TIE);
    }

    var announce = (type) => {
        switch(type){
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
            case TIE:
                announcer.innerText = 'Tie';
        }
        announcer.classList.remove('hide');
    };

    const isValidAction = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }

        return true;
    };

    const updateBoard =  (index) => {
        board[index] = currentPlayer;
    }

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    const userAction = (tile, index) => {
        if(isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }
    
    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }

        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }

    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    resetButton.addEventListener('click', resetBoard);
});

function colorchange() {
    var box1 = document.getElementById('div1')
    var box2 = document.getElementById('div2')
    var box3 = document.getElementById('div3')
    var box4 = document.getElementById('div4')
    var box5 = document.getElementById('div5')
    var box6 = document.getElementById('div6')
    var box7 = document.getElementById('div7')
    var box8 = document.getElementById('div8')
    var box9 = document.getElementById('div9')

    console.log('chala')

}