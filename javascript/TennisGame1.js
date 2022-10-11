var TennisGame1 = function (player1Name, player2Name) {
    // this.player1score = 0;
    // this.player2score = 0;
    // this.player1Name = player1Name;
    // this.player2Name = player2Name;

    this.player1 = { name: player1Name, score: 0 }
    this.player2 = { name: player2Name, score: 0 }

};

TennisGame1.prototype.wonPoint = function (playerName) {
    if (playerName === "player1")
        this.player1.score += 1;
    else
        this.player2.score += 1;

};

TennisGame1.prototype.getScore = function () {
    var score = "";
    var tempScore = 0;
    if (this.player1.score === this.player2.score) {
        switch (this.player1.score) {
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
    } else if (this.player1.score >= 4 || this.player2.score >= 4) {
        var minusResult = this.player1.score - this.player2.score;
        if (minusResult === 1) score = "Advantage player1";
        else if (minusResult === -1) score = "Advantage player2";
        else if (minusResult >= 2) score = "Win for player1";
        else score = "Win for player2";
    } else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) tempScore = this.player1.score;
            else {
                score += "-";
                tempScore = this.player2.score;
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