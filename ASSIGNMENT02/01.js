/*const par = document.querySelector("#parentid");

window.addEventListener("load", () => {
  console.log("load", par);
});
*/

// lets start here
window.addEventListener("load", () => {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://reqres.in/api/users?page=2");
  //handshake and listerner of response
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      console.log(xhr.responsetext);
      let sjson = JSON.parse(xhr.responseText);
      console.log(sjson.data);
      domlogic(sjson.data);
    }
  };
  xhr.send();
});

let domlogic = function (list) {
  const parent = document.querySelector("#parentid");
  console.log("ON.LOAD", parent);
  for (i = 0; i < 6; i++) {
    let item = list[i];
    let newel = parent.children[0].cloneNode(true);
    newel.style.display = "flex";
    newel.children[0].innerHTML = item.first_name + " " + item.last_name;
    parent.insertBefore(newel, parent.firstChild);
  }
};
