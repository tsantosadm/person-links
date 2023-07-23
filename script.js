function toggleMode (){
   const html = document.documentElement
   html.classList.toggle('light')

   // pegar tag img - (querySelector = pesquise pelo seletor css)
   const img = document.querySelector('#profile img')
   
   // substituir a img
   if(html.classList.contains('light')){
   // se tiver lightmode, adicionar img light (setAtribute - alterar atributo no HTML)
   img.setAttribute('src', './assets/my-photo-light.png')
   } else {
   // se não tivet lightmode manter img normal
   img.setAttribute('src', './assets/my-photo.png')
   }

}