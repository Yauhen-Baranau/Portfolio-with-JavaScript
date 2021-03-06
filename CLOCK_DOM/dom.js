"use strict";
var conteiner = document.createElement('div');
document.body.appendChild(conteiner)
conteiner.style.cssText="position: relative; width: 300px; height: 300px; border-radius: 50%; background-color: green;"

var r=125; // радиус расположения цифр
var cx=150;
var cy=150; // координаты центра циферблата
for ( var h=1; h<=12; h++ ){
    // отображаемый час
    var a=h/12*Math.PI*2; // отображаемый угол в радианах
    var x=cx+Math.sin(a)*r; // проверяем для угла=0 - sin(0)=0 значит x=cx
    var y=cy-Math.cos(a)*r; // проверяем для угла=0 - cos(0)=1 значит y=cy-r
    // итого цифра 12 (=0) окажется в x=cx, y=cy-r, т.е. вверху циферблата

    var divElement = document.createElement("div")
    conteiner.appendChild(divElement)
    divElement.style.width="40px"
    divElement.style.height='40px'
    divElement.style.borderRadius='50%'
    divElement.style.backgroundColor='yellow'
    divElement.style.position='absolute'
    divElement.style.display='flex'
    divElement.style.justifyContent='center';
    divElement.style.alignItems='center'
    divElement.innerHTML=h;
    divElement.style.left=Math.round(x-divElement.offsetWidth/2)+'px';
    divElement.style.top=Math.round(y-divElement.offsetHeight/2)+'px';
}

var strelkaSec = document.createElement('div');
var strelkaMin = document.createElement('div')
var strelkaH = document.createElement('div')
strelkaMin.style.cssText='position: absolute; width: 5px; height : 35%; background-color: black; border-radius: 50%; transform-origin: 50% 95%;left: 50%; top: 18%; transform: rotate(360deg);'
strelkaSec.style.cssText="position: absolute; width: 2px;  height: 40%; background-color: black; border-radius: 50%; transform-origin: 50% 95%; left: 50%; top: 13%; transform: rotate(200deg); z-index: 3;"
strelkaH.style.cssText="position: absolute; width: 8px;  height: 25%; background-color: black; border-radius: 50%; transform-origin: 50% 95%; left: 50%; top: 27%; transform: rotate(280deg)"
conteiner.appendChild(strelkaSec)
conteiner.appendChild(strelkaMin)
conteiner.appendChild(strelkaH)

var timeConteiner = document.createElement('span')
timeConteiner.style.cssText="position: absolute;  left:38%; top: 30%;"


conteiner.appendChild(timeConteiner)
setInterval(onTime, 1000)



function onTime() {

    function correctTime(t) {
        if (t<10) {
            return  "0"+t
        }
        return t
    }

    var time = new Date();
          var hour = correctTime(time.getHours())
          var min = correctTime(time.getMinutes())
          var sec = correctTime(time.getSeconds())

          strelkaSec.style.transform='rotate('+sec/60*360+'deg)'
          strelkaMin.style.transform='rotate('+min/60*360+'deg)'
          var ost = hour%12
          strelkaH.style.transform='rotate('+ost*30+'deg)'
          timeConteiner.innerText= hour+":"+min+":"+sec
}
onTime()