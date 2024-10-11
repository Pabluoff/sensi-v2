var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000, // 5 segundos
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            faqItems.forEach(otherItem => {
                const otherQuestion = otherItem.querySelector('.faq-question');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                otherQuestion.classList.remove('active');
                otherItem.classList.remove('active');
                otherAnswer.style.maxHeight = null;
                otherAnswer.style.padding = '0 20px';
            });

            if (!isActive) {
                question.classList.add('active');
                item.classList.add('active');
                answer.style.maxHeight = (answer.scrollHeight + 20) + 'px';
                answer.style.padding = '10px 20px 20px';
            }
        });
    });
});
