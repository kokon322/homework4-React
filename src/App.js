import React from "react";
import {Route, Switch} from "react-router";
import {NavLink} from "react-router-dom";

import './App.css';
import Comments from "./components/Comments";
import Comment from './components/Comment'
import Posts from "./components/Posts";
import Users from "./components/Users";
import User from "./components/User";
import Post from "./components/Post";


function App() {
    return (
        <>
            <div className='menu'>
                <button><NavLink exact to='/'>Home</NavLink></button>
                <button><NavLink to='/users'>All Users</NavLink></button>
                <button><NavLink to='/posts'>All Posts</NavLink></button>
                <button><NavLink to='/comments'>All Comments</NavLink></button>
            </div>
            <div className='content'>
                <Switch>
                    <Route path='/users/:id' component={User}/>
                    <Route path='/users' component={Users}/>
                    <Route path='/posts/:id' component={Post}/>
                    <Route path='/posts' component={Posts}/>
                    <Route path='/comments/:id' component={Comment}/>
                    <Route path='/comments' component={Comments}/>
                    <Route exact path='/' render={() => <h3>Hello it is start page</h3>}/>
                    <Route render={()=> <h2>Error 404</h2>}/>
                </Switch>

            </div>
        </>
    );
}

export default App;
