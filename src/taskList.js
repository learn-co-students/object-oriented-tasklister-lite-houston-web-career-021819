class TaskList {
    
    render(){
        const taskUl = document.createElement('ul')
        if (TaskListItem.notDeleted().length !== 0) {
            TaskListItem.notDeleted().forEach(function(item){
                const itemLi = makeNewLi(item)
                taskUl.append(itemLi)                          
            })
            return taskUl
        } else {
            return ''
        }
    }
    sortRender(){
        const taskUl = document.createElement('ul')
        if (TaskListItem.notDeleted().length !== 0) {
            TaskListItem.HighPriority().forEach(function(item){
                const itemLi = makeNewLi(item)
                taskUl.append(itemLi)                             
            })
            TaskListItem.MediumPriority().forEach(function(item){
                const itemLi = makeNewLi(item)
                taskUl.append(itemLi)                        
            })  
            TaskListItem.LowPriority().forEach(function(item){
                const itemLi = makeNewLi(item)
                taskUl.append(itemLi)                            
            })
            return taskUl
        } else {
            return ''
        }
    }
}

function makeNewLi(item){
    const itemLi = document.createElement('li')
    itemLi.innerText = `${item.description} (${item.dueDate})`

    if(item.color === 'high'){
        itemLi.style.color = "red"
    }
    else if(item.color === 'medium'){
        itemLi.style.color = "yellow"
    }
    else if(item.color === 'low'){
        itemLi.style.color = "green"
    }

    const deleteButton = document.createElement('button')
    deleteButton.innerText = "X"
    itemLi.append(deleteButton)
    deleteButton.addEventListener('click', function(){
        itemLi.remove()
        item.deleted = true
    })
    const editButton = document.createElement('button')
    editButton.innerText = "edit"
    itemLi.append(editButton)
    editButton.addEventListener('click', function(){
        const newDescription = document.querySelector('#new-task-description')
        newDescription.value = item.description
        const newDueDate = document.querySelector('#due-date')
        newDueDate.value = item.dueDate
        const newColor = document.querySelector('#text-color')
        newColor.value = item.color
        const updateButton = document.querySelector('#submit-button')
        updateButton.value = "Update Task"

        item.deleted = true
        updateButton.addEventListener('submit', function(e){
            e.preventDefault()
            newDescription = ""
            newDueDate = ""
            newColor = "high"
            renderApp()
        })


    })
    return itemLi
}