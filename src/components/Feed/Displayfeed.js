import React, { Component } from 'react';
import axios from 'axios';
import Post from '../Post/Post'

class Displayfeed extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            dd: 0,
            pp:0,
            qq:0
        }
        this.getlist=this.getlist.bind(this)
        this.getlist1=this.getlist1.bind(this)
        this.getlist2=this.getlist2.bind(this)
    }

    componentDidMount() {
        this.getlist();
    }

    getlist() {
        const data = new FormData();
		data.append('distance',10);
        axios.get('http://localhost:3000/api/auth/me', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'distance':10
            }
        })
            .then((response) => {
                console.log(response.data)
                // console.log(response.data.length)
                this.setState({
                    list: response.data
                }, () => {
                    this.setState({
                        dd: 1,
                        qq:0,
                        pp:0
                    })
                })
            })
            .catch((err) => {
                console.log("error in getlist")
            })
    }

    getlist1() {
        axios.get('http://localhost:3000/api/auth/me', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'distance':100
            },
        })
            .then((response) => {
                console.log(response.data)
                console.log(response.data.length)
                this.setState({
                    list: response.data
                }, () => {
                    this.setState({
                        pp: 1,
                        dd:0,
                        qq:0
                    })
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    getlist2() {
        axios.get('http://localhost:3000/api/auth/me', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'distance':100000
            },
        })
            .then((response) => {
                console.log(response.data)
                console.log(response.data.length)
                this.setState({
                    list: response.data
                }, () => {
                    this.setState({
                        qq: 1,
                        dd:0,
                        pp:0
                    })
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

a = () => {
    let list1 = [];
    for (let i in this.state.list) {
        list1.push(
            <Post nickname={`${this.state.list[i].image_name}`} caption={`${this.state.list[i].description}`} image={`http://localhost:3000/${this.state.list[i].image_url}`} likes={`${this.state.list[i].likes}`} buttonstate={`${this.state.list[i].button}`}/>
        )

    }


    return list1;
}


render(){
    if (this.state.dd === 1&&this.state.pp===0&&this.state.qq===0) {
        return (
            <div>
                <button onClick={this.getlist1}>fetch feeds within 100km</button>
                <button onClick={this.getlist2}>fetch all feed</button>
                {this.a()}
            </div>
        )
    }
    else if (this.state.dd === 0&&this.state.pp===1&&this.state.qq===0) {
        return (
            <div>
                <button onClick={this.getlist}>fetch feeds within 10kms</button>
                <button onClick={this.getlist2}>fetch all feed</button>
                {this.a()}
            </div>
        )
    }
    else if (this.state.dd === 0&&this.state.pp===0&&this.state.qq===1) {
        return (
            <div>
                <button onClick={this.getlist}>fetch feeds within 10kms</button>
                <button onClick={this.getlist1}>fetch feeds within 100kms</button>
                {this.a()}
            </div>
        )
    }
    else if (this.state.dd === 0&&this.state.pp===0&&this.state.qq===0) {
        return (
            <div>
            </div>
        )
    }
}
}

export default Displayfeed