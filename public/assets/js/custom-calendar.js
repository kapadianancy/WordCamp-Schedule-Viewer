/* eslint-disable no-tabs */


export const fillEvents=(data)=>
{
  const events=[];
  //event start="green"
  data.map(d=>
  {
    const event={
      id: d.id,
      color: 'green',
      from: d.startDate,
      to: d.startDate,
      title: d.title
    }
    events.push(event);
  })
  //event end="red"
  data.map(d=>
  {
    const event={
      id: d.id,
      color: 'red',
      from: d.endDate,
      to: d.endDate,
      title: d.title
    }
    events.push(event);
  })
return events;

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
