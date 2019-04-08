class TaskList {

  constructor(){
    this.items = TaskListItem.all
  };

  render(){
    const ul = document.createElement("ul")
    this.items.forEach(function(taskListItem, i){
    ul.appendChild(taskListItem.description)
    removeButton(ul, i)
    })
    return ul
  }
}
