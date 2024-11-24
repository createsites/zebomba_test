const univerBtn = document.querySelector('.controls .univer');
const character = document.getElementById('character');
// Лимит шагов
const maxSteps = 5;

export default function () {
    // Событие на клик по кнопке "Универ"
    univerBtn.addEventListener("click", (event) => {
        event.preventDefault();
        moveCharacter();
    });
}

function moveCharacter() {
    // Определяем точку нахождения на карте
    // Ищем класс point%d
    const pointClass = Array.from(character.classList).find(cls => cls.startsWith('point'));
    // Получаем из него номер шага
    const point = pointClass ? parseInt(pointClass.replace('point', '')) : 0;
    // Перемещаем персонажа, если он не достиг лимита шагов
    if (point < maxSteps) {
        // Анимация fade out персонажа
        character.classList.toggle('hidden');
        // Задержка на длительность анимации
        setTimeout(() => {
            // Смена персонажем точки на карте
            if (pointClass) {
                character.classList.remove(pointClass);
            }
            character.classList.add("point" + (point + 1));
            // Появление персонажа
            character.classList.toggle('hidden');
        }, 500);
    }
}