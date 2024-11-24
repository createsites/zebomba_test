/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/character.js":
/*!*****************************!*\
  !*** ./src/js/character.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var univerBtn = document.querySelector('.controls .univer');
var character = document.getElementById('character');
// Лимит шагов
var maxSteps = 5;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  // Событие на клик по кнопке "Универ"
  univerBtn.addEventListener("click", function (event) {
    event.preventDefault();
    moveCharacter();
  });
}
function moveCharacter() {
  // Определяем точку нахождения на карте
  // Ищем класс point%d
  var pointClass = Array.from(character.classList).find(function (cls) {
    return cls.startsWith('point');
  });
  // Получаем из него номер шага
  var point = pointClass ? parseInt(pointClass.replace('point', '')) : 0;
  // Перемещаем персонажа, если он не достиг лимита шагов
  if (point < maxSteps) {
    // Анимация fade out персонажа
    character.classList.toggle('hidden');
    // Задержка на длительность анимации
    setTimeout(function () {
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

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   data: () => (/* binding */ data)
/* harmony export */ });
var data = {
  "rating": [{
    "id": "123",
    "name": "Владимир",
    "lastName": "Ларионов",
    "img": "./male.png",
    "points": "463"
  }, {
    "id": "9",
    "name": "Владимир",
    "lastName": "Сергеев",
    "img": "./male.png",
    "points": "521"
  }, {
    "id": "231",
    "name": "Вениамин",
    "lastName": "Васильев",
    "img": "./male.png",
    "points": "865"
  }, {
    "id": "321",
    "name": "Мария",
    "lastName": "Логинова",
    "img": "./female.png",
    "points": "865"
  }, {
    "id": "492",
    "name": "Борис",
    "lastName": "Казанцев",
    "img": "./male.png",
    "points": "784"
  }, {
    "id": "452",
    "name": "Полина",
    "lastName": "Калинина",
    "img": "./female.png",
    "points": "225"
  }, {
    "id": "796",
    "name": "Даниил",
    "lastName": "Воробьёв",
    "img": "./male.png",
    "points": "642"
  }, {
    "id": "4",
    "name": "Эрик",
    "lastName": "Аксёнов",
    "img": "./male.png",
    "points": "150"
  }, {
    "id": "1155",
    "name": "Иван",
    "lastName": "Иванов",
    "img": "./male.png",
    "points": "100"
  }, {
    "id": "12145",
    "name": "Артем",
    "lastName": "Алексеев",
    "img": "./male.png",
    "points": "1000"
  }],
  "friends": [{
    "id": "9",
    "name": "Владимир",
    "lastName": "Сергеев",
    "img": "./male.png"
  }, {
    "id": "4",
    "name": "Эрик",
    "lastName": "Аксёнов",
    "img": "./male.png"
  }, {
    "id": "15411",
    "name": "Ирина",
    "lastName": "Чеснокова",
    "img": "./female.png"
  }, {
    "id": "15564",
    "name": "Дарина",
    "lastName": "Боброва",
    "img": "./female.png"
  }]
};

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.js */ "./src/js/slider.js");
/* harmony import */ var _rating_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating.js */ "./src/js/rating.js");
/* harmony import */ var _character_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character.js */ "./src/js/character.js");



document.addEventListener('DOMContentLoaded', function () {
  // Слайдер
  (0,_slider_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  // Модалка с рейтингом
  (0,_rating_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  // Перемещение персонажа
  (0,_character_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/js/rating.js":
/*!**************************!*\
  !*** ./src/js/rating.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/js/data.js");

var overlay = document.getElementById("overlay");
var rating = document.getElementById("rating");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  // Загрузка данных
  loadData();
  // Открытие окна
  document.querySelector(".controls .rating").addEventListener("click", function (event) {
    event.preventDefault();
    openModal();
  });
  // Закрытие окна по клику на крестик
  document.querySelector("#rating .close").addEventListener("click", function (event) {
    event.preventDefault();
    closeModal();
  });
  // Закрытие при клике на оверлей
  document.getElementById("overlay").addEventListener("click", function (event) {
    if (!rating.contains(event.target)) {
      closeModal();
    }
  });
}
function loadData() {
  // Сортируем по рейтингу
  _data_js__WEBPACK_IMPORTED_MODULE_0__.data.rating.sort(function (a, b) {
    return Number(b.points) - Number(a.points);
  });
  // Выводим
  var tableBody = document.querySelector("table.score tbody");
  _data_js__WEBPACK_IMPORTED_MODULE_0__.data.rating.forEach(function (item, index) {
    var row = document.createElement('tr');

    // Проверка друг или нет
    if (_data_js__WEBPACK_IMPORTED_MODULE_0__.data.friends.find(function (friend) {
      return friend.id === item.id;
    })) {
      row.classList.add("friend");
    }
    // Формируем строку таблицы из данных
    row.innerHTML = "\n            <td></td>\n            <td>".concat(index + 1, "</td>\n            <td><img src=\"img/rating/square.png\" alt=\"Avatar\"></td>\n            <td class=\"name\">").concat(item.name, " ").concat(item.lastName, "</td>\n            <td>").concat(item.points, "</td>\n            <td></td>\n        ");
    tableBody.appendChild(row);
  });
}
function openModal() {
  overlay.classList.add("show");
  rating.classList.add("show");
}
function closeModal() {
  rating.classList.remove("show");
  setTimeout(function () {
    overlay.classList.remove("show");
  }, 500);
}

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var slider = document.getElementById('slider');
  var sliderWrapper = slider.querySelector('.slider_wrap');
  var items = slider.querySelectorAll('.item');
  var prevButton = slider.parentNode.querySelector('.arrow.left');
  var nextButton = slider.parentNode.querySelector('.arrow.right');

  // Индекс текущего слайда
  var currentIndex = 0;
  // Отступ, который нужно прибавлять (с каждым слайдом он плюсуется)
  var offset = 5;
  var totalItems = items.length;
  var itemWidth = items[0].offsetWidth;
  var sliderItemsGap = parseInt(window.getComputedStyle(sliderWrapper).gap);
  // Кол-во видимых элементов в слайдере
  var itemsVisibleAmount = Math.round(slider.offsetWidth / (itemWidth + sliderItemsGap));

  // Функция для пролистывания
  function updateSlider() {
    // Смещаем слайдер на нужное количество пикселей влево
    var currentItemsWidth = currentIndex * itemWidth;
    var currentItemsOffset = currentIndex * offset;
    // Рассчитываем отступ справа для slider_wrap
    sliderWrapper.style.right = "".concat(currentItemsWidth + currentItemsOffset, "px");
  }

  // Клик по стрелке "Next"
  nextButton.addEventListener('click', function (event) {
    event.preventDefault();
    // Останавливаем пролистывание вправо так, чтобы последний блок был справа
    // (предотвращаем оголение правого края слайдера)
    if (currentIndex < totalItems - itemsVisibleAmount) {
      currentIndex++;
      updateSlider();
    }
  });

  // Клик по стрелке "Previous"
  prevButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/js/character.js");
/******/ 	__webpack_require__("./src/js/data.js");
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	__webpack_require__("./src/js/rating.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/slider.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map