document.addEventListener('DOMContentLoaded', function() {  /* Событие срабатывает, когда DOM загружен и готов к работе */
    const slider = document.querySelector('.slider');        /* Получаем элемент слайдера (контейнер слайдов) */
    const prevBtn = document.querySelector('.prev-btn');     /* Получаем кнопку "Назад" */
    const nextBtn = document.querySelector('.next-btn');     /* Получаем кнопку "Вперёд" */
    const slides = document.querySelectorAll('.slide');      /* Получаем все слайды (коллекция элементов) */
    const pager = document.querySelector('.pager');          /* Получаем контейнер пейджера (индикаторов) */

    let currentSlide = 0;                                   /* Текущий слайд (начинаем с 0 — первый слайд) */
    const slideWidth = slides[0].offsetWidth;               /* Ширина одного слайда (берём ширину первого слайда) */

    // Создание пейджера
    slides.forEach((slide, index) => {                      /* Проходим по всем слайдам */
        const span = document.createElement('span');         /* Создаём элемент span для индикатора */
        span.textContent = index + 1;                       /* Текст индикатора — номер слайда (начинаем с 1) */
        span.addEventListener('click', () => goToSlide(index)); /* При клике на индикатор переходим к соответствующему слайду */
        pager.appendChild(span);                            /* Добавляем индикатор в контейнер пейджера */
    });

    // Прокрутка влево
    prevBtn.addEventListener('click', () => {
        currentSlide--;                                   // Уменьшаем номер текущего слайда
        if (currentSlide < 0) currentSlide = slides.length - 1;  // Если вышли за пределы влево, переходим к последнему слайду
        updateSlider();                                  // Обновляем позицию слайдера
    });

    // Прокрутка вправо
    nextBtn.addEventListener('click', () => {
        currentSlide++;                                   // Увеличиваем номер текущего слайда
        if (currentSlide >= slides.length) currentSlide = 0;  // Если вышли за пределы вправо, переходим к первому слайду
        updateSlider();                                  // Обновляем позицию слайдера
    });

    // Переход к слайду
    function goToSlide(index) {
        currentSlide = index;                            // Устанавливаем текущий слайд
        updateSlider();                                  // Обновляем позицию слайдера
    }

    // Обновление позиции слайдера
    function updateSlider() {
        const slideWidth = slides[0].offsetWidth;         // Получаем ширину слайда
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;  // Применяем трансформацию для прокрутки

        // Выделение текущего слайда в пейджере
        const pagerSpans = pager.querySelectorAll('span');  // Получаем все индикаторы
        pagerSpans.forEach((span, index) => {
            span.classList.toggle('active', index === currentSlide);  // Добавляем/удаляем класс active для текущего слайда
        });
    }
});
