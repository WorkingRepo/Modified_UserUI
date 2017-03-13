import React, { Component } from 'react';
import Map from 'google-maps-react'
import Home from './Home';
import Navigation1 from './Navigation1';
import './style.css';
import './font-awesome.css';
import './responsive.css';
import './animate.css';

class NearDetails extends Component {

  constructor(props) {
      super(props);
      this.state={searching:''};

 }

 componentDidMount(){

   this.setState({searching: ' Results'});

 var myCenter = new google.maps.LatLng(this.props.rests[2],this.props.rests[1]);
 var myCenter1 = new google.maps.LatLng(this.props.laPos,this.props.loPos);
 var mapCanvas = document.getElementById("map1");
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
    content: this.props.rests[3]
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
       var outputDiv1 = document.getElementById('output1');
       var outputDiv2 = document.getElementById('output2');
       outputDiv1.innerHTML = '';
         outputDiv2.innerHTML = '';
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
           outputDiv1.innerHTML += '<h3>Distance from your location : '+results[j].distance.text+'</h3>';

               outputDiv2.innerHTML +=
                   ' <h3>Duration :' + results[j].duration.text + '<br></h3>';
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
    var sectionStyle = {

      backgroundImage:"url(" + this.props.rests.image + ") ",
      backgroundSize : 'cover'

    };

    return (
      <div>
        <Navigation1 />
        <br/>

        <header className="header" id="header" style={ sectionStyle }>
          <div className="container">
                <h2 className="animated fadeInDown delay-07s">{this.props.rests[3]}</h2>
                <ul className="we-create animated fadeInUp delay-1s">
                  <li>Explore the restaurant</li>
                </ul>
                    <a className="link animated fadeInUp delay-1s " href="#service">Get Started</a>
            </div>
        </header>


        <section className="main-section alabaster" id="service">
        <div className="container">
            <div className="row">
            <div className="col-lg-6 col-sm-6 animated fadeInLeft featured-work">

                    <div className="featured-box">
                        <div className="featured-box-col1 animated fadeInLeft delay-03s">
                              <i className="fa-info-circle"></i>
                          </div>
                        <div className="featured-box-col2 animated fadeInLeft delay-03s">
                              <h3>description</h3>
                              <p>{this.props.rests[14]}</p>
                          </div>
                      </div>
                      <div className="featured-box">
                        <div className="featured-box-col1  animated fadeInLeft delay-06s">
                            <i className="fa-star"></i>
                          </div>
                        <div className="featured-box-col2 animated  fadeInLeft delay-06s">
                              <h3>highlights</h3>
                              <p>{this.props.rests[15]}</p>
                          </div>
                      </div>
                      <div className="featured-box">
                        <div className="featured-box-col1 animated  fadeInLeft delay-09s">
                            <i className="fa-cutlery"></i>
                          </div>
                        <div className="featured-box-col2  animated fadeInLeft delay-09s">
                              <h3>Cuisines</h3>
                              <p>{this.props.rests[16]}</p>
                          </div>
                      </div>
                      <ul className="social-link animated fadeInLeft delay-12s">

                          <li className="facebook"><a href={this.props.rests[9]} target="_blank"><i className="fa-facebook"></i></a></li>
                          <li className="gplus"><a href={"mailto:"+this.props.rests[7]} target="_blank"><i className="fa-google-plus"></i></a></li>
                          <li className="home"><a href={this.props.rests[8]} target="_blank"><i className="fa-home"></i></a></li>


                      </ul>
            </div>



                <div className="col-lg-6 col-sm-6 animated fadeInRight featured-work">

                    <div className="featured-box">
                        <div className="featured-box-col1 animated fadeInRight delay-03s">
                              <i className=" icon-map-marker"></i>
                          </div>
                        <div className="featured-box-col2 animated fadeInRight delay-03s">
                              <h3>Address</h3>
                              <p>{this.props.rests[5]}</p>
                          </div>
                      </div>
                      <div className="featured-box">
                        <div className="featured-box-col1  animated fadeInRight delay-06s">
                            <i className="fa-phone"></i>
                          </div>
                        <div className="featured-box-col2 animated  fadeInRight delay-06s">
                              <h3>Phone</h3>
                              <p>{this.props.rests[6]}</p>
                          </div>
                      </div>
                      <div className="featured-box">
                        <div className="featured-box-col1 animated  fadeInRight delay-09s">
                            <i className="fa-pencil"></i>
                          </div>
                        <div className="featured-box-col2  animated fadeInRight delay-09s">
                              <h3>email</h3>
                              <p>{this.props.rests[7]}</p>
                          </div>
                      </div>
                      <div className="featured-box">
                        <div className="featured-box-col1 animated  fadeInRight delay-12s">
                            <i className="fa-clock-o"></i>
                        </div>
                        <div className="featured-box-col2  animated fadeInRight delay-12s">
                              <h3>Hours</h3>
                              <p><strong>All Days:</strong> {this.props.rests[10]}-{this.props.rests[11]}<br /> </p>
                          </div>
                      </div>


                  </div>
              </div>
        </div>
        </section>





        <section className="business-talking">
        <div className="container">
              <h2>Locate Us</h2>
          </div>
        </section>

          <section >
            <div id="map1" ></div>

            <br /><br />
            <div className="featured-box">
              <div className="featured-box-col1  animated fadeInRight delay-10s">
                  <i className=" fa-car "></i>
                </div>
              <div className="featured-box-col2 animated  fadeInRight delay-10s" id="output1">
                </div>
              </div>
              <div className="featured-box">
                <div className="featured-box-col1  animated fadeInRight delay-12s">
                    <i className=" fa-clock-o "></i>
                  </div>
                <div className="featured-box-col2 animated  fadeInRight delay-12s" id="output2">
                  </div>
            </div>
          </section>

        <footer className="footer">
          <div className="container">
              <div className="footer-logo"><a href="#"><img src="/src/img/footer-logo.png" alt="" /></a></div>
              <span className="copyright">&copy; ATAK. All Rights Reserved</span>
          </div>
        </footer>



        </div>


        );
        }
        }


export default NearDetails;
