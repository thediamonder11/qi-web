import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import driver from './assets/driver.png';

class Map extends React.Component {
  state = {
    selectedLocation: null,
  };

  render() {
    const bounds = new window.google.maps.LatLngBounds();
    const locations = this.props.locations;

    for (var i = 0; i < locations.length; i++) {
      bounds.extend(locations[i]);
    };
    this.map && this.map.fitBounds(bounds);

    return (
       const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}
      <GoogleMap ref={elem => this.map = elem} >
        {this.props.locations.map((location, index) => (
          <Marker
            icon={{
              url: driver,
              scaledSize: { width: 35, height: 44 },
            }}
            key={index}
            position={{ ...location }}
            onClick={() => this.setState({ selectedLocation: location })}
          >
            {this.state.selectedLocation === location &&
              <InfoWindow onCloseClick={() => this.setState({ selectedLocation: null })}>
                <div style={{ color: 'black' }}>
                  {location.lat}, {location.lng} 
                </div>
              </InfoWindow>
            }
          </Marker>
        ))}
      </GoogleMap>
    );
  }
}

const LiveMap = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: '100%' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(Map);
export default LiveMap;
