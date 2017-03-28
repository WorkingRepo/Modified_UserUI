import React, { Component } from 'react';

import { Pagination } from 'react-bootstrap';

const PaginationBasic = React.createClass({
  getInitialState() {
    return {
      activePage: 1,
      rests:'Restaurant 1'
    };
  },

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });


    if(eventKey==2)
    {
      this.setState({
        rests:'Restaurant 2'
      });
    }
    if(eventKey==3)
    {
      this.setState({
        rests:'Restaurant 3'
      });
    }
    if(eventKey==4)
    {
      this.setState({
        rests:'Restaurant 4'
      });
    }
    if(eventKey==5)
    {
      this.setState({
        rests:'Restaurant 5'
      });
    }
    if(eventKey==6)
    {
      this.setState({
        rests:'Restaurant 6'
      });
    }
    if(eventKey==7)
    {
      this.setState({
        rests:'Restaurant 7'
      });
    }
    if(eventKey==8)
    {
      this.setState({
        rests:'Restaurant 8'
      });
    }
    if(eventKey==9)
    {
      this.setState({
        rests:'Restaurant 9'
      });
    }
    if(eventKey==10)
    {
      this.setState({
        rests:'Restaurant 10'
      });
    }


  },

  render() {
    return (
      <div>
        <h1>This is page number {this.state.activePage}</h1>
        <h2>Restaurants are:{this.state.rests}</h2>

        <Pagination
          bsSize="medium"
          items={10}
          activePage={this.state.activePage}
          onSelect={this.handleSelect} />
        <br />

  
      </div>
    );
  }
});
class Example extends Component {
  constructor() {
    // In a constructor, call `super` first if the class extends another class
    super();

  }


  render() {

    return (

      <div className="App">
      <PaginationBasic/>
      </div>
    );
  }
}

export default Example;
