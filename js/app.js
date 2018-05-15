var show = function (){
   var hideMenu = document.getElementsByClassName('añadir')[0];
   hideMenu.style.display = 'none';
   var showMenu = document.getElementsByClassName('formulario')[0];
   showMenu.style.display = "block";
};
var createList = document.getElementById('show');
createList.addEventListener('click', show);
