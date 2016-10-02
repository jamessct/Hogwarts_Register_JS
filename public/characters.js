var characters;

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var returnAllCharacters = function() {
  if(this.status !== 200) return;
  characters = JSON.parse(this.responseText);
  console.log(characters)
}

var charactersByHouse = function(houses) {
  var character = characters[0];
  console.log(character.name)
  characters.forEach(function(character) {
    if(houses === character.house)
      // pTag.innerText = "Name: " + character.name + "\n";
      var name = character.name;
      addListItem(name);
  })
}

var createListItem = function(name) {
  var listItem = document.createElement('li');
  listItem.innerText = name;
  return listItem;
}

var appendElements = function(listItem, ul) {
  ul.appendChild(listItem);
}

var addListItem = function(name) {
  var listItem = createListItem(name);
  var ul = document.querySelector('#names')
  appendElements(listItem, ul);
}