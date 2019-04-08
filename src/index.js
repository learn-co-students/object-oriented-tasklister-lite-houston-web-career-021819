document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const listContainer = document.getElementById("list");
  const renderApp = () => (listContainer.append(taskList.render()));

  // Add Form Behavior Here!
  const form = document.querySelector('#create-task-form')
  form.addEventListener('submit', function(e){
    e.preventDefault()
    let description = document.querySelector('#new-task-description')
    let duedate = document.querySelector('#new-task-duedate')
    taskList.newItem(description, duedate.value)
    description.value = ""
      })
  // Sorting button
  const sortBtn = document.createElement('button')
  sortBtn.innerText = "Sorting by priority"
  form.append(sortBtn)
  sortBtn.addEventListener('click',function(e){
    e.preventDefault()
    //call sorting class method in TaskListItem, store sortedlist to a variable
    let sortedList = TaskListItem.sortedList()
    //add each element to the ul element 
    sortedList.forEach(function(sortedItem){
      taskList.element.appendChild(sortedItem.element)
    })
  })

  renderApp()
});
