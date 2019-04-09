document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form")
  const taskDescriptionInput = document.querySelector('#new-task-description')
  const listContainer = document.querySelector("#list");

  const taskList = new TaskList()

  listContainer.append(taskList.element)

  // Add Form Behavior Here!
  form.addEventListener('submit', function(e){
    e.preventDefault()
    const description = taskDescriptionInput.value
    taskList.createItem(description)
    taskDescriptionInput.value = ''
  })

});
