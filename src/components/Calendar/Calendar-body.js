import React from 'react'

function CalendarBody (props) {
  const h2Style = {
    weight: 'bold',
    color: 'green'
  }
  return (
        <>
        <div className="content-wrapper">
        <div className="card">
            <div className="card-body">

                <div className="fullcalendar-agenda fc fc-ltr fc-unthemed" >
                    <div className="fc-toolbar fc-header-toolbar">
                        <div className="fc-left">
                            <div className="fc-button-group">
                                <button type="button" className="fc-prev-button fc-button fc-button-primary"
                                        aria-label="prev"><span className="fc-icon fc-icon-chevron-left"></span>
                                </button>
                                <button type="button" className="fc-next-button fc-button fc-button-primary"
                                        aria-label="next"><span className="fc-icon fc-icon-chevron-right"></span>
                                </button>
                            </div>
                            <button type="button" className="fc-today-button fc-button fc-button-primary">today</button>
                        </div>
                        <div className="fc-center"><h2>November 12, 2014</h2></div>
                        <div className="fc-right">
                            <div className="fc-button-group">
                                <button type="button"
                                        className="fc-dayGridMonth-button fc-button fc-button-primary">month
                                </button>
                                <button type="button"
                                        className="fc-timeGridWeek-button fc-button fc-button-primary">week
                                </button>
                                <button type="button"
                                        className="fc-timeGridDay-button fc-button fc-button-primary fc-button-active">day
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="fc-view-container">
                        <div className="fc-view fc-timeGridDay-view fc-timeGrid-view" >
                            <table className="">
                                <thead className="fc-head">
                                <tr>
                                    <td className="fc-head-container fc-widget-header">
                                        <div className="fc-row fc-widget-header"
                                             style={{ borderRightWidth: '1px', marginRight: '15px' }}>
                                            <table className="">
                                                <thead>
                                                <tr>
                                                    <th className="fc-axis fc-widget-header"
                                                        style={{ width: '38.4271px' }}></th>
                                                    <th className="fc-day-header fc-widget-header fc-wed fc-past"
                                                        data-date="2014-11-12"><span>Wednesday</span></th>
                                                </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                                </thead>
                                <tbody className="fc-body">
                                <tr>
                                    <td className="fc-widget-content">
                                        <div className="fc-day-grid">
                                            <div className="fc-row fc-week fc-widget-content"
                                                 style={{ borderRightWidth: '1px', marginRight: '15px' }}>
                                                <div className="fc-bg">
                                                    <table className="">
                                                        <tbody>
                                                        <tr>
                                                            <td className="fc-axis fc-widget-content"
                                                                style={{ width: '38.4271px' }}><span>all-day</span></td>
                                                            <td className="fc-day fc-widget-content fc-wed fc-past"
                                                                data-date="2014-11-12"></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="fc-content-skeleton">
                                                    <table>
                                                        <tbody>
                                                        <tr>
                                                            <td className="fc-axis" style={{ width: '38.4271px' }}></td>
                                                            <td className="fc-event-container"><a
                                                                className="fc-day-grid-event fc-h-event fc-event fc-not-start fc-end fc-draggable fc-resizable">
                                                                <div className="fc-content"><span
                                                                    className="fc-title">Conference</span></div>
                                                                <div className="fc-resizer fc-end-resizer"></div>
                                                            </a></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="fc-divider fc-widget-header"/>
                                            <div className="fc-scroller fc-time-grid-container"
                                                 style={{ overflow: 'hidden scroll', height: '582px' }}>
                                                <div className="fc-time-grid">
                                                    <div className="fc-bg">
                                                        <table className="">
                                                            <tbody>
                                                            <tr>
                                                                <td className="fc-axis fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-day fc-widget-content fc-wed fc-past"
                                                                    data-date="2014-11-12"></td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="fc-slats">
                                                        <table className="">
                                                            <tbody>
                                                            <tr data-time="00:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>12am</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="00:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="01:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>1am</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="01:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="02:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>2am</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="02:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="03:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>3am</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="03:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="04:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>4am</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="04:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="05:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>5am</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="05:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="06:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>6am</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="06:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="07:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>7am</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="07:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="08:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>8am</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="08:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="09:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>9am</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="09:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="10:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>10am</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="10:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="11:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>11am</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="11:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="12:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>12pm</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="12:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="13:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>1pm</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="13:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="14:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>2pm</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="14:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="15:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>3pm</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="15:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="16:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>4pm</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="16:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="17:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>5pm</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="17:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="18:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>6pm</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="18:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="19:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>7pm</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="19:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="20:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>8pm</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="20:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="21:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>9pm</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="21:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="22:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>10pm</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="22:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="23:00:00">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}><span>11pm</span></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            <tr data-time="23:30:00" className="fc-minor">
                                                                <td className="fc-axis fc-time fc-widget-content"
                                                                    style={{ width: '38.4271px' }}></td>
                                                                <td className="fc-widget-content"></td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <hr className="fc-divider fc-widget-header" style={{ display: 'none' }}/>
                                                        <div className="fc-content-skeleton">
                                                            <table>
                                                                <tbody>
                                                                <tr>
                                                                    <td className="fc-axis"
                                                                        style={{ width: '38.4271px' }}></td>
                                                                    <td>
                                                                        <div className="fc-content-col">
                                                                            <div
                                                                                className="fc-event-container fc-mirror-container"></div>
                                                                            <div className="fc-event-container"><a
                                                                                className="fc-time-grid-event fc-event fc-start fc-end fc-draggable fc-resizable"
                                                                                style={{ inset: '776.5px 0% -924.5px', zIndex: '1', marginRight: '20px' }}>
                                                                                <div className="fc-content">
                                                                                    <div className="fc-time"
                                                                                         data-start="10:30"
                                                                                         data-full="10:30 AM - 12:30 PM">
                                                                                        <span>10:30 - 12:30</span></div>
                                                                                    <div className="fc-title">Meeting
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="fc-resizer fc-end-resizer"></div>
                                                                            </a><a
                                                                                className="fc-time-grid-event fc-event fc-start fc-end fc-draggable fc-resizable fc-time-grid-event-inset"
                                                                                style={{ inset: '887.5px 0% -961.5px 50%', zIndex: '2' }}>
                                                                                <div className="fc-content">
                                                                                    <div className="fc-time"
                                                                                         data-start="12:00"
                                                                                         data-full="12:00 PM">
                                                                                        <span>12:00</span></div>
                                                                                    <div className="fc-title">Lunch
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="fc-resizer fc-end-resizer"></div>
                                                                            </a><a
                                                                                className="fc-time-grid-event fc-event fc-start fc-end fc-draggable fc-resizable"
                                                                                style={{ inset: '1072.5px 0% -1146.5px', zIndex: '1' }}>
                                                                                <div className="fc-content">
                                                                                    <div className="fc-time"
                                                                                         data-start="2:30"
                                                                                         data-full="2:30 PM">
                                                                                        <span>2:30</span></div>
                                                                                    <div className="fc-title">Meeting
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="fc-resizer fc-end-resizer"></div>
                                                                            </a><a
                                                                                className="fc-time-grid-event fc-event fc-start fc-end fc-draggable fc-resizable"
                                                                                style={{ inset: '1294.5px 0% -1368.5px', zIndex: '1' }}>
                                                                                <div className="fc-content">
                                                                                    <div className="fc-time"
                                                                                         data-start="5:30"
                                                                                         data-full="5:30 PM">
                                                                                        <span>5:30</span></div>
                                                                                    <div className="fc-title">Happy
                                                                                        Hour
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="fc-resizer fc-end-resizer"></div>
                                                                            </a><a
                                                                                className="fc-time-grid-event fc-event fc-start fc-end fc-draggable fc-resizable"
                                                                                style={{ inset: '1479.5px 0% -1553.5px', zIndex: '1' }}>
                                                                                <div className="fc-content">
                                                                                    <div className="fc-time"
                                                                                         data-start="8:00"
                                                                                         data-full="8:00 PM">
                                                                                        <span>8:00</span></div>
                                                                                    <div className="fc-title">Dinner
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="fc-resizer fc-end-resizer"></div>
                                                                            </a></div>
                                                                            <div
                                                                                className="fc-highlight-container"></div>
                                                                            <div className="fc-bgevent-container"></div>
                                                                            <div className="fc-business-container">
                                                                                <div
                                                                                    className="fc-nonbusiness fc-bgevent"
                                                                                    style={{ top: '0px', bottom: '-665.5px' }}></div>
                                                                                <div
                                                                                    className="fc-nonbusiness fc-bgevent"
                                                                                    style={{ top: '1257.5px', bottom: '-1775px' }}></div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                </div>
                                            </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
  )
}

export default CalendarBody
