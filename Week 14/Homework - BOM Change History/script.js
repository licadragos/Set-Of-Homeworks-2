const btn = document.getElementById('someBtnId');
const someHeader = document.getElementById('someHeader');

btn.addEventListener('click', function() {
  someHeader.textContent="Page content has changed.";
  history.pushState({}, "", "newpage/contact")
});
