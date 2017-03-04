import React, { Component } from 'react';
import Map from 'google-maps-react'
import Home from './Home';
import Navigation1 from './Navigation1';
class NearMapView extends Component {

  constructor(props) {
      super(props);
      this.state={searching:''};


      this.getMap=this.getMap.bind(this);
 }

 getMap(){
   var centers = [],i=0,markers = [],j=0;

       this.props.res.map((ele,j)=> {
            centers[j] = new google.maps.LatLng(ele[2],ele[1]);
           }

        )
  
        var infoWindow = [];
        for(i=0;i<this.props.res.length;i++){
            infoWindow[i] = new google.maps.InfoWindow();
        }
 var myCenter1 = new google.maps.LatLng(this.props.laPos,this.props.loPos);
 var mapCanvas = document.getElementById("map");
 var mapOptions = {center: myCenter1, zoom: 12};
 var map = new google.maps.Map(mapCanvas, mapOptions);
   for(i=0;i<this.props.res.length;i++)
   {
       markers[i] = new google.maps.Marker({position:centers[i],map:map});
   }

 var marker = new google.maps.Marker({position:myCenter1 ,
                                      animation:google.maps.Animation.BOUNCE,
                                      icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                                    map:map});

console.log('hi'+  this.props.laPos  +'    '+  this.props.loPos );

  var infowindow1 = new google.maps.InfoWindow({
     content: 'Your location'
     });
   infowindow1.open(map,marker);
     var infowindow = new google.maps.InfoWindow();
     for(j=0;j<this.props.res.length;j++)
     {
       var content = this.props.res[j][3];
       console.log(this.props.res[j][3]);
       var mark = markers[j];
       google.maps.event.addListener(markers[j], 'mouseover', (function(mark, j,content )  {
          return function()  {
              infoWindow[j].setContent(content);
              infoWindow[j].open(map, mark);
          }
      })(mark, j, content));
      google.maps.event.addListener(markers[j], 'mouseout', (function(mark, j,content )  {
         return function()  {
              infoWindow[j].close();
         }
     })(mark, j, content));
   }
 }

  render() {
    return (
      <div>
        <Navigation1 />
        <br/>
        <br/>
        <br/>
          <button onClick={()=>this.getMap()}>get map</button>
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


export default NearMapView;
