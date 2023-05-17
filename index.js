const generateButton = document.getElementById("generate_button");
const selectLenght=document.getElementById("select_length");
const copyButton = document.getElementById("copy_button");
const showPassword= document.getElementById("result_password");

let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~";

generateButton.addEventListener("click",()=>{
  const length = selectLenght.value;
  let newPassword='';
  for (let index = 0; index < length; index++) {
    let num = Math.floor(Math.random()*allCharacters.length);
    newPassword+=allCharacters[num];
  }
  showPassword.value=newPassword;
  console.log(length)
  console.log(newPassword);

})