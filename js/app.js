var person4 = document.getElementById("person4Name");
var person4HW = document.getElementById("person4HomeWorld");

function reqListener1(){
  var person4Parsed = JSON.parse(this.responseText);
  console.log(person4Parsed);
  person4Name = person4Parsed.name;
  person4.innerHTML = person4Name;
}

var oReq1 = new XMLHttpRequest();
oReq1.addEventListener("load", reqListener1);
oReq1.open("GET", "http://swapi.co/api/people/4/");
oReq1.send();

function reqListener2(){
  var person4HomeWorld = JSON.parse(this.responseText);
  person4HW.innerHTML = person4HomeWorld.name;
}

var oReq2 = new XMLHttpRequest();
oReq2.addEventListener("load", reqListener2);
oReq2.open("GET", "http://swapi.co/api/planets/1/");
oReq2.send();