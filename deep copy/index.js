
"use strict";
    function deepCopy(element) {
        var copAr = [];
        var cop = {};

        if (typeof (element) === "object" ) {
            if (Array.isArray(element)) {
                for (var i = 0; i < element.length; i++) {
                    copAr.push(deepCopy(element[i]))
                }
                return copAr
            }
                if (element === null) {
                    return element
                } else {
                    for (var k in element) {
                        cop[k] = deepCopy(element[k])
                    }
                    return cop
                }
        } else return element
    }




    var h1={ a:5, b:{b1:6,b2:7}, c:[33,22], d:null, e:undefined, f:Number.NaN };
    var h2=deepCopy(h1);
    console.log(h2);

    var a1=[ 5, {b1:6,b2:7}, [33,22], null, undefined, Number.NaN];
    var a2=deepCopy(a1);
    console.log(a2);

    var v1="sss";
    var v2=deepCopy(v1);
    console.log(v2)

    var z1=null;
    var z2=deepCopy(z1);
    console.log(z2)

    var n1=Number.NaN;
    var n2=deepCopy(n1);
    console.log(n2)


    console.log( (h1===h2)? "Не пройден" : "Пройден" )
    console.log( (h1.a===h2.a)? "Пройден" : "Не пройден" )
    console.log( ( h1.b===h2.b )? "Не пройден" : "Пройден")
    console.log( (h1.b.b1===h2.b.b1)? "Пройден" : "Не пройден" )
    console.log((h1.c===h2.c)? "Не пройден" : "Пройден")
    console.log( (h1.c[0]===h2.c[0])? "Пройден" : "Не пройден" )
    console.log( (h1.d===h2.d)? "Пройден" : "Не пройден" )
    console.log( (h1.e===h2.e)? "Пройден" : "Не пройден" )
    console.log( (isNaN(h2.f))? "Пройден" : "Не пройден" )
    console.log( (h2.c instanceof Array )? "Пройден" : "Не пройден" )

    console.log( (a1===a2)? "Не пройден" : "Пройден" )
    console.log( typeof(a2)===typeof(a1)? "Пройден" : "Не пройден" )
    console.log( (a1[0]===a2[0])? "Пройден" : "Не пройден" )
    console.log( (a1[1]===a2[1])? "Не пройден" : "Пройден" )
    console.log( (a1[1].b1===a2[1].b1)? "Пройден" : "Не пройден" )
    console.log( (a1[2]===a2[2])? "Не пройден" : "Пройден" )
    console.log( (a1[2][0]===a2[2][0])? "Пройден" : "Не пройден" )
    console.log( (a1[3]===a2[3])? "Пройден" : "Не пройден" )
    console.log( (a1[4]===a2[4])? "Пройден" : "Не пройден" )
    console.log( (isNaN(a2[5]))? "Пройден" : "Не пройден" )
    console.log( (a2[2] instanceof Array)? "Пройден" : "Не пройден" )



    var v1="sss";
    var v2=deepCopy(v1);
    console.log( (typeof(v2)===typeof(v1))? "Пройден" : "Не пройден" )
    console.log( (v1===v2)? "Пройден" : "Не пройден" )

    var z1=null;
    var z2=deepCopy(z1);

    console.log( (typeof(z2)===typeof(z1))? "Пройден" : "Не пройден" )
    console.log( (z1===z2)? "Пройден" : "Не пройден" )


    var n1=Number.NaN;
    var n2=deepCopy(n1);

    console.log( typeof(n2)===typeof(n1)? "Пройден" : "Не пройден" )
    console.log( isNaN(n2)? "Пройден" : "Не пройден" )

