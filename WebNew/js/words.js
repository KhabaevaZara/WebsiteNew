document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.letter');
    const wordContainer = document.getElementById('wordContainer');
    
    // Анимация в несколько этапов
    function animateLetters() {
        // 1. Катим буквы по одной
        letters.forEach((letter, index) => {
            letter.style.animation = `rollIn 0.8s ${index * 0.2}s forwards`;
        });

        // 2. После завершения качения всех букв, слипаем их
        setTimeout(() => {
            wordContainer.style.animation = 'stickTogether 0.5s forwards';
            
            // 3. После слипания, скрываем все буквы
            setTimeout(() => {
                // Скрываем все буквы
                letters.forEach((letter) => {
                    letter.style.opacity = '0';
                });
                
                // 4. Через некоторое время возвращаем обратно в слово
                setTimeout(() => {
                    // Анимация появления оригинального слова
                    wordContainer.style.animation = 'reformWord 0.8s forwards';
                    
                    // Плавно показываем все буквы обратно
                    letters.forEach((letter, index) => {
                        setTimeout(() => {
                            letter.style.opacity = '1';
                        }, index * 100);
                    });
                    
                    // Устанавливаем финальный отступ
                    setTimeout(() => {
                        wordContainer.style.letterSpacing = '1.25rem';
                    }, 800);
                }, 1500);
            }, 500);
        }, letters.length * 200 + 800);
    }

    // Запускаем анимацию после небольшой задержки
    setTimeout(() => {
        animateLetters();
    }, 100);
});