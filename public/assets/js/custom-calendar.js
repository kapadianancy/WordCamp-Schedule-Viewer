/* eslint-disable no-tabs */
export function Run () {
  const todayBtn = document.getElementsByClassName('fc-today-button fc-button fc-button-primary')
  if (todayBtn) {
    todayBtn[0].click()
  }

  const monthBtn = document.getElementsByClassName('fc-dayGridMonth-button fc-button fc-button-primary')
  if (monthBtn) {
    monthBtn[0].click()
  }
}

export function Ready () {
  const elements = document.getElementsByClassName('fc-event-container')
  while (elements.length > 0) {
    elements[0].parentNode.remove()
  }
}

export function fillEvents () {
  const eventCell = document.querySelector('td[data-date="2021-06-01"]')
  if (eventCell) {
    const box = eventBox()
    eventCell.appendChild(box)
    const boxes = document.getElementsByClassName('eventBox')
    if (boxes) {
      alert(boxes.length)
      boxes[0].addEventListener('click', eventClick)
    }
  }
}

export function eventClick () {
  alert('hi')
}

export function eventBox () {
  const box = document.createElement('Button')
  // box.setAttribute('type', 'button')
  box.addEventListener('click', eventClick)
  box.classList.add('eventBox')
  box.innerHTML = "<span class='boxText'>WEvent</span>"

  return box
}
