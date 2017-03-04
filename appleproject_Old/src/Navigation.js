import React, { Component } from 'react';



  class Navigation extends Component {

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
                    <a href="#top">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>

    </div>

 </nav>
 </div>


  );
 }
}

export default Navigation;
