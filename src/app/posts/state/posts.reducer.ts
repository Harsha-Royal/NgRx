import {createReducer,on} from "@ngrx/store";
import { InitialState } from "./posts.state";
import { addPost, updatePost } from "./posts.action";

const _postsReducer = createReducer(InitialState
    ,on(addPost,(state,action)=>
    {
        let post = {...action.post};
        post.id = (state.posts.length + 1).toString();

        return{
            posts : [...state.posts,post],
        };
    })
    ,on(updatePost,(state,action)=>
    {
      const updatedposts = state.posts.map(post=> {
        return action.post.id===post.id ? action.post : post
      })

      return {
        posts : updatedposts
      }
    })
);

export function postsReducer(state,action){
    return _postsReducer(state,action);
}