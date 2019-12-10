/*Fetching JSON Data
Author:John Fleurimond
LIC:
*/

alert("Hi");


async function fetchJSON() {
  alert("Hello FetchJSON");

  await fetch("../data/CDPstations.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      appendData(data);
    })
    .catch(function(err) {
      console.log(err);
    });
  return fetchJSON
  }
  
  //Loop through every object in our JSON object
  function appendData(data) {
    //Get the div element from the body
    alert("Hello");
  console.log("Hi");

  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = "Name: " + data[i].firstName + " " + data[i].lastName;
    mainContainer.appendChild(div);
  }
  return appendData
    
}

//                         Moment.js
var Now = moment().format('MMMM Do YYYY, h:mm:ss a');
var x = document.getElementById("msgdiv");
x.innerHTML = Now;
