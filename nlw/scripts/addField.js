//procura o botao 
document.querySelector("#add-time")
.addEventListener("click",cloneField)

//quando clicar

//executar
function cloneField(){
   // duplicar  os campos 
  const newFieldsContainer= document.querySelector('.schendule-item').cloneNode(true)
  //limpar campos
  const fields= newFieldsContainer.querySelectorAll('input')
  // fields[0].value="";
  // fields[1].value="";
  //para cada campo limpar
  fields.forEach
  (function(field)
  {
    field.value="";
  }
  )
//colocar na pagina 
document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}