let form = document.getElementById("form");
form.addEventListener('submit', mytodos);

function mytodos(e){
  e.preventDefault()
  let insert = document.getElementById("insert").value
  let result = document.querySelector(".results");
  
  if(insert == ""){
  
  } else{
    let list = document.createElement('li')
      list.textContent = insert;
      result.appendChild(list);
      
      let removes = document.createElement('a');
      removes.textContent = 'x';
    removes.classList = "remove-list";
      list.appendChild(removes);  
  };

  let cancels = document.addEventListener('click', removeList);
  document.getElementById("insert").value = "";
};

    function removeList(e) {
      if(e.target.classList.contains("remove-list")){
       e.target.parentElement.remove();
      }
}

result.appendChild(localStorage)