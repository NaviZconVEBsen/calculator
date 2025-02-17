const ekran=document.getElementById("ekran");

function hisobla() {
    ekran.value= eval(ekran.value);
}
function del(){
    ekran.value=ekran.value.slice(0,-1);
}
function clearEkran(){
    ekran.value="";
}