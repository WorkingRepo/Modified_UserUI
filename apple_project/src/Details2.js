import React, { Component } from 'react';
import Map from 'google-maps-react'


import Navigation1 from './Navigation1';
class Details extends Component {



  render() {
    return (
      <div>
        <Navigation1 />
        <Map google={this.props.google} zoom={14}>

  <Marker onClick={this.onMarkerClick}
          name={'Current location'} />

  <InfoWindow onClose={this.onInfoWindowClose}>
      <div>
        <h1>{this.state.selectedPlace.name}</h1>
      </div>
  </InfoWindow>
</Map>
    	</div>
    );
  }
}


export default Details;
