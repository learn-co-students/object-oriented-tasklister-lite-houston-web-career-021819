class TaskList {
  constructor() {
    if (TaskListItem.all != null) {
      this.itemList = TaskListItem.all;
    } else {
      this.itemList = [];
    }
  }

  update(item) {
    this.itemList.push(item);
  }

  delete(item) {
    const index = this.itemList.indexOf(item);
    if (index !== -1) this.itemList.splice(index, 1);
  }

  render() {
    const unorderedList = document.createElement("ul");
    this.itemList.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = item.description;
      unorderedList.append(listItem);
      const deleteButton = document.createElement("button");
      deleteButton.style.marginLeft = "5px";
      deleteButton.style.fontSize = "10px";
      deleteButton.textContent = "X";
      deleteButton.addEventListener("click", e => {
        e.preventDefault();
        this.delete(item);
        deleteButton.remove();
        listItem.remove();
        this.render();
      });
      listItem.append(deleteButton);
    });
    return unorderedList;
  }
}
