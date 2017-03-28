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
                      <p className="desc-text">Restaurant is a place for simplicity. Good food, good beer, and good service. Simple is the name of the game, and we’re good at finding it in all the right places, even in your dining experience. Come join us and see what simplicity tastes like.</p>
                  </div>

                      <div className="img-section">

                      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                          <div className="hovereffect">
                              <img className="img-responsive" src="images/kabob.jpg" width="250" height="220" alt="" />
                              <div className="overlay">
                                 <h2>Hover effect 1</h2>
                                 <a className="info" href="#">link here</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                          <div className="hovereffect">
                              <img className="img-responsive" src="images/limes.jpg" width="250" height="220" alt="" />
                              <div className="overlay">
                                 <h2>Hover effect 1</h2>
                                 <a className="info" href="#">link here</a>
                              </div>
                          </div>
                      </div>

                         <div className="img-section-space"></div>
                         <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                             <div className="hovereffect">
                                 <img className="img-responsive"  src="images/radish.jpg" width="250" height="220" alt="" />
                                 <div className="overlay">
                                    <h2>Hover effect 1</h2>
                                    <a className="info" href="#">link here</a>
                                 </div>
                             </div>
                         </div>
                         <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                             <div className="hovereffect">
                                 <img className="img-responsive"  src="images/corn.jpg" width="250" height="220" alt="" />
                                 <div className="overlay">
                                    <h2>Hover effect 1</h2>
                                    <a className="info" href="#">link here</a>
                                 </div>
                             </div>
                         </div>


                  </div>
              </div>
 </div>




  );
 }
}

export default About;
