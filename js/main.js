/*Fetching JSON Data
Author:John Fleurimond
LIC:
*/

alert("Hi");


// alert("Hi");

// const BASE_URL = 'https://jsonplaceholder.typicode.com';

// const getTodos = async () => {
//   try {
//     const res = await axios  .get("CDPstations.json") // no try/catch here
//     .then(response => {
//       console.log(response);
//     })
//     .catch(error => {
//       console.log(error.response);
//     });
//     const todos = res.data;

//     console.log(`GET: Here's the list of todos`, todos);

//     return todos;
//   } catch (e) {
//     console.error(e);
//   }
// };

function fetchJSON() {
  alert("Hello FetchJSON");

  fetch("CDPstations.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      appendData(data);
    })
    .catch(function(err) {
      console.log(err);
    });
  return fetchJSON;
  }
  

  //Loop through every object in our JSON object
  const appendData = async (data) => {
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
