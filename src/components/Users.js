import React, {Component} from 'react';

import User from "./User";
import {UsersService} from "../services/UsersService";

class Users extends Component {

    state = {users: []}

    userService = new UsersService();

    componentDidMount() {
        this.userService.getAllUsers().then(value => {
            this.setState({users: value})
        });
    }

    render() {
        let {users} = this.state
        return (
            <div>
                {
                    users.map(user => (
                        <div>
                            <div>name : {user.name}</div>
                            <button onClick={()=>{this.props.history.push(`/users/${user.id}`)}}>about me</button>
                            <hr/>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Users;