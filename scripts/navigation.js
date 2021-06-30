// @NOTE: поддержка кнопки браузера "назад"
window.onpopstate = function (event) {
  var paths = window.location.pathname.split('/');
  var pagePath = paths[paths.length - 1]; // достаём последнюю строку из window.location.pathname
  return loadPage(pagePath);
}

var elems = document.querySelectorAll('.regular-block a');

// метод для обновления страницы на новую
function loadPage(pagePath) {
  return fetch(pagePath)
    .then(function (answer) {
      if (answer.status == 200) { return answer.text(); }
      else { alert("Ошибка HTTP: " + answer.status); }
    })
    .then(function (result) {
      var el = document.createElement('html');
      el.innerHTML = result;
      document.querySelector('#content').innerHTML = el.querySelector('#content').innerHTML;

      // обновляем title (@TODO)
      document.querySelector('title').innerHTML = el.querySelector('title').innerHTML;

      //var elems = document.querySelectorAll('.regular-block a');
      for (var i = 0; i < elems.length; i++)
        elems[i].addEventListener('click', makeActive);

      // @NOTE: переинициализируем все скрипты в #content, потому что иначе они не работают
      // https://www.danielcrabtree.com/blog/25/gotchas-with-dynamically-adding-script-tags-to-html
      document.querySelector('#content').querySelectorAll('script').forEach(oldScript => {
        var newScript = document.createElement('script');
        newScript.src = oldScript.src;
        parentElement = oldScript.parentElement;
        parentElement.removeChild(oldScript);
        parentElement.appendChild(newScript);
      });

      return result;
    })
}

// метод для перехода на нужную страницу
function goToPage(pagePath) {
  if (event) {
    event.preventDefault(); // отключает переход по ссылке

    if (!pagePath) {
      pagePath = event.currentTarget.attributes.href.value; // достаём pagePath из href <a>
    }
  }

  return loadPage(pagePath).then((result) => {
    var el = document.createElement('html');
    el.innerHTML = result;

    history.pushState(null, el.querySelector('title').innerHTML, pagePath);
  });
}

function makeActive() {
  for (var i = 0; i < elems.length; i++)
    elems[i].classList.remove('active');

  this.classList.add('active');
}