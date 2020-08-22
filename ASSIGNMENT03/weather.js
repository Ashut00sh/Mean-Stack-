let search = function () {
  let xhr = new XMLHttpRequest();
  document.querySelector("#city").value;

  let cityName = document.querySelector("#city").value || "mumbai";
  let url =
    "https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=";
  url = url + cityName;
  xhr.open("GET", url);
  xhr.onload = () => {
    console.log(xhr.responseText);
    const refjson = JSON.parse(xhr.responseText);
    //lets do DOM Operation now in seprate method.
    domop(refjson);
  };
  xhr.send();
};

let domop = (refjson) => {
  const maxTemp = refjson.main.temp_max;
  const minTemp = refjson.main.temp_min;

  let par = document.querySelector("#parentid");
  console.log(par);
  let newele = par.children[0].cloneNode(true);
  newele.innerHTML = "MAX " + maxTemp + "  " + "MIN " + minTemp;
  par.insertBefore(newele, par.firstChild);
};

//apikey =236ecd24aa2c9de4a379345c27f9a594

//url=api.openweathermap.org/data/2.5/weather?&appid=236ecd24aa2c9de4a379345c27f9a594&units=metric&q=mumbai
