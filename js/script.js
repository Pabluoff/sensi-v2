let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel__item');
    items[currentIndex].classList.remove('active'); // Remove a classe ativa do item atual
    currentIndex = (currentIndex + direction + items.length) % items.length; // Atualiza o índice
    items[currentIndex].classList.add('active'); // Adiciona a classe ativa ao novo item
}
