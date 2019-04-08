class TaskList {
  
    constructor(){
        this.element = document.createElement('ul')
    }

    addListItem(newItem){
        this.element.append(newItem.element)
        //create priority drop-down menu
        let dropdown = document.createElement('select')
        newItem.element.append(dropdown)
        let high = document.createElement('option')
        high.innerText = 'high'
        high.value = 'high'
        let medium = document.createElement('option')
        medium.innerText = 'medium'
        medium.value = 'medium'
        let low = document.createElement('option')
        low.innerText = 'low'
        low.value = 'low'
        dropdown.appendChild(medium)
        dropdown.appendChild(high)
        dropdown.appendChild(low)
        dropdown.addEventListener('change', function(){
            newItem.priority = dropdown.value
            newItem.color()
        })
        newItem.color()

        //li item delete button
        let button = document.createElement('button')
        button.innerText = 'X'
        newItem.element.append(button)
        button.addEventListener('click', () => {
            newItem.delete()
        })
    }

    newItem(description, duedate){
        //create new List Item
        let newItem = new TaskListItem(description.value, duedate)
        this.addListItem(newItem)
    }

    render(){
        return this.element
    }
}
