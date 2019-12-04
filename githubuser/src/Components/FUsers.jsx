import React, {Component} from "react";
import axios from "axios";
import { Card, Image} from "reactstrap";

class FUsers extends Component {
    constructor(){
        super();
        this.state={
            fData:[]
        }
    }
    componentDidMount(){
        axios
        .get (this.props.data.url)
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
                    <Image src={this.state.fData.avatar_url} />
                    <Card.Content>
                        <Card.Header>{this.state.fData.name}</Card.Header>
                        <Card.Meta>{`${this.state.fData.location === null ? "None" : this.state.fData.location}`}</Card.Meta>
                        <Card.Description>
                            {`${this.state.fData.bio === null ? "None" : this.state.fData.bio}`}
                        </Card.Description>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

export default FUsers;
    
