import {createReducer,on} from "@ngrx/store";
import { InitialState } from "./posts.state";
import { addPost } from "./posts.action";

const _postsReducer = createReducer(InitialState
    ,on(addPost,(state,action)=>
    {
        let post = {...action.post};
        post.id = (state.posts.length + 1).toString();

        return{
            ...state,
            posts : [...state.posts,post],
        };
    })
);

export function postsReducer(state,action){
    return _postsReducer(state,action);
}