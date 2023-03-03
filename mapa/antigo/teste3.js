var indice = 0
var colidiu = false
function teste() {
    while((colidiu == false) && (indice < 6)) {
        /*console.log(colidiu)
        console.log(indice)*/
        indice++
    }
    return colidiu = true;
}

teste()
var resultado = teste()
console.log(resultado)