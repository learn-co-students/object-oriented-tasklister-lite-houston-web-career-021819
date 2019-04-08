class TaskListItem {
  constructor(description) {
    this.description = description;

    if (TaskListItem.all == null) {
      TaskListItem.all = [];
      TaskListItem.all.push(this);
    } else {
      TaskListItem.all.push(this);
    }
  }
}
