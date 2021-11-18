function computer_play() {
    var move = Math.floor(Math.random() * 3)

    if (move===0) {
        move = "rock";
    } else if (move===1) {
        move = "paper";
    } else {
        move = "scissors";
    }

    return move;
}

function one_round(player_selection, computer_selection) {
    player_selection = player_selection.toLowerCase();
    
    if(player_selection==="rock" && computer_selection==="scissors") {
        return "You lose"
    } else if (player_selection==="rock" && computer_selection==="paper") {
        return "You win"
    } else if (player_selection==="rock" && computer_selection==="rock") {
        return "Tie"
    } else if (player_selection==="paper" && computer_selection==="scissors") {
        return "You lose"
    } else if (player_selection==="paper" && computer_selection==="paper") {
        return "Tie game"
    } else if (player_selection==="paper" && computer_selection==="rock") {
        return "You win"
    } else if (player_selection==="scissors" && computer_selection==="scissors") {
        return "Tie game"
    } else if (player_selection==="scissors" && computer_selection==="paper") {
        return "You win"
    } else if (player_selection==="scissors" && computer_selection==="rock") {
        return "You lose"
    }
}

function change_variable(one_point, score) {
    if(one_point === "You lose") {
        score -= 1;
        return score
    } else if (one_point === "You win"){
        score += 1;
        return score;
    } else {
        score += 0;
        return score;
    }
}

function one_game() {
    var score = 0;
    
    while(true) {
        var one_point=one_round(prompt(), computer_play());

        //Changes score
        score = change_variable(one_point, score);
        
        //Conole.log if you won or lost
        console.log(one_point);
        console.log("score: " + score)
        
        //Break statement that breaks the loop
        if(score>=5) {
            console.log("You win");
            break;
        } else if (score<=-5) {
            console.log("You lose");
            break;
        }
    }
}

one_game();
