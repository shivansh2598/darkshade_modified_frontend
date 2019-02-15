import React , {Component} from 'react'
import Footer from '../common/Footer'
// import Post from '../Post/Post'
import HeaderFeed from '../common/HeaderFeed'
import '../common/Right-Left.css'
import '../../App.css';
import axios from 'axios';
import Displayfeed from './Displayfeed'


class Feed extends Component {
    constructor(props) {
		super(props);

		this.state = {
			imageURL: ''
		};

        this.handleUploadImage = this.handleUploadImage.bind(this);
        this.ref1=React.createRef();
        this.ref2=React.createRef();
        this.ref3=React.createRef();
	}
  
    handleUploadImage=(ev)=>{
		ev.preventDefault();
		const data = new FormData();
		data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);
        data.append('locality',this.ref2.current.value)
        data.append('description',this.ref1.current.value)
		axios.post('http://localhost:3000/users/upload',data,{
            headers:{
				'x-access-token':localStorage.getItem('token')
            },
            
        }).then((response) =>{
				this.setState({ imageURL: `http://localhost:3000/${response.data.file}` });
                console.log(JSON.stringify(response));
                window.location.reload(true);
                
			});
	}


    render(){
        return (
            <div>
            <HeaderFeed props={this.props}/>
             <div className="App"> 
				<h3 className="display-3">FileUpload</h3>
				<form onSubmit={this.handleUploadImage}>
					<div>
                        <center>
						<input
							ref={ref => {
								this.uploadInput = ref;
							}}
							type="file"
						/>
                        </center>
					</div>
					<br />
					<div>
						<input
                            style={{textAlign:'center'}}
								ref={ref => {
                                    this.fileName = ref;
                                }}
							type="text"
							placeholder="Enter the name of image"
						/>
					</div>
                    <br />
					<div>
						<input style={{width:'400px',textAlign:'center'}}
							ref={this.ref1}
							type="text"
							placeholder="Enter the description of image"
						/>
					</div>
					<br />
                    <div>
						<input
                        style={{textAlign:'center'}}
							ref={this.ref2}
							type="text"
							placeholder="Enter the location"
						/>
					</div>
					<br/>
					<div>
						<button className="btn btn-success">Upload</button>
					</div>
                    <hr/><hr/>
                    <hr/>

					<br/>
                    <p1>FEEDS</p1>
                    <center>
                    {/* <Post nickname="Chris" caption="Moving the community!" image={this.state.imageURL} /> */}
                    {/* <img style={{height:'400px', width:'800px'}} src={this.state.imageURL} alt="img" /> */}
                    <Displayfeed/>
                    </center>
				</form>
			</div>

            <Footer/>
            </div>
            
        )
    }
}

export default Feed