import React, {Component} from 'react';
import {Link} from 'react-router'
import {Footer} from 'react-materialize';



class Footer1 extends Component{
  render(){
return (
<div>

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
                    <li >
                    <div id="twitter-circle" className="row">
                      <div className="col-xs-6">
                        <div id="tw-3" className="tw-outside">
                          <div className="tw-text"><span className="fa fa-twitter"></span></div>
                          <div className="tw-click">
                          <a href="https://twitter.com/scotch_io" className="twitter-follow-button" data-show-count="false">Follow @scotch_io</a>
                          </div>
                      </div>
                    </div>
                  </div>
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
export default Footer1;
