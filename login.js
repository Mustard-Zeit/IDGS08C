document.addEventListener('DOMContentLoeaded',function(){
  console.log("Hello, world!");
  var inputEmail = document.getElementyById('email');
  var inputPassword = document.getElementyById('password');
  console.log(inputEmail);
  console.log(inputPassword);
});

document.addEventListener('DOMContentLoaded', function(){
  console-log("Hello World!");
  var inputEmail = this.getElementById('email');
  var inputPassword = this.getElementById('password');
  console.log(inputEmail);
  console.log(inputPassword);

});

//Validacion de email//

function validarEmail(email) {

  var patron = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;


  return patron.test(email);
}


var emailValido = "usuario@dominio.com";
var emailInvalido = "usuario@dominio";

console.log(validarEmail(emailValido));
console.log(validarEmail(emailInvalido));

//Validacion de Password//

