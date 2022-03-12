'use strict';

//calling by id
let id=(id)=>document.getElementById(id);
let classes=(classes)=>document.getElementsByClassName(classes);


let userName=id('username'),
email=id('email'),
hide=id('hide'),
password=id('password'),
confirmPassword=id("confirmPassword"),
Toggle=id('toggle'),
form=id('form');

let successIcon=classes('success-icon'),
failureIcon=classes('failure-icon'),
items=classes('items'),
errorMsg=classes('error');


// event listeners

// let engine=()=>{
// if(userName===""){
// console.log('username is required')
// }else{

// }
// }
form.addEventListener('submit',(e)=>{
  e.preventDefault();

 engine(userName,0,'User Name cant be empty');
  engine(email,1,'email cant be empty');
  engine(password,2,'password is required');
 
  confirm();

  }
 
  )

  // function  for input

  let engine=(id,serial,message)=>{
  if(id.value===""){
    errorMsg[serial].innerHTML=message;
    failureIcon[serial].style.opacity="1";
    successIcon[serial].style.opacity="0";
  }else{
    errorMsg[serial].innerHTML= "";
    successIcon[serial].style.opacity="1";
    failureIcon[serial].style.opacity="0";
  }
  
  
  }

// function for password matching
let confirm=()=>{
  if(confirmPassword.value===""){
    errorMsg[3].innerHTML="password is required to match";
    failureIcon[3].style.opacity="1";
    successIcon[3].style.opacity="0";
  }else if(password.value !== confirmPassword.value){
    errorMsg[3].innerHTML="password doesnt match";
    failureIcon[3].style.opacity="1";
    successIcon[3].style.opacity="0";
  }else{
    errorMsg[3].innerHTML="";
    failureIcon[3].style.opacity="0";
    successIcon[3].style.opacity="1";
  }
} 

// function for showPassword
let show=()=>{
  if(password.type==='password'){
    password.type='text';
    hide.style.display=block;

  }else{
    password.type="password"
    hide.style.display=none;
  }

}


// toggler button function
const toggle=()=>{
  if(items.style.opacity==='0'){
    items.style.opacity==='1'
  }
}






  
  