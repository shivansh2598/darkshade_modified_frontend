import React,{Component} from 'react';
import axios from 'axios';
// import {Link} from 'react-router-dom'
//import {axios} from 'axios'
 
class Header extends Component {
  
   constructor(props)
   {
     super(props);
     console.log(props);
     this.post=this.post.bind(this);
     this.ref1=React.createRef();
     this.ref2=React.createRef();
   }
    
   

  post=()=>
    {
      const statechange=this.props.statechange;
      console.log(statechange);
      // var x=1;

    //  console.log(this.ref1.current.value)
    //  console.log(this.ref2.current.value)

    //  const data = new FormData();
		// data.append('email', this.ref1.current.value);
		// data.append('password', this.ref2.current.value);
     
     axios.post("http://localhost:3000/api/auth/login",{
      email:this.ref1.current.value,
      password: this.ref2.current.value
     })
     .then(function(response)
     {
      //  console.log(response.data.value)
      localStorage.setItem('token', response.data.token);
      statechange(response.data.value)
     })
     .catch(function(err){
       console.log(err);
     })
  }


  post1=()=>
    {
      const statechange=this.props.statechange;
      console.log(statechange);
      // var x=1;

    //  console.log(this.ref1.current.value)
    //  console.log(this.ref2.current.value)

    //  const data = new FormData();
		// data.append('email', this.ref1.current.value);
		// data.append('password', this.ref2.current.value);
     
     axios.post("http://localhost:3000/api/auth/login1",{
      email:this.ref1.current.value,
      password: this.ref2.current.value
     })
     .then(function(response)
     {
      //  console.log(response.data.value)
      localStorage.setItem('token', response.data.token);
      statechange(response.data.value)
     })
     .catch(function(err){
       console.log(err);
     })
  }

  render()
  {
    return (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="/Users/shivamraj/Documents/React/hack-2/hack-2/src/components/Feed/Feed.js">DarkdShade</a>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      
      <li className="nav-item">
        <a className="nav-link" href="fb.com">Co-Founders</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input ref={this.ref1} className="form-control mr-sm-2" type="text" placeholder="Enter your Email" aria-label="Search" required={true}/>

      <input  ref={this.ref2} className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Search"  required={true}/>
    </form>
    <button style={{marginLeft:'10px'}} type="submit" onClick={this.post} className="btn btn-info">Log In User</button>
    <button type="submit" onClick={this.post1} className="btn btn-info">Log In NGO</button>
  </div>
</nav>
    );
  
  }


}
// headers:{
      //   'x-access-token':localStorage.getItem('token')
      // }

export default Header