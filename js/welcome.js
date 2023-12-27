let url=window.location.href.toString();
let logOutBtn=document.querySelector('.btn');
var h1=document.querySelector('h1');
(function(){
    let parms=url.split('?')[1];
    let value=parms.split("=")[1].replace('%20',' ')
    h1.innerHTML='WELCOME '+value.toUpperCase()
})();
