/* eslint-disable no-tabs */
import axios from "../../../src/axios";

export const fetchPostData=()=> {
  const eventsArray=[];
  const result={
    error:null,
    events:null
  };
  fetch('https://central.wordcamp.org/wp-json/wp/v2/wordCamps')
    .then(response => response.json())
    .then(myJSON => {
      console.log(myJSON)
      let objLength = Object.keys(myJSON).length;

      for (let i = 0; i < objLength; i++) {
        const event = {};
        event.title = Object.values(myJSON)[i].title.rendered;
        event.startDate = new Date(Object.values(myJSON)[i]['Start Date (YYYY-mm-dd)'] * 1000).toISOString();
        event.endDate=new Date(Object.values(myJSON)[i]['End Date (YYYY-mm-dd)'] * 1000).toISOString();
        event.location=Object.values(myJSON)[i]['Location'];
        event.detailsLink=Object.values(myJSON)[i]['link']
        console.log("new data---",event);
        eventsArray.push(event);
        result.events=eventsArray;
      }
    }).catch(err=>result.error= err);
  return result;
}



export const setCalendarTheme = (theme, texts, btns) => {
  if (theme == "dark") {
    texts[0].classList.add('darkCalendar');
    for (let b of btns) {
      b.classList.add('darkCalendar');
    }

  } else if (theme == "light") {
    texts[0].classList.remove('darkCalendar');
    for (let b of btns) {
      b.classList.remove('darkCalendar');
    }

  }
}
