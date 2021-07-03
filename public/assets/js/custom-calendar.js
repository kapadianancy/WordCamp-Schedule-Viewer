/* eslint-disable no-tabs */

export const fillEvents = (data) => {
  const events = [];
  data.map(d => {

    console.log(get_the_ID())

    // const event={
    //   id: d.id,
    //   color: '#fd3153',
    //   from: new Date(d.Start Date * 1000),
    //   to: new Date(d.StartDate * 1000),
    //   title: d.title.rendered
    // }
    // console.log("events---",event);
  })
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
