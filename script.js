let handler = document.querySelectorAll('.handler');
let sidebar = document.querySelector('.sidebar');
let sidebarMin = document.querySelector('.sidebar-min');
let grid = document.querySelector('.grid');


//Evento para todos los elementos que tengan la clase handler en
// este caso son dos 
handler.forEach((element)=>{
  element.addEventListener('click',()=>{
    //se va aplicar siempre y cuando sea mayor de 1330px
    if(window.innerWidth >= '1330'){
      //Esto para cuando sidebar tenga la clase visible y 
      // el sidebarMin tenga la clase ocultar estas se remuevan 
      // para cuando el width sea mayor a 1330px
      if(sidebar.classList.contains('visible') || sidebarMin.classList.contains('ocultar')){
        sidebar.classList.remove('visible');
        sidebarMin.classList.remove('ocultar');
      }

      //Esto para cuando sea mayor a 1330px el sidebar se oculte 
      // y el sidebarMin se vuelva visible
      sidebar.classList.toggle('ocultar');
      sidebarMin.classList.toggle('visible');
      grid.classList.toggle('ml-grid');
    }else{
      if(sidebar.classList.contains('ocultar') || sidebarMin.classList.contains('visible') || grid.classList.contains('ml-grid')){
        sidebar.classList.remove('ocultar');
        sidebarMin.classList.remove('visible');
        grid.classList.contains('ml-grid')
      }
      sidebar.classList.toggle('visible');
      sidebarMin.classList.toggle('ocultar');
      //para poner en el grid un fondo oscuro
      grid.classList.toggle('grid-op');
    }
  })
})

//Se dispara este evento cuando el min-width sea 1330px y remueva
// las clases toggle automaticamente
let min_width = window.matchMedia("(min-width: 1330px)");
min_width.addListener((event)=>{
  if(event.matches){
    sidebar.classList.remove('visible');
    sidebarMin.classList.remove('ocultar');
    grid.classList.remove('grid-op');
  }
})