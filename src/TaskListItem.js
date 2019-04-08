class TaskListItem {
    constructor(description) {
        this.li = document.createElement('li')
        this.li.innerText = description

        // this.button = document.createElement('button')
        // this.button.append('Delete')
        // this.li.append(this.button)
    }
}
