let acountName= document.querySelector('#name');
let acountEmail=document.querySelector('#email');
let acountPass=document.querySelector('#password');
let signUpBtn=document.querySelector('.btn');
let accounts=[];
let label=document.querySelector('label');
if(localStorage.getItem('accounts')){
    accounts=JSON.parse(localStorage.getItem('accounts'))
}
signUpBtn.addEventListener('click',function(){
   let[checkNotEmpty,duplicateEmail]= checkValidation();
   if(checkNotEmpty){
    if(duplicateEmail == 0 ){
        let newAccount={
            name:acountName.value,
            email:acountEmail.value,
            password:acountPass.value
        }
        accounts.push(newAccount);
        localStorage.setItem('accounts',JSON.stringify(accounts));
        label.classList.replace('text-danger','text-success');
        label.innerHTML='Success';
        clearInputs();
    }else{
        label.classList.replace('text-success','text-danger');
        label.innerHTML='duplicate email try another one !';
    }
    
   }else{
    label.classList.replace('text-success','text-danger');
    label.innerHTML='all inputs are required';
   }
    
})
function clearInputs(){
    acountName.value='';
    acountEmail.value='';
    acountPass.value='';
}
function checkValidation(){
    let checkNotEmpty=false;
    if(acountName.value && acountEmail.value && acountPass.value ){
        checkNotEmpty=true;
    }
    let emailArr=accounts.filter(function(emailUser){
        if(emailUser.email == acountEmail.value){
            return true;
        }
    });
    return [checkNotEmpty, emailArr.length]
}