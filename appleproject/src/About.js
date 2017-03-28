import React, { Component } from 'react';



  class About extends Component {

  render() {

  return(
    <div>

    <a name="about"></a>
    <div className="text-content container">
    <div className="col-md-6">
        <h1>About us</h1>
        <div className="fa fa-cutlery fa-2x"></div>
        <p className="desc-text">Don’t worry about food as you can get all the information of the restaurants of your choice with this application</p>
    </div>
    <div className="col-md-6">
        <div className="img-section">
           <img src="images/kabob.jpg" width="250" height="220" />&nbsp;&nbsp;
           <img src="images/limes.jpg" width="250" height="220" />
           <div className="img-section-space"></div>
           <img src="images/radish.jpg"  width="250" height="220" />&nbsp;&nbsp;
           <img src="images/corn.jpg"  width="250" height="220" />
       </div>
    </div>
    </div>
    </div>




  );
 }
}

export default About;
