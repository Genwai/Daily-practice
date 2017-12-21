var a = 'genwai';
// console.log(a);
/* window.onload = function() {
        console.log(a);
    } */
// const :常量申明，改变就报错

{
    let a = '建伟';
    console.log(a);
}
console.log(a);

{
    let p = document.querySelector('p');
    let pArray = Array.from(p);
    pArray.forEach(function(item) {
        console.log(item.textContent);
    })
}