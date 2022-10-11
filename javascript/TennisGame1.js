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
    let score = "";
    let [player1, player2] = this.getPlayers();
    let pointDifference = player1.score - player2.score



    if (pointDifference == 0) {
        score = convertDrawsToTennisLingo(player1.score);

    }
    else if (isAdvantage(player1.score, player2.score, pointDifference)) {
        score = calculateAdvantage(pointDifference);
    }
    else if (isOver(player1.score, player2.score, pointDifference)) {
        score = calculateWinner(pointDifference)
    }
    else {
        score += convertPointsToTennisLingo(player1.score)
        score += "-"
        score += convertPointsToTennisLingo(player2.score)
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}

function isAdvantage(player1score, player2score, pointDifference) {
    return ((player1score >= 4 || player2score >= 4) && (Math.abs(pointDifference) < 2))
}

function convertPointsToTennisLingo(points) {
    switch (points) {
        case 0:
            return "Love";
        case 1:
            return "Fifteen";
        case 2:
            return "Thirty";
        case 3:
            return "Forty";
    }
}

function calculateAdvantage(pointDifference) {
    switch (true) {
        case pointDifference === 1:
            score = "Advantage player1";
            break;
        case pointDifference === -1:
            score = "Advantage player2";
            break;
    }
    return score
}

function isOver(player1score, player2score, pointDifference) {
    return ((Math.abs(pointDifference) >= 2) && (player1score >= 4 || player2score >= 4))
}

function calculateWinner(pointDifference) {
    switch (true) {
        case pointDifference >= 2:
            score = "Win for player1";
            break;
        case pointDifference <= 2:
            score = "Win for player2";
            break;
    }
    return score

}

function convertDrawsToTennisLingo(numberOfPoints) {
    switch (numberOfPoints) {
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
