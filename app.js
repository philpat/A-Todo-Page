const enteredList = document.querySelector('.entered-list')
const addBtn = document.querySelector(".add-list")
const todoItem = document.querySelector(".item")
const Task = document.querySelector(".task")



addBtn.addEventListener("click", ()=>{
  if(enteredList.value == ""){
    alert("Please enter a todo")
  } else{
    enteredList.value
    // console.log(enteredList.value);

    let newTodo = document.createElement("div")
    // console.log(newTodo);
    newTodo.classList.add("item")
    newTodo.innerHTML = `<p>${enteredList.value}</p>
    <div class="item-btn">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
          <button class="complete-btn">Complete</button>
        </div>`
    Task.appendChild(newTodo)
    enteredList.value ="" 
    updateLs()


  }  
})


Task.addEventListener("click", (e)=>{
  if(e.target.classList.contains("edit-btn")){
    console.log(e.target.parentElement.parentElement.firstChild.innerHTML);
    enteredList.value = e.target.parentElement.parentElement.firstChild.innerHTML
    e.target.parentElement.parentElement.remove()
  }
  
})

Task.addEventListener("click", (e)=>{
  if(e.target.classList.contains("delete-btn")){
    e.target.parentElement.parentElement.remove()
   
 }
})
Task.addEventListener("click", (e)=>{
  if(e.target.classList.contains("complete-btn")){
   e.target.parentElement.parentElement.firstChild.classList.add("line-through");
   e.target.parentElement.setAttribute("disabled", "disabled")
 }
})

function updateLs(){
  const updateItem= document.querySelectorAll(".item")
  const allTodos = []
  updateItem.forEach((newTodo)=>{
    allTodos.push({text: newTodo.innerHTML})
  })
  localStorage.setItem("allTodos", JSON.stringify(allTodos))
}







