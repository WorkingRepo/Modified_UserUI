import React, { Component } from 'react';



  class Suggestions extends Component {

    handleAdd()
      {
        fetch('http://localhost:9000/suggest',
          {
            headers :{
              "Content-Type" : "application/json"
            },
          method: "POST",
           body: JSON.stringify({
                                    "address": addr.value,
                                    "rname": rname.value
                                })
         })
      .then(function (data) {
          console.log('Request success: ', data);
      })
      .catch(function (error) {
          console.log('Request failure: ', error);
      });

  }


  render() {

  return(
    <div>

    <a name="suggest"></a>

    <div className="container">

      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">


          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Suggest a restaurant</h4>
            </div>
            <div className="modal-body">
              <div className="row">
                 <div className="col-md-4"> Restaurant Name:</div>
                 <div className="col-md-8"><textarea name="address" cols="30" rows="1" id="address" placeholder="Restaurant Name" id="rname" required></textarea></div>
              </div>
              <br/>
              <div className="row">
               <div className="col-md-4"> Address:</div>
                <div className="col-md-8"><textarea name="address" cols="30" rows="5" id="address" placeholder="Address" id="addr" required></textarea></div>
               </div><br/>
               <button type="button" className="btn btn-default" onClick={this.handleAdd.bind(this)} data-dismiss="modal">Submit</button>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>

        </div>
      </div>

    </div>

    </div>




  );
 }
}

export default Suggestions;
