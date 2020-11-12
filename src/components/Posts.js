import React, {Component} from 'react';

import Post from "./Post";
import {PostsService} from "../services/PostsService";

class Posts extends Component {

    state = {
        posts: []
    }

    postsService = new PostsService();

    componentDidMount() {
        this.postsService.getAllPosts().then(value => {
            this.setState({posts: value})
        });
    }

    render() {
        let {posts} = this.state
        return (
            <div>
                {
                    posts.map(post => (
                        <div>
                            Title : {post.title} <br/>
                            <button onClick={()=>this.props.history.push(`/posts/${post.id}`)}>all about this post</button>
                            <hr/>
                        </div>

                    ))
                }
            </div>
        );
    }
}

export default Posts;
