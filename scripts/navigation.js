
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
    })
}

