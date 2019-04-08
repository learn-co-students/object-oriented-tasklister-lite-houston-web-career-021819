class TaskList {
    constructor() {
        this.ul = document.createElement('ul')
    }
    
    createItem(description) {
        let listItem = new TaskListItem(description)
        this.ul.append(listItem.li)
    }

}