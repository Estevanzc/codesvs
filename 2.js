var prompt = require('prompt-sync')();

var nt = Number.parseInt(prompt(`Quantos triângulos ?`))
var espaco = " "
var diminui
var d = "a "
for (var a = 1; a <= nt; a ++) {
    var nl = Number.parseInt(prompt(`Quantas linhas do triângulo ${a} ?`))
    while (espaco.length <= nl - 1) {
        espaco += " "
    }
    diminui = espaco.length
    for (var b = 1; b <= nl; b ++) {
        console.log(espaco + d)
        diminui --
        espaco = espaco.substring(0, diminui)
        d += "a "
    }
    d = "a "
}