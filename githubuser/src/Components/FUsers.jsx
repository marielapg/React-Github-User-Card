import React, {Component} from "react";
import axios from "axios";
import {Card,CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

class FUsers extends Component {
    constructor(props){
        super(props);
        this.state={
            fData:[]
        }
    }
    componentDidMount(){
        axios
        .get (this.props.userInfo.url)
        .then( results => {
            console.log(results)
            this.setState({ fData: results.data})
         })
         .catch(error => {
             console.log('Error from follower data', error)
         })

    }

    render(){
        return (
            <div>
                {console.log(this.props)}
                <Card>
                    <CardImg src={this.state.fData.avatar_url} />
                    <CardBody>
                        <CardTitle>{this.state.fData.name}</CardTitle>
                        <CardSubtitle>{`${this.state.fData.location === null ? "None" : this.state.fData.location}`}</CardSubtitle>
                        <CardText>
                            {`${this.state.fData.bio === null ? "None" : this.state.fData.bio}`}
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default FUsers;
    
