const url = "http://api.openweathermap.org/data/2.5/weather?zip=";
const key_code = "&appid=5568b9ccb5f0afd175d794d5d1863243";

let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

let date = document.querySelector("#date");
let temp = document.querySelector("#temp");
let content = document.querySelector("#content");
let feelings = document.querySelector("#feelings");

// When you press 'generate'
document.getElementById("generate").addEventListener("click", (e) => {
  e.preventDefault();
  const feelings = document.getElementById("#feelings").value;
  const zip = document.getElementById("#zip");

  user_data(url, zip, key_code)
    .then(function (user_data) {
      // add data to POST request
      postData("/add", { date: newDate, temp: user_data.main.temp, feelings });
    })
    .then(function () {
      update_UI();
    });
});

// Send user_data to a server
const user_data = async (url, zip, key_code) => {
  // res equals to the result of fetch function
  const res = await fetch(url, zip, key_code);
  try {
    // userData equals to the result of fetch function
    const userData = await res.json();
    return userData;
  } catch (error) {
    console.log("error", error);
  }
};

// POST data
const post_data = async (url = "", data = {}) => {
  const req = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      date: data.date,
      temp: data.temp,
      content: data.content,
    }),
  });

  try {
    const data = await req.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const get_data = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data.main.temp);
  date.innerHTML = d;
  temp.innerHTML = data.main.temp;
  content.innerHTML = feelings.value;
};
get_data(url);
const update_UI = async () => {
  const request = await fetch("/all");
  try {
    const data = await request.json();
    // show icons on the page
    // icons.forEach((icon) => (icon.style.opacity = "1"));
    // update new entry values
    document.getElementById("date").innerHTML = data.date;
    document.getElementById("temp").innerHTML = data.temp;
    document.getElementById("content").innerHTML = data.content;
  } catch (error) {
    console.log("error", error);
  }
};

// TODO-Call Function
postData(url);
