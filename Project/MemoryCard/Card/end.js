       
  
   var username = document.getElementById('username');
    var saveScoreBtn = document.getElementById('btn')
    var finalTime = document.getElementsByClassName('timer')
    var moves = document.getElementsByClassName('moves')

            var totalTime = localStorage.getItem('totalTime');
            var totalMove = JSON.parse(localStorage.getItem('totalMove')) 
            var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
            username.addEventListener('keyup', () => {
                saveScoreBtn.disabled = !username.value;
            });

            let saveScore = (e) => {
                e.preventDefault();
                var moveandTimeScore = {
                    moveScore: moveCounter,
                    timeScore :timeplay,
                    name: username.value,
                }
                highScores.push(moveandTimeScore);
                highScores.sort((a, b) => b.moveandTimeScore - a.moveandTimeScore);
                highScores.splice(5);
            
                localStorage.setItem('highScores', JSON.stringify(highScores));
            }; 