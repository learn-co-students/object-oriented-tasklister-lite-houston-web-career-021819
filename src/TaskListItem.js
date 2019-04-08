class TaskListItem {
  constructor(description){
    const li = document.createElement("li")
    li.innerText = description
    this.description = li
    TaskListItem.all.push(this)
  };

}
TaskListItem.all = []
