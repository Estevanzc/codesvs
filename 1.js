var num1 = document.getElementsByClassName("num1")[0]
var num2 = document.getElementsByClassName("num2")[0]
var set1 = document.getElementsByClassName("seter")[0]
var op = document.getElementsByClassName("op")[0]
var equal1 = document.getElementsByClassName("equal")[0]
var res = document.getElementsByClassName("res")[0]
var back1 = document.getElementsByClassName("back1")[0]
var back2 = document.getElementsByClassName("back2")[0]
var ver = true
var arm1 = 0
var arm2 = 0
var ops
function set() {
    if (ver == true) {
        ver = false
        set1.innerHTML = "Num2"
    } else if (ver == false) {
        ver = true
        set1.innerHTML = "Num1"
    }
}
function num(e) {
    if (ver == true) {
        if (arm1 == 0) {
            arm1 = e.innerHTML
            num1.innerHTML = arm1
        } else if (arm1 != 0) {
            arm1.toString()
            var arm11 = e.innerHTML
            arm11.toString()
            arm1 = arm1 + arm11
            Number(arm1)
            num1.innerHTML = arm1
        }
    } else if (ver == false) {
        if (arm2 == 0) {
            arm2 = e.innerHTML
            num2.innerHTML = arm2
        } else if (arm2 != 0) {
            arm2.toString()
            var arm22 = e.innerHTML
            arm22.toString()
            arm2 = arm2 + arm22
            Number(arm2)
            num2.innerHTML = arm2
        }
    }
}
function opc(a) {
    ops = a.innerHTML
    op.innerHTML = ops
}
function equal() {
    if (num1.innerHTML == '' || num2.innerHTML == '' || op.innerHTML == '') {
        alert('É necessário um valor em ambas as caixas de caracteres')
    } else {
        equal1.innerHTML = "="
        switch (ops) {
            case '*':
                res.innerHTML = arm1 * arm2
                break
            case '/':
                res.innerHTML = arm1 / arm2
                break
            case '-':
                res.innerHTML = arm1 - arm2
                break
            case '+':
                res.innerHTML = arm1 + arm2
                break
        }
    }
}
function reset() {
    arm1 = 0
    arm2 = 0
    num1.innerHTML = ""
    num2.innerHTML = ""
    ops = 0
    equal1.innerHTML = ""
    res.innerHTML = ""
    op.innerHTML = ""
    ver = true
    set1.innerHTML = "Num1"
}
function calce() {
    back1.sytle.transition = "opacity 0.5s ease"
    back1.style.opacity = "0"
    back1.id = "back1"
    back2.id = "back2"
}