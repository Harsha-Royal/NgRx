
import {post} from './../../../models/PostsModel';

export interface PostsState{
    posts : post[]
}

export const InitialState : PostsState = {
    posts:[
        {id:'1',title:'sample 1',description:'sample description 1'},
        {id:'2',title:'sample 2',description:'sample description 2'}
    ]
}