"use strict";
var images = document.getElementsByTagName('img')
window.addEventListener('load', function checkImg() {
    for (var i = images.length-1; i>=0; i--) {
        var elem=images[i]

        var setLeft = elem.offsetLeft;
        var setTop = elem.offsetTop;

        elem.style.position="absolute";

        elem.style.left = setLeft + 'px';
        elem.style.top = setTop + 'px';
        dragAndDrop(elem)
    }
})

window.addEventListener('dragover' , function (EO) {
    EO=EO||window.event;
    EO.preventDefault()

})

function dragAndDrop(element) {
    var shiftX;
    var shiftY;

    element.addEventListener('mousedown' , calc )
    function calc(EO) {
        EO=EO||window.event;
        EO.preventDefault()

        var element = EO.target

        shiftX=EO.pageX-element.offsetLeft;
        shiftY=EO.pageY-element.offsetTop;
        document.body.appendChild(element)
        console.log('нажали')

        document.addEventListener('mousemove' , mCalc)
        function mCalc(EO) {
            EO=EO||window.event;
            EO.preventDefault();
            element.style.left=(EO.pageX-shiftX)+"px";
            element.style.top=(EO.pageY-shiftY)+"px";
            console.log('движение')
        }

        element.addEventListener('mouseup', f )
        function f(EO){
            EO=EO||window.event;
            EO.preventDefault()
            document.removeEventListener("mousemove", mCalc)
            element.removeEventListener('mouseup' , f )
            console.log('отпустили')
        }
    }
}