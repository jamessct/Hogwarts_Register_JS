var app = function() {
  var url = "http://hp-api.herokuapp.com/api/characters";
  makeRequest(url, returnAllCharacters);

  var select = document.querySelector('select');
  select.onchange = handleSelectChanged;
}

var handleSelectChanged = function(){
  var pTag = document.querySelector('#result');
  var houses = this.value;
  pTag.innerText = "The students in " + this.value + " include: "; 
  charactersByHouse(houses);
}

window.onload = app;