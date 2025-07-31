document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.letter');
    const wordContainer = document.getElementById('wordContainer');
    
    function animateLetters() {
      letters.forEach((letter, index) => {
        letter.style.animation = `rollIn 0.8s ${index * 0.2}s forwards`;
      });
  
      setTimeout(() => {
        wordContainer.style.animation = 'stickTogether 0.3s forwards';
        
        setTimeout(() => {
          letters.forEach(letter => letter.style.opacity = '0');
          
          // Создаем большую букву "О"
          const bigO = document.createElement('div');
          bigO.className = 'big-o';
          bigO.textContent = 'O';
          wordContainer.appendChild(bigO);
          
          // Анимация появления большой буквы
          setTimeout(() => {
            bigO.style.animation = 'growO 0.7s forwards';
            
            // Исчезновение большой буквы и восстановление слова
            setTimeout(() => {
              bigO.style.animation = 'shrinkO 0.5s forwards';
              
              setTimeout(() => {
                bigO.remove();
                wordContainer.style.animation = 'reformWord 0.5s forwards';
                
                letters.forEach((letter, index) => {
                  setTimeout(() => {
                    letter.style.opacity = '1';
                  }, index * 100);
                });
                
                setTimeout(() => {
                  wordContainer.style.letterSpacing = '1.25rem';
                }, 500);
              }, 500);
            }, 1500); // Время показа большой буквы
          }, 10);
        }, 500);
      }, 1600); // letters.length * 200 + 800
    }
  
    setTimeout(animateLetters, 100);
  });