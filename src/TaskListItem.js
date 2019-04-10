class TaskListItem {

    constructor(description, duedate, duration, priority='high'){
        this.element = document.createElement('li')
        this.description = description;
        this.priority = priority;
        this.duedate = duedate;
        this.duration = duration;
        this.element.innerHTML = `Description: ${this.description}` + "<br>" + `Due date: ${this.duedate}` + "<br>" + `Duration: ${this.duration}` + "<br>" 
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

    //delete item from HTML page, also from array
    delete(){
        this.element.remove()
        let index = allTasks.indexOf(this)
        allTasks.splice(index, 1)
    }

    //sorting function for all items, sort from high to low
    static sortedList(){
        let sorted = []
        allTasks.forEach(function(item){
            if (item.priority === 'high'){
                sorted.push(item)
            }
        })
        allTasks.forEach(function(item){
            if (item.priority === 'medium'){
                sorted.push(item)
            }
        })
        allTasks.forEach(function(item){
            if (item.priority === 'low'){
                sorted.push(item)
            }
        })
        return sorted
    }
}
const allTasks = []