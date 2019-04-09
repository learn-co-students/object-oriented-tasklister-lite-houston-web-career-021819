function removeButton (ul, i) {
  const rButton = document.createElement("button")

  rButton.append("Remove")
  ul.appendChild(rButton)
  removal(i, rButton)
}

function removal(i, button) {
  button.addEventListener("click", () => {
  TaskListItem.all.splice(i, 1)
  renderApp()
  })
}
