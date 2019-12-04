import React, {Component} from 'react';
import axios from 'axios';
import FUsers from "./FUsers";

class Followers extends Component{
    constructor(props)
        super(props);
        this.state = {
        FollowersInfo:[]
    };
    
    componentDidMount(){
        axios
        .get ('https://api.github.com/users/marielapg/followers')
        .then( results => {
            console.log(results)
            this.setState({FollowersInfo: results.info})
         })
         .catch(error => {
             console.log('Follower info grab error:', error.response)
         })

    }

        render(){
            return(
                <div>
                    <h3>My Followers</h3>
                    <div className="Card">
                        {this.state.FollowersInfo.map(user => (
                            <FUsers 
                            key={user.id}
                            userInfo={user}/>
                        ))}
                    </div>
                </div>
            )
        }
    
};

export default Followers;