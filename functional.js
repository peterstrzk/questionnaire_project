
//checkbox validation//
function validate(e) {
    if (document.getElementById('chck_bx').checked) {
        e.preventDefault();
        window.location.href = "metryczka.html";
    } 
    else {
        
        alert("Musisz zaznaczyć zgodę na uczestnictwo w badaniu!");
        

        
    }   
    
}



document.getElementById("nxt_link").addEventListener("click", (e) => validate(e))




