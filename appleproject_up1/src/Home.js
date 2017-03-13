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
      this.state={res:[], searching:'', rests:'',  laPos: ' ',  loPos: ' ', near: false,dist:5};


    }
    handlenear(dist)
    {
      this.setState({near:true});
      this.setState({searching:'Search Results'});

            fetch('http://localhost:9000/rests/nearby/'+ this.props.laPosition + '?lon=' + this.props.loPosition + '&dist=' +dist).then(response => response.json())
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
      ReactDOM.render(<NearDetails rests = {this.state.res[id]} laPos={this.props.laPosition} loPos={this.props.loPosition}/>,c);
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
      ReactDOM.render(<NearMapView res = {this.state.res} laPos={this.props.laPosition} loPos={this.props.loPosition}/>,c);

    }
  }


  //this.params.props.param_name

    propagateToParentRest(e){
           this.setState({
      searching: 'Search Results',
    });

            fetch('http://localhost:9000/rests/getbyname/'+search1.value).then(response => response.json())
              .then(( json ) => this.setState({res:json}))
              .catch(error => console.log(error));



        this.props.setParentState({ results: this.state.res });
      }
      propagateToParentAllRest(e){
             this.setState({
        searching: 'Search Results',
      });

              fetch('http://localhost:9000/rests').then(response => response.json())
                .then(( json ) => this.setState({res:json}))
                .catch(error => console.log(error));


          this.props.setParentState({ results: this.state.res });
        }
      propagateToParentStreet(e){
        this.setState({searching:'Search Results'});
              fetch('http://localhost:9000/rests/getbystname/'+ search1.value).then(response => response.json())
                .then(( json ) => this.setState({res:json}))
                .catch(error => console.log(error));

          this.props.setParentState({ results: this.state.res });
        }

        propagateToParentNearBy(e){
          this.setState({near:true});
          this.setState({searching:'Search Results'});

                fetch('http://localhost:9000/rests/nearby/'+ this.props.laPosition + '?lon=' + this.props.loPosition + '&dist=' +this.state.dist).then(response => response.json())
                  .then(( json ) => this.setState({res:json}))
                  .catch(error => console.log(error));

            this.props.setParentState({ results: this.state.res });
          }

        propagateToParentTimings(e){
          this.setState({searching:'Search Results'});
                fetch('http://localhost:9000/rests/getbyTime').then(response => response.json())
                  .then(( json ) => this.setState({res:json}))
                  .catch(error => console.log(error));


            this.props.setParentState({ results: this.state.res });
          }

          propagateToParentPopular(e){
            this.setState({searching:'Search Results'});
                  fetch('http://localhost:9000/rests/popular').then(response => response.json())
                    .then(( json ) => this.setState({res:json}))
                    .catch(error => console.log(error));


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
                                      <li><a href="#" onClick={this.propagateToParentTimings.bind(this)}>Timings</a></li>
                                      <li><a href="#" onClick={this.propagateToParentAllRest.bind(this)}>All Restaurants</a></li>
                                      <li><a href="#" onClick={this.propagateToParentPopular.bind(this)}>Popular</a></li>

                                      <li className="dropdown">
                                       <a className="dropdown-toggle" data-toggle="dropdown" href="#" >Near By<span className="caret"></span></a>
                                      <div className="dropdown-menu dropdown-content">
                                      <li><a href="#" onClick={() => this.handlenear(5)}>5km</a></li>
                                      <li><a href="#" onClick={() => this.handlenear(10)}>10km</a></li>
                                      <li><a href="#" onClick={() => this.handlenear(15)}>15km</a></li>
                                      <li><a href="#" onClick={() => this.handlenear(20)}>20km</a></li>
                                      </div>
                                      </li>
                                    </ul>
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
                        <button>
                            <a className="btn" href="#" onClick={this.propagateToParentTimings.bind(this)}>Timings</a>
                        </button>
                  </div>
              </div>
          </div>

      </div>
   </div>
  <div>
<h2>{this.state.searching}</h2>
<button className="AllMap" onClick={() => this.handleMaps()}>View On Map</button>
<div className = "blocks">

{
    this.state.res.map((ele,i)=> {
      return <div  key={i} className="container block">
                    <aside className="profile-card ">
                      <header>
                        <a href="#details">
                          <img src={ele.image} />
                        </a>
                        <h1>{ele.restName}</h1>
                      </header>
                      <div className="profile-bio">
                        <p>Address</p>
                        <p>{ele.address}</p>
                      </div>

                  </aside>
                    <button onClick={this.handleGo(i)}> View  Details </button>
              		</div>
          } ) }
        </div>
      </div>




      </div>
  );
 }
}









export default Home;
