export class CommentsService{
    _url = `https://jsonplaceholder.typicode.com/comments`

    getAllComments(){
        return fetch(`${this._url}`).then(value => value.json());
    }

    getCommentById(id){
        return fetch(`${this._url}/${id}`).then(value => value.json());
    }
}