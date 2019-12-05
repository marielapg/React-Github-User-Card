import React, {Component} from 'react';
import axios from 'axios';
import Followers from './Components/Followers';
import {Card,CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

class App extends Component {
    constructor(){
        super();
        this.state ={
            GitHub: null
        };
    }
    componentDidMount() {
        axios 
        .get ('https://api.github.com/users/marielapg')
        .then( results => {
            console.log(results.data)
            this.setState({GitHub: results.data})
        })
    }
    render(){
      const {GitHub} = this.state;
      
        return (
            <div className="AppF">
              {GitHub && <Card>
                <CardImg src={GitHub.avatar_url}/>
                <CardBody>
                        <CardTitle>{GitHub.login}</CardTitle>
                        <CardSubtitle>{GitHub.location}</CardSubtitle>
                        <CardText>{GitHub.bio}</CardText>
                    </CardBody>
                </Card>}
                <Followers/>
            </div>
        )
    }
}

export default App;