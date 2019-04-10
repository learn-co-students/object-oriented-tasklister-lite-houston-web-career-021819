class TaskList {
  
    constructor(){
        this.element = document.createElement('ul')
    }

    addListItem(newItem){
        this.element.append(newItem.element)

        //create priority drop-down menu
        const br = document.createElement('br')
        const p = document.createElement('p')

        let dropdown = document.createElement('select')
        let high = document.createElement('option')
        high.innerText = 'Priority: High'
        high.value = 'high'
        let medium = document.createElement('option')
        medium.innerText = 'Priority: Medium'
        medium.value = 'medium'
        let low = document.createElement('option')
        low.innerText = 'Priority: Low'
        low.value = 'low'
        dropdown.append(high, medium, low)

        dropdown.addEventListener('change', function(){
            newItem.priority = dropdown.value
            newItem.color()
        })
        newItem.color()
        
        //li item delete button
        let delButton = document.createElement('button')
        delButton.innerText = 'Delete Task'
        delButton.addEventListener('click', () => {
            newItem.delete()
        })

        //edit input textbox for description
        let newDescription = document.createElement('input')
        newDescription.setAttribute('type', 'text')
        newDescription.placeholder = "Edit Task Description..."

        //edit input date box for due date
        let newDue = document.createElement('input')
        newDue.setAttribute('type', 'date')
        newDue.placeholder = "Edit Task Due Date..."

        //edit input textbox for description
        let newDuration = document.createElement('input')
        newDuration.setAttribute('type', 'text')
        newDuration.placeholder = "Edit Task Duration..."

        //edit button
        let editBtn = document.createElement('button')
        editBtn.innerText = "Confirm Editing"

        editBtn.addEventListener('click', ()=>{
            newItem.description = newDescription.value
            newItem.duedate = newDue.value;
            newItem.duration = newDuration.value;
            newItem.element.innerHTML = `Description: ${newItem.description}` + "<br>" + `Due date: ${newItem.duedate}` + "<br>" + `Duration: ${newItem.duration}`

            //append everything to newItem li
            newItem.element.append(p) //create new line
            newItem.element.append(dropdown)
            newItem.element.append(" || ", delButton)
            newItem.element.append(" || ", editBtn)
            newItem.element.append(br)

            newItem.element.append("Edit Description: ", newDescription)

            newItem.element.append("Edit Due Date: ", newDue)

            newItem.element.append("Edit Duration: ", newDuration)
        })

        //append everything to newItem li
        newItem.element.append(p) //create new line
        newItem.element.append(dropdown)
        newItem.element.append(" || ", delButton)
        newItem.element.append(" || ", editBtn)
        newItem.element.append(br)

        newItem.element.append("New Description: ", newDescription)

        newItem.element.append("New Due Date: ", newDue)

        newItem.element.append("New Duration: ", newDuration)

    }

    newItem(description, duedate, duration){
        //create new List Item
        let newItem = new TaskListItem(description, duedate, duration)
        this.addListItem(newItem)
    }

    render(){
        return this.element
    }
}
