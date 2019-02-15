import React , {Component} from 'react'
import Footer from '../common/Footer'
import Post from '../Post/Post'
import HeaderFeed from '../common/HeaderFeed'
import '../common/Right-Left.css'

class Feed2 extends Components {
    render()
    {
        return (
            <div className="container">
            <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            
            <div className="row">
            <form method="post" action="">
                                      <label><b>Username:</b></label>
                                         <input type="text" placeholder="Username" />
                                         <input type="text" placeholder="Description" />
                                         <input type="file" name="pic" accept="image/*"/>
                                        <br />
                                         <button className="buttonhai">Upload</button>
                                     </form>
            </div>
            <div className="row">
            
            </div>
            
            
            
            </div>
            <div className="col-md-3"></div>
            </div>
            </div>
        )
    }
}
export default Feed2

