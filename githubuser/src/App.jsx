import React, {Component} from 'react';
import axios from 'axios';
import Followers from "./Components/Followers";
import {Card, Image} from "reactstrap";

class App extends Component {
    constructor(){
        super();
        this.state ={
            GitHub:[]
        };
    }
    componentDidMount() {
        axios 
        .get ('https://api.github.com/users/marielapg')
        .then( results => {
            console.log(results)
            this.setState({GitHub: results.github})
        })
    }
    render(){
        return (
            <div className="App">
                <Card>
                    <Image src={this.state.GitHub.avatar_url}/>
                    <Card.Info>
                        <Card.Header>{this.state.GitHub.username}</Card.Header>
                        <Card.Meta>{this.state.GitHub.location}</Card.Meta>
                        <Card.Description>{this.state.GitHub.bio}</Card.Description>
                    </Card.Info>
                </Card>
                <Followers/>
            </div>
        )
    }
}

export default App;