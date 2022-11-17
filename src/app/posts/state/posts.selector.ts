import { PostsState } from "./posts.state";
import { createSelector,createFeatureSelector } from "@ngrx/store";


const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState,(state)=>
    {
        return state.posts;
    })