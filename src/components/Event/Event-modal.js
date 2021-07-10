/* eslint-disable react/prop-types */
import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import MapView from './Map-view'

function EventModal (props) {
  const event = props.eventDetail
  let map = null
  if (event && event.latitude && event.longitude) {
    map = (<div><h4 style={{ fontWeight: 'bold' }}>MAP VIEW</h4>
        <p>
            <div style={{ width: '100%', height: '200px' }}>
                <MapView latitude={event.latitude} longitude={event.longitude}/>
            </div>
        </p></div>)
  }
  return (
    event != null
      ? (<Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h2 style={{ color: '#2196F3', fontWeight: 'bold' }}>{event.title}</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{ fontWeight: 'bold' }}>DATES</h4>
                    <p> Start date: {new Date(event.startDate).toDateString()}
                    </p>
                    <p> End date: {new Date(event.endDate).toDateString()}
                    </p>
                    <h4 style={{ fontWeight: 'bold' }}>LOCATION</h4>
                    <p> {event.location}
                    </p>
                    <h4 style={{ fontWeight: 'bold' }}>ABOUT</h4>
                    <p dangerouslySetInnerHTML={{ __html: event.content }}>
                    </p>
                    {map}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>)
      : null

  )
}

export default EventModal
