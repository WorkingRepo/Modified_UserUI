import React, { Component } from 'react';



  class Contact extends Component {

  render() {

  return(
  <div>
  <a  name="contact"></a>
    <footer>
        <div className="container">
            <div className="row">
            <br />
            <br />
            <br />
                <div className="col-lg-12">
                    <ul className="list-inline">
                        <li>
                            <a href="#top">Home</a>
                        </li>
                        <li className="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li className="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li className="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <p className="copyright text-muted small">Copyright &copy; Hunger Feed</p>
                </div>
            </div>
        </div>
    </footer>
 </div>


  );
 }
}

export default Contact;
