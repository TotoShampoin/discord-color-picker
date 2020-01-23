"use strict"

const clc = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

setInterval(function(){
    var r, g, b;
    r = $("#r")[0].value; g = $("#g")[0].value; b = $("#b")[0].value; 
    $(".name").css({"color":`#${clc[r]}${clc[g]}${clc[b]}`});
    $(".lr")[0].innerHTML = "R : "+r;
    $(".lg")[0].innerHTML = "G : "+g;
    $(".lb")[0].innerHTML = "B : "+b;
    $(".cfg p")[0].innerHTML = `#${clc[r]}${clc[g]}${clc[b]}`;
}, 10);
