import React, { Component } from "react";
import './Post.css'
import Axios from "axios";
class Post extends Component {
    constructor(props){
        super(props)
        const{likes}=props
        // const{buttonstate}=props
        console.log("buutonste",props)
        this.state={
          likes,
          // button:buttonstate
        }
        this.update=this.update.bind(this)
        this.check=this.check.bind(this)
        // this.ref1=React.createRef();
    }


    update()
    {
      // this.btn.setAttribute(this.state.button, this.state.button)
        Axios.patch('http://localhost:3000/users/change',{
          image:this.props.nickname
        })
        .then((response)=>{
          console.log(response.data.likes)
          this.setState({
            likes:response.data.likes,
            // button:response.data.status
          })
        })
        .catch((err)=>{
          console.log(err)
        })
    }

    check()
    {
      this.btn.setAttribute(this.state.button, this.state.button)
    }

  render() {
    const nickname = this.props.nickname;
    // const avatar = this.props.avatar;
    const image = this.props.image;
    const caption = this.props.caption;
    console.log(this.state.button)
    var bstatus=this.state.button
    console.log(typeof(bstatus))
   

    return (

      <div>
        <article className="Post" ref="Post">
        <header>
          <div className="Post-user">
           
            <div className="Post-user-nickname">
            <span>{nickname}</span>
            </div>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg">
          <img style={{height:'400px', width:'600px'}} alt={caption} src={image} />
          </div>
        </div>
        <div className="Post-caption">
            <strong>{caption}</strong>
            <br/>
            <div className="likes">
            <strong>{this.state.likes}</strong>
            </div>
            <button ref={btn => { this.btn = btn; }} onClick={this.update} onMouseEnter={this.check} className="btn btn-primary">+1</button>
        </div>
      </article>
      </div>
    );
  }
}
    export default Post;