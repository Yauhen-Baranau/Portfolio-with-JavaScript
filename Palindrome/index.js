"use strict";
function getPal(str) {
    
    str = str.toLowerCase();
    var newString = "";
    for (var i =0; i<str.length; i++) {

        if (str[i] === "ё") {
            newString += "е"
        } else if ( (str[i] === "ъ") || (str[i] === "ь") || (str[0] === " ")  ) {
            continue
        }
        if (str[i]>='а' && str[i]<='я'){
            newString += str[i]
        }
    }
   
    for (var c = 0; c <= newString.length / 2-1; c++) {
        if (newString[c] !== newString[newString.length - 1 - c]) {
            return false;
        }
    }return true;
}
var name = prompt("Введите строку");
console.log(getPal(name))