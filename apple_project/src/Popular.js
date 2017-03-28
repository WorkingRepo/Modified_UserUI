import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Link } from 'react-router'
import Details from './Details';
import  MapView from './MapView';

  class Popular extends Component {

    constructor()
      {
        super();
        this.state={res:[],popadd:[],popname:[],popphone:[],popotime:[],popctime:[]};

      }

    componentWillMount(){
      console.log("hiiiiiiii//////");

      fetch('http://localhost:9000/rests/popular')
      .then(response => {
            if(200 == response.status){
              response.json().then((data)=>{
                this.setState({res:data});
                this.setState({popular : true});
                          this.state.res.map((ele,i)=> {
                          this.state.popadd.push(ele.address);
                          this.state.popname.push(ele.restName);

                          this.state.popphone.push(ele.phone);
                          this.state.popotime.push(ele.otime);
                          this.state.popctime.push(ele.ctime);
                  } )
              });
            }
          })
        .catch(error => console.log(error));


      }


  render() {
    console.log(" popular    renderrrrrr ");

  return(
    <div>


          <div className="content-section-b">

              <div className="container">
                  <div className="row">
                      <h2 className="section-heading">Popular Restaurants<br/></h2>

                          <div className="col-6 col-lg-4 card1">


                                    <center><h4>{this.state.popname[0]}</h4></center>
                                    <div className="hovereffect1">
                                    <img className="img-responsive" src="images/barb.jpeg" alt="" width="300px" height="200px" />
                                    <div className="overlay">
                                        <h2>{this.state.popname[0]}</h2>
                                    </div>

                                    </div>
                                    <p className = "lead1">
                                    <div className="addr">
                                      <b>Address:</b> {this.state.popadd[0]}
                                    </div>
                                    <div className="phone">
                                        <i className="fa fa-phone fa-lg fa-spin" aria-hidden="true"></i>
                                        {this.state.popphone[0]}
                                    </div>
                                    <div className="hours"> <i className="fa faa-shake animated faa-parent animated-hover" aria-hidden="true"></i>
                                      <a href="http://facebook.com" className="icon-button facebook"><i className="fa fa-facebook" aria-hidden="true"></i><span></span></a>

                                      <b>Hours:</b> {this.state.popotime[0]}-{this.state.popctime[0]}
                                    </div>
                                    </p>
                                  </div>

                            <div className="col-6 col-lg-4 card1">

                                      <center><h4>{this.state.popname[1]}</h4></center>
                                      <div className="hovereffect1">
                                      <img className="img-responsive" src="images/barb.jpeg" alt="" width="300px" height="200px" />
                                      <div className="overlay">
                                          <h2>{this.state.popname[1]}</h2>

                                      </div>
                                      </div>
                                      <p className = "lead1">
                                      <div className="addr">
                                        <b>Address:</b> {this.state.popadd[1]}
                                      </div>
                                      <div className="phone">
                                        <b>Phone:</b> {this.state.popphone[1]}
                                      </div>
                                      <div className="hours">
                                        <b>Hours:</b> {this.state.popotime[1]}-{this.state.popctime[1]}
                                      </div>
                                      </p>
                              </div>

                              <div className="col-6 col-lg-4 card1">

                                        <center><h4>{this.state.popname[2]}</h4></center>
                                        <div className="hovereffect1">
                                        <img className="img-responsive" src="images/barb.jpeg" alt="" width="300px" height="200px" />
                                        <div className="overlay">
                                            <h2>{this.state.popname[2]}</h2>

                                        </div>
                                        </div>
                                        <p className = "lead1">
                                        <div className="addr">
                                          <b>Address:</b> {this.state.popadd[2]}
                                        </div>
                                        <div className="phone">
                                          <b>Phone:</b> {this.state.popphone[2]}
                                        </div>
                                        <div className="hours">
                                          <b>Hours:</b> {this.state.popotime[2]}-{this.state.popctime[2]}
                                        </div>
                                        </p>
                                </div>


                 </div>
                  <br/>
                 <div className="content-section-b">

                     <div className="container">
                         <div className="row">


                         <div className="col-6 col-lg-4 card1">

                                   <center><h4>{this.state.popname[3]}</h4></center>
                                   <div className="hovereffect1">
                                   <img className="img-responsive" src="images/barb.jpeg" alt="" width="300px" height="200px" />
                                   <div className="overlay">
                                       <h2>{this.state.popname[3]}</h2>

                                   </div>
                                   </div>
                                   <p className = "lead1">
                                   <div className="addr">
                                     <b>Address:</b> {this.state.popadd[3]}
                                   </div>
                                   <div className="phone">
                                     <b>Phone:</b> {this.state.popphone[3]}
                                   </div>
                                   <div className="hours">
                                     <b>Hours:</b> {this.state.popotime[3]}-{this.state.popctime[3]}
                                   </div>
                                   </p>
                           </div>
                           <div className="col-6 col-lg-4 card1">

                                     <center><h4>{this.state.popname[4]}</h4></center>
                                     <div className="hovereffect1">
                                     <img className="img-responsive" src="images/barb.jpeg" alt="" width="300px" height="200px" />
                                     <div className="overlay">
                                         <h2>{this.state.popname[4]}</h2>

                                     </div>
                                     </div>
                                     <p className = "lead1">
                                     <div className="addr">
                                       <b>Address:</b> {this.state.popadd[4]}
                                     </div>
                                     <div className="phone">
                                       <b>Phone:</b> {this.state.popphone[4]}
                                     </div>
                                     <div className="hours">
                                       <b>Hours:</b> {this.state.popotime[4]}-{this.state.popctime[4]}
                                     </div>
                                     </p>
                             </div>
                             <div className="col-6 col-lg-4 card1">

                                       <center><h4>{this.state.popname[5]}</h4></center>
                                        <div className="hovereffect1">
                                       <img className="img-responsive" src="images/barb.jpeg" alt="" width="300px" height="200px" />
                                       <div className="overlay">
                                           <h2>{this.state.popname[5]}</h2>

                                       </div>
                                       </div>
                                       <p className = "lead1">
                                       <div className="addr">
                                         <b>Address:</b> {this.state.popadd[5]}
                                       </div>
                                       <div className="phone">
                                         <b>Phone:</b> {this.state.popphone[5]}
                                       </div>
                                       <div className="hours">
                                         <b>Hours:</b> {this.state.popotime[5]}-{this.state.popctime[5]}
                                       </div>
                                       </p>
                               </div>
                         </div>
                    </div>
                 </div>

              </div>
            </div>

   </div>

  );
 }
}

export default Popular;
