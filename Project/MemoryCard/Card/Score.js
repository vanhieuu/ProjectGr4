
const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem('moveandTimes')) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score"> ${score.name} - ${score.moveScore} - ${score.timeScore}</li>`;
  })
  .join("");