document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const listContainer = document.getElementById("list");
  listContainer.innerText = "My Todos"
  const renderApp = function(){
    const updateButton = document.querySelector('#submit-button')
    updateButton.value = "Create New Task"
    listContainer.innerHTML = ""
    listContainer.append(taskList.render())
  };
  const sortAndRender = function(){
    listContainer.innerHTML = ""
    listContainer.append(taskList.sortRender())
  };

  // Add Form Behavior Here!

  const createTaskForm = document.querySelector('#create-task-form')
  createTaskForm.addEventListener('submit', function(e){
    e.preventDefault()
    const newTaskField = document.querySelector('#new-task-description')
    const dueDate = document.querySelector('#due-date')
    if(newTaskField.value != ""){
      const task = new TaskListItem(createTaskForm)
      renderApp()
    }
      newTaskField.value = ""
      dueDate.value = ""
  })

  const sortButton = document.querySelector('#sort-by-priority')
  sortButton.addEventListener('click', function(){
    sortAndRender()
  })

  renderApp()
});
