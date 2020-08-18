window.addEventListener("load", () => {
  //console.log("LOAD");

  //by using ajax we make more pregramatically
  //current we use hardcoded value through json
  //step 01;
  let xhr = new XMLHttpRequest();
  //step 02;
  xhr.open("GET", "https://reqres.in/api/users?page=2");
  //step03
  //hand shak and listner responce
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      console.log(xhr.responseText);

      // responser server is in string
      let sjson = JSON.parse(xhr.responseText);
      // data.is array or list from server
      console.log(sjson.data);

      // lets use this list and plot our dom by calling dom logic here
      domlogicHere(sjson.data);
      //step-4 ajax call
    }
  };
  xhr.send();

  domlogicHere(sjson.data);
});
// console.log("INSIDE.LOAD", par);
let domlogicHere = function (list) {
  const par = document.querySelector("#parent");

  for (i = 0; i < list.length; i++) {
    //MAKE A REFERENCE BLOCK
    let item = list[i];
    const newele = par.children[0].cloneNode(true);
    newele.style.display = "block";
    //add data to each element
    newele.children[0].innerHTML = item.first_name + " " + item.last_name;
    //append to parent block
    par.insertBefore(newele, par.firstchild);
  }
};
