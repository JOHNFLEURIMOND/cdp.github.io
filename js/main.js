/*Fetching JSON Data
Author:John Fleurimond
LIC:
*/

alert("Hi");
import axios from 'axios';


function fetchJSON() {
  alert("Hello FetchJSON");
  axios
  .get("CDPstations.json") // no try/catch here
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error.response);
  });
  }
  
  //Loop through every object in our JSON object
  function appendData(data) {
    //Get the div element from the body
    alert("Hello AppendData");
  console.log("Hi");

  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = "Name: " + data[i].firstName + " " + data[i].lastName;
    mainContainer.appendChild(div);
  }
}

//                         Moment.js
var Now = moment().format('MMMM Do YYYY, h:mm:ss a');
var x = document.getElementById("msgdiv");
x.innerHTML = Now;
