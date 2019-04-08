class TaskListItem {

    constructor(createTaskForm) {
        const inputField = createTaskForm.querySelector('#new-task-description')
        this.description = inputField.value + " "
        const selectedColor = createTaskForm.querySelector('#text-color')
        this.color = selectedColor.value
        const dueDate = createTaskForm.querySelector('#due-date')
        this.dueDate = dueDate.value
        this.deleted = false

        TaskListItem.all.push(this)
    }

    static notDeleted(){
        let notDeletedItems = []
        TaskListItem.all.forEach(function(item){
            if (item.deleted === false) {
                notDeletedItems.push(item)
            }
        })
        return notDeletedItems
    }
    static HighPriority(){
        let highPriorityItems = []
        TaskListItem.notDeleted().forEach(function(item){
            if (item.color === "high") {
                highPriorityItems.push(item)
            }
        })
        return highPriorityItems
    }

    static MediumPriority(){
        let mediumPriorityItems = []
        TaskListItem.notDeleted().forEach(function(item){
            if (item.color === "medium") {
                mediumPriorityItems.push(item)
            }
        })
        return mediumPriorityItems
    }

    static LowPriority(){
        let lowPriorityItems = []
        TaskListItem.notDeleted().forEach(function(item){
            if (item.color === "low") {
                lowPriorityItems.push(item)
            }
        })
        return lowPriorityItems
    }
}

TaskListItem.all = []