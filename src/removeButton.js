function removeButton (ul, i) {
  const rButton = document.createElement("button")

  rButton.append("Remove")
  ul.appendChild(rButton)
  removal(i, rButton)
}

function removal(i, button) {
  const taskList = new TaskList();
  const listContainer = document.getElementById("list");
  const textInput = document.querySelector("#new-task-description")
  const submitForm = document.querySelector("#create-task-form")
  const renderApp = () => {
    while (listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
    }
    listContainer.append(taskList.render())
  };

  button.addEventListener("click", () => {
  console.log("We got here!!")
  TaskListItem.all.splice(i, 1)
  renderApp()
  })
}
