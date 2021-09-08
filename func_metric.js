
//wiek osoby badanej//
function form_age(e) {
  let inputVal = document.getElementById("age").value;

  if (inputVal >= 99) {
    e.preventDefault();
    window.alert("Proszę sobie nie żartować! Wpisz swój wiek poprawnie!");
  } else if (inputVal >= 18) {
  } else if (inputVal == 0) {
    e.preventDefault();
    window.alert("wpisz swój wiek!");
  } else {
    e.preventDefault();
    window.alert("Musisz mieć skończone 18 lat");
  }
}

//reszta metryczki wykształcenie, zamieszkanie, płeć//
//naprawić walidacje metryczki !!!//

function form_select(e) {
  let inputSelect = [
    document.getElementById("gender").value,
    document.getElementById("education").value,
    document.getElementById("acomodation").value,
  ];

  if (inputSelect[(0, 1, 2)] == true) {
    console.log("done")
    
  } else {
    
    e.preventDefault();
    console.log(inputSelect)
    window.alert("Zaznacz wszystkie wymagane opcje!");
  }
}

//funkcja z dwóch funkcji//
function call_metric(e) {
  form_age(e);
  form_select(e);
}

//wywołujemy funckje//

document
  .getElementById("btn_next")
  .addEventListener("click", (e) => call_metric(e));
