play_squares = document.querySelectorAll(".playsquare");

let current_turn = "X"

reset_btn = document.querySelector(".reset");
reset_btn.addEventListener("click", function(event_args){
    play_squares.forEach(square => {
        square.textContent = ""
    });
})


function straight_winner(selector, winner){
    row = document.querySelectorAll(selector);
    win = true
    row.forEach(cell => {
        if (cell.textContent != winner || cell.textContent == ""){
            win = false
        }
    });
    return win
}

function check_for_winner(winner="X"){
    // check horizontals
    top_win = straight_winner('.top', winner);
    mid_win = straight_winner('.middle', winner);
    bot_win = straight_winner('.bottom', winner);
    // check verticals
    lef_win = straight_winner('.left', winner);
    cen_win = straight_winner('.center', winner);
    rit_win = straight_winner('.right', winner);

    // check diagonals
    nve_win = straight_winner('.d1', winner);
    pve_win = straight_winner('.d2', winner);

    if (top_win || mid_win || bot_win || lef_win || cen_win || rit_win || nve_win || pve_win){
        return true
    } else {
        return false
    }
}

function action(event_args){
    event_args.target.textContent = current_turn

    winner = check_for_winner(current_turn)
    if (winner){
        alert(`WINNER PLAYER ${current_turn}`)
    }

    // Other person's move
    if (current_turn == "X"){
        current_turn = "O"
    } else {
        current_turn = "X"
    }
}

play_squares.forEach(square => {
    square.addEventListener("click", action)
});