import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import App from './App';
import Home from './Home';
class Navigation1 extends Component {

  handleGo()
  {
  var c=document.getElementById("app");
  ReactDOM.render(<App />,c);
  }

  render() {

  return(
  <div>
    <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
    <div className="container topnav">

        <div className="navbar-header">

            <a className="navbar-brand topnav" href="#">Hunger Feed</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <button id="ex" onClick={()=>this.handleGo()}><h4>Home</h4></button>
                </li>
            </ul>
        </div>

    </div>

 </nav>
 </div>


  );
 }
}

export default Navigation1;
