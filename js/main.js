let email=document.querySelector('#email');
let password=document.querySelector('#password');
let logInBtn=document.querySelector('.btn');
let accounts = JSON.parse(localStorage.getItem('accounts'));
let label=document.querySelector('label');
logInBtn.addEventListener('click', function(){
    if(email.value && password.value){
        var checkExist=accounts.filter(function(account){
            if(account.email == email.value && account.password == password.value ){
                return true;
            }
        });
        if(checkExist.length){
            // console.log('/welcome.html?name='+checkExist[0].name,'_self');
            window.open('/welcome.html?name='+checkExist[0].name,'_self');
        }else{
            label.innerHTML='incorrect email or password !';
        }
    }else{
        label.innerHTML='All inputs are required !';
    }
   
})