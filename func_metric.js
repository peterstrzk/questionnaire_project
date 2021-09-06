

function metryczka(e) {
    let inputVal = document.getElementById("age").value;
    
    
    if (inputVal >= 99 ){
        e.preventDefault();
        window.alert("dobra chuju koniec zartów")
        
        
    }
    else if (inputVal >= 18) {
        
    }
    else  {
        e.preventDefault();
        window.alert("Musisz mieć skończone 18 lat")
        
        
    }


}
function form_select(e) {
    let inputSelect = document.getElementById("gender").value;
    
    
    if (inputSelect==true){
        window.alert(inputSelect)
        ++inputSelect;
    }
    else {
        window.alert("false")
    }

    return inputSelect;
}


function call_metric(e) {
    metryczka(e)
    form_select(e)
    

}
document.getElementById("btn_next").addEventListener("click", (e) => call_metric(e))