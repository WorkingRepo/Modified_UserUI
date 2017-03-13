import React, { Component } from 'react';
import '../assets/css/main.css';

class MapView extends Component {
  constructor() {
    super();

  }
  componentDidMount(){
    var centers = [],i=0,markers = [],j=0;

        this.props.res.map((ele,j)=> {
             centers[j] = new google.maps.LatLng(ele.latitude,ele.longitude);

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
        var content = this.props.res[j].restName
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
      <div className="App">
      <div id="wrapper">

         <div id="main">
             <article  className="post">

                 <div  className="title">
                   <h2>Map View</h2>
                    <div id="map"></div>

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

                     return    <article  className="mini-post">

                                 <header>
                                  <h3><b>{ele.restName}{ele[3]}</b></h3><br/>
                                  <p><span><b>Address</b></span>&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;{ele.address}{ele[5]}</p>

                                 </header>
                               <img src={ele.image} className="img-responsive"/>
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

export default MapView;
