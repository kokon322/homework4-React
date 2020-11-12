import React, {Component} from 'react';
import {CommentsService} from "../services/CommentsService";

class Comment extends Component {

    state = {
        comment: {}
    }

    _commentService = new CommentsService();

    componentDidMount() {
        const id = this.props.match.params.id
        this._commentService.getCommentById(id).then(value => {
            this.setState({comment: value})
        });
    }

    render() {
        let {comment} = this.state
        return (
            <div>
                {
                    comment &&
                    <div>
                        postId : {comment.postId} <br/>
                        id : {comment.id} <br/>
                        name : {comment.name} <br/>
                        email : {comment.email} <br/>
                        body: {comment.body}
                    </div>
                }
            </div>
        );
    }
}

export default Comment;