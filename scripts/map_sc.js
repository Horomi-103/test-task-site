ymaps.ready(init);

function init() {
    var geolocation = ymaps.geolocation;
    myMap = new ymaps.Map('y_map', {
        center: [55, 34],
        zoom: 10,
        controls: []
    });

    geolocation.get({
        provider: 'browser',
        mapStateAutoApply: true
    }).then(function (result) {// обработчик при выполнении  запроса
        result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
        myMap.geoObjects.add(result.geoObjects);
    })
}

function press() {
    var geolocation = ymaps.geolocation;
    geolocation.get({
        provider: 'browser',
        mapStateAutoApply: true
    }).then(function (result) {// обработчик при выполнении  запроса
        result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
        myMap.geoObjects.add(result.geoObjects);
        document.getElementById('btn1').value = 'Где я?';
    }).catch(function (result) {  // обработчик при отклонении  запроса
        //alert('Ура, меня нажали');
        document.getElementById('btn1').value = 'Не удалось найти местоположение. Повторить?';
    });
}



window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader')
    preloader.classList.add('preloader_hidden')
})