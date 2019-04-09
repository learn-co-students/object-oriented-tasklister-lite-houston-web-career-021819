class TaskList {

  constructor(){
    this.items = TaskListItem.all
  };

  render(){
    const ul = document.createElement("ul")
    this.items.forEach(function(taskListItem, i){
    let li =  ul.appendChild(taskListItem.description)
    removeButton(ul, i)
    prioritySelection(li, taskListItem)
    })
    prioritySorter(ul)
    return ul
  }
}
