import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import DetailedStyle from './DetailedStyle';
import NearDetails from './NearDetails';
import  NearMapView from './NearMapView';
import  MapView from './MapView';


  class Home extends Component {

    constructor()
    {
      super();
      this.state={res:[], searching:'', rests:'',  laPos: ' ',  loPos: ' ', near: false, dist:5};


    }
    locateme() {
        if (!navigator.geolocation){
          console.log("<p>Geolocation is not supported by your browser</p>");
          return;
        }
        console.log("Locating…");

        navigator.geolocation.getCurrentPosition((position) => {
          var latitude  = position.coords.latitude;
          var longitude = position.coords.longitude;
            this.props.setParentState({ laPosition: latitude });
            this.props.setParentState({loPosition:longitude});
          console.log('Latitude is ' + latitude + '°Longitude is ' + longitude + '°');
        },
        () => {
          console.log("Unable to retrieve your location");
        });
      }
    handlenear(d)
    {
      this.setState({near:true});
      this.setState({searching:'Search Results'});
      this.setState({dist:d});
            fetch('http://localhost:9000/rests/nearby/'+ this.props.laPosition + '?lon=' + this.props.loPosition + '&dist=' +d).then(response => response.json())
              .then(( json ) => this.setState({res:json}))
              .catch(error => console.log(error));

        this.props.setParentState({ results: this.state.res });
    }

  handleGo(id)
  {

    var c=document.getElementById("app");
  //  this.setState({rests : this.state.res[id]});
  //  ReactDOM.render(<DetailedStyle rests = {this.state.res[id]} laPos={this.props.laPosition} loPos={this.props.loPosition}/>,c);

    this.setState({rests : this.state.res[id]});
    if(false == this.state.near)
    {
      console.log(this.state.res[id]);
      ReactDOM.render(<DetailedStyle rests = {this.state.res[id]} laPos={this.props.laPosition} loPos={this.props.loPosition}/>,c);
    //  hashHistory.push('/Details/'+this.state.res[id]+this.props.laPosition+this.props.loPosition);

    }
    else {
      console.log(this.state.res[id]);
      console.log(this.state.res[id]);
      ReactDOM.render(<NearDetails rests = {this.state.res[id]} laPos={this.props.laPosition} loPos={this.props.loPosition} dist={this.state.dist}/>,c);
      //hashHistory.push('/Details/'+id+);

    }

  }

  handleMaps()
  {
    var c=document.getElementById("app");

    if(false == this.state.near){
          ReactDOM.render(<MapView res = {this.state.res} laPos={this.props.laPosition} loPos={this.props.loPosition}/>,c);
    }
    else{
      ReactDOM.render(<NearMapView res = {this.state.res} laPos={this.props.laPosition} loPos={this.props.loPosition} dist={this.state.dist}/>,c);

    }
  }


  //this.params.props.param_name

    propagateToParentRest(e){

             this.setState({near:false});
             var outputDiv = document.getElementById('outButton');

            fetch('http://localhost:9000/rests/getbyname/'+search1.value).then(response => response.json())
              .then(( json ) => this.setState({res:json}))
              .then(response => {
                  if(200 == response.status){
                    response.json().then((data) => {
                      if(null != data){
                        this.setState({ searching: 'Search Results' });
                      }
                      else{
                        this.setState({ searching: 'No Results Found' });
                      }
                    });
                  }
                })

              .catch(error => console.log(error));

              outputDiv.innerHTML = '<button >View On Map</button>';


        this.props.setParentState({ results: this.state.res });
      }
      propagateToParentAllRest(e){
             this.setState({ searching: 'Search Results'});
             this.setState({near:false});

              var outputDiv = document.getElementById('outButton');
              fetch('http://localhost:9000/rests').then(response => response.json())
                .then(( json ) => this.setState({res:json}))
                .catch(error => console.log(error));

                outputDiv.innerHTML = '<button >View On Map</button>';


          this.props.setParentState({ results: this.state.res });
        }
      propagateToParentStreet(e){
        this.setState({searching:'Search Results'});
          this.setState({near:false});
          var outputDiv = document.getElementById('outButton');

              fetch('http://localhost:9000/rests/getbystname/'+ search1.value).then(response => response.json())
                .then(( json ) => this.setState({res:json}))
                .catch(error => console.log(error));

                outputDiv.innerHTML = '<button >View On Map</button>';

          this.props.setParentState({ results: this.state.res });
        }

        propagateToParentTimings(e){
          this.setState({searching:'Search Results'});
            this.setState({near:false});
            var outputDiv = document.getElementById('outButton');

                fetch('http://localhost:9000/rests/getbyTime').then(response => response.json())
                  .then(( json ) => this.setState({res:json}))
                  .catch(error => console.log(error));

                  outputDiv.innerHTML = '<button >View On Map</button>';

            this.props.setParentState({ results: this.state.res });
          }

          propagateToParentCuisine(e){
            this.setState({searching:'Search Results'});
              this.setState({near:false});
              var outputDiv = document.getElementById('outButton');

                  fetch('http://localhost:9000/rests/getbycuisine/'+search1.value).then(response => response.json())
                    .then(( json ) => this.setState({res:json}))
                    .catch(error => console.log(error));

                    outputDiv.innerHTML = '<button >View On Map</button>';

              this.props.setParentState({ results: this.state.res });
            }
            propagateToParentVeg(e){
              this.setState({searching:'Search Results'});
                this.setState({near:false});
                var outputDiv = document.getElementById('outButton');

                    fetch('http://localhost:9000/rests/getbycuisine/'+"Veg").then(response => response.json())
                      .then(( json ) => this.setState({res:json}))
                      .catch(error => console.log(error));

                      outputDiv.innerHTML = '<button >View On Map</button>';

                this.props.setParentState({ results: this.state.res });
              }


          propagateToParentPopular(e){
            this.setState({searching:'Search Results'});
              this.setState({near:false});
              var outputDiv = document.getElementById('outButton');

                  fetch('http://localhost:9000/rests/popular').then(response => response.json())
                    .then(( json ) => this.setState({res:json}))
                    .catch(error => console.log(error));

                    outputDiv.innerHTML = '<button >View On Map</button>';

              this.props.setParentState({ results: this.state.res });
            }

            handlelow(){
              this.setState({searching:'Search Results'});
                this.setState({near:false});
                var outputDiv = document.getElementById('outButton');

                    fetch('http://localhost:9000/rests/getbylow').then(response => response.json())
                      .then(( json ) => this.setState({res:json}))
                      .catch(error => console.log(error));

                      outputDiv.innerHTML = '<button >View On Map</button>';

                this.props.setParentState({ results: this.state.res });
              }

              handlemoderate(){
                this.setState({searching:'Search Results'});
                  this.setState({near:false});
                  var outputDiv = document.getElementById('outButton');

                      fetch('http://localhost:9000/rests/getbymoderate').then(response => response.json())
                        .then(( json ) => this.setState({res:json}))
                        .catch(error => console.log(error));

                        outputDiv.innerHTML = '<button >View On Map</button>';

                  this.props.setParentState({ results: this.state.res });
                }

                handlehigh(){
                  this.setState({searching:'Search Results'});
                    this.setState({near:false});
                    var outputDiv = document.getElementById('outButton');

                        fetch('http://localhost:9000/rests/getbyhigh').then(response => response.json())
                          .then(( json ) => this.setState({res:json}))
                          .catch(error => console.log(error));
                          outputDiv.innerHTML = '<button >View On Map</button>';


                    this.props.setParentState({ results: this.state.res });
                  }


  render() {

  return(
  <div id="container1">
  <a name="top"></a>
  <div className="intro-header">
      <div className="container">

          <div className="row">
              <div className="col-lg-12">
                  <div className="intro-message">
                      <h2 className="top-title">Restaurant Finder</h2>
                      <h3>Best In City</h3>
                      <hr className="intro-divider"/>

                      <div className="input-group col-md-12">
                            <input id="search1" type="text" className="search-query form-control" placeholder="Search" />
                            <span className="input-group-btn">
                                 <div className="dropdown">
                                    <button  className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"  data-hover="dropdown">
                                    <span className=" glyphicon glyphicon-search"></span>  <span className="caret"></span> </button>
                                    <ul className="dropdown-menu">
                                      <li><a href="#" onClick={this.propagateToParentRest.bind(this)}>Restaurant Name</a></li>
                                      <li><a href="#" onClick={this.propagateToParentStreet.bind(this)}>Street Name</a></li>
                                      <li><a href="#" onClick={this.propagateToParentAllRest.bind(this)}>All Restaurants</a></li>
                                      <li><a href="#" onClick={this.propagateToParentCuisine.bind(this)}>Cuisine</a></li>
                                        <li><a href="#" onClick={this.propagateToParentVeg.bind(this)}>Veg Friendly</a></li>
                                    </ul>
                                    <button  className="btn btn-primary " type="button" onClick={this.locateme.bind(this)}>
                                   <i className="fa fa-location-arrow"></i> </button>
                                  </div>

                            </span>

                        </div><br />
                        <button className="btnstyles">
                              <div className="dropdown">
                                  <a className="btn dropdown-toggle" data-toggle="dropdown" href="#" >Near By &nbsp;<span className="fa fa-angle-down"></span></a>
                                        <div className="dropdown-menu dropdown-content">
                                            <li><a href="#" onClick={() => this.handlenear(5)}>5km</a></li>
                                            <li><a href="#" onClick={() => this.handlenear(10)}>10km</a></li>
                                            <li><a href="#" onClick={() => this.handlenear(15)}>15km</a></li>
                                            <li><a href="#" onClick={() => this.handlenear(20)}>20km</a></li>
                                        </div>
                                </div>
                        </button>

                        <button className="btnstyles">
                              <div className="dropdown">
                                  <a className="btn dropdown-toggle" data-toggle="dropdown" href="#" >Price per head &nbsp;<span className="fa fa-angle-down"></span></a>
                                        <div className="dropdown-menu dropdown-content">
                                            <li><a href="#" onClick={() => this.handlelow()}>Low&nbsp;(below 500)</a></li>
                                            <li><a href="#" onClick={() => this.handlemoderate()}>Moderate&nbsp;(500-1000)</a></li>
                                            <li><a href="#" onClick={() => this.handlehigh()}>Expensive&nbsp;(1000 and above)</a></li>
                                        </div>
                                </div>
                        </button>

                        <button>
                            <a className="btn" href="#" onClick={this.propagateToParentTimings.bind(this)}>Open Now</a>
                        </button>
                  </div>
              </div>
          </div>

      </div>
   </div>
  <div>
  <h2>{this.state.searching}</h2>
  <div id="outButton" className="AllMap" onClick={() => this.handleMaps()}>

  </div>
  <br/>
  <br /><br /><br />
  <div className= "block" >


{
    this.state.res.map((ele,i)=> {
      if(false == this.state.near){

      return <div className="card">

              <div key={i} className="container1" >

              				<div className="grid">
              					<figure className="effect-chico">
              						<img className="img-responsive" src={ele.image} />

              						<figcaption>
              							<h2><b> {ele.restName} {ele[3]}</b></h2>
                            <br/>

                          <p>  <a className="fa fa-home fa-3x" onClick={() => this.handleGo(i)} target="_blank">  </a><br /></p>
              						</figcaption>
              					</figure>
              				</div>

             <h3>{ele.restName}{ele[3]}</h3> <br/>
             <h5><b>Address</b>&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;{ele.address}{ele[5]}</h5><br />
             <h5><b>Price per Head</b>&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;{ele.cost}{ele[18]}</h5>
              <br/>
              </div>
            </div>
          }
        else{

                return <div className="card">

                        <div key={i} className="container1" >

                        				<div className="grid">
                        					<figure className="effect-chico">
                        						<img className="img-responsive" src={ele[12]}  />

                        						<figcaption>
                        							<h2><b> {ele.restName} {ele[3]}</b></h2>
                                      <br/>

                                    <p>  <a className="fa fa-home fa-3x"  onClick={() => this.handleGo(i)} target="_blank">  </a><br /></p>
                        						</figcaption>
                        					</figure>
                        				</div>

                       <h3>{ele.restName}{ele[3]}</h3> <br/>
                       <h5><b>Address</b>&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;{ele.address}{ele[5]}</h5><br />
                       <h5><b>Price per Head</b>&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;{ele.cost}{ele[18]}</h5>
                        <br/>
                        </div>
                      </div>
        }
      } )}
          </div>
        </div>


      </div>
  );
 }
}


  /* 221  <h6>{ele.open}{ele[17]}</h6>*/


export default Home;
