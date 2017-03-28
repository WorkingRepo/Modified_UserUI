import React, { Component } from 'react';
import Map from 'google-maps-react'
import './style.css';
import './font-awesome.css';
import './responsive.css';
import './animate.css';
import Navigation1 from './Navigation1';

 var num;
 var add, radd;
  class DetailedStyle extends Component {

    constructor(props) {
        super(props);
        this.state={searching:'',phone:'',rest:[]};

   }

    componentDidMount(){


                                      console.log(this.props.rests.email);
                                      var lat = this.props.rests.latitude;
                                      var lng = this.props.rests.longitude;
                                      var latlng = new google.maps.LatLng(lat, lng);
                                      var geocoder = geocoder = new google.maps.Geocoder();
                                       geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                                           if (status == google.maps.GeocoderStatus.OK) {
                                               if (results[1]) {
                                                   //this.setState({address:results[1].formatted_address});
                                                   radd = results[1].formatted_address;
                                                   radd.trim();
                                                   radd=radd.replace(/\s/g,'+');


                                               }
                                           }
                                       });
                                        console.log(radd);


      this.setState({searching: ' Results'});
      this.setState({phone: this.props.rests.phone});
      num=this.props.rests.phone;
      num=num.replace(/ /g,'');
      var myCenter = new google.maps.LatLng(this.props.rests.latitude,this.props.rests.longitude);
      var myCenter1 = new google.maps.LatLng(this.props.laPos,this.props.loPos);
      var mapCanvas = document.getElementById("map1");
      var mapOptions = {center: myCenter, zoom: 5};
      var map = new google.maps.Map(mapCanvas, mapOptions);
      var marker = new google.maps.Marker({position:myCenter});
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
              outputDiv1.innerHTML = '<h5>Distance from your location : '+results[j].distance.text+'</h5>';

              outputDiv2.innerHTML =
                      ' <h5>Duration :' + results[j].duration.text + '<br></h5>';
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
            fetch('http://localhost:9000/rests/getbypstname/'+this.props.rests.streetName).then(response => response.json())
              .then(( json ) => this.setState({rest:json}))
              .catch(error => console.log(error));




    }




    handleMode(){
      this.setState({searching: ' Results'});
      this.setState({phone: this.props.rests.phone});
      num=this.props.rests.phone;
      num=num.replace(/ /g,'')
      var myCenter = new google.maps.LatLng(this.props.rests.latitude,this.props.rests.longitude);
      var myCenter1 = new google.maps.LatLng(this.props.laPos,this.props.loPos);
      var mapCanvas = document.getElementById("map1");
      var mapOptions = {center: myCenter, zoom: 5};
      var map = new google.maps.Map(mapCanvas, mapOptions);
      var marker = new google.maps.Marker({position:myCenter });
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

      var selectedMode = document.getElementById('travelType').value;
      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers : true
      });

      directionsDisplay.setMap(map);
      var selectedMode = document.getElementById('travelType').value;
      directionsService.route({
          origin: myCenter1,
          destination: myCenter,
          travelMode: google.maps.TravelMode[selectedMode]
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
      });

      var service = new google.maps.DistanceMatrixService;
      service.getDistanceMatrix({
          origins: [myCenter1],
          destinations: [myCenter],
          travelMode: google.maps.TravelMode[selectedMode],
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
                outputDiv1.innerHTML = '<h5>Distance from your location : '+results[j].distance.text+'</h5>';

                outputDiv2.innerHTML =
                        ' <h5>Duration :' + results[j].duration.text + '<br></h5>';
              }
            }
          }
        });
      }


  render() {

    var sectionStyle = {

      backgroundImage:"url(" + this.props.rests.image + ") ",
      backgroundSize : 'cover'

    };
    return(
      <div>
      <Navigation1 />
      <header className="header" id="header" style={ sectionStyle }>
  	   <div className="container">
          <h2 className="animated fadeInDown delay-07s">{this.props.rests.restName}</h2>
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
                        <p>{this.props.rests.description}</p>
                  </div>
              </div>
              <div className="featured-box">
                	<div className="featured-box-col1  animated fadeInLeft delay-06s">
                    	<i className="fa-star"></i>
                    </div>
                	<div className="featured-box-col2 animated  fadeInLeft delay-06s">
                        <h3>highlights</h3>
                        <p>{this.props.rests.highlights}</p>
                    </div>
              </div>
                <div className="featured-box">
                	<div className="featured-box-col1 animated  fadeInLeft delay-09s">
                    	<i className="fa-cutlery"></i>
                    </div>
                	<div className="featured-box-col2  animated fadeInLeft delay-09s">
                        <h3>Cuisines</h3>
                        <p>{this.props.rests.cuisines}</p>
                    </div>
              </div>

              <div className="featured-box">
                <div className="featured-box-col1 animated  fadeInLeft delay-12s">
                    <i className="fa-inr"></i>
                  </div>
                <div className="featured-box-col2  animated fadeInLeft delay-12s">
                      <h3>Price per head</h3>
                      <p>{this.props.rests.cost}</p>
                  </div>
            </div>


              <ul className="social-link animated fadeInLeft delay-12s">

                    <li className="facebook"><a href={this.props.rests.faceBook} target="_blank"><i className="fa-facebook"></i></a></li>
                    <li className="gplus"><a href={"mailto:"+this.props.rests.email} target="_blank"><i className="fa-google-plus"></i></a></li>
                    <li className="home"><a href={this.props.rests.homePage} target="_blank"><i className="fa-home"></i></a></li>
                    <li className="phone"><a href={"tel:"+num} ><i className="fa-phone"></i></a></li>
              </ul>
            </div>



        	  <div className="col-lg-6 col-sm-6 animated fadeInRight featured-work">

            	<div className="featured-box">
                	<div className="featured-box-col1 animated fadeInRight delay-03s">
                    		<i className=" icon-map-marker"></i>
                    </div>
                	<div className="featured-box-col2 animated fadeInRight delay-03s">
                        <h3>Address</h3>
                        <p>{this.props.rests.address}</p>
                    </div>
              </div>
              <div className="featured-box">
                	<div className="featured-box-col1  animated fadeInRight delay-06s">
                    	<i className="fa-phone"></i>
                    </div>
                	<div className="featured-box-col2 animated  fadeInRight delay-06s">
                        <h3>Phone</h3>
                        <p>{this.props.rests.phone}</p>
                    </div>
              </div>
              <div className="featured-box">
                	<div className="featured-box-col1 animated  fadeInRight delay-09s">
                    	<i className="fa-pencil"></i>
                    </div>
                	<div className="featured-box-col2  animated fadeInRight delay-09s">
                        <h3>email</h3>
                        <p>{this.props.rests.email}</p>
                    </div>
              </div>
              <div className="featured-box">
                  <div className="featured-box-col1 animated  fadeInRight delay-12s">
                      <i className="fa-clock-o"></i>
                  </div>
                  <div className="featured-box-col2  animated fadeInRight delay-12s">
                        <h3>Hours</h3>
                        <p><strong>All Days:</strong> {this.props.rests.otime}-{this.props.rests.ctime}<br /> </p>
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
        <div id="map1" className="marker"> </div>    <br /><br />
        <center>
        <div id="travel_selector featured-box">
        <h3><strong>Mode of Travel: </strong>
          <select id="travelType" onChange={() => this.handleMode()}>
              <option value="DRIVING">Driving</option>
              <option value="WALKING">Walking</option>
              <option value="TRANSIT">Transit</option>
          </select>
        </h3>
        </div>
        </center>
        <br /><br />

    </section>








        <section className="main-section alabaster" id="service">
    	   <div className="container">
        	 <div className="row">
    			    <div className="col-lg-6 col-sm-6 animated fadeInLeft featured-work">

                  <div className="featured-box">
                    	<div className="featured-box-col1 animated fadeInLeft delay-03s">
                        		<i className="fa-car "></i>
                      </div>
                    	<div className="featured-box-col2 animated fadeInLeft delay-03s" id="output1">

                      </div>
                  </div>
                  <div className="featured-box">
                    <div className="featured-box-col1  animated fadeInRight delay-12s">
                      <i className=" fa-clock-o "></i>
                    </div>
                    <div className="featured-box-col2 animated  fadeInRight delay-12s" id="output2">
                    </div>
                  </div>
                </div>




            	  <div className="col-lg-6 col-sm-6 animated fadeInRight featured-work">

                  <br /><br />
                  <div className="featured-box">
                    <div className="featured-box-col1  animated fadeInRight ">
                      <i className=" fa-share-square-o"></i>
                    </div>
                    <div className="featured-box-col2 animated  fadeInRight">
                    <a className="link" href={"mailto:"+"?subject=Directions&body=http://maps.google.com/maps?daddr="+radd} target="_blank">Share Directions</a>

                    </div>
                  </div>
                </div>


                </div>
              </div>
          </section>






    <section className="main-section client-part" id="client">
    	<div className="container">
    		<b className="quote-right wow fadeInDown delay-03"><i className="fa-quote-right"></i></b>
        	<div className="row">
            	<div className="col-lg-12">
                	<p className="client-part-haead animated fadeInDown delay-15">Popular In this Street</p>
                </div>
            </div>

        </div>
    </section>












      <section className="main-section paddind" id="Portfolio">

          <div className="portfolioContainer">


                    {
                     this.state.rest.map((ele,i)=> {

                       return <div className="suggestions">

                               <div key={i} className="container" >
                                  <center>
                                    <a href={ele.homePage} target="_blank"> {ele.restName} </a>
                                  </center>
                             </div>
                             </div>
                       } )}



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

export default DetailedStyle;
