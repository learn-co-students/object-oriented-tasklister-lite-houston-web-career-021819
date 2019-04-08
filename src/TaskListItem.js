class TaskListItem {

    constructor(description, duedate, priority='high'){
        this.element = document.createElement('li')
        this.priority = priority
        this.duedate = duedate
        this.element.innerText = `${description}, ${duedate}`
        allTasks.push(this)
    }

    color(){
        if (this.priority === 'high'){
            this.element.style.color = 'red'
        } else if  (this.priority === 'medium'){
            this.element.style.color = 'yellow'
        } else if (this.priority === 'low'){
            this.element.style.color = 'green'
        }
    }

    delete(){
        this.element.remove()
        let index = allTasks.indexOf(this)
        allTasks.splice(index, 1)
    }

    static sort(){
        let sorted = []
        allTasks.forEach(function(item){
            if (item.priority === 'low'){
                sorted.push(item)
            }
        })
        allTasks.forEach(function(item){
            if (item.priority === 'medium'){
                sorted.push(item)
            }
        })
        allTasks.forEach(function(item){
            if (item.priority === 'high'){
                sorted.push(item)
            }
        })
        sorted.forEach(function(item){
            TaskList.addListItem()
        }
 
    }

}
const allTasks = []