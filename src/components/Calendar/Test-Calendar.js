import React, {useEffect, useState} from 'react';
import Calendar from 'react-awesome-calendar';
import {fillEvents, setCalendarTheme} from "../../../public/assets/js/custom-calendar";
import {getDataUrl} from "../../axios";
import axios from "axios";

function TestCalendar(props) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  let cardStyle = {
    marginRight: '2px',
    fontWeight: 'bold',
    fontSize: '15px'

  }
  useEffect(() => {
    const texts = document.getElementsByClassName("calendarWrapper");
    const btns = document.getElementsByClassName("modeButton");
    setCalendarTheme(props.themeClass, texts, btns);
    // fillEvents(props.data)
    axios.get(getDataUrl).then(res => {
      console.log(res.data)
      setData(res.data);
    }).catch(err => setError(err))
  }, [])

  if (error) {
    console.log("Error--->", JSON.stringify(error))
    alert("Error in loading upcoming/past WordCamp events..")
  }
  if (data) {
    fillEvents(data);
  }

  const events = [{
    id: 1,
    color: '#fd3153',
    from: '2021-07-06T18:00:00+00:00',
    to: '2021-07-06T18:00:00+00:00',
    title: 'This is an event'
  }, {
    id: 2,
    color: '#1ccb9e',
    from: '2021-07-01T13:00:00+00:00',
    to: '2021-07-01T13:00:00+00:00',
    title: 'This is another event'
  }];
  return (
    <>
      <div className="content-wrapper" style={cardStyle}>
        <div className={`card ${props.themeClass}`} style={{height: '100%'}}>
          <div className="card-body" style={cardStyle}>
            <Calendar events={events} style={{height: '100%'}}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestCalendar;