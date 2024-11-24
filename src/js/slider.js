export default function () {
    const slider = document.getElementById('slider');
    const sliderWrapper = slider.querySelector('.slider_wrap');
    const items = slider.querySelectorAll('.item');
    const prevButton = slider.parentNode.querySelector('.arrow.left');
    const nextButton = slider.parentNode.querySelector('.arrow.right');

    // Индекс текущего слайда
    let currentIndex = 0;
    // Отступ, который нужно прибавлять (с каждым слайдом он плюсуется)
    let offset = 5;
    const totalItems = items.length;
    const itemWidth = items[0].offsetWidth;

    const sliderItemsGap = parseInt(window.getComputedStyle(sliderWrapper).gap);
    // Кол-во видимых элементов в слайдере
    const itemsVisibleAmount = Math.round(slider.offsetWidth / (itemWidth + sliderItemsGap));

    // Функция для пролистывания
    function updateSlider() {
        // Смещаем слайдер на нужное количество пикселей влево
        const currentItemsWidth = currentIndex * itemWidth;
        const currentItemsOffset = currentIndex * offset;
        // Рассчитываем отступ справа для slider_wrap
        sliderWrapper.style.right = `${currentItemsWidth + currentItemsOffset}px`;
    }

    // Клик по стрелке "Next"
    nextButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Останавливаем пролистывание вправо так, чтобы последний блок был справа
        // (предотвращаем оголение правого края слайдера)
        if (currentIndex < totalItems - itemsVisibleAmount) {
            currentIndex++;
            updateSlider();
        }
    });

    // Клик по стрелке "Previous"
    prevButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
}
