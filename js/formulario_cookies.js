
//? Funcion para que se guarde la cookie una hora
function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + 1 * 60 * 60 * 1000); // Añadir 1 hora en milisegundos
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

  

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }




  //todo Guardar las cookies de cada input

  function guardar_cookies() {
    let problemaValidacion = false; //? Variable para saber si todos los datos se han validado y no hay ningun error y son correctos
    //todo Recogemos lo que el usuario escribe por cada input
    let input_nombre = document.getElementById("nombre").value.trim();

    let longitudNombre = 4

    if (input_nombre.length < longitudNombre){ //* Si la longitud de caracteres que introduce el usuario por el input es menor a la longitud definida, mostramos error.
      problemaValidacion = true;
      console.log("%cError: El nombre debe tener al menos " + longitudNombre + " caracteres. Por favor, verifica e intenta de nuevo.", "color: orange; font-size: 16px; ");
    }

    let input_apellidos = document.getElementById("apellidos").value.trim();
    /* let input_dni = document.getElementById("dni").value; */ //! lo recogemos en la validacion del dni
    let input_telefono = document.getElementById("telefono").value.trim();

    if (input_telefono.length !== 9){
      console.log("%cError: El telefono debe contener " + 9 + " numeros. Por favor, verifica e intenta de nuevo.", "color: orange; font-size: 16px; ");
    }

    /* let input_email = document.getElementById("email").value; */ //! lo recogemos en la validacion del email

    //todo Validamos los datos los datos 
    //* El nombre, apellidos dni telefono y email no pueden estar vacios 
    //* Validacion de dni 
    //* Validacion de email
    //? Si hay algun error, muestro un mensaje por pantalla de que hay un error y que no se han almacenado las cookies 
    //* Si no hay ningun error, muestro un mensaje por pantalla de que se han guardado y las guardo con setcookie
    
   

    

    //!  Validacion de dni 

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

      let input_dni = document.getElementById("dni").value.trim(); //? Recojo lo que escribe el usuario por el input, le quito los espacios

      console.log('%cEl dni que ha introducido el usuario es: ' + input_dni, 'color: green; font-size: 16px;');


      let dniSinLetra = parseInt(input_dni.slice(0, -1)); //? Elimino el ultimo caracter que es la letra del dni

      console.log('%cEl dni sin la letra es: ' + dniSinLetra, 'color: green; font-size: 16px;');

      let letraDelDni = input_dni.slice(-1) //? Almaceno solamente la letra

      console.log('%cLa letra del dni es: ' + letraDelDni, 'color: green; font-size: 16px;');

      //todo Hacemos la division y nos quedamos con el resto, para saber en que posicion del array letras esta mi letra, con mi dni es la posicion 17 que es la V  
      let posicionLetraDni = dniSinLetra % 23; //? Calculamos la posicion donde esta la letra del dni, esto lo sabemos por el resto de la division

      console.log('%cEl resto de la division es: ' + posicionLetraDni, 'color: green; font-size: 16px;'); 
      
      let calcularLetraDni = letras[posicionLetraDni]; //? Aqui estamos buscando que letra hay en el indice 17 del array. Basicamente hace: me meto dentro del array letras y voy recorriendo hasta llegar al indice 17 en mi caso y devuelvo la letra que hay en el indice 17.

      console.log('%cEn la posicion ' + posicionLetraDni + ' del el array letras  esta la letra: ' + calcularLetraDni, 'color: green; font-size: 16px;');

      //todo Comprobamos que la letra que he calculado sea igual a la que me ha pasado el usuario por teclado (pero la diferencio con la variable letraDelDni que solo tiene la letra del dni).

      if (calcularLetraDni === letraDelDni) { //? Comparamos si la letra que he calculado es igual a la letra del dni que me ha pasado el usuario por el input 
        console.log('%c Las letras son iguales', 'color: green; font-size: 16px;');
        console.log('%c El dni es valido ', 'color: green; font-size: 16px;');
        /* return calcularLetraDni === letraDelDni; //? devuelve true, porque son iguales */
    } else {
        problemaValidacion = true;
        console.log('%c El dni  NO es valido, te has equivocado al poner el dni porque he calculado la letra: ' + calcularLetraDni + ' y la letra que has introducido en el input es ' + letraDelDni , 'color: red; font-size: 16x;');
    }


    //! Validacion de email

    var input_email = document.getElementById("email").value.trim(); //* el value lo pongo para obtener el valor actual del input

    //* Primero tengo que sacar en que posicion esta el @

  var arroba = input_email.indexOf("@");

  //*  y sacar la posicion de donde esta el ultimo punto.
  var ultimoPunto = input_email.lastIndexOf(".");

  if (arroba === -1 && ultimoPunto === -1) { //! si no existe ni el . , ni el @ te muestra el siguiente mensaje de error
    console.log("%cError: el correo no tiene ni la @ , ni el .", "color: red; font-size: 16px;");
    problemaValidacion = true //? Existe un problema de validacion
  } else if (arroba === -1) { //!si no esta el @ mostramos el error
    console.log("%cError: el correo no tiene un @", "color: red; font-size: 16px;");
    problemaValidacion = true; //? Existe un problema de validacion
  } else if (ultimoPunto === -1) { //! si no existe el punto mostramos el error.
    console.log("%cError: el correo no tiene un .", "color: red; font-size: 16px;");
    problemaValidacion = true; //? Existe un problema de validacion
  } else if (arroba === input_email.length - 1) { //! si el arroba esta en la ultima posicion, es porque despues del arroba no hay ninguna cadena
    console.log(
      "%c Error: el @ no puede estar en la ultima posción",
      "color:red; font-size: 16px;"
    );
    problemaValidacion = true; //? Existe un problema de validacion
  } else if (arroba === 0) {//! si el arroba esta en la posicion 0 es porque delante del arroba no hay una cadena
    console.log(
      "%cError: el @ no puede estar en la primera posición",
      "color: red; font-size: 16px;"
    );
    problemaValidacion = true; //? Existe un problema de validacion
  } else if (ultimoPunto <= arroba + 1) { //! Si entre el punto y el arroba no hay ningun texto muestro el siguiente mensaje 
    console.log("%cError:  No hay texto entre el @ y el punto", "color: red; font-size: 16px; ");
    problemaValidacion = true; //? Existe un problema de validacion
  } else { //* Si no es porque el correo esta bien 
    console.log("%cEl gmail es valido", "color: green; font-size:16px;");
  }


  //!  El nombre, apellidos dni telefono y email no pueden estar vacios 
  if (input_nombre == "" || input_apellidos == "" || input_dni == "" || input_telefono == "" || input_email == ""){
    problemaValidacion = true;
    console.log("%cError: No puede haber ningun campo vacio", "color: orange; font-size:17px;");
  }

    

  //? Si hay algun problema de validacion, muestro un mensaje por pantalla de que hay un error y que no se han almacenado las cookies 

  if (problemaValidacion){
    console.log('%c ***** Error no se han podido almacenar las cookies, verifica tus datos con los errores mostrados por consola e intentalo de nuevo  ', 'color: red; font-size: 16px;');

  } else { //? Si no hay ningun error, muestro un mensaje por pantalla de que se han guardado y las guardo con setcookie

    console.log('%cSe han guardado las cookies de forma exitosa', 'color: green; font-size: 17px;');
    setCookie("nombre" , input_nombre , 1); // Almacena el nombre que ha introducido el usuario por el input durante 1 hora
    setCookie("apellidos" , input_apellidos , 1); // Almacena el Apellido que ha introducido el usuario por el input durante 1 hora
    setCookie("dni" , input_dni , 1); // Almacena el dni que ha introducido el usuario por el input durante 1 hora
    setCookie("telefono" , input_telefono , 1); // Almacena el telefono que ha introducido el usuario por el input durante 1 hora
    setCookie("email" , input_email , 1); // Almacena el email que ha introducido el usuario por el input durante 1 hora
  }



  }

  //todo Funcion para saber si existe o no una cookie

  function existeCookie(){

    let comprobar_cookie = document.getElementById("existencia_cookie").value; //? Almaceno en la variable comprobar_cookie  lo que escribe el usuario por el input con nombre existencia_cookie, basicamente escribe la cookie que quiere comprobar si existe o no.

    if (getCookie(comprobar_cookie) != ""){ //* Si el valor que almacena la cookie que escribe el usuario por el input NO esta vacia, es porque existe
      console.log('%c La cookie ' + comprobar_cookie + " existe", 'color: green; font-size: 20px;');
    } else { //! Si no, Es porque la cookie no existe
      console.log('%cLa cookie ' + comprobar_cookie + " no existe", 'color: red; font-size: 20px;');
    }
    
  }


  //todo Recorrer las cookies almacenadas

  function mostrarCookies() {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        let [name, value] = cookie.split('=');
        console.log(`Clave: ${name}, Valor: ${value}`);
    }  
}



//todo Eliminar las cookies, que en realidad no la estamos borrando, solamente estamos quitando el valor de esa cookie, pero el nombre de la cookie sigue existiendo. 
function eliminar_cookies(){
  setCookie("nombre" , "");
  setCookie("apellidos" , ""); 
  setCookie("dni" , ""); 
  setCookie("telefono" , ""); 
  setCookie("email" , ""); 
  console.log('%cSe han borrado las cookies de forma exitosa', 'color: green; font-size: 20px;');
}




// function eliminar_cookies() {
//   let cookies = ["nombre", "apellidos", "dni", "telefono", "email"];
//   for (let i = 0; i < cookies.length; i++) {
//       document.cookie = cookies[i] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//   }
// }






