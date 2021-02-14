/* Global Variables */
const apiKey = "5568b9ccb5f0afd175d794d5d1863243";
// const zipcode = document.querySelector("#zip");
const zipcode = 85005;
const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&APPID=${apiKey}`;
// const feeling = document.querySelector("#feelings");
// console.log(url);

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

//********************************************************************************************************** */

/* Function to POST data */
const postData = async (url = "") => {
  //   console.log(data);

  const response = await fetch(url,  {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    credentials: "same-origin", // include, *same-origin, omit
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData), // body data type must match "Content-Type" header
  });

  try {
    const newData = await response.json();
    const temp = newData.main.temp;
    console.log(temp);
    return temp;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

// TODO-Call Function
postData(url);
