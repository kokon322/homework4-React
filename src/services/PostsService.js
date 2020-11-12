export class PostsService{
    _url =`https://jsonplaceholder.typicode.com/posts`;

    getAllPosts(){
        return fetch(`${this._url}`).then(value => value.json());
    }

    getPostById(id){
        return fetch(`${this._url}/${id}`).then(value => value.json());
    }
}