let is_x = true;

let gameBoard = document.getElementById('game_board');

let winner = document.getElementById('winner');
let restart = document.getElementById('restrat_btn');

let boxes = [];


restart.addEventListener('click', () => {
    gameBoard.innerHTML = "";
    winner.innerHTML = "";
    makeGame();

})

function makeGame() {

    for (let i = 0; i < 9; i++) {
        let box = document.createElement('div');
        box.classList.add('cell');
        gameBoard.appendChild(box);
        boxes.push(box);
        box.addEventListener('click', () => {
            console.log('cliked');
            if (is_x) {
                box.innerText = 'X';
            } else {
                box.innerText = 'O';
            }
            is_x = !is_x;
            check();
        }, {
            once: true
        });
    }

};

makeGame()

function check() {
    for (let i = 0; i < 3; i++) {
        let rowWin = [];
        let colWin = [];
        for (let j = 0; j < 3; j++) {
            rowWin.push(boxes[i * 3 + j].innerText);
            colWin.push(boxes[j * 3 + i].innerText);
        }
        if (rowWin[0] !== "" && rowWin[0] === rowWin[1] && rowWin[1] === rowWin[2]) {
            console.log('win' + rowWin[0]);
            if (rowWin[0] === 'X') {
                winner.innerHTML = document.getElementById('player_x_name').value + ' is win..';
            } else {
                winner.innerHTML = document.getElementById('player_o_name').value + ' is win..';
            }
        }

        if (colWin[0] !== "" && colWin[0] === colWin[1] && colWin[1] === colWin[2]) {
            
            if (rowWin[0] === 'X') {
                winner.innerHTML = document.getElementById('player_x_name').value + ' is win..';
            } else {
                winner.innerHTML = document.getElementById('player_o_name').value + ' is win..';
            }

        }
    }

    if (boxes[0].innerText !== "" && boxes[0].innerText === boxes[4].innerText && boxes[4].innerText === boxes[8].innerText) {

        if (boxes[0] === 'X') {
            winner.innerHTML = document.getElementById('player_x_name').value + ' is win..';
        } else {
            winner.innerHTML = document.getElementById('player_o_name').value + ' is win..';
        }
    }

    if (boxes[2].innerText !== "" && boxes[2].innerText === boxes[4].innerText && boxes[4].innerText === boxes[6].innerText) {
        if (boxes[2] === 'X') {
            winner.innerHTML = document.getElementById('player_x_name').value + ' is win..';
        } else {
            winner.innerHTML = document.getElementById('player_o_name').value + ' is win..';
        }
    }

}




function enterName() {
    document.getElementById('x_player').innerText = document.getElementById('player_x_name').value;
    document.getElementById('o_player').innerText = document.getElementById('player_o_name').value;
}

// const elemnets = document.querySelectorAll('.cell');

// elemnets.forEach(cell => {
//     cell.addEventListener('click', () => {
//         console.log('cliked');
//         if (is_x) {
//             cell.innerText = 'X';
//         } else {
//             cell.innerText = 'O';
//         }
//         is_x = !is_x;

//     }, {
//         once: true
//     });
// })