// Ocultar todos los DIVs menos el primero para poner el nombre
document.getElementById('toolForIntranet').style.display = 'none';

const loginUnique = document.getElementById('logInButton');
document.getElementById('completeAllFields').style.display = 'none';
loginUnique.addEventListener('click', () => {
  // username= kelly.roca password=123456
  const usernameUnique = document.getElementById('usernameExample').value;
  const passwordUnique = document.getElementById('passwordExample').value;
  if (usernameUnique === 'kelly.roca' && passwordUnique === '123456') {
    document.getElementById('toolForIntranet').style.display = 'block';
    document.getElementById('logIn').style.display = 'none';
  } else if (usernameUnique === '' || passwordUnique === '') {
    document.getElementById('completeAllFields').style.display = 'block';
  }
});

// llamado a caja1 y caja #número de desplazamientos
const text = document.getElementById('firstBox');
const number = document.getElementById('numberOfTrips');
// "uso de addEventListener" para "click" del botón cifrar
// Id(cipher) de button "CIFRAR"
// NO ESTOY USANDO UN ONCLICK, practicar para quedar claro
const cipher = document.getElementById('cipher');
cipher.addEventListener('click', () => {
// da el valor del texto (en forma de string)
  const toTranslate = text.value;
  // da el valor en tipo de dato número (transformé el string)
  const numberOfTrips = parseInt(number.value, 10);
  document.getElementById('secondBox').value = window.cipher.encode(numberOfTrips, toTranslate);
});
// Id(descipher) de button "DESCIFRAR"
// "nombres"2: ej. ascii2  para ahorrar espacio
// NO ESTOY USANDO UN ONCLICK
const descipher = document.getElementById('descipher');
descipher.addEventListener('click', () => {
  const toDescipher = text.value;
  // da el valor en tipo de dato número (transformé el string)
  const numberOfTripsToBack = parseInt(number.value, 10);
  document.getElementById('secondBox').value = window.cipher.decode(numberOfTripsToBack, toDescipher);
});

const logoutUnique = document.getElementById('logOutButton');
logoutUnique.addEventListener('click', () => {
  document.getElementById('toolForIntranet').style.display = 'none';
  document.getElementById('logIn').style.display = 'block';
  document.getElementById('formInicio').reset();
  document.getElementById('completeAllFields').style.display = 'none';
});

const clickIcon = document.getElementById('icono');
clickIcon.addEventListener('click', () => {
  document.getElementById('toolForIntranet').style.display = 'none';
  document.getElementById('logIn').style.display = 'block';
  document.getElementById('formInicio').reset();
  document.getElementById('completeAllFields').style.display = 'none';
});
