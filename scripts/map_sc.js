src="https://api-maps.yandex.ru/2.1/?apikey=c84c56d2-d002-4770-97e0-0de35bff37d5&lang=ru_RU"
        type="text/javascript"
ymaps.ready(init);

function init() {
    var geolocation = ymaps.geolocation,
        myMap = new ymaps.Map('y_map', {
            center: [55, 34],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        });

    geolocation.get({
        provider: 'browser',
        mapStateAutoApply: true
    }).then(function (result) {// обработчик при выполнении  запроса
        result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
        myMap.geoObjects.add(result.geoObjects);
    })
        .catch(function (result) {  // обработчик при отклонении  запроса
            alert("Не удалось получить геолокацию");
        })
}

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader')
    preloader.classList.add('preloader_hidden')
})