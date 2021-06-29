function goToPage(a) {
  fetch(a)
    .then(function (answer) {
      if (answer.status == 200) { return answer.text(); }
      else { alert("Ошибка HTTP: " + answer.status); }
    })
    .then(function (result) {
      var el = document.createElement('html');
      el.innerHTML = result;
      document.querySelector('#content').innerHTML = el.querySelector('#content').innerHTML;
      document.querySelector('title').innerHTML = el.querySelector('title').innerHTML;
      
      // @NOTE: переинициализируем все скрипты в #content, потому что иначе они не работают
      // https://www.danielcrabtree.com/blog/25/gotchas-with-dynamically-adding-script-tags-to-html
      document.querySelector('#content').querySelectorAll('script').forEach(oldScript => {
        var newScript = document.createElement('script');
        newScript.src = oldScript.src;
        parentElement = oldScript.parentElement;
        parentElement.removeChild(oldScript);
        parentElement.appendChild(newScript);
      });
    })
}
