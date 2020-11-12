import React, {Component} from 'react';
import {UsersService} from "../services/UsersService";

class User extends Component {
    state = {user: null}
    _userService = new UsersService();

    componentDidMount() {
        const id = this.props.match.params.id;
        this._userService.getUserById(id).then(response => {
            this.setState({user: response})
        });
    }

    render() {
        let {user} = this.state
        return (
            <div>
                {
                    user &&
                    <div>
                        UserId : {user.id} <br/>
                        UserName : {user.name} <br/>
                        UserEmail : {user.email} <br/>
                        UserPhone: {user.phone}
                    </div>
                }
            </div>
        );
    }
}

export default User;