export function Run () {
  const today = document.getElementsByClassName('fc-today-button fc-button fc-button-primary')
  if (today) {
    today[0].click()
  }
}

export function Ready () {
  const elements = document.getElementsByClassName('fc-event-container')
  while (elements.length > 0) {
    elements[0].parentNode.remove()
  }
}
