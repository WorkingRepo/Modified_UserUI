import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Link } from 'react-router'
import Details from './Details';
import  MapView from './MapView';
import DetailedStyle from './DetailedStyle';


  class PopularEx extends Component {

    constructor()
      {
        super();
        this.state={res:[], laPosition: '17.410777', loPosition: '78.398778',};

      }

    componentWillMount(){

      fetch('http://localhost:9000/rests/popular')
      .then(response => {
            if(200 == response.status){
              response.json().then((data)=>{
                this.setState({res:data});
                this.setState({popular : true});
              });
            }
          })
        .catch(error => console.log(error));


      }

      componentDidMount(){

        fetch('http://localhost:9000/rests/popular')
        .then(response => {
              if(200 == response.status){
                response.json().then((data)=>{
                  this.setState({res:data});
                  this.setState({popular : true});
                });
              }
            })
          .catch(error => console.log(error));


        }


        handleGo(id)
        {

          var c=document.getElementById("app");

          this.setState({rests : this.state.res[id]});

          ReactDOM.render(<DetailedStyle rests = {this.state.res[id]} laPos={this.state.laPosition} loPos={this.state.loPosition}/>,c);

        }


  render() {

  return(
    <div className="blockp">


    {
        this.state.res.map((ele,i)=> {


          return <div >

                  <div key={i} >

                  <div className="4u 12u(medium)">
                          <section className="box1 feature">
                                <img className="img-responsive image featured" src={ele.image} alt="" onClick={() => this.handleGo(i)}/>
                                  <center><h2>{ele.restName}</h2></center>
                                  <div className="inner">
                                  <p>  <b>Address:</b> {ele.address}</p>
                                  <p>  <b>Phone:</b> {ele.phone}</p>
                                  <p>  <b>Hours:</b> {ele.otime}-{ele.ctime}</p>
                                </div>
                          </section>
                    </div>

                  </div>
                </div>

            }
         )
       }

   </div>

  );
 }
}

export default PopularEx;
