var player = function(userName, turnScore, totalScore) {
  this.userName = userName;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}

player.prototype.roll = function() {
  this.dice = Math.floor(Math.random() * 6) + 1;
  this.turnScore = this.turnScore + parseInt(this.dice);
  if(this.dice === 1) {
    this.turnScore = 0;
  }
}

player.prototype.hold = function() {
  this.totalScore = this.totalScore + this.turnScore;
  this.turnScore = 0;
}

//User Logic
$(document).ready(function() {
var player1 = new player("player1", 0, 0, 0);
var player2 = new player("player2", 0, 0, 0);

$("#p1-total-score").text(player1.totalScore);
$("#p2-total-score").text(player2.totalScore);

$("button#player-1-roll-click").click(function(event) {
  event.preventDefault();
  player1.roll();
    $("ul#player-1-turn-score").text(player1.turnScore);

    if (player1.dice === 1) {
      $("#player-2").show();
      $("#player-1").hide();
    }
    else if (player1.dice >= 100) {
      alert("You win!")
    }
});

$("button#player-1-hold-click").click(function(event) {
    event.preventDefault();
    player1.hold();
    $("#p1-total-score").text(player1.totalScore);
    $("#player-2").show();
    $("#player-1").hide();
});

$("button#player-2-roll-click").click(function(event) {
  event.preventDefault();
  player2.roll();
    $("ul#player-2-turn-score").text(player2.turnScore);

    if (player2.dice === 1) {
      $("#player-1").show();
      $("#player-2").hide();
    }
    else if (player2.dice >= 100) {
      alert("You win!")
    }

});

$("button#player-2-hold-click").click(function(event) {
    event.preventDefault();
    player2.hold();
    $("#p2-total-score").text(player2.totalScore);
    $("#player-1").show();
    $("#player-2").hide();
});

});
