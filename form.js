const password = document.querySelector("#password"); 
const confirm_password = document.querySelector("#confirm_password");
const error = document.querySelector(".error");

password.addEventListener("input", check);
confirm_password.addEventListener("input", check);

function check(){
  password.value !== confirm_password.value ? error.innerHTML = "*Passwords do not match" : error.innerHTML = "";
}