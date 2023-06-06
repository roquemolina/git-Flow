//iniciando HW gitFlow
//Cada integrante en su rama debe modificar
// la función del punto número seis (6) para que reciba como 
//parámetro un número entero. Si es un número par, debe convertirlo a
// binario y retornarlo, y si es impar, convertirlo a hexadecimal y retornarlo.

function laCajaDePandora(numero) {
    if (numero % 2 === 0) {
      return numero.toString(2); // Convertir número par a binario
    } else {
      return numero.toString(16); // Convertir número impar a hexadecimal
    }
  }
  function maxx (){
    return {
        nombre: "Maxx",
        apellido: "Tobio",
        edad: 43,
        ciudad: "Bariloche",
        pais: "Argentina",
    }
  }
  //nota sobre metodos utilizados
/*    toString(2): Este método convierte el 
número en una cadena de texto que representa 
su valor en base 2 (binario). Por ejemplo, 
si tienes el número 10 y llamas a toString(2)
en él, obtendrás la cadena "1010", que es 
la representación binaria de 10.


toString(16): Este método convierte el número
en una cadena de texto que representa su
valor en base 16 (hexadecimal).
Por ejemplo, si tienes el número 
15 y llamas a toString(16) en él, 
obtendrás la cadena "f", que es 
la representación hexadecimal de 15.*/

    console.log(laCajaDePandora(10));
    console.log(laCajaDePandora(7));
    console.log(laCajaDePandora(16));
    console.log(laCajaDePandora(15));
    console.log(laCajaDePandora(10000));
    console.log(maxx());
