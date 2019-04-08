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

  renderApp()
});
