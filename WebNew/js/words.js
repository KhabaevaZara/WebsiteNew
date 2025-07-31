document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.letter');
    const wordContainer = document.getElementById('wordContainer');
    
    function animateLetters() {
        // 1. Анимация вкатывания букв по очереди
        letters.forEach((letter, index) => {
            // Каждая буква появляется с задержкой 1.5s относительно предыдущей
            letter.style.animation = `rollIn 5s ${index * 1.5}s forwards`;
        });

        // Общее время анимации всех букв + небольшая задержка
        const totalLettersAnimationTime = letters.length * 1500 + 500;
        
        // 2. Анимация появлениxя оригинального слова после завершения анимации букв
        setTimeout(() => {
            wordContainer.style.animation = 'reformWord 0.29s forwards';
            
            // 3. Устанавливаем финальный отступ между буквами
            setTimeout(() => {
                wordContainer.style.letterSpacing = '0.25rem';
            }, 130);
            
        }, totalLettersAnimationTime);
    }

    // Запускаем анимацию после небольшой задержки для полной загрузки DOM
    setTimeout(animateLetters, 10);
});