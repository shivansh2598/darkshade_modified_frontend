import React,{Component} from 'react'





class SignUpUSER extends Component {
  // constructor(props){
  //   super(props)
  // }
    
    render()
    {
        return (
          <>
            <form className="needs-validation"  method="POST" action="http://localhost:3000/api/auth/register">



  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label>Name</label>
      <input name="name" type="text" className="form-control" id="validationCustom01" placeholder="First name" required />
      <div className="valid-feedback">
        Looks good!
      </div>
      
    </div>
    </div>




    <div className="form-row">
    <div className="col-md-6 mb-3">
      <label>Username</label>
      <input  name="username" type="text" className="form-control" id="validationCustom02" placeholder="Username"  required />
      <div className="valid-feedback">
        Looks good!
      </div>
      
    </div>
    </div>



     
      <div className="form-row">
    <div className="col-md-6 mb-3">
      <label>Email</label>
      <input name="email" type="text" className="form-control" placeholder="name@example.com" required />
      <div className="invalid-feedback">
        Provide a valid email address
      </div>
      </div>
      </div>

      <div className="form-row">
    <div className="col-md-6 mb-3">
      <label>Password</label>
      <input name="password" type="password" className="form-control" placeholder="Password"  required />
      <div className="valid-feedback">
        Looks good!
      </div>
      
    </div>
    </div>


    <div className="form-row">
    <div className="col-md-6 mb-3">
      <label>Confirm Password</label>
      <input name="passwordconf" type="password" className="form-control" placeholder="Password"  required />
      <div className="valid-feedback">
        Looks good!
      </div>
      
    </div>
    </div>

    <div className="form-row">
    <div className="col-md-6 mb-3">
      <label>Contact No</label>
      <input name="contact_no" type="number" className="form-control" placeholder="1234567890" required />
      <div className="invalid-feedback">
        Please provide a valid city.
      </div>
      
    </div>
    </div>

    
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label>Full address</label>
      <input name="locality" type="text" className="form-control"  placeholder="Enter Your Full Address" required />
      <div className="invalid-feedback">
        Please provide a valid city.
      </div>
      
    </div>
    <div className="form-row">
    <div className="col-md-6 mb-3">
      <label>Postal Code</label>
      <input name="postal_code" type="text" className="form-control" placeholder="835215" required />
      <div className="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    </div>
    
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label className="form-check-label">
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
  {/* <button className="btn btn-danger" onClick={()=>this.props.onchagnehandler}>NGO logIn</button> */}
            
</>
        );
        }

      
      }
      export default SignUpUSER;