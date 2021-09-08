
//checkbox validation//
const next = document.querySelector('.btn_wlcm_nxt');
const box = document.getElementById('chck_bx');

next.addEventListener('click', e => {
    if(box.checked) {
        e.preventDefault();
        window.location.href = "./metryczka.html";
    }else{
        alert("Musisz zaznaczyć zgodę na uczestnictwo w badaniu!");
    }
})



document.getElementById("nxt_link").addEventListener("click", (e) => validate(e))




