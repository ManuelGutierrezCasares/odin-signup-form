const pwd = document.getElementById('pwd');
const pwd2 = document.getElementById('pwd2');
const pwdErrorText = document.getElementById('pwd-error-text'); 
const password = document.querySelectorAll('.password');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

const regexEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
const regexPhone = /[0-9]{4}[\-][0-9]{4}/;



password.forEach(function(e){
    e.addEventListener('change',function(){     
        if(pwd.value !== pwd2.value){
            pwd.classList.remove('correct');
            pwd2.classList.remove('correct');
            pwd.classList.add('error');
            pwd2.classList.add('error');
            pwdErrorText.textContent='Passwords must match';

        }else{
            pwd.classList.add('correct');
            pwd2.classList.add('correct');
            pwd.classList.remove('error');
            pwd2.classList.remove('error'); 
            pwdErrorText.textContent='';
        }
    });
});

firstName.addEventListener('change',function(){
    if(firstName.value.length < 2 || firstName.value.length > 10){
        firstName.classList.add('error');
        firstName.classList.remove('correct');
    }else{
        firstName.classList.remove('error');
        firstName.classList.add('correct');
    }
})

lastName.addEventListener('change',function(){
    if(lastName.value.length < 2 || lastName.value.length > 20){
        lastName.classList.add('error');
        lastName.classList.remove('correct');
    }else{
        lastName.classList.remove('error');
        lastName.classList.add('correct');
    }
})

email.addEventListener('change',function(){
    if(!regexEmail.test(email.value)){
        email.classList.add('error');
        email.classList.remove('correct');
    }else{
        email.classList.remove('error');
        email.classList.add('correct');
    }
})

phone.addEventListener('change',function(){
    if(!regexPhone.test(phone.value)){
        phone.classList.add('error');
        phone.classList.remove('correct');
    }else{
        phone.classList.remove('error');
        phone.classList.add('correct');
    }
})