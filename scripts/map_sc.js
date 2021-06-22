ymaps.ready(init);

function initMap() {

    myMap = new ymaps.Map('y-map', {
        center: [55, 34],
        zoom: 10,
        controls: []
    })

    queryGeolocation().then(function (result) {
        addPoint(result);
    })
}

function addPoint(a) {
    a.geoObjects.options.set('preset', 'islands#blueCircleIcon');
    return myMap.geoObjects.add(a.geoObjects);
}

function queryGeolocation() {
    geolocation = ymaps.geolocation;
    return geolocation.get({
        provider: 'browser',
        mapStateAutoApply: true
    })
}

function press() {
    document.querySelector('button').disabled = true;
    document.querySelector('button').innerHTML = "определяю...";
    queryGeolocation().then(function (result) {
        addPoint(result);
        document.querySelector('button').innerHTML = "Где я?"

    })
    queryGeolocation().catch(function () {  // обработчик при отклонении  запроса
        document.querySelector('button').disabled = false;
        document.querySelector('button').innerHTML = "Не удалось найти местоположение. Повторить?";
    });
}

function init() {
    var preloader = document.querySelector('.preloader');
    initMap();
    preloader.classList.add('preloader_hidden');
}