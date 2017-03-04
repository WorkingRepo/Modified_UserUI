import React, { Component } from 'react';
import Map from 'google-maps-react'
import Home from './Home';
import Navigation1 from './Navigation1';
class Details extends Component {

  constructor(props) {
      super(props);
      this.state={searching:''};


 }

 componentDidMount(){
   this.setState({searching: ' Results'});

 var myCenter = new google.maps.LatLng(this.props.rests.latitude,this.props.rests.longitude);
 var myCenter1 = new google.maps.LatLng(this.props.laPos,this.props.loPos);
 var mapCanvas = document.getElementById("map");
 var mapOptions = {center: myCenter, zoom: 5};
 var map = new google.maps.Map(mapCanvas, mapOptions);
 var marker = new google.maps.Marker({position:myCenter,

                                     });
 marker.setMap(map);
var marker1=new google.maps.Marker({
                                      position:myCenter1,
                                      animation:google.maps.Animation.BOUNCE,
                                      icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                                      map:map
                                    });
console.log('hi'+this.props.laPos+'    '+this.props.loPos );

 var infowindow = new google.maps.InfoWindow({
    content: this.props.rests.restName
    });
  infowindow.open(map,marker);

  var infowindow1 = new google.maps.InfoWindow({
     content: 'Your location'
     });
   infowindow1.open(map,marker1);


   var bounds = new google.maps.LatLngBounds;
   var markersArray = [];

   var geocoder = new google.maps.Geocoder;

   var service = new google.maps.DistanceMatrixService;
   service.getDistanceMatrix({
     origins: [myCenter1],
     destinations: [myCenter],
     travelMode: 'DRIVING',
     unitSystem: google.maps.UnitSystem.METRIC,
     avoidHighways: false,
     avoidTolls: false
   }, function(response, status) {
     if (status !== 'OK') {
       alert('Error was: ' + status);
     } else {
       var originList = response.originAddresses;
       var destinationList = response.destinationAddresses;
       var outputDiv = document.getElementById('output');
       outputDiv.innerHTML = '';
       (markersArray)=>{
         for (var i = 0; i < markersArray.length; i++) {
           markersArray[i].setMap(null);
         }
         markersArray = [];
       };

       var showGeocodedAddressOnMap = function(asDestination) {
         return function(results, status) {
           if (status === 'OK') {
             map.fitBounds(bounds.extend(results[0].geometry.location));

           } else {
             alert('Geocode was not successful due to: ' + status);
           }
         };
       };

       for (var i = 0; i < originList.length; i++) {
         var results = response.rows[i].elements;
         geocoder.geocode({'address': originList[i]},
             showGeocodedAddressOnMap(false));
         for (var j = 0; j < results.length; j++) {
           geocoder.geocode({'address': destinationList[j]},
               showGeocodedAddressOnMap(true));
           outputDiv.innerHTML += 'Distance from your location : ' +results[j].distance.text +
               '<br /> Duration :' + results[j].duration.text + '<br>';
         }
       }
     }
   });


   var directionsService = new google.maps.DirectionsService;
   var directionsDisplay = new google.maps.DirectionsRenderer({
     suppressMarkers : true
   });

  directionsDisplay.setMap(map);

   directionsService.route({
     origin: myCenter1,
     destination: myCenter,
     travelMode: 'DRIVING'
   }, function(response, status) {
     if (status === 'OK') {
       directionsDisplay.setDirections(response);
     } else {
       window.alert('Directions request failed due to ' + status);
     }
   });
}

  render() {
    return (
      <div>
        <Navigation1 />
        <br/>
        <br/>
        <br/>
        <h3>Restaurant Name: {this.props.rests.restName}</h3><br/>
        <hr/>
        <div className="row">
           <div className="col-sm-4" >Street Name:</div>
           <div className="col-sm-8"> {this.props.rests.streetName}</div><br/>
        </div>
        <div className="row">
           <div className="col-sm-4" >Address:</div>
           <div className="col-sm-8"> {this.props.rests.address}</div><br/>
        </div>
        <div className="row">
           <div className="col-sm-4" >Phone:</div>
           <div className="col-sm-8"> {this.props.rests.phone}</div><br/>
        </div>
         <div className="row">
           <div className="col-sm-4" >Opening Time:</div>
           <div className="col-sm-8">{this.props.rests.otime}</div><br/>
        </div>
        <div className="row">
           <div className="col-sm-4" >Closing Time:</div>
           <div className="col-sm-8">{this.props.rests.ctime}</div><br/>
        </div>
        <div className="row">
           <div className="col-sm-4" >Home Page:</div>
           <div className="col-sm-8"><a href={this.props.rests.homePage} target="_blank">{this.props.rests.homePage}</a></div><br/>
        </div>
        <div className="row">
           <div className="col-sm-4" >Facebook:</div>
           <div className="col-sm-8"><a href={this.props.rests.faceBook} target="_blank"> {this.props.rests.faceBook}</a></div><br/>
        </div>
        <div className="row">
           <div className="col-sm-4" >Email:</div>
           <div className="col-sm-8">{this.props.rests.email}</div><br/>
        </div>
        <br/>

        <div id="map" ></div>
        <div id="right-panel">
          <div>
            <h2> {this.state.searching} </h2>
          </div>
          <div id="output"></div>
        </div>




    	</div>
    );
  }
}


export default Details;
