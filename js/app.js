//se agrega el evento al boton añadir lista

var show = function (){
   var hideMenu = document.getElementsByClassName("añadir")[0];
   hideMenu.style.display = "none";
   var showMenu = document.getElementsByClassName("formulario")[0];
   showMenu.style.display = "block";
};
var createList = document.getElementById("show");
createList.addEventListener("click", show);

// se agrega el evento al boton añadir lsita
var saveList = document.getElementById("save");
  saveList.addEventListener("click", function () {
var saveText = document.getElementById("hideMe").value; //se crea variable donde mediante el .value se le dije que agarre lo que contenga en este caso el input
  document.getElementById("hideMe").value = ""; //para limpiar el input
var newtarget = document.getElementById("card");
  //creando variable donde se almacena el texto que se agarro con el value
var textValue = document.createTextNode(saveText);
  // se crea un elemto p que es donde se va a almacenar el nodo de texto
var  createP = document.createElement("p");
  //se agrega al elemento p el nodo de texto
  createP.appendChild(textValue);
  //se agrega ese elemnto p al padre
  newtarget.appendChild(createP);
// se crea el boton añadir tarjeta que es el que despues tendra un evento
var addList = document.createElement("button");
  newtarget.appendChild(addList);
  addList.type = "button";
// se crea un nodo de texto para agregarle el nombre que tendra el boton
var nameButton = document.createTextNode("Añadir una tarjeta ...");
   addList.appendChild(nameButton);
   addList.setAttribute("id", "addTarget")

var hideForm = document.getElementById("hide");
   hideForm.style.display = "none";
   newtarget.style.display = "block";
   //version 3
//se agrega evento al boton añadir tarjeta
addList.addEventListener("click",function (){
  var containerFour = document.createElement("div");
  //se crea un textarea para escribir
  var contText = document.createElement("textarea");
  //se crea boton de añadir
  var createButton = document.createElement("button");
  //se crea un nodo de texto con el nombre que tendra el boton
  var textButton = document.createTextNode("Añadir");
  //boton de cerrar
  var closeButton = document.createElement("button");
  var close = document.createTextNode("x");
  // se les asigna a quien pertenecen los elemnetos creados arriba

  newtarget.appendChild(containerFour);
  containerFour.appendChild(createP);
  containerFour.appendChild(contText);
  containerFour.appendChild(createButton);
  containerFour.appendChild(closeButton);
  createButton.appendChild(textButton);
  closeButton.appendChild(close);

  //se le agrega una  clase  al div que se creo
  containerFour.setAttribute("class", "four");
  //se agrega id al boton  añadir
  createButton.setAttribute("id", "addButton");
  //se agrega id al boton de cerrar
  closeButton.setAttribute("id", "close2")

  addList.style.display = "none";
  contText.focus();

});


});
