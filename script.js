// Ждем загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    
    // Находим все карточки
    const cards = document.querySelectorAll('.card');
    
    // Сначала делаем их прозрачными
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Плавно показываем каждую карточку с небольшой задержкой
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100); // 100мс задержка между карточками
    });
});