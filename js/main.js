"use strict";
/*Fetching JSON Data
Author:John Fleurimond
LIC:
*/
alert("Hi");

async function fetchJSON() {
  alert("Hello Fetching JSON");
  let json = "./data/CDPstations.json";
  await fetch(json)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      appendData(data);
    })
    .catch(function(err) {
      console.log(err);
    });
  return fetchJSON;
}
//Loop through every object in our JSON object
function appendData(data) {
  //Get the div element from the body
  alert("Hello");
  console.log("Hi");
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data[0].clients.stations.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = "Client: " + data[0].clients.stations[i].title ;
    mainContainer.appendChild(div);
  }
  return appendData;
}
//                         Moment.js
var Now = moment().format("MMMM Do YYYY, h:mm:ss a");
var x = document.getElementById("msgdiv");
x.innerHTML = Now;

fetchJSON();