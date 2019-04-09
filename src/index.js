document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList(); 
  const listContainer = document.getElementById("list");
  const renderApp = (ul) => (listContainer.append(taskList.render(ul))); //changed from innerHTML, because innerHTML expects a string, but we need to append elements
 
  const form = document.querySelector('#create-task-form')

  //creat sort btn and add event
  const sortBtn = document.createElement('button')
  sortBtn.innerText = "Sort by priority"
  sortBtn.style.fontSize = "12px"
  sortBtn.id = 'sort'
  form.appendChild(sortBtn)
  
  sortBtn.addEventListener('click', function(e){
    e.preventDefault()
    if(TaskListItem.all.length !==0){
      let newOrder = TaskListItem.sort()
      newOrder.forEach(function(eachLi){    
         ul.appendChild(eachLi)   //since we already have the li, just append them to ul
      })
    }
   
  })

  // Add Form Behavior Here! create list
  createBtn = document.querySelectorAll('#create-task-form input')[1] 
  var ul = document.createElement('ul')
  listContainer.appendChild(ul)
  createBtn.addEventListener('click', function(e){
    e.preventDefault()
    const input = document.querySelectorAll('#create-task-form input')[0].value
    if(input !==""){
      newItem = new TaskListItem(input)
      renderApp(ul)
    }
    
  })

  
});

  