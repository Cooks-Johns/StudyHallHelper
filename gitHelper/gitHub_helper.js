// This is how we are testing 

function showMoves() {
    var i = 0;
    var moves = setInterval(function(){
        playGame(game.yourGame[i]);
        i++;
        if (i >= game.yourGame.length) {
            clearInterval(moves);
        }
    }, 800);

    reset();
}