//variables
//let numSecreto =Math.floor((Math.random() * 10))+1;
let numMaximo=1000000;
let numMinimo=-1;
let numSecreto=-1;
let numUsuario;
let intentos = 1;
//let palabra = 'vez';
let maxIntenos = 3;

alert("Bienvenido al juego adivina el número, primero debes ingresar el valor mínimo y máximo de números que deseas adivinar. Ejemplo: entre 2 y 12");
numMinimo =Math.ceil(parseInt(prompt("Ingresa el número minimo")));
numMaximo = Math.floor(parseInt(prompt("Ingresa el número máximo")));
numSecreto = Math.floor(Math.random() * (numMaximo - numMinimo) + numMinimo);


do {
  console.log(numSecreto + " es el numero secreto");
  numUsuario = parseInt(prompt(`Me inidcas un número entre ${numMinimo} y ${numMaximo} por favor.`));
  //viendo el número en la consola
  //console.log(typeof(numUsuario));

  //Condicional si es igual al numero secreto
  if (numUsuario == numSecreto) {
    //es igual
    alert(
      `Acertaste, el número es ${numSecreto}. Lo lograste en ${intentos} ${
        intentos == 1 ? "vez" : "veces"
      } `
    );
    break;
    //alert("aceptaste el número es " + numSecreto);
  } else {
    //no es igual
    //alert("no acertaste");
    if (numSecreto > numUsuario) {
      alert("El múmero secreto es mayor");
    } else {
      alert("El número secreto es menor");
    }
  }

  if (intentos == maxIntenos) {
    alert(`Llegaste al máximo número de ${maxIntenos} intentos...`);
    break;
  }
  intentos++;
  //palabra='veces';
} while (numSecreto != numUsuario);
