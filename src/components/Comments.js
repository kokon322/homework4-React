import React, {Component} from 'react';

import Comment from "./Comment";
import {CommentsService} from "../services/CommentsService";

class Comments extends Component {

    state = {
        comments: []
    }

    commentsService = new CommentsService();

    componentDidMount() {
        this.commentsService.getAllComments().then(value => {
            this.setState({comments: value})
        });
    }

    render() {
        let {comments} = this.state;
        return (
            <div>
                {
                    comments.map(comment => (
                        <div>
                            Comment name : {comment.name} <br/>
                            <button onClick={()=> this.props.history.push(`comments/${comment.id}`)}>all about this comment</button>
                            <hr/>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Comments;