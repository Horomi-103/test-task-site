ymaps.ready(init);
var myMap;
function initMap() {
    if (!myMap) {
        myMap = new ymaps.Map('y-map', {
            center: [55, 34],
            zoom: 10,
            controls: []
        });
    }
    var geolocation = ymaps.geolocation;
    return geolocation.get({
        provider: 'browser',
        mapStateAutoApply: true
    }).then(function (result) {
        result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
        myMap.geoObjects.add(result.geoObjects);
    });
}
function init() {
    var preloader = document.querySelector('.preloader');
    initMap();
    preloader.classList.add('preloader_hidden');

}

function press() {
    document.querySelector('button').disabled = true;
    document.querySelector('button').innerHTML = "определяю...";
    initMap().then(function () {
        document.querySelector('button').innerHTML = "Где я?"

    })
        .catch(function () {
            document.querySelector('button').innerHTML = "Не удалось найти местоположение. Повторить?";
            document.querySelector('button').disabled = false;
        })
}