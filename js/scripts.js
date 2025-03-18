//Camila quiere montar en una atracción y no sabe si la dejarán subir, la altura mínima para subir son 150cm. Haz una función que reciba la altura en cm y determine si Camila puede montar o no.

const measureHeight = number => {
  if (number >= 150) {
    console.log('Camila puede montar');
  } else {
    console.log('Camila es un Minion');
  }
};

measureHeight(150);
measureHeight(146);

//Bego está intentando conseguir envío gratuito en su pedido online. Crea una función que reciba como parámetro el total de su compra y determine si supera los 50€ para obtener el envío gratis o si tendrá que pagarlo.

const freeShipping = number => {
  if (number > 50) {
    console.log('Bego tendrá envío gratuito');
  } else {
    console.log('Bego tendrá que pagar gastos de envío.');
  }
};

freeShipping(50);
freeShipping(51);

//Sabrina quiere saber si un número es múltiplo de 7. Crea una función que reciba un número y determine si es múltiplo o no.

const multipleNumber = (number, divider) => {
  if (number % divider === 0) {
    console.log('El numero es multiplo.');
  } else {
    console.log('El numero no es multiplo.');
  }
};
multipleNumber(150, 7);

//Abby está evaluando candidatos para su equipo. Los candidatos harán tres pruebas y cada una se evalúa de 0 a 10. Si la media está entre 0 y 4 mostrará el mensaje "Estás Fuera", si la media está entre 5 y 7 mostrará "Entras en la reserva" y si la media es 8 o más dirá "Salimos al amanecer".

const numericalAverages = (note1, note2, note3) => {
  if ((note1 + note2 + note3) / 3 <= 4) {
    console.log('Estás Fuera');
  } else if (
    (note1 + note2 + note3) / 3 >= 5 &&
    (note1 + note2 + note3) / 3 === 7
  ) {
    console.log('Entras en la reserva');
  } else {
    console.log('Salimos al amanecer');
  }
};
numericalAverages(1, 3, 5);
//5  Macarena tiene tres perros de distintas razas y quiere saber cuál de ellos es el más grande. Crea una función que reciba el peso de los tres perros y determine cuál es el más pesado.

const compareWeight = (weight1, weight2, weight3) => {
  if (weight1 > weight2 && weight1 > weight3) {
    console.log('El perro 1 es más gordo.');
  } else if (weight2 > weight1 && weight2 > weight3) {
    console.log('El perro 2 es el más gordo.');
  } else {
    console.log('El perro 3 es el más gordo.');
  }
};
compareWeight(45, 20, 80);
compareWeight(10, 50, 20);
compareWeight(30, 15, 20);

//6 Camila está organizando un sorteo y cada participante tiene un número. Si el número es divisible por 3, gana un descuento. Si es divisible por 5, recibe un regalo. Si es divisible por ambos, obtiene el premio mayor. Si no es divisible por ninguno, no gana nada. Crea una función que reciba un número entero y determine qué premio le corresponde.

const discountDraw = number => {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log('¡Enhorabuena! Has ganado el super premio.');
  } else if (number % 3 === 0) {
    console.log('Ganas un descuentito.');
  } else if (number % 5 === 0) {
    console.log('¡Enhorabuena!, recibes un regalo.');
  } else {
    console.log('Sigue intentandolo');
  }
};
discountDraw(30);
discountDraw(50);
discountDraw(41);
discountDraw(42);

//7 Bego está repartiendo golosinas entre sus amigos. Si la cantidad de golosinas es un número par, podrá dividirlas equitativamente. Si es impar, sobrará una y alguien tendrá que decidir qué hacer con ella. Crea una función que reciba un número entero y determine si es par o impar, mostrando el mensaje correspondiente.

const cuantityCandy = number => {
  if (number % 2 === 0) {
    console.log('Todas teneis la misma cantidad.');
  } else {
    console.log('El que reparte y reparte, se lleva la mejor parte.');
  }
};
cuantityCandy(30);
cuantityCandy(19);

//8 Sabrina está planificando un viaje muy especial para celebrar el año nuevo y quiere saber si el año en el que piensa viajar es bisiesto, ya que eso afectará la fecha del viaje. Crea una función que reciba un año como parámetro y determine, siguiendo la regla de que un año es bisiesto si es divisible por 4, pero no por 100, a menos que también sea divisible por 400, si es bisiesto ("Es un año bisiesto") o si no lo es ("No es un año bisiesto").

const leapYear = year => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log('Te irás de viaje en un año bisiesto');
  } else {
    console.log('El viaje será en un año no bisiesto');
  }
};

leapYear(2025);
leapYear(2024);

//9 Abby está hackeando un sistema de seguridad en una misión secreta. Para acceder, debe introducir un código numérico. La puerta solo se abrirá si el número es par y mayor que 50, o si es impar pero un múltiplo de 7. Crea una función que reciba un número y determine si Abby podrá entrar ("Acceso concedido") o si la puerta seguirá bloqueada ("Acceso denegado").

const hackerCamila = code => {
  if ((code % 2 === 0 && code > 50) || (code % 2 !== 0 && code % 7 === 0)) {
    console.log('Acceso concedido');
  } else {
    console.log('Acceso denegado');
  }
};

hackerCamila(2356);
hackerCamila(12);

//10 Macarena está evaluando la salud de sus perros según su peso y edad. Un perro se considera en peso saludable sólo si pesa entre 8 y 30 kg. Además solo se considerará saludable si su edad es un número múltiplo de 3 y menor de 15. Crea una función que reciba el peso del perro y su edad. Determina si está saludable ("El perro está saludable") o si no ("Perro pocho 😢").

const dogHealth = (weight, age) => {
  if (weight >= 8 && weight <= 30 && age % 3 === 0 && age < 15) {
    console.log('El perro esta saludable');
  } else {
    console.log('Perro pocho');
  }
};
dogHealth(30, 10);
dogHealth(9, 9);
