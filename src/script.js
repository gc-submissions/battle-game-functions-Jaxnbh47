"use strict";

// TODO - write your code here.

let randomDamage = () => { return Math.floor(Math.random() * 10) + 1 };


let chooseOption = (opt1, opt2) => {

    let randNum = Math.round(Math.random())

    return randNum === 0 ? opt1 : opt2
}

var attackPlayer = function (health) {
    return health - randomDamage()
}

let logHealth = (player, health) => {
    console.log(`${player} health: ${health}`)
}

let logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`)
}

let isDead = (health) => {

    return health <= 0 ? true : false
}

function fight (player1, player2, player1Health, player2Health){
    while (true){
        var attacker = chooseOption(player1, player2);
        if (attacker === player1){
            player2Health = attackPlayer(player2Health);
            if (isDead(player2Health)){
                logDeath(player1, player2);
                break;
            }

        }
        else {
            player1Health = attackPlayer (player1Health);
            logHealth(player1, player1Health);
            if (isDead(player1Health)){
                logDeath(player2, player1);
                break;
            }
        }
    }
}
fight("Jackson", "Brett", 100, 100)
//read into fight function
