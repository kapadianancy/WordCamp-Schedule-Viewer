/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Calendar from 'react-awesome-calendar'
import { fillEvents, setCalendarTheme } from '../../../public/assets/js/custom-calendar'

function CalendarBody (props) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  // const [events,setEvents]=useState([])
  let events = []
  const cardStyle = {
    marginRight: '2px',
    fontWeight: 'bold',
    fontSize: '15px',
    marginBottom: '5px'

  }
  useEffect(() => {
    const texts = document.getElementsByClassName('calendarWrapper')
    const btns = document.getElementsByClassName('modeButton')
    setCalendarTheme(props.themeClass, texts, btns)
  }, [props.themeClass])

  // fetch data from API
  useEffect(() => {
    const eventsArray = []
    fetch('https://central.wordcamp.org/wp-json/wp/v2/wordCamps')
      .then(response => response.json())
      .then(myJSON => {
        const objLength = Object.keys(myJSON).length

        for (let i = 0; i < objLength; i++) {
          const event = {}
          event.id = Object.values(myJSON)[i].id
          event.title = Object.values(myJSON)[i].title.rendered
          event.startDate = new Date(Object.values(myJSON)[i]['Start Date (YYYY-mm-dd)'] * 1000).toISOString()
          event.endDate = new Date(Object.values(myJSON)[i]['End Date (YYYY-mm-dd)'] * 1000).toISOString()
          event.location = Object.values(myJSON)[i].Location
          event.detailsLink = Object.values(myJSON)[i].link
          eventsArray.push(event)
        }
        setData(eventsArray)
      }).catch(err => {
        setError(err.message)
      })
  }, [])

  if (error) {
    alert('Error executing fetch data. Error message:' + error)
  }

  // useEffect(()=>
  // {
  if (data) {
    events = fillEvents(data)
    console.log('events--', events)
  }
  // },[events])

  // if(true) {
  //   events=[{
  //     id: 1,
  //     color: '#fd3153',
  //     from: '2021-07-06T18:00:00+00:00',
  //     to: '2021-07-06T18:00:00+00:00',
  //     title: 'This is an event'
  //   }, {
  //     id: 2,
  //     color: '#1ccb9e',
  //     from: '2021-07-01T13:00:00+00:00',
  //     to: '2021-07-01T13:00:00+00:00',
  //     title: 'This is another event'
  //   }]
  // }
  return (
    <>
      <div className="content-wrapper" style={cardStyle}>
        <div className={`card ${props.themeClass}`} style={{ height: '100%' }}>
          <div className="card-body" style={cardStyle}>
            <Calendar events={events} style={{ height: '100%' }}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default CalendarBody
