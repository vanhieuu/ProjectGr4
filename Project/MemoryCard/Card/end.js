       
  
const username = document.getElementById('username');
   const saveScoreBtn = document.getElementById('save-Score');

            var totalTime = localStorage.getItem('totalTime');
             var totalMove = JSON.parse(localStorage.getItem('totalMove'))
            var highScores = JSON.parse(localStorage.getItem('movesAndTime')) || [];
           
            username.addEventListener('keyup', () => {
                saveScoreBtn.disabled = !username.value;
            });
        
            let saveScore = (e) => {
                e.preventDefault();
                const moveandTimeScore = {
                    moveScore: totalMove -1 ,
                    timeScore :totalTime ,
                    name: username.value,
                }
               
                highScores.push(moveandTimeScore);
                highScores.sort((a, b) => b.moveandTimeScore - a.moveandTimeScore);
            
                localStorage.setItem('moveandTimes', JSON.stringify(highScores));

            }; 