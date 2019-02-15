import React,{Component} from 'react'





class FileUpload extends Component {
  constructor(props){
    super(props)
  }
    
    render()
    {
        return (
          <>
            <form className="needs-validation"  novalidate>



  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationCustom01">Name</label>
      <input type="text" className="form-control" id="validationCustom01" placeholder="First name" required />
      <div className="valid-feedback">
        Looks good!
      </div>
      
    </div>
    </div>




    <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationCustom02">Username</label>
      <input type="text" className="form-control" id="validationCustom02" placeholder="Username"  required />
      <div className="valid-feedback">
        Looks good!
      </div>
      
    </div>
    </div>



     
      <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationCustom02">Email</label>
      <input type="text" className="form-control" id="validationCustom03" placeholder="name@example.com" required />
      <div className="invalid-feedback">
        Provide a valid email address
      </div>
      </div>
      </div>

      <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationCustom02">Password</label>
      <input type="password" className="form-control" id="validationCustom03" placeholder="Password"  required />
      <div className="valid-feedback">
        Looks good!
      </div>
      
    </div>
    </div>


    <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationCustom02">Confirm Password</label>
      <input type="password" className="form-control" id="validationCustom03" placeholder="Password"  required />
      <div className="valid-feedback">
        Looks good!
      </div>
      
    </div>
    </div>

    
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationCustom03">Locality/Society</label>
      <input type="text" className="form-control" id="validationCustom03" placeholder="Ragvillas Society" required />
      <div className="invalid-feedback">
        Please provide a valid city.
      </div>
      
    </div>
    <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationCustom04">Postal Code</label>
      <input type="text" className="form-control" id="validationCustom03" placeholder="835215" required />
      <div className="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    </div>
    
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
    <br />
  </div>
  <button className="btn btn-primary" type="submit">Submit form</button>
  </form>
  <br />
  <br />
  <button className="btn btn-danger" onClick={()=>this.props.onchagnehandler}>NGO logIn</button>
            
</>
        );
        }

      
      }
      export default FileUpload