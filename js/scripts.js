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
