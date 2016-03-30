var player = function(userName, turnScore, totalScore) {
  this.userName = userName;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}

player.prototype.roll = function() {
  var dice = Math.floor(Math.random() * 6) + 1;
  this.turnScore = this.turnScore + parseInt(dice);
  if(dice === 1) {
    this.turnScore = 0;
    return 1;
  } else {
    return dice;
  }
}

player.prototype.hold = function() {
  this.totalScore = this.totalScore + this.turnScore;
  this.turnScore = 0;
}
