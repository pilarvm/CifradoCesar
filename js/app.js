//declaramos la funcion para cifrar el mensaje
var cipher = function(phrase){
  //usaremos chartValue, el cual lo usaremos para obtener el valor ascii y su valor alfabetico
  var chartValue = 0;
  //declaramos la variable cipherPhrase para concatenar los valores del chartValue
  var cipherPhrase ='';
      //creamos un for para recorrer la frase
      for (var i=0; i<phrase.length ; i++){
        //le  asignamos a chartValue el valor ascii de la posicion de i
        chartValue = phrase.charCodeAt(i);
        //validamos el rango de las mayusculas y concatenamos el mensaje
        if (chartValue>=65 && chartValue<=90){
            chartValue = (chartValue - 65 + 33)%26+65;
            chartValue = String.fromCharCode(chartValue);
            cipherPhrase = cipherPhrase+ chartValue
        }
        //validamos el rango de las minusculas y concatenamos el mensaje
        else if(chartValue>=97 && chartValue<=122){
            chartValue = (chartValue - 97 + 33)%26+97;
            chartValue = String.fromCharCode(chartValue);
            cipherPhrase = cipherPhrase+ chartValue
        }
      }
return alert('Tu frase cifrada es :  '+ cipherPhrase)
}
//declaramos la funcion para decifrar la frase
var deCipher = function(phrase2){
  var chartValue2 = 0;
  var deCipherPhrase ='';
    //recorremos la frase
      for (var i=0; i<phrase2.length ; i++){
        chartValue2 = phrase2.charCodeAt(i);
        //Validamos mayusculas
        if (chartValue2>=65 && chartValue2<=90){
            chartValue2 = (chartValue2 + 65 - 33)%26+65;
            chartValue2 = String.fromCharCode(chartValue2);
            deCipherPhrase = deCipherPhrase+ chartValue2
        }
        //validamos minusculas
        else if(chartValue2>=97 && chartValue2<=122){
            chartValue2 = (chartValue2 + 97 - 45)%26+97;
            chartValue2 = String.fromCharCode(chartValue2);
            deCipherPhrase = deCipherPhrase+ chartValue2
        }
      }
      //retornamos la frase solicitada
return alert('Tu frase es :  '+ deCipherPhrase)
}
//solicitamos las frases
console.log(cipher(prompt('Introduzca la frase a cifrar')))
console.log(deCipher(prompt('Instroduzca la frase a descifrar')))
