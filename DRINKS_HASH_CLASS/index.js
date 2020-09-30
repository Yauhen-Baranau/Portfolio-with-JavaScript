"use strict";
class DRINKS_HASH_CLASS {
    constructor() {
     this.storage = {};
 }
 addValue (key,value) {
     this.storage[key] = value;
 }
 getValue(key) {
     return this.storage[key]
 }
    deleteValue(key) {
        if (key in this.storage) {
            delete this.storage[key]
            return true
        } else {
            return false
        }
    }
    getKeys(){
     return Object.keys(this.storage)
    }

}
var drinkStorage = new DRINKS_HASH_CLASS();
// добавляем напиток
function addDrink() {
var drinkName = prompt('Введите название напитка');
var alc = confirm('Если напиток алкогольный нажмите "ОК", иначе - "отмена" ');
var recept = prompt('Рецепт:')
var composition  = {alco : alc, rec : recept} ;
console.log('Ваш напиток  сохранен');
drinkStorage.addValue(drinkName,composition);
}
// Показываем напиток
function getDrink() {
var drinkName = prompt('Какой напиток показать?');
var i = drinkStorage.getValue(drinkName)
if (i === undefined) {
  alert('Такого напитка нет')
} else {
  var al = (i.alco)? "Алкогольный" : "Безалкогольный";
  alert('Напиток: ' + drinkName  + '\n'+ al + '\n' + 'рецепт приготовления: \n' + i.rec)
}
}
//удаляем напиток
function delDrink() {
var drinkName = prompt('Какой напиток хотите удалить?');
if (drinkStorage.deleteValue(drinkName) === true){
  alert('Ваш напиток удален')
}else {
  alert('Такого напитка небыло')
}
}