// No cambies los nombres de las funciones.//npm test JSX.test.js

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
//   var newArrau = [];
// for (var x in objeto) {
//   if (objeto.hasOwnProperty(x)) {
//     newArrau.push(x);
//   }
// } return newArrau;
  return Object.entries(objeto);
  }


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const obj = {};
  for (let i = 0; i < string.length; i++) {
    if (obj.hasOwnProperty(string[i]) === false){
      obj[string[i]] = 1;
    }
    else if (obj.hasOwnProperty(string[i]) === true){
      obj[string[i]] += 1;
    }
  }
     return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  sp = s.split("")
  mayus = []
  minus = []
  for (var i = 0; i < sp.length; i++)
      {
          if (sp[i] == sp[i].toUpperCase()){              
              mayus.push(sp[i]);

          }
          if (sp[i] == sp[i].toLowerCase()){
              minus.push(sp[i]);
          }
      }
  return mayus.join("").concat(minus.join(""));
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y 
  //la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" 
  //|| Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var words = str.split(" ")
  var result = [];
  for (let i = 0; i < words.length; i++) {
     result.push(words[i].split("").reverse().join(''));
  }
  return result.join(' ')
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numeroCopia = String(numero).split("")
  let numReversedArray = [];
  let newString = "";
  let reversedNumber = 0;

  for(let i = numeroCopia.length -1; i > -1; i--) {
    numReversedArray.push(numeroCopia[i])
  }
 newString += numReversedArray.join("")
 reversedNumber += Number(newString);
 if (numero === reversedNumber) {
   return "Es capicua";
 }
 return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let str1 = cadena.replaceAll("a","")
  let str2 = str1.replaceAll("b","")
  let str3 = str2.replaceAll("c", "")
  return str3;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  const sortedArray = arr.sort((a,b) => a.length - b.length)
  return sortedArray
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  const arrayFiltrado = arreglo1.filter(value => arreglo2.includes(value));
  return arrayFiltrado;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

