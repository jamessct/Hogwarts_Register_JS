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
  var pTag = document.querySelector('#names')
  characters.forEach(function(character) {
    if(houses === character.house)
      pTag.innerText = "Name: " + character.name + "\n";
  })
}