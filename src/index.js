document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const listContainer = document.getElementById("list");
  const renderApp = () => {
    listContainer.innerHTML = "";
    listContainer.append(taskList.render());
  };

  // Add Form Behavior Here!

  const itemValue = document.getElementById("new-task-description");
  const submitTask = document.getElementById("submit-task");

  submitTask.addEventListener("click", e => {
    e.preventDefault();
    const newItem = new TaskListItem(itemValue.value);
    taskList.update(newItem);
    itemValue.value = "";
    renderApp();
  });

  renderApp();
});
