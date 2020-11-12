import React, {Component} from 'react';
import {PostsService} from "../services/PostsService";

class Post extends Component {

    state = {
        post: {}
    }

    _postService = new PostsService();

    componentDidMount() {
        const id = this.props.match.params.id
        this._postService.getPostById(id).then(value => {
            this.setState({post: value})
        });

    }

    render() {
        let {post} = this.state

        return (
            <div>
                {
                    post &&
                    <div>
                        UserId : {post.userId} <br/>
                        PostId : {post.id} <br/>
                        Title : {post.title} <br/>
                        Body : {post.body} <br/>
                    </div>
                }
            </div>
        );
    }
}

export default Post;