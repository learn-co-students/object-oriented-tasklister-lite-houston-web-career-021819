class TaskListItem {
  constructor(description, priority = "low"){
    const li = document.createElement("li")
    li.innerText = description
    this.description = li
    this.priority = priority
    TaskListItem.all.push(this)
  };

}
TaskListItem.all = []
