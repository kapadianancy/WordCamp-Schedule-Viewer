/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Calendar from 'react-awesome-calendar'
import { fillEvents, setCalendarTheme } from '../../../public/assets/js/custom-calendar'
import EventModal from '../Event/Event-modal'

function CalendarBody (props) {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [modalShow, setModalShow] = useState(false)
  const [eventDetail, setEventDetail] = useState(null)

  let events = []
  const cardStyle = {
    marginRight: '2px',
    fontWeight: 'bold',
    fontSize: '15px'

  }
  useEffect(() => {
    const texts = document.getElementsByClassName('calendarWrapper')
    const btns = document.getElementsByClassName('modeButton')
    setCalendarTheme(props.themeClass, texts, btns)
  }, [props.themeClass])

  // fetch data from API
  useEffect(() => {
    const eventsArray = []
    fetch('https://central.wordcamp.org/wp-json/wp/v2/wordCamps?per_page=100')
      .then(response => response.json())
      .then(myJSON => {
        const objLength = Object.keys(myJSON).length

        for (let i = 0; i < objLength; i++) {
          const event = {}
          event.id = Object.values(myJSON)[i].id
          event.title = Object.values(myJSON)[i].title.rendered || 'No Details Available'
          event.startDate = new Date(Object.values(myJSON)[i]['Start Date (YYYY-mm-dd)'] * 1000).toISOString() || 'No Details Available'
          event.endDate = new Date(Object.values(myJSON)[i]['End Date (YYYY-mm-dd)'] * 1000).toISOString() || 'No Details Available'
          event.location = Object.values(myJSON)[i].Location || 'No Details Available'
          event.content = Object.values(myJSON)[i].content.rendered || 'No Details Available'
          if (Object.values(myJSON)[i]._host_coordinates) {
            event.latitude = Object.values(myJSON)[i]._host_coordinates.latitude
            event.longitude = Object.values(myJSON)[i]._host_coordinates.longitude
          }

          eventsArray.push(event)
        }

        setData(eventsArray)
      }).catch(err => {
        setError(err.message)
      })
  }, [])

  const clickEvent = (e) => {
    setModalShow(true)
    const event = data.filter(d => {
      return d.id === e
    })
    setEventDetail(event[0])
  }

  if (error) {
    alert('Error executing fetch data. Error message:' + error)
  }

  if (data) {
    events = fillEvents(data)
  }

  return (
    <>
      <div data-testid="calendar-body-test" className="content-wrapper" style={cardStyle}>
        <div className={`card ${props.themeClass}`} style={{ height: '100%' }}>
          <div className="card-body" style={cardStyle}>
            <Calendar events={events} style={{ height: '100%' }} onClickEvent={clickEvent}/>
          </div>
        </div>
        <EventModal show={modalShow} onHide={() => setModalShow(false)} eventDetail={eventDetail}/>
      </div>
    </>
  )
}

export default CalendarBody
