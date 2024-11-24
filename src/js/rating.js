import {data} from "./data.js"

const overlay = document.getElementById("overlay");
const rating = document.getElementById("rating");

export default function () {
    // Загрузка данных
    loadData();
    // Открытие окна
    document.querySelector(".controls .rating").addEventListener("click", (event) => {
        event.preventDefault();
        openModal();
    });
    // Закрытие окна по клику на крестик
    document.querySelector("#rating .close").addEventListener("click", (event) => {
        event.preventDefault();
        closeModal();
    });
    // Закрытие при клике на оверлей
    document.getElementById("overlay").addEventListener("click", (event) => {
        if (!rating.contains(event.target)) {
            closeModal();
        }
    });
}

function loadData() {
    // Сортируем по рейтингу
    data.rating.sort((a, b) => {
        return Number(b.points) - Number(a.points);
    });
    // Выводим
    const tableBody = document.querySelector("table.score tbody");
    data.rating.forEach((item, index) => {
        const row = document.createElement('tr');

        // Проверка друг или нет
        if (data.friends.find(friend => friend.id === item.id)) {
            row.classList.add("friend");
        }
        // Формируем строку таблицы из данных
        row.innerHTML = `
            <td></td>
            <td>${index + 1}</td>
            <td><img src="img/rating/square.png" alt="Avatar"></td>
            <td class="name">${item.name} ${item.lastName}</td>
            <td>${item.points}</td>
            <td></td>
        `;
        tableBody.appendChild(row);
    });
}

function openModal() {
    overlay.classList.add("show");
    rating.classList.add("show");
}

function closeModal() {
    rating.classList.remove("show");
    setTimeout(() => {
        overlay.classList.remove("show");
    }, 500);
}