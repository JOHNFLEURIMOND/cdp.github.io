/*Fetching JSON Data
Author:John Fleurimond
LIC:
*/
const axios = require('axios');


alert("Hi");


const getData = async () => {
  try {
    const res = await axios.get("CDPstations.json") // no try/catch here
    
    const CDPstationsData = res.data;

    console.log(`GET: Here's the list of CDPstations Data`, CDPstationsData);

    return getData;
  } catch (e) {
    console.error(e);
  }
};


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
