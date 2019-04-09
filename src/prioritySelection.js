function prioritySelection(li, tli){

  if (tli.priority == "low"){
    li.style.color = "CHARTREUSE"
  }
  else if (tli.priority == "medium"){
    li.style.color = "YELLOW"
  }
  else if (tli.priority == "high"){
    li.style.color = "RED"
  }
}


  function compare(a, b) {
  // Use toUpperCase() to ignore character casing
    const priorityA = a.priority.toUpperCase();
    const priorityB = b.priority.toUpperCase();

    let comparison = 0;
    if (priorityA == "HIGH" || priorityB == "LOW") {
      comparison = -1;
    } else if (priorityA == "LOW" || priorityB == "HIGH") {
      comparison = 1;
    } else if (priorityB == "MEDIUM") {
      comparison = 0;
    } else if (priorityA == "MEDIUM") {
      comparison = 0;
    }
    return comparison;
  }

let i = 0

function prioritySorter(ul){
  let sortButton = document.createElement('button')
  sortButton.innerText = "Sort via Priority"
  ul.appendChild(sortButton)
  sortButton.addEventListener('click', () => {
    if(i == 0 || i % 2 == 0){
      i += 1
      TaskListItem.all.sort(compare)}
    else{
      i += 1
      TaskListItem.all.reverse()

    }
    renderApp()
  })

}
