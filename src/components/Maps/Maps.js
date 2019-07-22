import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [51.505, -0.09]
    };
  }
  render() {
    return (
      <Map
        center={this.state.position}
        zoom={13}
        style={{ width: '80vh', height: '80vh', margin: '0 auto' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={this.state.position}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default Maps;
