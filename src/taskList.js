class TaskList {
  constructor(){
    TaskList.all = TaskListItem.all        // keep track of a list of TaskListItem
  }
  
  render=(ul)=>{
    TaskListItem.all.forEach(function(item){  //TaskListItem ia an array of <li>
      ul.appendChild(item)
    })

    return ul
  }
 
} 


TaskList.all = []




 