document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('#list')
  const input = document.querySelector('#new-task-description')
  const userInput = document.querySelector('input[type="submit"]')

  const taskList = new TaskList();
  container.append(taskList.ul)

  userInput.addEventListener('click', function (e) {
    e.preventDefault();
    taskList.createItem(input.value)
  })

});