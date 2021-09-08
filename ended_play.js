if (sessionStorage.getItem('tso') == 'true') {
  document.getElementById("first").style.background = "green";
  
  document.getElementById("first").textContent= "Zakończone! ";
  

  
  console.log(sessionStorage)
}

document.getElementById("end_game").addEventListener("click",  () => 
  (sessionStorage.setItem('tso', 'true'))
)

