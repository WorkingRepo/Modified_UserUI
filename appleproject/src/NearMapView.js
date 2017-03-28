import React, { Component } from 'react';
import Map from 'google-maps-react'
import Home from './Home';
import Navigation1 from './Navigation1';
import NearDetails from './NearDetails';
import ReactDOM from 'react-dom';


var markers = [];
var infoWindow = [];
var centers = [],i=0,j=0,myCenter1, mapCanvas ,mapOptions,map,marker,infowindow,infowindow1;

class NearMapView extends Component {

  constructor(props) {
      super(props);
      this.state={searching:''};
 }

 componentDidMount(){

       this.props.res.map((ele,j)=> {
            centers[j] = new google.maps.LatLng(ele[2],ele[1]);
           }

        )


        for(i=0;i<this.props.res.length;i++){
            infoWindow[i] = new google.maps.InfoWindow();
        }
  myCenter1 = new google.maps.LatLng(this.props.laPos,this.props.loPos);
  mapCanvas = document.getElementById("map");
  mapOptions = {center: myCenter1, zoom: 12};
  map = new google.maps.Map(mapCanvas, mapOptions);
   for(i=0;i<this.props.res.length;i++)
   {
       markers[i] = new google.maps.Marker({position:centers[i],map:map});
   }

  marker = new google.maps.Marker({position:myCenter1 ,
                                      animation:google.maps.Animation.BOUNCE,
                                      icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                                    map:map});

console.log('hi'+  this.props.laPos  +'    '+  this.props.loPos );

   infowindow1 = new google.maps.InfoWindow({
     content: 'Your location'
     });
   infowindow1.open(map,marker);
     var infowindow = new google.maps.InfoWindow();
     for(j=0;j<this.props.res.length;j++)
     {
       var content = this.props.res[j][3];
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

   onMouseEnterHandler(i,name)
   {

     var content = name
     var mark = markers[i];
     var k;

     for(k=0;k<this.props.res.length;k++){
         infoWindow[k] = new google.maps.InfoWindow();
     }
            infoWindow[i].setContent(content);
            infoWindow[i].open(map, mark);


   }

     onMouseLeaveHandler(j) {

          infoWindow[j].close();

     }

     handleGo(ele)
     {

       var c=document.getElementById("app");
       console.log(this.props.dist);
       this.setState({rests : ele});

         ReactDOM.render(<NearDetails rests = {ele} laPos={this.props.laPos} loPos={this.props.loPos} dist={this.props.dist}/>,c);

     }



   render() {


     return (
       <div className="App">
       <Navigation1 />
       <div id="wrapper">

          <div id="main">
              <article  className="post">

                  <div  className="title">
                    <h2>Map View</h2>
                     <div id="map" className="marker"></div>

                  </div>
              </article>
          </div>


          <section id="sidebar">


              <section id="intro">

                <header>
                  <h2>List of Restaurants</h2>

                </header>
              </section>


              <section>
                <div  className="mini-posts">
                {
                    this.props.res.map((ele,i)=> {

                      return    <article  className="mini-post"  onMouseOver={()=>{this.onMouseEnterHandler(i,ele[3])}} onMouseOut={()=>{this.onMouseLeaveHandler(i)}} onClick={()=>this.handleGo(ele)}>

                                  <header>
                                   <h3><b>{ele.restName}{ele[3]}</b></h3><br/>
                                   <p><span><b>Address</b></span>&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;{ele.address}{ele[5]}</p>

                                  </header>
                                <img src={ele[12]} className="img-responsive"/>
                                  </article>


                          } )}



                </div>
              </section>

          </section>

      </div>

       </div>
     );
   }
 }

export default NearMapView;
