# CifradoCesar

El programa cifrara y descifrara un mensaje introducido por el usuario.

# Diagrama de flujo

![GitHub Logo](/assets/cesar.png)

https://subefotos.com/ver/?1c734d53fea4d30902a1a50480c968a9o.png#codigos

# Pseudocodigo

**Programa: Cifrar y decifrar**

Algoritmo:
  * Declaramos la funcion CIFRAR
	* Escribir "Introduzca el mensaje a cifrar"
	* Recorrer el "mensaje" caracter por caracter
		* Obtener el codigo ASCII de cada caracter
		* Validar SI:
			* MAYUSCULA: su codigo ASCII debe estar dentro del rango 65-90
				utilizar la operacion matematica para llevarlo a la posicion 33 dentro de su rango
			* MINUSCULA:  su codigo ASCII debe estar dentro del rango 97-122
				utilizar la operacion matematica para llevarlo a la posicion 33 dentro de su rango
		* Concatenar o agrupar cada caracter
*	Devolver el mensaje ya concatenado


* Declaramos la funcion DESCIFRAR
  * Escribir "Introduzca el mensaje a descifrar"
  * Recorrer el "mensaje" caracter por caracter
	   * Obtener el codigo ASCII de cada caracter
		 * Validar SI:
		    * MAYUSCULA: su codigo ASCII debe estar dentro del rango 65-90
				utilizar la operacion matematica para regresarlo a la posicion antes de ser cifrado
		     * MINUSCULA:  su codigo ASCII debe estar dentro del rango 97-122
				utilizar la operacion matematica para regresarlo a la posicion antes de ser cifrado
		* Concatenar o agrupar cada caracter
* Devolver el mensaje ya concatenado

**Finprograma**
