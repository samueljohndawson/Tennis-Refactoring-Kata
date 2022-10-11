var TennisGame1 = function (player1Name, player2Name) {
    // this.player1score = 0;
    // this.player2score = 0;
    // this.player1Name = player1Name;
    // this.player2Name = player2Name;

    this.player1 = { name: player1Name, score: 0 }
    this.player2 = { name: player2Name, score: 0 }

};

TennisGame1.prototype.getPlayers = function () {

    let player1 = this.player1
    let player2 = this.player2
    let players = [player1, player2]
    return players;
}


TennisGame1.prototype.wonPoint = function (playerName) {


    if (playerName === "player1") {
        this.player1.score += 1;
    } else {
        this.player2.score += 1
    }




};

TennisGame1.prototype.getScore = function () {
    var score = "";
    var tempScore = 0;
    let [player1, player2] = this.getPlayers();

    if (player1.score === player2.score) {
        score = convertDrawsToTennisLingo(player1);
    } else if (player1.score >= 4 || player2.score >= 4) {
        var minusResult = player1.score - player2.score;
        if (minusResult === 1) score = "Advantage player1";
        else if (minusResult === -1) score = "Advantage player2";
        else if (minusResult >= 2) score = "Win for player1";
        else score = "Win for player2";
    } else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) tempScore = player1.score;
            else {
                score += "-";
                tempScore = player2.score;
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}

function convertDrawsToTennisLingo(player1) {
    switch (player1.score) {
        case 0:
            score = "Love-All";
            break;
        case 1:
            score = "Fifteen-All";
            break;
        case 2:
            score = "Thirty-All";
            break;
        default:
            score = "Deuce";
            break;
    }
    return score;
}
