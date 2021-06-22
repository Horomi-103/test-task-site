ymaps.ready(init);

function init() {

    myMap = new ymaps.Map('y-map', {
        center: [55, 34],
        zoom: 10,
        controls: []
    });
    queryGeolocation().then(function (result) {
        result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
        myMap.geoObjects.add(result.geoObjects);
    });
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
        result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
        myMap.geoObjects.add(result.geoObjects);
        document.querySelector('button').innerHTML = "Где я?"
        document.querySelector('button').disabled = false
    })
    queryGeolocation().catch(function () {  // обработчик при отклонении  запроса
        document.querySelector('button').disabled = false;
        document.querySelector('button').innerHTML = "Не удалось найти местоположение. Повторить?";
    });
}



window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader')
    preloader.classList.add('preloader_hidden')
})