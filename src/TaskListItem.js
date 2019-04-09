class TaskListItem {
  constructor(description){
    this.description = description
    this.priority = null
    const li = document.createElement('li')
    const span = document.createElement('span')
    li.appendChild(span)
    span.innerText = this.description
    TaskListItem.all.push(li)
    //.push(this)// collect all instances' priorities
    this.deleteItem(li)
    this.setPriority(li)
    this.dueDate(li)
    this.edit(li,span)
  }

 deleteItem(li){
  const deleteBtn = document.createElement('button')
  deleteBtn.innerHTML = 'Delete'
  deleteBtn.style.fontSize = "10px"
  li.appendChild(deleteBtn)
  
  deleteBtn.addEventListener('click', function(){
    li.remove()                  //delete from browser element
    const index = TaskListItem.all.indexOf(li)//.indexOf(item)
    TaskListItem.all.splice(index, 1) //also delete from class
    console.log(TaskListItem.all)
   })
 }


 setPriority=(li)=>{
   const selectBtn = document.createElement('select')
   selectBtn.innerHTML = "<option> Choose priority </option><option value ='High priority'> High priority </option> <option value = 'Medium'>Medium </option> <option value = 'Low'> Low </option>"
   li.appendChild(selectBtn)
   selectBtn.addEventListener('change', ()=>{ 
     if(selectBtn.value == "High priority"){
        li.style.color = "Red"
        this.priority = "High"
     }else if(selectBtn.value == "Medium"){
        li.style.color = "Yellow"
        this.priority = "Medium"
    }else{
        li.style.color = "Green"
        this.priority = "Low"
        }
     //call sort function   
     //TaskListItem.sort()   
   })
  }
  

  dueDate(li){
    const input = document.createElement('input')
    input.type = "Date"
    li.appendChild(input)
  }

  edit=(li,span)=>{
    const editInput = document.createElement('input')
    editInput.placeholder = "Edit task..."
    const editBtn = document.createElement('button')
    editBtn.type = "submit"
    editBtn.style.fontSize = "10px"
    editBtn.innerText = "Update"
    li.appendChild(editInput)
    li.appendChild(editBtn)
    
    editBtn.addEventListener('click', (e)=>{
      e.preventDefault()
      const newTask = editInput.value
      span.innerText = newTask
      
    })
  }

  
  static sort(){
    
    const high = []
    const medium = []
    const low = []
    TaskListItem.all.forEach(function(eachItem){
      if(eachItem.style.color == "red"){
        high.push(eachItem)
      }else if(eachItem.style.color == "yellow"){
       medium.push(eachItem)
      }else{
       low.push(eachItem) 
      }      
    })
  const sorted = [...high, ...medium, ...low]
  return sorted
  }
  

}

TaskListItem.all = [] //can't define it before class because it won't know what taskListItem is
//const sorted = []