function llenar() {
    var barra = document.getElementById("barra");
    barra.value += 1;
    console.log(barra.value);


}

function vaciar() {
    var barra = document.getElementById("barra");
    barra.value -= 1;

}

$(".barra1").keyup(function(){
    console.log(this);
});

