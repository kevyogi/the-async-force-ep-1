var person4 = document.getElementById("person4Name");
var person4HW = document.getElementById("person4HomeWorld");
var person14 = document.getElementById("person14Name");
var person14Species = document.getElementById("person14Species");

function reqListener1(){
  var person4Parsed = JSON.parse(this.responseText);
  console.log(person4Parsed);
  person4.innerHTML = person4Parsed.name;
}

var oReq1 = new XMLHttpRequest();
oReq1.addEventListener("load", reqListener1);
oReq1.open("GET", "http://swapi.co/api/people/4/");
oReq1.send();

function reqListener2(){
  var person4HomeWorld = JSON.parse(this.responseText);
  person4HW.innerHTML = "Homeworld: " + person4HomeWorld.name;
}

var oReq2 = new XMLHttpRequest();
oReq2.addEventListener("load", reqListener2);
oReq2.open("GET", "http://swapi.co/api/planets/1/");
oReq2.send();

function reqListener3(){
  var person14Parsed = JSON.parse(this.responseText);
  console.log(person14Parsed);
  person14.innerHTML = person14Parsed.name;
}

var oReq3 = new XMLHttpRequest();
oReq3.addEventListener("load", reqListener3);
oReq3.open("GET", "http://swapi.co/api/people/14/");
oReq3.send();

function reqListener4(){
  var person14Sp = JSON.parse(this.responseText);
  console.log(person14Sp);
  person14Species.innerHTML = "Species: " + person14Sp.name;
}

var oReq4 = new XMLHttpRequest();
oReq4.addEventListener("load", reqListener4);
oReq4.open("GET", "http://swapi.co/api/species/1/");
oReq4.send();