import React,{Component} from 'react'





class SignUpNGO extends Component {
  // constructor(props){
  //   super(props)
  // }
    
    render()
    {
        return (
          <>
            <form className="needs-validation" method="POST" action="http://localhost:3000/api/auth/register1" >
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label >NGO Name</label>
      <input type="text" className="form-control" placeholder="Pratsy" name="ngo_name" required />
      <div className="valid-feedback">
        Looks good!
      </div>
      
    </div>
    </div>
    <div className="form-row">
    <div className="col-md-6 mb-3">
      <label >NGO ID</label>
      <input type="text" name="username" className="form-control" placeholder="ngo_id" required />
      <div className="valid-feedback">
        Looks good!
      </div>
      
    </div>
    </div>



    <div className="form-row">
    <div className="col-md-6 mb-3">
      
        <label >Email</label>
        <input type="text" name="email" className="form-control" placeholder="name@example.com" aria-describedby="inputGroupPrepend" required />
        <div className="invalid-feedback">
          Please choose a username.
        </div>
      
    </div>
    </div>

    <div className="form-row">
    <div className="col-md-6 mb-3">
      <label >Password</label>
      <input type="password" name="password" className="form-control" placeholder="Password"  required />
      <div className="valid-feedback">
        Looks good!
      </div>
      
    </div>
    </div>


    <div className="form-row">
    <div className="col-md-6 mb-3">
      <label >Confirm Password</label>
      <input type="password" name="passwordconf" className="form-control" placeholder="Password"  required />
      <div className="valid-feedback">
        Looks good!
      </div>
      
    </div>
    </div>






  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label >Full Address</label>
      <input type="text" name="locality" className="form-control" placeholder="Enter Your Full Address" required />
      <div className="invalid-feedback">
        Please provide a valid city.
      </div>
      
    </div>
    <div>
    <div className="form-row">
    <div className="col-md-6 mb-3">
      <label >Postal Code</label>
      <input name="postal_code" type="text" className="form-control" placeholder="Postal code" required />
      {/* <div className="invalid-feedback">
        Please provide a valid state.
      </div> */}
    </div>
    </div>
    </div>
   
  </div>
  {/* <div className="form-row">
    <div className="col-md-4 mb-3">
      <label >ADDRESS</label>
      <input type="textarea" className="form-control" id="validationCustom02" placeholder="Enter Full Address"  required />
      <div className="valid-feedback">
        Looks good!
      </div>
      
    </div>
    </div> */}

<div className="form-row">
    <div className="col-md-6 mb-3">
      <label >Contact No</label>
      <input  name="contact_no" type="number" className="form-control" placeholder="1234567890" required />
      <div className="invalid-feedback">
        Please provide a valid city.
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
    
  </div>
  
  <button className="btn btn-primary" type="submit">Submit form</button>
  </form>
  <br />
  <br/>
  {/* <button className="btn btn-danger " onClick={()=>this.props.onchagnehandler}>LogIn as a User</button> */}
        </>

        );
    }
}
export default SignUpNGO;