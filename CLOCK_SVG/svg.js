"use strict";
   var container = document.getElementById('CLOCK');

   var r=100; // радиус расположения цифр
   var cx=150;
   var cy=150; // координаты центра циферблата

   for ( var h=1; h<=12; h++ ) {
       // отображаемый час
       var a = h / 12 * Math.PI * 2; // отображаемый угол в радианах
       var x = cx + Math.sin(a) * r; // проверяем для угла=0 - sin(0)=0 значит x=cx
       var y = cy - Math.cos(a) * r; // проверяем для угла=0 - cos(0)=1 значит y=cy-r
       // итого цифра 12 (=0) окажется в x=cx, y=cy-r, т.е. вверху циферблата

       var circleElement = document.createElementNS("http://www.w3.org/2000/svg",'ellipse');
       circleElement.setAttribute("fill","yellow");
       circleElement.setAttribute("rx",'20'); //координаты центра окружности
       circleElement.setAttribute("ry",'20'); //координаты центра окружности
       circleElement.setAttribute("cx", x);
       circleElement.setAttribute("cy",y);
       container.appendChild(circleElement);

       var textElement=document.createElementNS("http://www.w3.org/2000/svg",'text');

       textElement.setAttribute("x",x);
       textElement.setAttribute("y",y+4);
       textElement.style.fill="red";
       textElement.textContent = h;
       textElement.style.cssText=" text-anchor: middle"; // атрибут для текста SVG
       container.appendChild(textElement)
   }

   var stelkaH = document.getElementById('STRELAh');
   var strelkaM = document.getElementById('STRELAm');
   var strelkaS = document.getElementById('STRELAs');


   var txtTime = document.createElementNS("http://www.w3.org/2000/svg",'text');
   container.appendChild(txtTime)
   txtTime.setAttribute("x",cx-30);
   txtTime.setAttribute("y",cy-30);

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

       strelkaS.style.transform='rotate('+sec/60*360+'deg)'
       strelkaM.style.transform='rotate('+min/60*360+'deg)'
       var ost = hour%12
       stelkaH.style.transform='rotate('+ost*30+'deg)'
       txtTime.textContent= hour+":"+min+":"+sec

   }
   stelkaH.style.cssText='transform: rotate(100deg);'

   onTime()