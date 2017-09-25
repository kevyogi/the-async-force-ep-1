var person4 = document.getElementById("person4Name");
var person4HW = document.getElementById("person4HomeWorld");
var person14 = document.getElementById("person14Name");
var person14Species = document.getElementById("person14Species");
var filmList = document.getElementById("filmList");

var person4Req = new XMLHttpRequest();
person4Req.addEventListener("load", person4ReqFunction);
person4Req.open("GET", "https://swapi.co/api/people/4/");
person4Req.send();

function person4ReqFunction(){
  var person4Parsed = JSON.parse(this.responseText);
  person4.innerHTML = person4Parsed.name;

  var oReq2 = new XMLHttpRequest();
  oReq2.addEventListener("load", reqListener2);
  oReq2.open("GET", person4Parsed.homeworld);
  oReq2.send();

  function reqListener2(){
  var person4HomeWorld = JSON.parse(this.responseText);
  person4HW.innerHTML = "Homeworld: " + person4HomeWorld.name;
  }
}

var oReq3 = new XMLHttpRequest();
oReq3.addEventListener("load", reqListener3);
oReq3.open("GET", "https://swapi.co/api/people/14/");
oReq3.send();

function reqListener3(){
  var person14Parsed = JSON.parse(this.responseText);
  person14.innerHTML = person14Parsed.name;

  var oReq4 = new XMLHttpRequest();
  oReq4.addEventListener("load", reqListener4);
  oReq4.open("GET", person14Parsed.species);
  oReq4.send();

  function reqListener4(){
  var person14Sp = JSON.parse(this.responseText);
  person14Species.innerHTML = "Species: " + person14Sp.name;
  }
}

var oReq5 = new XMLHttpRequest();
oReq5.addEventListener("load", reqListener5);
oReq5.open("GET", "https://swapi.co/api/films/");
oReq5.send();

function reqListener5() {
  var films = JSON.parse(this.responseText);
  var filmArray = films.results;

  for(let i = 0; i < filmArray.length; i++){
    let filmBullet = document.createElement("h3");
    filmBullet.className = "filmBullet";
    filmBullet.innerHTML = filmArray[i].title;
    filmList.appendChild(filmBullet);

    for(let j = 0; j < filmArray[i].planets.length; j++){
      let oReq6 = new XMLHttpRequest();
      oReq6.addEventListener("load", function(){
        let planet = JSON.parse(this.responseText);
        processPlanet(filmBullet, planet);
      });
      oReq6.open("GET", filmArray[i].planets[j]);
      oReq6.send();
    }
  }
}

function processPlanet(parentElem, planet){
  let planetElement = document.createElement("li");
  planetElement.innerHTML = planet.name;
  parentElem.appendChild(planetElement);
}