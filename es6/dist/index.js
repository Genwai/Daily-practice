'use strict';

var a = 'genwai';
// console.log(a);
/* window.onload = function() {
        console.log(a);
    } */
// const :常量申明，改变就报错

{
    var _a = '建伟';
    console.log(_a);
}
console.log(a);

{
    var p = document.querySelector('p');
    var pArray = Array.from(p);
    pArray.forEach(function (item) {
        console.log(item.textContent);
    });
}
