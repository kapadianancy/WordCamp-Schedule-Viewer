/* eslint-disable react/prop-types */
import React from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = () => <div style={{ width: '20px', height: '20px', background: 'red', borderRadius: '50%' }}></div>

function MapView (props) {
  const defaultProps = {
    center: {
      lat: props.latitude,
      lng: props.longitude
    },
    zoom: 11
  }

  return (
      <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBROdBUjgsl6GtUXLtFGQfCmN3F-XCHgig' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
            lat={props.latitude}
            lng={props.longitude}
        />
      </GoogleMapReact>
  )
}

export default MapView
