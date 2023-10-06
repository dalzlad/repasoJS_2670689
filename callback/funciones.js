function saludar(nombre) {
    alert("Hola " + nombre)
  }
  
  function procesarEntradaUsuario(callback1) {
    var nombre = prompt("Por favor ingresa tu nombre.")
    callback1(nombre)
  }
  
 
  procesarEntradaUsuario(saludar)

  /*Implementar un código donde emplee callback.
  Recibir un número y si el número es mayor a 10
  Calcular e imprimir en otra función la suma de los
  números del 1 al 100
  */
  

//Convertir las funciones anteriores a tipo Flecha