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
        this.state={res:[],popadd:[],popname:[],popphone:[],popotime:[],popctime:[], popimage:[]};

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
                          this.state.popimage.push(ele.image)
                          this.state.popphone.push(ele.phone);
                          this.state.popotime.push(ele.otime);
                          this.state.popctime.push(ele.ctime);
                  } )
              });
            }
          })
        .catch(error => console.log(error));


      }
      componentDidMount(){
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
                            this.state.popimage.push(ele.image)
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


          <div id="features-wrapper">

              <div className="containerp">
              <h2 className="section-heading">Popular Restaurants</h2>
              <br/><br/>

                  <div className="rowp">

                      <div className="4u 12u(medium)">
                              <section className="box1 feature">
                                    <img className="img-responsive image featured" src={this.state.popimage[0]} alt=""  />
                                       <center><h2>{this.state.popname[0]}</h2></center>
                                      <div className="inner">
                											<p>  <b>Address:</b> {this.state.popadd[0]}</p>
                                      <p>  <b>Phone:</b> {this.state.popphone[0]}</p>
                                      <p>  <b>Hours:</b> {this.state.popotime[0]}-{this.state.popctime[0]}</p>
                										</div>
                							</section>
                        </div>



                        <div className="4u 12u(medium)">
                                <section className="box1 feature">
                                      <img className="img-responsive image featured" src={this.state.popimage[1]} alt="" />
                                        <center><h2>{this.state.popname[1]}</h2></center>
                                        <div className="inner">
                                        <p>  <b>Address:</b> {this.state.popadd[1]}</p>
                                        <p>  <b>Phone:</b> {this.state.popphone[1]}</p>
                                        <p>  <b>Hours:</b> {this.state.popotime[1]}-{this.state.popctime[1]}</p>
                                      </div>
                                </section>
                          </div>


                          <div className="4u 12u(medium)">
                                  <section className="box1 feature">
                                        <img className="img-responsive image featured" src={this.state.popimage[2]} alt="" />
                                        <center><h2>{this.state.popname[2]}</h2></center>
                                          <div className="inner">
                                          <p>  <b>Address:</b> {this.state.popadd[2]}</p>
                                          <p>  <b>Phone:</b> {this.state.popphone[2]}</p>
                                          <p>  <b>Hours:</b> {this.state.popotime[2]}-{this.state.popctime[2]}</p>
                                        </div>
                                  </section>
                            </div>
                      </div>

              <br/>

                  <div className="rowp">
                <div className="4u 12u(medium)">
                    <section className="box1 feature">
                          <img className="img-responsive image featured" src={this.state.popimage[3]} alt="" />
                          <center><h2>{this.state.popname[3]}</h2></center>
                            <div className="inner">
                            <p>  <b>Address:</b> {this.state.popadd[3]}</p>
                            <p>  <b>Phone:</b> {this.state.popphone[3]}</p>
                            <p>  <b>Hours:</b> {this.state.popotime[3]}-{this.state.popctime[3]}</p>
                          </div>
                    </section>
                </div>
                <div className="4u 12u(medium)">
                        <section className="box1 feature">
                              <img className="img-responsive image featured" src={this.state.popimage[4]} alt=""  />
                                <center><h2>{this.state.popname[4]}</h2></center>
                                <div className="inner">
                                <p>  <b>Address:</b> {this.state.popadd[4]}</p>
                                <p>  <b>Phone:</b> {this.state.popphone[4]}</p>
                                <p>  <b>Hours:</b> {this.state.popotime[4]}-{this.state.popctime[4]}</p>
                              </div>
                        </section>
                  </div>



                  <div className="4u 12u(medium)">
                          <section className="box1 feature">
                                <img className="img-responsive image featured" src={this.state.popimage[5]} alt=""  />
                                <center><h2>{this.state.popname[5]}</h2></center>
                                  <div className="inner">
                                  <p>  <b>Address:</b> {this.state.popadd[5]}</p>
                                  <p>  <b>Phone:</b> {this.state.popphone[5]}</p>
                                  <p>  <b>Hours:</b> {this.state.popotime[5]}-{this.state.popctime[5]}</p>
                                </div>
                          </section>
                    </div>
              </div>
          </div>
      </div>
   </div>

  );
 }
}

export default Popular;
